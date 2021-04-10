//clasa produs
class Produs{
    constructor(id, nume, pret, cantitate=0, descirere="", comentarii="", rating=1){
        this.id = id;
        this.nume = nume;
        this.pret = pret;
        this.cantitate = cantitate;
        this.descirere = descirere;
        this.comentarii = comentarii;
        this.rating = rating;
    }
    /*
    clona(obj){
        this.id = obj.id;
        this.nume = obj.nume;
        this.pret = obj.pret;
        this.cantitate = obj.cantitate;
        this.descirere = obj.descirere;
        this.comentarii = obj.comentarii;
        this.rating = obj.rating;
        return new Produs(this);
    }
    */
    getInfo(){
        const info = [this.id, this.nume, this.pret, this.cantitate, this.descirere, this.comentarii, this.rating];
        return info;
    }
    getId(){
        return this.id;
    }
    getNume(){
        return this.nume;
    }
    getPret(){
        return this.pret;
    }
    getCantitate(){
        return this.cantitate;
    }
    getDescriere(){
        return this.descirere;
    }
    getComentarii(){
        return this.comentarii;
    }
    getRating(){
        return this.rating;
    }
}
//incarcarea html-ului
document.addEventListener("DOMContentLoaded", getInfo);

//variabile globale
var id = 0;
var produse = [];

//-----------------------------
//obtin datele din localStorage
//-----------------------------
function getInfo(){
    keys = Object.keys(localStorage);
    console.log(keys);
    if(keys.length !== 0){
        //extrag indexul pentru a adauga elemente cu index diferit
        let keysInt = [];
        for(let i=0; i<keys.length; i++){
             keysInt.push(parseInt(keys[i]));
        }
        let mx = keysInt[0];
        for(let i=0; i<keysInt.length; i++){
            if(mx < keysInt[i]){
                mx = keysInt[i];
            }
        }
        //console.log(mx);
        id = mx;

        //extrag elementele din localStorage
        for(let i=0; i<keysInt.length; i++){
            //let prod = new Produs();
            let copie = JSON.parse(localStorage.getItem(keys[i]));
            let prod = new Produs(copie.id, copie.nume, copie.pret, copie.cantitate, copie.descirere, copie.comentarii, copie.rating);
            produse.unshift(prod);

            //copy-paste din adaugaElem
            //-------------------------
            const newDiv = document.createElement("div");
            newDiv.classList.add("rand-tabel");
            newDiv.classList.add("element");

            //creez elem din div
            const newId = document.createElement("input");
            newId.value = prod.getId();
            newId.classList.add("input-tabel");
            newId.classList.add("input-id");
            newDiv.appendChild(newId);
            lista.appendChild(newDiv);

            const newNume = document.createElement("input");
            newNume.value = prod.getNume();
            newNume.classList.add("input-tabel");
            newNume.classList.add("input-nume");
            newDiv.appendChild(newNume);
            lista.appendChild(newDiv);

            const newPret = document.createElement("input");
            newPret.value = prod.getPret();
            newPret.classList.add("input-tabel");
            newPret.classList.add("input-pret");
            newDiv.appendChild(newPret);
            lista.appendChild(newDiv);

            const newCantitate = document.createElement("input");
            newCantitate.value = prod.getCantitate();
            newCantitate.classList.add("input-tabel");
            newCantitate.classList.add("input-cantitate");
            newDiv.appendChild(newCantitate);
            lista.appendChild(newDiv);

            const newDescriere = document.createElement("input");
            newDescriere.value = prod.getDescriere();
            newDescriere.classList.add("input-tabel");
            newDescriere.classList.add("input-descriere");
            newDiv.appendChild(newDescriere);
            lista.appendChild(newDiv);

            const newComentarii = document.createElement("input");
            newComentarii.value = prod.getComentarii();
            newComentarii.classList.add("input-tabel");
            newComentarii.classList.add("input-comentarii");
            newDiv.appendChild(newComentarii);
            lista.appendChild(newDiv);

            const newRating = document.createElement("input");
            newRating.value = prod.getRating();
            newRating.classList.add("input-tabel");
            newRating.classList.add("input-rating");
            newDiv.appendChild(newRating);
            lista.appendChild(newDiv);

            //creez butonul de sterge si editare
            const newBtnSterge = document.createElement("button");
            newBtnSterge.innerHTML = `Sterge`;
            newBtnSterge.classList.add("input-tabel");
            newBtnSterge.classList.add("input-sterge");
            newDiv.appendChild(newBtnSterge);
            lista.appendChild(newDiv);

            const newBtnEdit = document.createElement("button");
            newBtnEdit.innerHTML = `Edit`;
            newBtnEdit.classList.add("input-tabel");
            newBtnEdit.classList.add("input-edit");
            newDiv.appendChild(newBtnEdit);
            lista.appendChild(newDiv);
        }
    }
}

