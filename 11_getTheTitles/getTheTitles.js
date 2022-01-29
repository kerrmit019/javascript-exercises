const getTheTitles = function (books) {
  const bookTitles = books.map((book) => {
    return book.title;
  });
  return bookTitles;
};

// const books = [
//   {
//     title: "Book",
//     author: "Name",
//   },
//   {
//     title: "Book2",
//     author: "Name2",
//   },
// ];

// getTheTitles(books);
// // Do not edit below this line
module.exports = getTheTitles;
