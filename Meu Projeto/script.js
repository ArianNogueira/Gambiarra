function cadastrar() {
    let res = document.getElementById('entrada')
    let nome = document.getElementById('nc').value
    let nasc = document.getElementById('nasc').value
    let sexo = document.getElementsByName('mesexo')
    let est = document.getElementById('est').value
    let cid = document.getElementById('ci').value
    let end = document.getElementById('end').value
    let bar = document.getElementById('bar').value
    let tel = document.getElementById('te').value
    let ema = document.getElementById('ema').value
    let genero = ``
    if (sexo[0].checked) {
        genero = 'Masculino'
    } else if (sexo[1].checked) {
        genero = 'Feminino'
    }
    window.alert(nasc[0])
    if (nome == 0 || nasc == 0 || est == 0 || cid == 0 || end == 0 || end == 0 || bar == 0 || tel == 0 || ema == 0) {
        window.alert('[ERRO] Verifique os dados e preencha para continuar!')
    } else {
    res.innerHTML = ''
    res.innerHTML += `<h2>Seus Dados São:<h2>`
    res.innerHTML += `<p>Nome completo: <strong>${nome}</strong></p>`
    res.innerHTML += `<p>Data de Nascimento: <strong>${nasc}</strong></p>`
    res.innerHTML += `<p>Sexo: <strong>${genero}</strong></p>`
    res.innerHTML += `<p>Estado: <strong>${est}</strong></p>`
    res.innerHTML += `<p>Cidade: <strong>${cid}</strong></p>`
    res.innerHTML += `<p>Endereço: <strong>${end}</strong></p>`
    res.innerHTML += `<p>Bairro: <strong>${bar}</strong></p>`
    res.innerHTML += `<p>Telefone: <strong>${tel}</strong></p>`
    res.innerHTML += `<p>Email: <strong>${ema}</strong></p>`
    }
}