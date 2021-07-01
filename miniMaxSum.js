const miniMaxSum = (
    arr = [7, 69, 2, 221, 8974]
) => {
    let [soma, min, max] = [0, 0, 0];
    arr.sort();
    min = arr.pop();
    max = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    min += soma;
    max += soma;

    console.log(max, min)
}

miniMaxSum();