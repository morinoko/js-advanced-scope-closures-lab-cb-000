function produceDrivingRange(rangeInBlocks) {
  return function(start, end) {
    return (Math.abs(start - end)) <= rangeInBlocks ? true : false
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
