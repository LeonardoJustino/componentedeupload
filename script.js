
const dropArea = document.querySelector(".drag-files")
//quando o arquivo estiver sendo arrastado para o dropArea

dropArea.addEventListener("dragover", () => {
  dropArea.classList.add("dragover")
})
//Explicação da função:  dropArea tem o addEventListener, uma função que vai fica ai vendo ter alguma alteração na caixinha dropArea, e o nome da alteração é dragover, quando tiver colocando algo ali em cima ele vai executar uma função
//Quando o arquivo said da dropArea
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("dragover")
})