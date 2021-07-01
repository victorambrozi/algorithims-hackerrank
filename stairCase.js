const stairCase = (n = 6) => {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + "#".repeat(i));
    }
}

stairCase();