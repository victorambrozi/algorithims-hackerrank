const plusMinus = (
    arr = [-4, 3, -9, 0, 4, 1,]
) => {
    const comprimentoTotal = arr.length;
    let [pos, neg, zer] = [[], [], []];
    let propPos, propNeg, propZer;

    for (let i = 0; i < comprimentoTotal; i++) {
        if (arr[i] === 0) zer.push(arr[i]);
        if (arr[i] > 0) {
            pos.push(arr[i])
        } else if (arr[i] < 0) {
            neg.push(arr[i])
        };
    };
    propPos = pos.length / comprimentoTotal;
    propNeg = neg.length / comprimentoTotal;
    propZer = zer.length / comprimentoTotal;

    console.log(propPos.toFixed(6));
    console.log(propNeg.toFixed(6));
    console.log(propZer.toFixed(6));
}
plusMinus();