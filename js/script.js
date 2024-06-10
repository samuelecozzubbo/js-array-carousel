//Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

//array immagini carosello
const imgArray = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp",];

//prendo il container
const itemsContainer = document.querySelector(".carousel-container");

//Estrapolo elememnti arrayimg
for (let i = 0; i < imgArray.length; i++) {
    itemImg = imgArray[i];
    console.log(itemImg);
    //creare ad ogni iterazione l'elemento da inserire
    let itemContent = `<div class="item">
                            <img src="${itemImg}">
                            <div class="arrowhead down">&#709;</div>
                            <div class="arrowhead up">&#708;</div>
                        </div>`;
    //inseriamo il nuovo elemento nel contenitore
    itemsContainer.innerHTML += itemContent;

}

//seleziono tutti gli elementi item in pagina
const items = document.getElementsByClassName("item");

//mettiamo la calsse active al primo elemento per farlo vedere
items[0].classList.add("active");


