const aVeryBigSum = (
    ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
) => {
    let soma = 0;
    for (const elem of ar) {
        soma += elem
    }
    console.log(soma);
}

aVeryBigSum();