//-----------------
//adaugare elemente
//-----------------
const adaugaBtn = document.querySelector(".adauga-submit");
const lista = document.querySelector(".section-elemente");

adaugaBtn.addEventListener("click", adaugaElem);

function adaugaElem(e){
    e.preventDefault();
    const adaugaNume = document.querySelector(".adauga-nume");
    const adaugaPret = document.querySelector(".adauga-pret");
    const adaugaCantitate = document.querySelector(".adauga-cantitate");
    const adaugaDescriere = document.querySelector(".adauga-descriere");
    const adaugaComentarii = document.querySelector(".adauga-comentarii");
    const adaugaRating = document.querySelector(".adauga-rating");
    id++;
    //console.log(adaugaNume.value);
    prod = new Produs(id, adaugaNume.value, adaugaPret.value, adaugaCantitate.value, adaugaDescriere.value,adaugaComentarii.value,adaugaRating.value);
    produse.unshift(prod);
    //console.log(prod.getNume());
    console.log(typeof(adaugaPret.value));
    //creez div
    if(adaugaNume.value !== "" && adaugaPret.value !== "" && isNaN(parseFloat(adaugaPret.value))===false && parseFloat(adaugaPret.value)>=0 && ((parseInt(adaugaCantitate.value)>=0 && isNaN(parseFloat(adaugaCantitate.value))===false) || adaugaCantitate.value === "") && (adaugaRating.value === "1" || adaugaRating.value === "2" || adaugaRating.value === "3" || adaugaRating.value === "4" || adaugaRating.value === "5" || adaugaRating.value === "")){
        const newDiv = document.createElement("div");
        newDiv.classList.add("rand-tabel");
        newDiv.classList.add("element");

        //creez elem din div
        const newId = document.createElement("input");
        newId.value = prod.getId();
        newId.classList.add("input-tabel");
        newId.classList.add("input-id");
        newDiv.appendChild(newId);
        lista.appendChild(newDiv);

        const newNume = document.createElement("input");
        newNume.value = prod.getNume();
        newNume.classList.add("input-tabel");
        newNume.classList.add("input-nume");
        newDiv.appendChild(newNume);
        lista.appendChild(newDiv);

        const newPret = document.createElement("input");
        newPret.value = parseFloat(prod.getPret());
        newPret.classList.add("input-tabel");
        newPret.classList.add("input-pret");
        newDiv.appendChild(newPret);
        lista.appendChild(newDiv);

        const newCantitate = document.createElement("input");
        if(prod.getCantitate() === ""){
            newCantitate.value = "";
        }else{
            newCantitate.value = parseInt(prod.getCantitate());
        }
        newCantitate.classList.add("input-tabel");
        newCantitate.classList.add("input-cantitate");
        newDiv.appendChild(newCantitate);
        lista.appendChild(newDiv);

        const newDescriere = document.createElement("input");
        newDescriere.value = prod.getDescriere();
        newDescriere.classList.add("input-tabel");
        newDescriere.classList.add("input-descriere");
        newDiv.appendChild(newDescriere);
        lista.appendChild(newDiv);

        const newComentarii = document.createElement("input");
        newComentarii.value = prod.getComentarii();
        newComentarii.classList.add("input-tabel");
        newComentarii.classList.add("input-comentarii");
        newDiv.appendChild(newComentarii);
        lista.appendChild(newDiv);

        const newRating = document.createElement("input");
        newRating.value = prod.getRating();
        newRating.classList.add("input-tabel");
        newRating.classList.add("input-rating");
        newDiv.appendChild(newRating);
        lista.appendChild(newDiv);

        //creez butonul de sterge si editare
        const newBtnSterge = document.createElement("button");
        newBtnSterge.innerHTML = "Sterge";
        newBtnSterge.classList.add("input-tabel");
        newBtnSterge.classList.add("input-sterge");
        newDiv.appendChild(newBtnSterge);
        lista.appendChild(newDiv);

        const newBtnEdit = document.createElement("button");
        newBtnEdit.innerHTML = "Edit";
        newBtnEdit.classList.add("input-tabel");
        newBtnEdit.classList.add("input-edit");
        newDiv.appendChild(newBtnEdit);
        lista.appendChild(newDiv);

        //adaugare in localStorage
        localStorage.setItem(id, JSON.stringify(prod));
        adaugaNume.value = "";
        adaugaPret.value = "";
        adaugaCantitate.value = "";
        adaugaDescriere.value = "";
        adaugaComentarii.value = "";
        adaugaRating.value = "";
    }else{
        alert("Eroare! Verifica daca: \nCampul 'nume' este completat \nCampul 'pret' este completat cu numar zecimal \nCampul 'cantitate' este completat cu numar intreg \nCampul rating este gol sau completat cu numar intreg intre 1 si 5");
    }
}

