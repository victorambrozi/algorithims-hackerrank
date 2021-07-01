const birthdayCakeCandles = (
    candles = [3, 2, 1, 3]
) => {
    const max = Math.max(...candles);
    let result = [];

    for (let i = 0; i < candles.length; i++) {
        if (max === candles[i]) {
            result.push(candles[i]);
        }
    }
    return result.length;
}

console.log(birthdayCakeCandles());