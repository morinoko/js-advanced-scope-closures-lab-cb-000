function produceDrivingRange(rangeInBlocks) {
  return function(startBlock, endBlock) {
    const start = startBlock.slice(0, startBlock.length - 2);
    const end = endBlock.slice(0, startBlock.length - 2);
    
    return (Math.abs(start - end)) <= rangeInBlocks ? true : false;
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
