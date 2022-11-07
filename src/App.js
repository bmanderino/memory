import "./App.css";
import React, {useEffect, useState, useMemo} from 'react'
import { Card } from "./components/Card";


const initialCardData = [
  { value: 1,
    matched: false,
    id: 1,
   },
  { value: 2,
    matched: false,
    id: 2,
  },
  { value: 3,
    matched: false,
    id: 3,
  },
  { value: 1,
    matched: false,
    id: 4,
  },
  { value: 2,
    matched: false,
    id: 5,
  },
  { value: 3,
    matched: false,
    id: 6,
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
  const [selectedCardIds, setSelectedCardIds] = useState([])

  let revealedCards = useMemo(() => {
    return cards.map(item => {
      item.revealed = selectedCardIds.find(val => val === item.id)
      return item
    })
  }, [cards, selectedCardIds])

  useEffect(()=> {
    if (selectedCardIds.length === 2) compareCards()
  }, [selectedCardIds])

  const compareCards = () => {
    let card1 = cards.find(item => item.id === selectedCardIds[0])
    let card2 = cards.find(item => item.id === selectedCardIds[1])
    if (card1.value === card2.value) {
      let updatedCards = [...cards].map(item => {
        item.matched = !item.matched ? selectedCardIds.find(val => val === item.id) : item.matched
        return item
      })
      setCards(updatedCards)
    }
    setSelectedCardIds([])
  }

  const handleCardClick = (cardId) => {
    setSelectedCardIds(prev => [...prev, cardId])
  }

  return (
    <div className="App">
      <div className="gameBoard">
        {revealedCards.map((item, index) => (
          <Card value={item.value} revealed={item.revealed} matched={item.matched} key={index} id={item.id} handleCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}