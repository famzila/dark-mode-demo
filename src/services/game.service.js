const colors = [
    '#F6DB5F',
    '#FFB554',
    '#F35E51',
    '#9E3D64',
    '#36ABB5',
    '#035EE8',
    '#F6019D',
    '#9FF781',
    '#C0BFBD',
    '#484847',
    '#11A501',
    '#F5A9F2',
    '#E2A9F3',
    '#EFF2FB',
    '#1C1C1C',
    '#A9A9F5',
    '#FE2E2E',
    '#75EDE6'
  ]
  
  export default colors

const createTiles = (numTiles, clickCallback) => {
  const numPairs = numTiles / 2;
  //   const colorsCopy = Array.from(colors).slice(0, numPairs);

  return colorsCopy.reduce((accumulator, color, index) => {
    const pair = [
      {
        color,
        id: 1,
        handleTileClicked: clickCallback,
        key: color + '_A',
        matched: false,
        selected: false,
        // svg: svgs[index % 8],
      },
      {
        color,
        id: 2,
        handleTileClicked: clickCallback,
        key: color + '_B',
        matched: false,
        selected: false,
        // svg: svgs[index % 8],
      },
    ];

    accumulator = accumulator.concat(pair);
    // Next step forward randomizing
    return accumulator;
  }, []);
};

export { createTiles };
