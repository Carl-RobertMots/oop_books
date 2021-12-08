class UI {
    addBook(book){
        const tr = document.createElement("tr")
        const trContent = `
                       <td>${Book.title}</td>
                       <td>${Book.author}</td>
                       <td>${Book.isbn}</td>
                       <td><a href="#">X</a></td>`
        tr.innerHTML = tr.Content
        const bookList = document.querySelector("tb")
        bookList.appendChild(tr)
    }
}
