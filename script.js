class Book {
    constructor(title, author, releaseDate, isRead) {
        this.title = title;
        this.author = author;
        this.releaseDate = releaseDate;
        this.isRead = isRead;
    }
};

let threeBodyProblem = new Book("Three Body Problem","Cixin Liu","2008", false );
let fellowshipOfTheRing = new Book("The Fellowship of the Ring","J. R. R. Tolkien","1954", false );
let mobyDick = new Book("Moby Dick","Herman Melville","1851", false );

const arrayBooks = [threeBodyProblem, fellowshipOfTheRing, mobyDick];

// Static DOM Elements --------------
const cardContainer = document.getElementById("book-cards");
const dialog = document.getElementById("favDialog");
//select
const selectReleaseDate = document.getElementById("releaseDate");
// input fields
const inputBookTitle = document.getElementById("bookTitle");
const inputBookAuthor = document.getElementById("bookAuthor");
//buttons
const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancel");
const updateButton = document.getElementById("updateDetails");
const addBookButton = document.getElementById("addBook");

//populate with a few static items
addNewBook("The Three Body Problem", "Cixin Liu", 2008);
addNewBook("The Fellowship of the Ring", "J. R. R. Tolkien", 1954);
addNewBook("Moby Dick", "Herman Melville", 1851);

//populating release date selector
for (let index = 2000; index >= 1000; index--) {
  const optionReleaseDate = document.createElement('option');
  optionReleaseDate.value = index;
  optionReleaseDate.textContent = index;
  selectReleaseDate.appendChild(optionReleaseDate);
  
}
  
  // Update button opens a modal dialog
  addBookButton.addEventListener("click", () => {
    dialog.showModal();
  });
  
  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", () => {
    dialog.close();
  });

submitButton.addEventListener("click", () => {
  addNewBook(inputBookTitle.value, inputBookAuthor.value, selectReleaseDate.value);
});

function addNewBook(title, author, date) {
  let addNewBook = new Book(title, author, date);
  arrayBooks.push(addNewBook);

  let bookContainer = document.createElement("div");
  bookContainer.className = "bookContainer";

  let newBookDiv = document.createElement("div");
  newBookDiv.innerHTML = `Title: ${addNewBook.title}<br>Author: ${addNewBook.author}<br>Release date: ${addNewBook.releaseDate}`;
  newBookDiv.className = "newBookDiv";

  const removeButton = document.createElement("button");
  removeButton.className = "removeButton";
  removeButton.textContent = "Remove";
  removeButton.onclick = function()  {
    cardContainer.removeChild(bookContainer);
  };
  bookContainer.appendChild(newBookDiv);
  bookContainer.appendChild(removeButton);
  cardContainer.appendChild(bookContainer);  

};

