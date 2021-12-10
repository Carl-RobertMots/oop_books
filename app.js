//app object
const ui = new UI()
const ls = new LS()

// user input form
const form = document.querySelector("#book-form")
form.addEventListener("submit", addBook)

// Page reload
document.addEventListener("DOMContentLoaded", getBooks)

function getBooks(){
    const books = ls.getData("books")
    books.forEach(function (booksFromLS){
        ui.addBook(booksFromLS)
    })
}

// addTask(book) function
function addBook(event) {
    const title = ui.title.value
    const author = ui.author.value
    const isbn = ui.isbn.value
    //create book object with user data
    const book = new Book(title, author, isbn)
    console.log(book)
    // add book data to ui and show it
    ui.addBook(book)
    // save book data to local storage
    ls.addBook(book)
    //clear form input value
    ui.title.value =""
    ui.author.value =""
    ui.isbn.value =""
    event.preventDefault()
}

// books table click event
const deleteBtn = document.querySelector("#book-list")
deleteBtn.addEventListener("click", delBook)

function delBook(event) {
    if(event.target.textContent === "X") {
            const book = ui.getBook(event.target)
            if(ui.delBook(event.target) === true){
                ls.delBook(book)
            }

            //removeBook(book)

        }

}