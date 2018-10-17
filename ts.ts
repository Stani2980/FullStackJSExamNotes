interface IBook {
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

let book: IBook = {
    title: "Nice Book",
    author: "Mr Author",
    published: new Date(),
    pages: 2000
}

// This is called "Duck typing", if the object created has the same props as the interface, it will "automatically" be considered a IBook
let book2: IBook = {
    title: "Nice Book",
    author: "Mr Author",
}

function speak(b: IBook) {
    console.log(JSON.stringify(b))
}

// book.author = "test"; // Does not work because author is a `readonly` variable

speak(book);
speak(book2);


class Book implements IBook {
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
    constructor(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }

}

let bookJava = new Book("nice title", "cool author", new Date(), 1000);

console.log(JSON.stringify(bookJava))