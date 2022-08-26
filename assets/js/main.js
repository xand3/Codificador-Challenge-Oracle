

/*
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`
*/
const copiar = () => {}


$("#criptografar").click( () => {
    const inputText = $("#text")
    const text = inputText.val()
    const result = $("#result")
    const btnCopy = $("#copy")

    
    if(text != '') {
        $(".remove").remove()

        result.show();
        btnCopy.show()

        result.val(inputText.val())
        inputText.val('')
    }
    
    
    const copy = $("#copy").click( () => {
        navigator.clipboard.writeText(result.val())
            .then(()=> {
                alert("texto copiado")
            })
    })
})






const dicionario = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

let msg = 'xande bastos'
    let novaMsg = 
    msg
    .split(/e/igm).join("enter")
    .split(/i/igm).join("imes")
    .split(/a/igm).join("ai")
    .split(/o/igm).join("ober")
    .split(/u/igm).join("ufat")
    console.log(novaMsg)
