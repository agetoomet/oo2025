"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kirjad2_js_1 = require("./kirjad2.js");
var kirjad = [];
var form = document.getElementById("kiri-form");
var list = document.getElementById("kirjad-list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var pealkiri = document.getElementById("pealkiri").value;
    var sisu = document.getElementById("sisu").value;
    var url = document.getElementById("url").value;
    var kiri = url
        ? new kirjad2_js_1.Veebiuudis(pealkiri, sisu, url)
        : new kirjad2_js_1.Kiri(pealkiri, sisu);
    kirjad.push(kiri);
    var li = document.createElement("li");
    var pealkiriElement = document.createElement("h3");
    pealkiriElement.textContent = kiri.pealkiri;
    li.appendChild(pealkiriElement);
    var sisuElement = document.createElement("p");
    sisuElement.textContent = kiri.sisu;
    li.appendChild(sisuElement);
    if (kiri instanceof kirjad2_js_1.Veebiuudis) {
        var urlElement = document.createElement("a");
        urlElement.href = kiri.URL;
        urlElement.textContent = "Loe rohkem";
        sisuElement.appendChild(urlElement);
    }
    list.appendChild(li);
    form.reset();
});
