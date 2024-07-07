"use-strict"
class Client{
    constructor(demande,message,prenom,nom,email,photo){
        this.demande = demande;
        this.message = message;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.photo = photo;
    }
}

let form = document.querySelector('form');
let navLinkContact = document.getElementById('contact');
let selectPhoto = document.getElementById('selectPhoto');
let imageAffichee = document.getElementsByTagName('img')[0];

navLinkContact.addEventListener('click',()=>{
    form.style.display='block';
})

selectPhoto.addEventListener('change',()=>{

    let demande = document.querySelector('select').options[document.querySelector('select').selectedIndex].value;
    let message = document.querySelector('textarea').value;
    let prenom = document.querySelectorAll('input')[1].value;
    let nom = document.querySelectorAll('input')[0].value;
    let email = document.querySelectorAll('input')[2].value;
    let photo = document.querySelectorAll('select')[1].options[document.querySelectorAll('select')[1].selectedIndex].text;
    
    const client = new Client(demande,message,prenom,nom,email,photo);
    imageAffichee.src = `../photos/${client.photo}`;
    console.log(client);     
});

