
// Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages);
    this.read = read;
};

let hobbit = new Book('Hobbit', 'tolkien', '295', false);
let potter = new Book('Potter', 'mary', '300', false);
let habits = new Book('atomic Habits', 'mary', '300', true);
let myLibrary = [];

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
    main.classList.add('flex-wrap', 'h-10', 'gap-4');
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
    read.classList.add('font-black', 'p-2', 'rounded-lg', 'text-slate-50', 'hover:scale-101', 'cursor-pointer', 'shadow-lg');
    read.innerText = 'ok?'
    if(book.read){
        read.innerText = 'Mark as unread';
        read.classList.add('bg-red-400');
    } else{
        read.innerText = 'Mark as read';
        read.classList.add('bg-green-400');
    }
    card.append(title, author, pages, read);
    main.append(card);
}

const deleteElementPrompt = () => {
    const clickmessage = document.getElementById('click-to-add');
    clickmessage.classList.add('hidden');
};
const toggleForm = () => {
    const bookForm = document.getElementById('form-container');
    if(bookForm.classList.contains('hidden')){
        bookForm.classList.remove('hidden');    
    } else{
        bookForm.classList.add('hidden');
    }
};

const addBook = () => {
    const addButton = document.getElementById('btn');
    
    addButton.addEventListener('click', () =>{
        toggleForm();
        console.log('yes');
    })
}


addBook();
displayLibrary(myLibrary);