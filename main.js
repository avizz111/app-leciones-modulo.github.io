tabla_aparecer_1 = document.getElementById("tabla_correr_1");
correcto_1_1 = document.getElementById("correcto_1.1");
correcto_2_1 = document.getElementById("correcto_2.1");
correcto_3_1 = document.getElementById("correcto_3.1");
ejercicio_1 = document.getElementById("ejercicio_1")
ejercicio_2 = document.getElementById("ejercicio_2")
ejercicio_3 = document.getElementById("ejercicio_3")
header = document.getElementById("header");
que_son = document.getElementById("que_son");
declaracion = document.getElementById("declaracion");
atributos = document.getElementById("atributos");
fin = document.getElementById("fin");
mal_1_1 = document.getElementById("mal_1.1");
mal_1_2 = document.getElementById("mal_1.2");
mal_1_3 = document.getElementById("mal_1.3");
mal_2_1 = document.getElementById("mal_2.1");
mal_2_2 = document.getElementById("mal_2.2");
mal_2_3 = document.getElementById("mal_2.3");
mal_3_1 = document.getElementById("mal_3.1");
mal_3_2 = document.getElementById("mal_3.2");
mal_3_3 = document.getElementById("mal_3.3");

const llamada_1 = () => {
    tabla_aparecer_1.style.display = 'block';
}

const correcto_pregunta_1 = () => {
    correcto_1_1.style.background = '#0f0';
    declaracion.style.display = 'block';
    ejercicio_2.style.display = 'block';
}
const mal_pregunta1_1 = () => {
    mal_1_1.style.background = "#f00";
}
const mal_pregunta1_2 = () => {
    mal_1_2.style.background = "#f00";
}
const mal_pregunta1_3 = () => {
    mal_1_3.style.background = "#f00";
}

const correcto_pregunta_2 = () => {
    correcto_2_1.style.background = '#0f0';
    atributos.style.display = 'block';
    ejercicio_3.style.display = 'block';
}
const mal_pregunta2_1 = () => {
    mal_2_1.style.background = "#f00";
}
const mal_pregunta2_2 = () => {
    mal_2_2.style.background = "#f00";
}
const mal_pregunta2_3 = () => {
    mal_2_3.style.background = "#f00";
}


const correcto_pregunta_3 = () => {
    correcto_3_1.style.background = '#0f0';
    ejercicio_1.style.display = 'none';
    ejercicio_2.style.display = 'none';
    ejercicio_3.style.display = 'none';
    declaracion.style.display = 'none';
    atributos.style.display = 'none';
    que_son.style.display = 'none';
    header.style.display = 'none';
    fin.style.display = 'block';
}
const mal_pregunta3_1 = () => {
    mal_3_1.style.background = "#f00";
}
const mal_pregunta3_2 = () => {
    mal_3_2.style.background = "#f00";
}
const mal_pregunta3_3 = () => {
    mal_3_3.style.background = "#f00";
}