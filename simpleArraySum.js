const simpleArraySum = (
    ar = [1, 2, 3, 4, 10, 11],
    sum = 0
) => {
    for (const elem of ar) {
        sum += elem
    }

    return console.log(sum)
}

simpleArraySum()