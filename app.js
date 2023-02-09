'use strict'

const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const formulario = document.getElementById('formulario');
const aprovado = 'APROVADO!'
const reprovado = 'REPROVADO!'

function somar() {
    resultado.value = (Number(numero1.value) + Number(numero2.value)) / 2;

    if (resultado.value < 5) {
        formulario.classList.remove('sombra-azul');
        formulario.classList.remove('sombra-amarela');
        formulario.classList.add('sombra-vermelha');
        resultado.value = reprovado;
    } else if (resultado.value < 0 || resultado.value > 10) {
        formulario.classList.remove('sombra-vermelha');
        formulario.classList.remove('sombra-azul');
        formulario.classList.add('sombra-amarela');
    } else {
        formulario.classList.remove('sombra-vermelha');
        formulario.classList.remove('sombra-amarela');
        formulario.classList.add('sombra-azul');
        resultado.value = aprovado;
    }
}

calcular.addEventListener('click', somar);