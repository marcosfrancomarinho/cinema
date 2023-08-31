let choice = window.document.getElementById("choice"); // variavel input escolher cadeira do cinema.
let ArrMovie = []; //array para armazenar os values das cadeiras geradas na função generate().
let type = window.document.getElementsByName("type"); // varivael das radios input.
let coin = window.document.getElementById("coin"); // valor do ingresso.
let report = window.document.getElementById("report");
let somaHalf = 0; //variavel da soma dos ingressos das meia entradas .
let somaInt = 0; // variavel da soma dos ingressos das inteiras entradas.
let encolha = window.document.getElementById("encolha") // butao encolha.
let movieTheater = window.document.getElementById("movieTheater"); //container das choice.
let relatorio = window.document.getElementById("relatorio"); // butao de relatorio.
let containerReport = window.document.getElementById("containerReport"); // relatorio.
let cadastre = window.document.getElementById("cadastre")//input de choice.


encolha.addEventListener("click",
    function shrink() {
        containerReport.style.display = "none";
        cadastre.style.display = "block";
        report.style.display = "none";
        movieTheater.style.display = "block";
        relatorio.style.display = "block";
        encolha.style.display = "none";
        choice.focus();
    })

function chair(x) { // retorna uma estrutura de seletor no HTML que vai ser gerado pelo laço na função generate().
    return window.document.getElementsByClassName("chair")[x];
}

function calcRadio() { //Verifica quantos bilhete é meia entrada e inteira.
    if (type[1].checked) {
        somaHalf++
    } else {
        somaInt++
    }
}
function check() {//verificador de campo de input.
    if (choice.value.length == 0 || choice.value >= ArrMovie.length || choice.value < 0) {
        return true;
    } else {
        return false;
    }
}
function verification() { //verificador de campo de input.
    if (register.value.length == 0 || register.value <= 0 || coin.value < 0) {
        return true;
    } else {
        return false;
    }
}
function bought() { // verificado de campo de input.
    if (ArrMovie.indexOf(Number(choice.value)) != -1) {
        return true;
    } else {
        return false;
    }
}

function generate() { // button GERAR no HTML. 
    let register = window.document.getElementById("register");
    if (verification()) {
        alert("ERROR - CAMPO VAZIO ou VALOR NÃO ACEITO !! ");

    }
    else {
        movieTheater.style.display = "block";

        for (let j = 0; j < Number(register.value); j++) {
            let seat = window.document.createElement("div");
            seat.className = "chair";
            seat.innerHTML = "B - " + j
            movieTheater.appendChild(seat);
            ArrMovie.push(chair(j));
        }
        window.document.getElementsByTagName("footer")[0].style.display = "none";
        cadastre.style.display = "block";
        relatorio.style.display = "block"
        containerReport.style.display = "none";
        encolha.style.display = "none";
        register.value = " ";
        choice.focus();


    }
}
function calculation() { // função do relatorio e de receitas do cinema.
    cadastre.style.display = "none";
    containerReport.style.display = "block";
    containerReport.style.marginTop = "40px";
    relatorio.style.display = "none";
    encolha.style.display = "block";
    report.style.display = "block";
    movieTheater.style.display = "none";
    let dia = new Date().getDate();
    let mes = new Date().getMonth() + 1;
    let ano = new Date().getFullYear();
    let coinHalf = somaHalf * Number((coin.value / 2));
    let coinInt = somaInt * Number(coin.value);
    let quntTotUnV = somaHalf + somaInt;
    let coinTotal = coinHalf + coinInt;
    let notBuyUn = ArrMovie.length - quntTotUnV;
    cointoFixed = Number(coin.value);
    cointoFixed = cointoFixed.toFixed(2);
    cointoFixedMeia = cointoFixed / 2;
    cointoFixedMeia = cointoFixedMeia.toFixed(2)
    report.innerHTML = `VALOR DO INGRESSO (INTEIRA)EM ${dia + "/" + mes + "/" + ano} R$: <strong> ${cointoFixed}</strong>. <br>                VALOR DO INGRESSO (MEIA) EM ${dia + "/" + mes + "/" + ano} R$: <strong> ${cointoFixedMeia}</strong>. <br>

                        RECEITA APURADA DOS BILHETES MEIA ENTRADA EM R$: <strong>${coinHalf.toFixed(2)}.</strong> <br>
                        RECEITA APURADA DOS BILHETES ENTRADA INTEIRA EM  R$:<strong> ${coinInt.toFixed(2)}.</strong> <br>
                        TOTAL DE RECEITA R$:<strong> ${coinTotal.toFixed(2)}.</strong> <br>
                        QUANTIDADE DE INGRESSOS VENDIDOS MEIA ENTRADA: <strong>${somaHalf}.</strong> <br>
                        QUANTIDADE DE INGRESSOS VENDIDOS ENTRADA INTEIRA:<strong> ${somaInt}.</strong> <br>
                        QUANTIDADE TOTAL VENDIDA:<strong> ${quntTotUnV}.</strong> <br>
                        QUANTIDADE NÃO VENDIDA:<strong> ${notBuyUn}.</strong> <br>
                        QUANTIDADE TOTAL DE INGRESSO INICIAL:<strong> ${ArrMovie.length}.</strong>`;
}
function buy() { //button ESCOLHER no HTML.

    if (check()) {
        alert("ERROR - CAMPO VAZIO OU ASSENTO NÃO LOCALIZADO!");
    }
    else {

        if (bought()) {
            alert("ESTE ASSENTO JÁ ESTÁ RESERVADO!");
            choice.value = " ";
            choice.focus();
        } else {
            calcRadio()
            ArrMovie[Number(choice.value)].style.backgroundColor = "red";
            ArrMovie[Number(choice.value)].style.fontSize = "0.5vw";
            ArrMovie[Number(choice.value)].style.fontWeight = "900";
            ArrMovie[Number(choice.value)].style.color = "white";
            ArrMovie[Number(choice.value)].style.textShadow = "1px 1px black";
            ArrMovie[Number(choice.value)].style.boxShadow = "6px 1px black";
            ArrMovie[Number(choice.value)].innerHTML = "COMPRADO";
            ArrMovie[Number(choice.value)] = Number(choice.value);
            choice.value = " ";
            choice.focus();
        }

    }
}
