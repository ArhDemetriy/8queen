import React from 'react';
import './App.css';
import ChessTable from "./chessTable/ChessTable";
import Queen from "./queen/Queen";

interface AppState{
  tables: {
    table: ReturnType<Queen['getQueens']>[0]
    id: number
  }[]
}

export default class App extends React.Component<{}, AppState> {
  constructor(props?: any) {
    super(props)
    this.state = { tables: [] }
  }
  render() {
    return (
      <div className="App">
        <h3>
          {`количество решений: ${this.state.tables.length}`}
        </h3>
        {this.state.tables
          .map(el => <ChessTable
            queenPositions={el.table}
            key={el.id} />)}
      </div>
      );
    }
  componentDidMount() {
    if (!this.queen) {
      this.queen = new Queen(this.addTable.bind(this))
    }
  }
  private queen?: Queen

  private addTable(table: ReturnType<Queen['getQueens']>[0]) {
    this.state.tables.push({
      table,
      id: Math.random()
    })
    setTimeout(() => {
      this.setState(this.state)
    }, 0);
  }
}
