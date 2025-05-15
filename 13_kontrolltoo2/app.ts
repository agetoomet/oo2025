import { Kiri, Veebiuudis } from "./kirjad2.js";

const kirjad: Kiri[] = [];

const form = document.getElementById("kiri-form") as HTMLFormElement;
const list = document.getElementById("kirjad-list") as HTMLUListElement;

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const pealkiri = (document.getElementById("pealkiri") as HTMLInputElement).value;
    const sisu = (document.getElementById("sisu") as HTMLInputElement).value;
    const url = (document.getElementById("url") as HTMLInputElement).value;

    const kiri = url
        ? new Veebiuudis(pealkiri, sisu, url)
        : new Kiri(pealkiri, sisu);

    kirjad.push(kiri);

    const li = document.createElement("li");

    const pealkiriElement = document.createElement("h3");
    pealkiriElement.textContent = kiri.pealkiri; 
    li.appendChild(pealkiriElement);

    const sisuElement = document.createElement("p");
    sisuElement.textContent = kiri.sisu; 
    li.appendChild(sisuElement);

    if (kiri instanceof Veebiuudis) {
        const urlElement = document.createElement("a");
        urlElement.href = kiri.URL;
        urlElement.textContent = "Loe rohkem"; 
        sisuElement.appendChild(urlElement); 
    }

    list.appendChild(li);
    form.reset();
});