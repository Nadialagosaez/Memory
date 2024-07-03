  
  
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



// generates a new deck of cards, with size / 2 pairs, and shuffled -> No estoy utilizando el size
function generateCards(size) {
 for(let el of modelCards){
  cards.push({...el});
  cards.push({...el});
}
for (let i = 0; i < cards.length;  i++){
  cards[i].id = i;
}
}

//genero el numero random en otra funcion
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// shuffles an array
function shuffle(arr) { 
  for(let i = arr.length-1; i>=0; i--){
    arr.sort(() => 0.5 - Math.random())
  }
  return arr;
}


// flips a card by id 
function flipCard(cardDiv) { 
 if (flippedCards.length < 2 && !cardDiv.classList.contains("flipped") && !cardDiv.classList.contains("matched")){
  
  cardDiv.classList.add("flipped");
  flippedCards.push(cards.find(cards => cards.id == cardDiv.id))
 
  if (flippedCards.length === 2){
    setTimeout(checkMatched, 1000);
  }
  
}
}

// marks any flipped cards as matched if they match
function checkMatched() {
  
  const [card1, card2] = flippedCards;
    if(card1.title === card2.title){
      document.getElementById(card1.id).classList.add('matched');
      document.getElementById(card2.id).classList.add('matched');
    
      flippedCards = [];
      matched += 2;
      checkWin()

    } 
    else {
      flipBack();
    }
  };
  


// shows a message if the game is over
function checkWin() {
  if (matched === 16){
    document.querySelector('.grid').style = 'display: none';
    document.getElementById('win').style = 'display: flex';
    let winCont =document.getElementById('winCont');
    let puntos = document.createElement('p');
    puntos.innerHTML = `Lo has logrado en ${clicks} clicks y ${cont} segundos`

    winCont.appendChild(puntos)

  }
}

// sets all flipped props to false except for the matched ones
function flipBack() {
  const [card1, card2] = flippedCards;
  document.getElementById(card1.id).classList.remove('flipped');
  document.getElementById(card2.id).classList.remove('flipped');
  flippedCards = [];
}

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
        cardDiv.addEventListener("click", count_clicks)
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
createGame();

//BOTON
const boton = document.getElementById("newGame");
boton.addEventListener("click", updateCards);


//CONTADOR -> Va contando los clicks sobre las cards
let clicks = 0;
function count_clicks() {
  clicks += 1;
  const contView = document.getElementById("contador")
  contView.innerHTML = `Clicks: ${clicks}`;
  
  if(clicks === 1){
    timer()
  };  
}

//TIMER -> Se ejecuta en el primer click
let cont = 0;
function timer(){
  const textTime = document.getElementById("timer");
  const id = setInterval(function(){
    textTime.innerHTML = `Time: ${cont} seg`;
    cont++;
    if (matched === 16){
      clearInterval(id)
    }
  },1000);
}






