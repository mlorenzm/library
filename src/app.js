
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
    deleteElementPrompt();
    library.forEach(book => {
        createCards(book);
    });
}
const createCards = (book) => {
    const main = document.getElementById('main');
    main.classList.add('flex-wrap', 'h-10', 'gap-3');
    let card = document.createElement('div');
    card.classList.add('rounded', 'shadow-lg', 'p-3', 'border-l-8', 'border-l-slate-500', 'flex', 'flex-col', 'gap-1');
    let title = document.createElement('div');
    title.innerText = book.title;
    title.classList.add('text-3xl', 'font-black');
    let author = document.createElement('div');
    author.innerText = book.author;
    author.classList.add('text-slate-500', 'text-lg', 'italic');
    let pages = document.createElement('div');
    pages.innerText = book.pages;
    let read = document.createElement('button');
    read.classList.add('bg-slate-700', 'font-black', 'p-2', 'rounded-lg', 'text-slate-50', 'hover:bg-slate-600', 'cursor-pointer');
    read.innerText = book.read
    card.append(title, author, pages, read);
    main.append(card);
}

const deleteElementPrompt = () => {
    const clickmessage = document.getElementById('click-to-add');
    clickmessage.classList.add('hidden');
};