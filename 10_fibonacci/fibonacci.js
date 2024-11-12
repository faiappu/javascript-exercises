const fibonacci = function(n) {
    const fibSequence = [0, 1];

    if ( n < 0 ) {
        return 'OOPS';
    }

    for (let i = 2; i <= n; i++) {
        fibSequence[i] = fibSequence[i-1] + fibSequence[i-2];
    }
    return fibSequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
