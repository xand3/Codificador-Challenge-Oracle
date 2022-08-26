/*
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`
*/

function encrypt(msg) {
    let novaMsg = msg
    .split(/e/igm).join("enter")
    .split(/i/igm).join("imes")
    .split(/a/igm).join("ai")
    .split(/o/igm).join("ober")
    .split(/u/igm).join("ufat")

    return novaMsg
}

function decrypt(msg) {
    novaMsg = msg
    .replace(/enter/igm, "e")
    .replace(/imes/igm, "i")
    .replace(/ai/igm, "a")
    .replace(/ober/igm, "o")
    .replace(/ufat/igm, "u")

    return novaMsg
}

$("#copy").click( () => {
    const result = $("#result")
    navigator.clipboard.writeText(result.val())
            .then(()=> {
                alert("texto copiado")
            })
})

$("#criptografar").click( () => {
    let encryptText
    const inputText = $("#text")
    const text = inputText.val()
    const result = $("#result")
    const btnCopy = $("#copy")

    if(text != '') {
        $(".remove").remove()

        result.show();
        btnCopy.show()

        encryptText = encrypt(text)
        result.val(encryptText)
        inputText.val('')
    }
})

$("#descriptografar").click( () => {
    let decryptText
    const inputText = $("#text")
    const text = inputText.val()
    const result = $("#result")
    const btnCopy = $("#copy")

    if(text != '') {
        $(".remove").remove()

        result.show();
        btnCopy.show()

        decryptText = decrypt(text)
        result.val(decryptText)
        inputText.val('')
    }
})