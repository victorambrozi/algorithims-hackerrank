const compareTriplets = (
    ali = [5, 6, 7],
    bob = [3, 6, 10],
) => {
    let alicePoints = 0;
    let bobPoints = 0;
    let result = [alicePoints, bobPoints]

    for (let i = 0; i < ali.length; i++) {
        if (ali[i] > bob[i]) {
            alicePoints += 1;
        } else if (ali[i] < bob[i]) {
            bobPoints += 1;
        }
    }
    result = [alicePoints, bobPoints]
    return result;
}
compareTriplets()