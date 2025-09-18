// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//Uloha 6
//document.getElementById("buttonik").addEventListener("click", function () {
//    text=document.getElementById("text");
//    text.style.display = (text.style.display != "block") ? "block" : "none";
//});


//Uloha 7
//var pocetKlikov = 0;
//document.getElementById("buttonClick").addEventListener("click", function () {
//    pocetKlikov++;
//    document.getElementById("clicky").innerHTML = "Pocet clickov :" + pocetKlikov;
//    if (pocetKlikov % 5 == 0) {
//        var d = document.getElementById("div1").classList.contains("divik")
//        document.getElementById("div1").classList.add((d) ? "divBum" : "divik")
//        document.getElementById("div1").classList.remove((d) ? "divik" : "divBum")
//    };
//});

//Uloha 8
//document.getElementById('textArea20').onkeyup = function () {
//    document.getElementById('pocet_znakov').innerHTML = " Pocet znakov :" + this.value.length;
//    if (this.value.length > 20) { document.getElementById('textArea20').classList.add("ok"); document.getElementById('textArea20').classList.remove("bad"); }
//    else { document.getElementById('textArea20').classList.add("bad"); document.getElementById('textArea20').classList.remove("ok"); };
//};

//Uloha 9
const osoba = JSON.parse('{ "meno":"Adam", "priezvisko":"Hric", "vek":20 }');
console.log(osoba.meno, osoba.priezvisko, osoba.vek);

var produktyJSON = '[{"nazov": "Notebook", "cena":899},{"nazov": "Mys", "cena":25},{"nazov": "Klavesnica", "cena":50}]'
const produkty = JSON.parse(produktyJSON);
console.log(produkty[0].nazov, produkty[0].cena);

var janoveFilmyJSON = '{"meno":"Jan","oblubeneFilmy":["Matrix","Inception","Interstellar"]}'
const jan = JSON.parse(janoveFilmyJSON);
console.log(`Pouzivatel:${jan.meno}\nOblubene filmy:\n ${jan.oblubeneFilmy[0]}\n ${jan.oblubeneFilmy[1]}\n ${jan.oblubeneFilmy[2]}`);

var teamJSON = '[{"meno":"Jan", "pozicia":"Manazer"},{"meno":"Marta","pozicia":"Programator"},{"meno":"Milos","pozicia":"Programator"}]'
const team = JSON.parse(teamJSON);
team.filter(member => member.pozicia === "Programator")
    .forEach(programator => console.log(`Programator: ${programator.meno}`));

var knihy = '{"knihy":[{"nazov":"Kniha1","autor":"Autor1"},{"nazov":"Kniha2","autor":"Autor2"},{"nazov":"Kniha3","autor":"Autor3"}]}'
const knihyObj = JSON.parse(knihy);
knihyObj.knihy.forEach(kniha => {
    var row = document.getElementById("table1").insertRow(document.getElementById("table1"));
    row.insertCell(0).innerHTML = kniha.nazov;
    row.insertCell(1).innerHTML = kniha.autor; }

);

