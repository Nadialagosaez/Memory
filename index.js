  
  
  // holds the deck of cards for the game
let cards = [];
let flippedCards = [];
let matched = 0;
let size = 2;
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
function flipCard(cardDiv) { 
 if (flippedCards.length < 2 && !cardDiv.classList.contains("flipped") && !cardDiv.classList.contains("matched")){
  
  cardDiv.classList.add("flipped");
  flippedCards.push(cards.find(cards => cards.id == cardDiv.id))
 
  if (flippedCards.length === 2){
    setTimeout(checkMatched, 1000);
  }
  
}
console.log(flippedCards)

}

// marks any flipped cards as matched if they match
function checkMatched() {
  matched=16;
  checkWin()
  const [card1, card2] = flippedCards;
    if(card1.title === card2.title){
      document.getElementById(card1.id).classList.add('matched');
      document.getElementById(card2.id).classList.add('matched');
    
      console.log("Son iguales")
      flippedCards = [];
      matched += 2;
      console.log(matched)
      checkWin()

    } 
    else {
      flipBack();
    }
  };
  


// shows a message if the game is over
function checkWin() {
  if (matched === 16){
    console.log("you win!!")
    document.querySelector('.grid').style = 'display: none';
    document.getElementById('win').style = 'display: flex';

    // const contenedor = document.getElementById('contenedor');

    // const msjDiv = document.createElement('div');
    // const msj = document.createElement('p');
    // msj.innerHTML = 'HAS GANADO! FELICITACIONES';

    // contenedor.appendChild(msjDiv);
    // msjDiv.appendChild(msj);
    //mostrar pop up o dejar de mostrar cartas y hacer un efecto de cartel?
  }
}

// sets all flipped props to false except for the matched ones
function flipBack() {
  const [card1, card2] = flippedCards;
  document.getElementById(card1.id).classList.remove('flipped');
  document.getElementById(card2.id).classList.remove('flipped');
  flippedCards = [];
  console.log(flippedCards);
}

// handles the click on a card //no entiendo qué debo hacer
function handleCardClick(id) {}

// creates the DOM elements for the cards
function showCards() {
  const cardGrid = document.querySelector('.grid');
  for (let el of cards){
        const cardDiv = document.createElement('div');
        cardDiv.id = el.id // no se buscar con el data-id
        cardDiv.classList.add("cardDiv")
        
        const cardInner = document.createElement("div")
        cardInner.classList.add("cardInner")

        const cardBack = document.createElement("div"); 
        cardBack.classList.add("cardBack")

        const cardFront = document.createElement('div');
        cardFront.textContent = el.img;
        cardFront.classList.add("cardFront")
        
        
        cardGrid.appendChild(cardDiv)
        cardDiv.appendChild(cardInner)
        cardInner.appendChild(cardBack)
        cardInner.appendChild(cardFront)


        cardDiv.addEventListener("click", () => flipCard(cardDiv))
  } 
}

// updates the classes on the card DOM elements based on the state of the cards
function updateCards() { //sirve o debo limpiar cada elemento?
  location.reload();
}

// initializes the game
function createGame() {
  generateCards(size * size);
  shuffle(cards);
  showCards();
}

// INITIALIZE THE GAME WHEN THE PAGE LOADS
createGame(4);
console.log(cards)

//OCULTAR LA CARTA
// card.style.visibility = "hidden";


//por ahora el boton recarga la pagina para crear una nueva baraja

const boton = document.getElementById("newGame");
boton.addEventListener("click", updateCards);

