function generateHashtag(str) {
    const noSpaces = str.split(" ")
    if (!str) {
        return false;
    }
    for (let i = 0; i < noSpaces.length; i++) {
        noSpaces[i] = noSpaces[i].charAt(0).toUpperCase() + noSpaces[i].slice(1);
    }
    let output = noSpaces.join("");
    if (output.length === 0 || output.length > 139) {
        return false
    }
    let final = "#" + output
    console.log({ str, final })
    return "#" + output

}