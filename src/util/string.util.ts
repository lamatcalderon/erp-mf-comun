type TextBold = [string, boolean]
export const getTextBold = (textos: TextBold[]): string => {
    let finalHtml = ''
    textos.forEach(text => {
        if (text[1]) {
            finalHtml += `<b>${text[0]}</b> `
        } else {
            finalHtml += `${text[0]} `
        }
    });
    return finalHtml;
}