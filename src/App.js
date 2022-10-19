import "./App.css";
import React, {useState} from 'react'
import { Scoreboard } from "./components/Scoreboard";
import { Card } from "./components/Card";

// features:
// matching cards
//number of retires. infinit? limited to a set number?
//multiple selectable element pairs
//Score? success +1 fail -1?
//win message


//Components
  //selectable element
    //Card
  //scoreboard
  //message area
//State

// const Card = ({ ...props}) => {
//   //value
//   //revealed: bool
//   //onSelected

//   return null;
// }


const MessageArea = ({...props}) => {
  // TODO?
  //success: bool
  //visible: bool
  return null
}

const initialCardData = [
  { value: 1,
    revealed: false,
    index: 1
   },
  { value: 2,
    revealed: false,
    index: 2
  },
  { value: 3,
    revealed: false,
    index: 3
  },
  { value: 1,
    revealed: false,
    index: 4
  },
  { value: 2,
    revealed: false,
    index: 5
  },
  { value: 3,
    revealed: false,
    index: 6
  },
]

const randomOrder = (dataArray, returnArray=[]) => {
  if (dataArray.length === 0) return returnArray
  let randomIndex = Math.floor(Math.random() * (dataArray.length))
  returnArray.push(dataArray[randomIndex])
  dataArray.splice(randomIndex, 1)
  return randomOrder(dataArray, returnArray)
}

export default function App() {
  //global state that keeps track of selected card id
  const [cards, setCards] = useState(() => randomOrder(initialCardData.slice()))
  const [prevCard, setPrevCard] = useState({})
  const [score, setScore] = useState(0)

  const revealCard = (index, cards) => {
    let updatedCards = [...cards]
    let cardIndex = cards.findIndex(item => item.index === index)
    updatedCards[cardIndex].revealed = !updatedCards[cardIndex].revealed
    return updatedCards
  }

  const handleCardClick = (cardIndex, cardValue) => {
    console.log(prevCard.cardValue, cardValue)
    let updatedCards = revealCard(cardIndex, cards)
    setCards(updatedCards)
    if (!prevCard.cardIndex) {
      setPrevCard({cardIndex, cardValue})
    } else if (prevCard.cardValue === cardValue) {
      setPrevCard({})
      setScore(score => score+1)
    } else {
      setTimeout(()=> {
        let card1 = revealCard(cardIndex, cards)
        updatedCards = revealCard(prevCard.cardIndex, card1)
        setCards(prev => updatedCards)
        setPrevCard({})
      }, 1000)
      setScore(score => score-1)
    }
  }

  return (
    <div className="App">
      <Scoreboard score={score} />
      <div className="gameBoard">
        {cards.map((item, index) => (
          <Card value={item.value} revealed={item.revealed} key={index} index={item.index} handleCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}
