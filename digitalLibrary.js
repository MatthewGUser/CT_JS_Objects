// Constructor for Book object
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Method to display book information
Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};


let library = [];

function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
}
function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}
function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}
function filterBooksByPages() {
    return library.filter(book => book.pages <= 100);
}

function modifyBookInfo() {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
}

// Sample data
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 180);
addBook('1984', 'George Orwell', 328);
addBook('To Kill a Mockingbird', 'Harper Lee', 281);
addBook('The Catcher in the Rye', 'J.D. Salinger', 277);
addBook('Harry Potter', 'J.K. Rowling', 309);

// Test functions
console.log(searchByTitle('1984'));
console.log(searchByAuthor('Harper Lee'));
console.log(filterBooksByPages());
console.log(modifyBookInfo());
