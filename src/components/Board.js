import React from 'react';
import { Card, CardImg } from 'reactstrap';
import cards from '../data/cards';

export default function Board() {
  const cardsList = [...cards];
  return (
    <div className="board">
      <ul class="grid-container">
        {cardsList.map((card) => {
          return (
            <Card key={card.id} className="item shadow-lg">
              <CardImg src={card.img} alt="Card image cap" />
            </Card>
          );
        })}
      </ul>
    </div>
  );
}
