import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChessTable from "./chessTable/ChessTable";
import Queen from "./queen/Queen";

function App() {
  const tables = (new Queen()).getQueens()

  return (
    <div className="App">{
      tables
        .map(table => <ChessTable queenPositions={table} key={Math.random()} />)
    }</div>
  );
}

export default App;
