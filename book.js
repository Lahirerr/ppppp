const { template } = require('@babel/core')
//your student id, firstname, and lastname here
class Book {
    constructor(isbn,title = 'untitled',ebook = false){
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }

    addAuthor(fn,ln){
    const author = {firstname:fn,lastname:ln}
    this.authors.push(author)
    return this.authors.length
    }
    getFirstAuthor(){
    return this.authors[0]
    }
    getCoAuthors(){
        if(this.authors.length > 1){
            return this.authors.filter((a) => a !== this.authors[0])
        }
            return []
    }
    findAuthor(firstname,lastname){   
       return this.authors.find((a) => a.firstname.toLowerCase() === firstname.toLowerCase() && a.lastname.toLowerCase() === lastname.toLowerCase())
    }
    hasEbook(){
        return this.ebook
    }
}


module.exports = Book
