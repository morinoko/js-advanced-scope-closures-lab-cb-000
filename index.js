function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    const start = parseInt(startBlock, 10);
    const end = parseInt(endBlock, 10);
    const blocksToTravel = Math.abs(start - end);
    const difference = Math.abs(blockRange - blocksToTravel);

    if (blocksToTravel <= blockRange) {
      return `within range by ${difference}`;
    } else {
      return `${difference} blocks out of range`;
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
