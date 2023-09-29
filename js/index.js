console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

const bookTitle = "Hitchikers Guide to Galaxy";
const bookAuthor = "Douglas Adams";
const bookRating = "10/10";
const bookSoldCopies = 15000000;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

// console.log("Title:", bookTitle);
// console.log("Author:", bookAuthor);
// console.log("Rating:", bookRating);
// console.log("Sales:", bookSoldCopies);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function logBookData() {
  const bookSoldCopiesRaw = bookSoldCopies;
  let bookSoldCopiesIncrease = bookSoldCopiesRaw + 1;

  console.log("Title:", bookTitle);
  console.log("Author:", bookAuthor);
  console.log("Rating:", bookRating);

  console.log("Sales:", bookSoldCopiesIncrease);
  bookSoldCopiesIncrease += 1;
  console.log("Sales:", bookSoldCopiesIncrease);
}

logBookData();
logBookData();

// --^-- write your code here --^--
