function narcissistic(value) {
    let runningtotal = 0;
    const len = value.toString().length
    for (let i = 0; i < len; i++)
      {
        runningtotal += Math.pow(parseInt(value.toString()[i]), len)
      }
    return runningtotal === value;
  }