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

// Static DOM Elements
const addBookButton = document.getElementById("addBook");
const cardContainer = document.getElementById("book-cards");
const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
const selectReleaseDate = document.getElementById("releaseDate");

//populating release date selector
for (let index = 2000; index >= 1000; index--) {
  const optionReleaseDate = document.createElement('option');
  optionReleaseDate.value = index;
  optionReleaseDate.textContent = index;
  selectReleaseDate.appendChild(optionReleaseDate);
  
}
//populating book list with static elements
arrayBooks.forEach((currentBook) => {
    let newDiv = document.createElement("div");
    newDiv.textContent = `Title: ${currentBook.title}\r\nAuthor: ${currentBook.author}\r\nRelease date: ${currentBook.releaseDate}` ;
    let delButton = document.createElement("button");
    delButton.textContent = "Remove";
    delButton.className = "button-delete";
    cardContainer.appendChild(newDiv);
    newDiv.appendChild(delButton);
});

  
  // Update button opens a modal dialog
  addBookButton.addEventListener("click", () => {
    dialog.showModal();
  });
  
  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", () => {
    dialog.close();
  });