
// Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages);
    this.read = read;
};


 let myLibrary = [];


function addToLibrary(bookObject){
    myLibrary.push(bookObject);
};

function displayLibrary(library){
    if(library.length != 0){
    }
     const main = document.getElementById('main');
     main.classList.add('gap-4');
     while (main.firstChild) {
         main.firstChild.remove();
       }
    library.forEach(book => {
        createCards(book);
    });
};
const createCards = (book) => {
    let card = document.createElement('div');
    card.classList.add('rounded', 'shadow-lg', 'p-3', 'border-l-8', 'border-l-slate-500', 'flex', 'flex-col', 'gap-1', 'h-10');
    let title = document.createElement('div');
    title.innerText = book.title;
    title.classList.add('text-3xl', 'font-black');
    let author = document.createElement('div');
    author.innerText = book.author;
    author.classList.add('text-slate-500', 'text-lg', 'italic');
    let pages = document.createElement('div');
    pages.innerText = `${book.pages} pages`;
    let read = document.createElement('button');
    read.classList.add('font-black', 'p-2', 'rounded-lg', 'text-slate-50', 'cursor-pointer', 'shadow-lg');
    let del = document.createElement('button');
    del.classList.add('font-white', 'p-2', 'rounded-lg', 'bg-slate-700', 'text-slate-50', 'cursor-pointer', 'shadow-lg');
    del.innerText = 'Remove from library'
    if(book.read){
        read.innerText = 'Mark as unread';
        read.classList.add('bg-red-500');
    } else{
        read.innerText = 'Mark as read';
        read.classList.add('bg-green-500');
    }
    card.dataset.read = myLibrary.indexOf(book);
    del.addEventListener('click', () => {
        removeFromLibrary(myLibrary, card.dataset.read)
    })
    read.addEventListener('click', () => {
        if(book.read == false){
            read.innerText = 'Mark as unread';
            read.classList.remove('bg-red-500');
            read.classList.add('bg-red-500');
            book.read = true;
        } else {
            read.innerText = 'Mark as read';
            read.classList.remove('bg-red-500');
            read.classList.add('bg-green-500');
            book.read = false
        }
    })
    card.append(title, author, pages, read, del);
    main.append(card);
}
const removeFromLibrary = (library, index) =>{
    console.log(library[index])
    delete library[index];
    displayLibrary(myLibrary);
}
const toggleForm = () => {
    const bookForm = document.getElementById('form-container');
    bookForm.reset()
    if(bookForm.classList.contains('hidden')){
        bookForm.classList.remove('hidden');     
    } else{
        bookForm.classList.add('hidden');
    }
};
const addButton = document.getElementById('btn');
addButton.addEventListener('click', () =>{
    toggleForm();
});


const addBook = () => {
        let bookTitle = document.getElementById('title').value;
        let bookAuthor = document.getElementById('author').value;
        let bookPages = document.getElementById('pages').value;
        let readValue = document.querySelector('input[name="read-status"]:checked').value;
        if (readValue == 'true'){
            readValue = true
        } else {readValue = false}
        let individualBook = new Book(bookTitle, bookAuthor, bookPages, readValue);
        myLibrary.push(individualBook);
        displayLibrary(myLibrary);
        toggleForm()
    }

const addToLibraryBtn = document.getElementById('add-to-library');
addToLibraryBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    addBook();
})


