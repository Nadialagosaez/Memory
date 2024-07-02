  
  
  // holds the deck of cards for the game
let cards = [];

let modelCards = [{
  title: 1,
  img: "😀"
},
{ title: 2,
  img: "😈"
},
{ title: 3,
  img: "😎"
},
{ title: 4,
  img: "😇"
},
{ title: 5,
  img: "😱"
},
{ title: 6,
  img: "🤠"
},
{ title: 7,
  img: "😻"
},
{ title: 8,
  img: "🙊"
}]



// generates a new deck of cards, with size / 2 pairs, and shuffled
function generateCards(size) {
 for(let el of modelCards){
  cards.push({...el});
  cards.push({...el});
}
for (let i = 0; i < cards.length;  i++){
  cards[i].id = i;
}
// return cards;
}

//genero el numero random en otra funcion
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// shuffles an array
function shuffle(arr) { 
// let j =[]
  for(let i = arr.length-1; i>=0; i--){
    arr.sort(() => 0.5 - Math.random())
    // let numAl = (getRandomIntInclusive(0, i));
    // if(!j.includes(numAl)){
    //   j.push(numAl)//es solo una verificacion
    //   const el = arr.splice(i, 1,)[0];
    //   arr.splice(j, 0, el);
    // } 
  }
  return arr;
  
}



// flips a card by id --> NO TENGO IDEA COMO HACERLO
function flipCard(id) { 
  //1. Detectar el click del div --> eventTarget.id
  //2. Mirar qué carta hay ahí dentro y hacerla visible
  

  id.target.visibility = "visible";
  }

// marks any flipped cards as matched if they match
function checkMatched() {}

// shows a message if the game is over
function checkWin() {}

// sets all flipped props to false except for the matched ones
function flipBack() {}

// handles the click on a card
function handleCardClick(id) {}

// creates the DOM elements for the cards
function showCards() {
  const cardGrid = document.querySelector('.grid');
  for (let el of cards){
        const cardDiv = document.createElement('div');
        const card = document.createElement('p')
        card.innerHTML = el.img;
        card.id = el.id;
        
        cardGrid.appendChild(cardDiv)
        cardDiv.appendChild(card)

  }
}

// updates the classes on the card DOM elements based on the state of the cards
function updateCards() {

}

// initializes the game
function createGame() {
  generateCards(size * size);
  shuffle(cards);
  showCards();
}

// INITIALIZE THE GAME WHEN THE PAGE LOADS
createGame();
console.log(cards)

//OCULTAR LA CARTA
// card.style.visibility = "hidden";


//por ahora el boton recarga la pagina para crear una nueva baraja
function reload(){
  location.reload();
}

const boton = document.getElementById("newGame");
boton.addEventListener("click", reload);


