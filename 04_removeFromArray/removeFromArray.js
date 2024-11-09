const { INSPECT_MAX_BYTES } = require("buffer");

const removeFromArray = function(userArray, ...userRemoves) {
    return userArray.filter(item => !userRemoves.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
