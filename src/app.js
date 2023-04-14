
// Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages);
    this.read = read;
};

const hobbit = new Book('Hobbit', 'tolkien', '295', true);
const potter = new Book('Potter', 'mary', '300', true)

let myLibrary = [hobbit, potter];
function addToLibrary(bookObject){
    myLibrary.push(bookObject);
};

function displayLibrary(library){
    library.forEach(book => {
        const main = document.getElementById('main');
        let card = document.createElement('div');
        let title = document.createElement('div');
        let author = document.createElement('div');
        let pages = document.createElement('div');
        let read = document.createElement('div');
        card.append(title, author, pages, read);
        main.append(card);
    });
}

