import React from 'react';
import './ChessTable.css'

export interface ChessTableProps{
  queenPositions: number[]
}
export default function ChessTable(props: ChessTableProps) {
  const table = [] as boolean[]

  for (let i = 0; i < props.queenPositions.length; i++) {
    for (const position of props.queenPositions) {
      table.push(i == position)
    }
  }

  return <div className='ChessTable'>{
    table.map(point => <div
      className={`ChessTable__item ${point ? 'ChessTable__item--queen' : ''}`}
      key={Math.random()} >{
        point ? 'queen' : ''
      }</div>
    )
  }</div>

}

