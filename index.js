function produceDrivingRange(rangeInBlocks) {
  return function(startBlock, endBlock) {
    const start = parseInt(startBlock, 10);
    const end = parseInt(endBlock, 10);
    const blocksToTravel = Math.abs(start - end);

    if (blocksToTravel <= rangeInBlocks) {
      return `within range by ${rangeInBlocks - blocksToTravel}`;
    } else {
      return ``;
    }
  }
}



function produceTipCalculator(tipPercent) {
  return function(fare) {
    return fare * tipPercent;
  }
}

function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.id = ++DriverId;
      this.name = name;
    }
  }
}
