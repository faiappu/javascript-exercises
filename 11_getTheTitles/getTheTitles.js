const getTheTitles = function(books) {
    if (!Array.isArray(books)) {
        throw new TypeError('Input must be an array');
    }
    if (books.length === 0) {
        throw new Error('Array is empty');
    }
    // first attempt using forEach()
    
    // const bookTitles = [];
    // books.forEach(books => bookTitles.push(books.title));
    // return bookTitles;

    // second attempt using map()
    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
