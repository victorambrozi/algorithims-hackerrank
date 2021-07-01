const diagonalDifference = (
    arr = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ]
) => {
    const soma = (a, b) => a + b;
    const primaryDiagonal = [];
    const secondaryDiagonal = [];

    primaryDiagonal.push(arr[0][0], arr[1][1], arr[2][2]);
    secondaryDiagonal.push(arr[0][2], arr[1][1], arr[2][0]);

    const primaryResult = primaryDiagonal.reduce(soma);
    const secondaryResult = secondaryDiagonal.reduce(soma);

    return Math.abs(primaryResult - secondaryResult);
}

diagonalDifference()