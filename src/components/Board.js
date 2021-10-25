import React from 'react';
import { Card, CardImg } from 'reactstrap';

export default function Board() {
  return (
    <div className="board">
      <ul class="flex-container">
        <Card className="flex-item shadow-lg">
          <CardImg
            src={require('../assets/cards/angular-core.jpg').default}
            alt="Card image cap"
          />
        </Card>
        <Card className="flex-item shadow-lg">
          <CardImg
            width="100%"
            src={require('../assets/cards/vuejs-core.jpg').default}
            alt="Card image cap"
          />
        </Card>
        <Card className="flex-item shadow-lg">
          <CardImg
            width="100%"
            src={require('../assets/cards/react-core.jpg').default}
            alt="Card image cap"
          />
        </Card>
        <Card className="flex-item shadow-lg">
          <CardImg
            width="100%"
            src={require('../assets/cards/professional-core.jpg').default}
            alt="Card image cap"
          />
        </Card>
      </ul>
    </div>
  );
}