//----------------------------
//stergerea + edit elementelor
//----------------------------

const deleteEdit = document.querySelector(".section-elemente");
deleteEdit.addEventListener("click", stergeEditElem);

function stergeEditElem(e){
    const item = e.target;
    if(item.classList[1] === "input-sterge"){
        let parinte = item.parentNode;
        let idStergere = parinte.firstChild.value;
        localStorage.removeItem(idStergere);
        window.location.reload();
    }else if(item.classList[1] === "input-edit"){
        let parinte = item.parentNode;
        let idStergere = parinte.firstChild.value;
        let copii = parinte.childNodes;
        //console.log(copii[2].value);
        localStorage.removeItem(idStergere);
        const adaugaNume = copii[1];
        const adaugaPret = copii[2];
        const adaugaCantitate = copii[3];
        const adaugaDescriere = copii[4];
        const adaugaComentarii = copii[5];
        const adaugaRating = copii[6];
        console.log(parseFloat(adaugaPret.value));
        if(adaugaNume.value !== "" && adaugaPret.value !== "" && isNaN(parseFloat(adaugaPret.value))===false && parseFloat(adaugaPret.value)>=0 && ((parseInt(adaugaCantitate.value)>=0 && isNaN(parseFloat(adaugaCantitate.value))===false) || adaugaCantitate.value === "") && (adaugaRating.value === "1" || adaugaRating.value === "2" || adaugaRating.value === "3" || adaugaRating.value === "4" || adaugaRating.value === "5"  || adaugaRating.value === "")){
            prod = new Produs(idStergere, adaugaNume.value, parseFloat(adaugaPret.value), parseInt(adaugaCantitate.value), adaugaDescriere.value,adaugaComentarii.value,adaugaRating.value);
            localStorage.setItem(idStergere, JSON.stringify(prod));
            window.location.reload();
        }else{
            alert("Eroare! Verifica daca: \nCampul 'nume' este completat \nCampul 'pret' este completat cu numar zecimal \nCampul 'cantitate' este completat cu numar intreg \nCampul rating este gol sau completat cu numar intreg intre 1 si 5");
        }
    }
}

