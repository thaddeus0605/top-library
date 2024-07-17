const myLibrary = [];
const bookList = document.querySelector('.cards');
const addBookBtn = document.getElementById('addBookBtn');
const bookModal = document.getElementById('bookModal');
const closeModal = document.getElementsByClassName('close')[0];
const bookForm = document.getElementById('bookForm');

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, haveRead) {
    const newBook = new Book(bookTitle, bookAuthor, bookPages, haveRead);
    myLibrary.push(newBook);
    displayBook([newBook]); // Display only the new book
}

function displayBook(library) {
    for (let i = 0; i < library.length; i++) {
        const div = document.createElement('div');
        div.className = 'card';
        bookList.appendChild(div);

        const h3 = document.createElement('h3');
        h3.className = 'bookTitleText';
        h3.textContent = `${library[i].title}`;
        div.appendChild(h3);

        const author = document.createElement('p');
        author.className = 'authorText';
        author.textContent = `Author: ${library[i].author}`;
        div.appendChild(author);

        const pages = document.createElement('p');
        pages.className = 'pagesText';
        pages.textContent = `Pages: ${library[i].pages}`;
        div.appendChild(pages);
    }
}

// Open the modal
addBookBtn.onclick = function() {
    bookModal.style.display = 'block';
}

// Close the modal
closeModal.onclick = function() {
    bookModal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == bookModal) {
        bookModal.style.display = 'none';
    }
}

// Handle form submission
bookForm.onsubmit = function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const haveRead = document.getElementById('haveRead').checked;
    addBookToLibrary(title, author, pages, haveRead);
    bookForm.reset();
    bookModal.style.display = 'none';
}

// Display initial books (if any)
displayBook(myLibrary);
