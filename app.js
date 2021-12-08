//app object
const ui = new UI()

// user input form
const form = document.querySelector("form")
form.addEventListener("submit", addBook)

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

    //clear form input value
    ui.title.value =""
    ui.author.value =""
    ui.isbn.value =""
    event.preventDefault()
}

