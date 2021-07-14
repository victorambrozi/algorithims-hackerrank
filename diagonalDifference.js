const diagonalDifference = (
    arr = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ]
) => {
    const soma = (diagonal) => {
        let soma = 0;
        for (const number of diagonal) {
            soma += number
        }
        return soma;
    }
    const primaryDiagonal = [];
    const secondaryDiagonal = [];
    const comprimentoTotal = arr.length;

    for (let lin = 0; lin < comprimentoTotal; lin++) {
        for (let col = 0; col < comprimentoTotal; col++) {
            if (lin === col) primaryDiagonal.push(arr[lin][col]);
            if (lin + col === comprimentoTotal - 1) secondaryDiagonal.push(arr[lin][col]);
        }
    }

    const primaryResult = soma(primaryDiagonal);
    const secondaryResult = soma(secondaryDiagonal);

    return Math.abs(primaryResult - secondaryResult);

}

console.log(diagonalDifference())