import { ko } from "@blocknote/core/locales";
import "@blocknote/core/fonts/inter.css";
import {
    type Block,
    BlockNoteEditor,
    type PartialBlock,
} from "@blocknote/core";
import { useEffect, useMemo, useState } from "react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

async function saveToStorage(jsonBlocks: Block[]) {
    // Save contents to local storage. You might want to debounce this or replace
    // with a call to your API / database.
    localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
}

async function loadFromStorage() {
    // Gets the previously stored editor contents.
    const storageString = localStorage.getItem("editorContent");
    return storageString
        ? (JSON.parse(storageString) as PartialBlock[])
        : undefined;
}

// Uploads a file to tmpfiles.org and returns the URL to the uploaded file.
async function uploadFile(file: File) {
    // const supabase = createClient();
    const body = new FormData();
    body.append("file", file);

    const ret = await fetch("https://tmpfiles.org/api/v1/upload", {
        method: "POST",
        body: body,
    });
    return (await ret.json()).data.url.replace(
        "tmpfiles.org/",
        "tmpfiles.org/dl/"
    );
}

export default function TextEditor() {
    // Korean as default setup
    const locale = ko;
    const [initialContent, setInitialContent] = useState<
        PartialBlock[] | undefined | "loading"
    >("loading");

    // Loads the previously stored editor contents.
    useEffect(() => {
        loadFromStorage().then((content) => {
            setInitialContent(content);
        });
    }, []);

    // Creates a new editor instance.
    // We use useMemo + createBlockNoteEditor instead of useCreateBlockNote so we
    // can delay the creation of the editor until the initial content is loaded.
    const editor = useMemo(() => {
        if (initialContent === "loading") {
            return undefined;
        }
        return BlockNoteEditor.create({
            initialContent,
            // We override the `placeholders` in our dictionary
            dictionary: {
                ...locale,
                placeholders: {
                    ...locale.placeholders,
                    // We override the empty document placeholder
                    emptyDocument:
                        "텍스트를 입력하거나 /를 입력하여 명령을 입력하세요",
                    // We override the default placeholder
                    default:
                        "텍스트를 입력하거나 /를 입력하여 명령을 입력하세요",
                    // We override the heading placeholder
                    heading: "/를 입력하여 옵션 열기",
                },
            },
            uploadFile,
        });
    }, [initialContent]);

    if (editor === undefined) {
        return "Loading content...";
    }

    // Renders the editor instance using a React component.
    return (
        <BlockNoteView
            editor={editor}
            onChange={() => {
                saveToStorage(editor.document);
            }}
        />
    );
}
