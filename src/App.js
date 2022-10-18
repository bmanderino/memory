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
   },
  { value: 2,
    revealed: false,
  },
  { value: 3,
    revealed: false,
  },
  { value: 1,
    revealed: false,
  },
  { value: 2,
    revealed: false,
  },
  { value: 3,
    revealed: false,
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
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <Scoreboard score={score} />
      <div className="gameBoard">
        {cards.map((item, index) => (
          <Card value={item.value} revealed={item.revealed} key={index} />
        ))}
      </div>
    </div>
  );
}
