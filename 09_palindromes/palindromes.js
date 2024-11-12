const palindromes = function (input) {
    input = input.replace(/[^\w]+/g, '').toLowerCase();
    
    let reversed = '';
    for (let i = input.length-1; i >= 0; i--) {
        reversed += input[i];
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] != reversed[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
