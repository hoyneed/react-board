async function singleUpload(file: File) {
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

export default singleUpload;
