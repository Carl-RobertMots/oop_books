class UI {
    constructor(){
        this.title = document.querySelector("#title")
        this.author = document.querySelector("#author")
        this.isbn = document.querySelector("#isbn")
        this.booklist = document.querySelector("tb")
    }
    addBook(book){
        const tr = document.createElement("tr")
        tr.innerHTML = `<td>${Book.title}</td>
                       <td>${Book.author}</td>
                       <td>${Book.isbn}</td>
                       <td><a href="#">X</a></td>`

        const bookList = document.querySelector("thead")
        bookList.appendChild(tr)
    }
}
