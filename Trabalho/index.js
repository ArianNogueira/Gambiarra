function mostrar() {
    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2')
    var p3 = document.getElementById('p3')
    var p4 = document.getElementById('p4')
    
    var dateNow = new Date();
    var dia = parseInt(dateNow.getDate());
    var mes = dateNow.getMonth();
    var ano = dateNow.getFullYear();
    var hora = parseInt(dateNow.getHours());
    var minutos = parseInt(dateNow.getMinutes());
    var segundos = dateNow.getSeconds();

    p1.innerHTML = `${dia}/${mes}/${ano} às ${hora}:${minutos}:${segundos}`
    p2.innerHTML = `${dia}/${mes}/${ano} às ${hora + 12}:${minutos}:${segundos}`
    p3.innerHTML = `${dia}/${mes}/${ano} às ${hora - 1}:${minutos}:${segundos}`
    p4.innerHTML = `${dia}/${mes}/${ano} às ${hora + 4}:${minutos}:${segundos}`
}

