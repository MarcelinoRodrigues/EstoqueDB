//Usando Variaveis Globais minimizando o tamanho do cÃ³digo
const $ = query => document.getElementById(query)
const creat = paramer => document.createElement(paramer)


//evento de click para validar o Login do usuÃ¡rio
$('submit').addEventListener('click', () => {
    const user = $('user').value
    const pass = $('pass').value

    //se nÃ£o houver um dos campos um alerta Ã© exibido
    if( !user || !pass){
        $('danger').style.display = 'flex'
    }
})

// ao clicar no alerta ele irÃ¡ sumir
$('danger').addEventListener('click', () => {
    $('danger').style.display = 'none'
})