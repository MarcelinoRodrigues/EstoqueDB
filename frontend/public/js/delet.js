$('excluir').addEventListener('click',() =>{
    let listaMarcados = document.getElementsByClassName("box");

    for (loop = 0; loop < listaMarcados.length; loop++) {
        let box = listaMarcados[loop];

        if (box.type == "checkbox" && box.checked) {
            box.parentNode.parentNode.remove()
        }
    }
})