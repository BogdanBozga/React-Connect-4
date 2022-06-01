import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Circle = (props) => {
const [value, setValue] = useState(null);
  return  (
    <button
      className="circle"
      onClick={props.onClickEvent}
    >
    {props.value}
    </button>
  )
}

const SmallCircleRed = () => {
  return (
    <button
    className="SmallCircleRed"
    />
  );
}

const SmallCircleGreen = () => {
  return (
    <button
    className="SmallCircleGreen"
    />
  );
}

const red = <SmallCircleRed/>
const green = <SmallCircleGreen/>


const Board = () => {

  const initialCircles = Array(57).fill(null);
  const [circles,setCircles] = useState(initialCircles)
  const [playerNext,setPlayerNext] = useState(true);

  const handleClickEvent = (i) =>{
    const newCircles = [...circles];

    const winnerDeclared = Boolean(calculateWinner(newCircles));
    const circleFilled = Boolean(newCircles[i]);
      if (winnerDeclared || circleFilled){
        return;
      }


      while(i+10 < 57 && newCircles[i+10]===null){
        i = i+10
      }
      newCircles[i] = playerNext ? green: red;




    setPlayerNext(!playerNext);
    setCircles(newCircles);


  }

  const renderCircle = (i) => {
    return (
      <Circle
        value={circles[i]}
        onClickEvent={ () => handleClickEvent(i)}
      />
    );
  }



  const winner = calculateWinner(circles);
  const status = winner ?
  `Winner: ${winner===red ? 'Red':'Green'}`:
  `Next player : ${playerNext ? 'Green' : 'Red'}`;


  return (

    <div>
      <div className="status">{status} </div>
      <div className="board-row">
        {renderCircle(0)}{renderCircle(1)}{renderCircle(2)}{renderCircle(3)}
        {renderCircle(4)}{renderCircle(5)}{renderCircle(6)}
      </div>
      <div className="board-row">
      {renderCircle(10)}{renderCircle(11)}{renderCircle(12)}{renderCircle(13)}
      {renderCircle(14)}{renderCircle(15)}{renderCircle(16)}
      </div>
      <div className="board-row">
      {renderCircle(20)}{renderCircle(21)}{renderCircle(22)}{renderCircle(23)}
      {renderCircle(24)}{renderCircle(25)}{renderCircle(26)}
      </div>
      <div className="board-row">
      {renderCircle(30)}{renderCircle(31)}{renderCircle(32)}{renderCircle(33)}
      {renderCircle(34)}{renderCircle(35)}{renderCircle(36)}
      </div>
      <div className="board-row">
      {renderCircle(40)}{renderCircle(41)}{renderCircle(42)}{renderCircle(43)}
      {renderCircle(44)}{renderCircle(45)}{renderCircle(46)}
      </div>
      <div className="board-row">
      {renderCircle(50)}{renderCircle(51)}{renderCircle(52)}{renderCircle(53)}
      {renderCircle(54)}{renderCircle(55)}{renderCircle(56)}
      </div>
    </div>

    )
}

const Game = () => {
  return (
    <div className="game">
    Game
    <Board/>
    </div>
  )
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);



function calculateWinner(circles) {
for (let i = 0; i < 57; i=i+10) { // lines
  let j = 0;
  while(j < 4){
    let a = i+0 + j;
    let b = i+1 + j;
    let c = i+2 + j;
    let d = i+3 + j;
    if(circles[a] && circles[a]===circles[b] && circles[a]===circles[c] && circles[a]===circles[d]){
      return circles[a];
    }
    j=j+1;
  }
}

for (let i = 0; i < 7; i=i+1) { // rows
  let j = 0;
  while(j < 30){
    let a = i+ 0 + j;
    let b = i+10 + j;
    let c = i+20 + j;
    let d = i+30 + j;
    if(circles[a] && circles[a]===circles[b] && circles[a]===circles[c] && circles[a]===circles[d]){
      return circles[a];
    }
    j=j+10;
  }
}
  const diagonalMain = [0, 10, 20, 1, 2, 3]
  for(let i of diagonalMain){
    let remain=0;
    switch (i) {
      case 0:
        remain = 3;
        break;
      case 1:
        remain = 3;
        break;
      case 2:
        remain = 2;
        break;
      case 10:
        remain = 2;
        break;
      default:
          remain =1;
    }

    while(remain >0){
      let j=(remain-1)*11;
      let a = i+0 + j;
      let b = i+11 + j;
      let c = i+22 + j;
      let d = i+33 + j;
      if(circles[a] && circles[a]===circles[b] && circles[a]===circles[c] && circles[a]===circles[d]){
        return circles[a];
      }
      remain = remain-1;
    }
  }

  const diagonalSecond = [3, 4, 5, 6, 16, 26]
  for(let i of diagonalSecond){
    let remain=0;
    switch (i) {
      case 5:
        remain = 3;
        break;
      case 6:
        remain = 3;
        break;
      case 4:
        remain = 2;
        break;
      case 16:
        remain = 2;
        break;
      default:
          remain =1;
    }

    while(remain >0){
      let j=(remain-1)*9;
      let a = i+0 + j;
      let b = i+9 + j;
      let c = i+9 + j;
      let d = i+9 + j;
      if(circles[a] && circles[a]===circles[b] && circles[a]===circles[c] && circles[a]===circles[d]){
        return circles[a];
      }
      remain = remain-1;
    }
  }
  return null;

}
