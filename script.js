import GameBoard from './GameBoard.js';

const createDiv = (className = '') => {
  const div = document.createElement('div');
  div.className = className;

  return div;
}

const eightTimes = (action) => {
  for (let count = 0; count <= 7; count++) {
    action(count);
  }
}

const createSpan = (x, y) => {
  const span = document.createElement('span');
  span.setAttribute(`data-position-${x}-${y}`, '');

  return span;
}

const renderBoard = (container) => {
  eightTimes((rowCount) => {
    const row = createDiv('row');

    eightTimes((sqmCount) => {
      const sqm = createDiv('sqm');
      const span = createSpan(sqmCount, rowCount);

      sqm.appendChild(span)
      row.appendChild(sqm);
    })

    container.appendChild(row);
  });
};

const getUnicodeCharFromFigureName = (name) => {
  const mapping = {
    bishop: '&#9815;',
    king: '&#9812;',
    queen: '&#9813;',
    rook: '&#9814;',
    knight: '&#9816;',
    pawn: '&#9817;'
  };

  return mapping[name];
}

const appendGameData = (game, container) => {
  const figures = game.figuresPosition;

  figures.forEach((figure) => {
    const unicodeChar = getUnicodeCharFromFigureName(figure.name);
    const { x, y } = figure.position;

    const node = container.querySelector(`span[data-position-${x}-${y}]`);
    node.innerHTML = unicodeChar;
  })
}


const container = document.querySelector('.container');
const game =  new GameBoard();

renderBoard(container);
appendGameData(game, container);
