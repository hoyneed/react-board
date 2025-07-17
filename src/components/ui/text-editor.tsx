import { ko } from "@blocknote/core/locales";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
// import { createClient } from "@/lib/client";

// Uploads a file to tmpfiles.org and returns the URL to the uploaded file.
// async function uploadFile(file: File) {
//     const supabase = createClient();
//     const body = new FormData();
//     body.append("file", file);

//     const ret = await fetch("https://tmpfiles.org/api/v1/upload", {
//         method: "POST",
//         body: body,
//     });
//     return (await ret.json()).data.url.replace(
//         "tmpfiles.org/",
//         "tmpfiles.org/dl/"
//     );
// }

export default function TextEditor() {
    // Korean as default setup
    const locale = ko;
    // Creates a new editor instance.
    const editor = useCreateBlockNote({
        // We override the `placeholders` in our dictionary
        dictionary: {
            ...locale,
            placeholders: {
                ...locale.placeholders,
                // We override the empty document placeholder
                emptyDocument:
                    "텍스트를 입력하거나 /를 입력하여 명령을 입력하세요",
                // We override the default placeholder
                default: "텍스트를 입력하거나 /를 입력하여 명령을 입력하세요",
                // We override the heading placeholder
                heading: "/를 입력하여 옵션 열기",
            },
        },
    });

    // Renders the editor instance using a React component.
    return <BlockNoteView editor={editor} />;
}
