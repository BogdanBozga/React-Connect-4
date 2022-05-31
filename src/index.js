import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Circle = (props) => {
  return  (
    <div className="circle">
    {props.value}
    </div>
  )
}


const Board = () => {
  const renderCircle = () => {
    return <Circle value="O"/>
  }
  return (
    <div>
      <div className="board-row">
        {renderCircle()}{renderCircle()}{renderCircle()}{renderCircle()}
        {renderCircle()}{renderCircle()}{renderCircle()}
      </div>
      <div className="board-row">
        {renderCircle()}{renderCircle()}{renderCircle()}{renderCircle()}
        {renderCircle()}{renderCircle()}{renderCircle()}
      </div>
      <div className="board-row">
        {renderCircle()}{renderCircle()}{renderCircle()}{renderCircle()}
        {renderCircle()}{renderCircle()}{renderCircle()}
      </div>
      <div className="board-row">
        {renderCircle()}{renderCircle()}{renderCircle()}{renderCircle()}
        {renderCircle()}{renderCircle()}{renderCircle()}
      </div>
      <div className="board-row">
        {renderCircle()}{renderCircle()}{renderCircle()}{renderCircle()}
        {renderCircle()}{renderCircle()}{renderCircle()}
      </div>
      <div className="board-row">
        {renderCircle()}{renderCircle()}{renderCircle()}{renderCircle()}
        {renderCircle()}{renderCircle()}{renderCircle()}
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
