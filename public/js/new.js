//funÃ§Ã£o  do botÃ£o "NOVO"
function handleSaveSubmit (){
    const name = $('name').value
    const qtd = $('qtd').value
    const preco = $('price').value

    //se houver os campos nome e qtd serÃ¡ executado o cÃ³digo abaixo
    if( name && qtd ){
        const tr = creat('tr')
        const td = creat('td')
        const box = creat('input')
        const tdNome = creat('td')
        const tdQTD = creat('td')
        const tdPreco = creat('td')

        //colocando o estilos jÃ¡ nos objetos criados e seus tipos
        tr.setAttribute('class','tr')
        tr.style.textAlign = 'center'
        td.style.width = '30px'
        box.type = 'checkbox'
        box.style.transform = 'scale(1.5)'
        box.setAttribute('class','box')
        
        //adicionando o valor das variaveis digitadas na tabela
        tdNome.append(name)
        tdQTD.append(qtd)
        tdPreco.append(preco)

        //reordenando os elementos filhos e pai
        tr.appendChild(td)
        td.appendChild(box)
        tr.appendChild(tdNome)
        tr.appendChild(tdQTD)
        tr.appendChild(tdPreco)

        //se as bordas tiverem vermelhas a torna padrÃ£o
        $('name').style.border = 'solid 1px #ced4da'
        $('qtd').style.border = 'solid 1px #ced4da'
        //adicionando a tabela pronta ao documento HTML
        $('table').append(tr)
    }
    //se algum dos nome nÃ£o for preenchido
    else{
        //as bordas dos campos obrigatÃ³rios ficaram vermelha
        $('name').style.border = 'solid 1px #ff0000'
        $('qtd').style.border = 'solid 1px #ff0000'
    }
}

//BotÃ£o de zerar os valores
function zerar (){
    //reseta o valor dos inputs para vazio
    $('name').value = '' 
    $('qtd').value = ''
    $('price').value = ''

    //se as bordas estiverem de outra cor reseta elas para a cor padrÃ£o
    $('name').style.border = 'solid 1px #ced4da'
    $('qtd').style.border = 'solid 1px #ced4da'
}