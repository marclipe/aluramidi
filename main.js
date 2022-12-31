function tocaSom(seletorAudio) {
    const  elemento =  document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();  
    } else {
        alert('Elemento não encontrado ou seletor inválido!')
    }
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla'); 

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //'#som_(instrumento)' template string 
    const idAudio =  `#som_${instrumento}`;
    // console.log(idAudio)

    tecla.onclick = function() {
        tocaSom(idAudio)
    }; 

    tecla.onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code === "Enter") {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}