//-----------------
//cautare dupa nume
//-----------------
const btnNume = document.querySelector(".cauta-submit");
btnNume.addEventListener("click", cautaNume);

function cautaNume(e){
    e.preventDefault();
    const valoare = document.querySelector(".cauta-text");
    console.log(valoare);
    const tabel = document.querySelector(".section-elemente");
    const copii = tabel.children;
    for(let i=0; i<copii.length; i++){
        const nepoti = copii[i].children;
        if(nepoti[1].value.toLowerCase() !== valoare.value.toLowerCase()){
            console.log(nepoti[1].value)
            copii[i].style.display = "none";
        }
    }
    valoare.value = "";
}

//-----------------
//sortare dupa pret
//-----------------
const btnSort = document.querySelector(".sortare-submit");
btnSort.addEventListener("click", sorteazaPret);

function sorteazaPret(e){
    e.preventDefault();
    const ordine = document.querySelector(".sortare-select");
    console.log(ordine.value);
    const tabel = document.querySelector(".section-elemente");
    const copii = tabel.children;
    
    for(let i=0; i<copii.length-1; i++){
        for(let j=i; j<copii.length; j++){
            if(ordine.value === "crescator"){
                if(parseFloat(copii[i].children[2].value) > parseFloat(copii[j].children[2].value) && copii[i].style.display !== "none" && copii[j].style.display !== "none"){
                    let auxId = copii[i].children[0].value;
                    let auxN = copii[i].children[1].value;
                    let auxP = copii[i].children[2].value;
                    let auxC = copii[i].children[3].value;
                    let auxD = copii[i].children[4].value;
                    let auxCo = copii[i].children[5].value;
                    let auxR = copii[i].children[6].value;

                    copii[i].children[0].value = copii[j].children[0].value;
                    copii[i].children[1].value = copii[j].children[1].value;
                    copii[i].children[2].value = copii[j].children[2].value;
                    copii[i].children[3].value = copii[j].children[3].value;
                    copii[i].children[4].value = copii[j].children[4].value;
                    copii[i].children[5].value = copii[j].children[5].value;
                    copii[i].children[6].value = copii[j].children[6].value; 

                    copii[j].children[0].value = auxId;
                    copii[j].children[1].value = auxN;
                    copii[j].children[2].value = auxP;
                    copii[j].children[3].value = auxC;
                    copii[j].children[4].value = auxD;
                    copii[j].children[5].value = auxCo;
                    copii[j].children[6].value = auxR;
                }
            }else{
                if(parseFloat(copii[i].children[2].value) < parseFloat(copii[j].children[2].value) && copii[i].style.display !== "none" && copii[j].style.display !== "none"){
                    let auxId = copii[i].children[0].value;
                    let auxN = copii[i].children[1].value;
                    let auxP = copii[i].children[2].value;
                    let auxC = copii[i].children[3].value;
                    let auxD = copii[i].children[4].value;
                    let auxCo = copii[i].children[5].value;
                    let auxR = copii[i].children[6].value;

                    copii[i].children[0].value = copii[j].children[0].value;
                    copii[i].children[1].value = copii[j].children[1].value;
                    copii[i].children[2].value = copii[j].children[2].value;
                    copii[i].children[3].value = copii[j].children[3].value;
                    copii[i].children[4].value = copii[j].children[4].value;
                    copii[i].children[5].value = copii[j].children[5].value;
                    copii[i].children[6].value = copii[j].children[6].value; 

                    copii[j].children[0].value = auxId;
                    copii[j].children[1].value = auxN;
                    copii[j].children[2].value = auxP;
                    copii[j].children[3].value = auxC;
                    copii[j].children[4].value = auxD;
                    copii[j].children[5].value = auxCo;
                    copii[j].children[6].value = auxR;
                }
            }
        }
    }
    
}