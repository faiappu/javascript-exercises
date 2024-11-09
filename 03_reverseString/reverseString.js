const reverseString = function(string) {
    let reversed = [];
    if (string == '') return '';
    for (let i = string.length-1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
