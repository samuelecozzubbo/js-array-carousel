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
console.log(items);

let activeItem = 0;

//mettiamo la calsse active al primo elemento per farlo vedere
items[0].classList.add("active");

//EVENTO CLICK DOWN

//seleziono il bottone next
const down = document.querySelector(".down");

//gestiamo il click su next
down.addEventListener("click",
    function() {
        console.log("Mi hai cliccato");
        
        //verifichiamo se non siamo alla fine della lista delle immagini
        if(activeItem < imgArray.length - 1) {
            //togliamo la classe active agli item n attivi "precedente"
            items[activeItem].classList.remove("active");

            activeItem = activeItem + 1;
            //mettiamo la calsse active++
            items[activeItem].classList.add("active");
        }
    }
)



