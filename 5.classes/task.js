class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else{
            this._state = value;
        }
    }

    fix() {
        this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const found = this.books.find(book => book[type] === value);
        return found || null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index === -1) {
            return null;
        }
        return this.books.splice(index, 1)[0];
    }
}

// Тестовые сценарии

const library = new Library("Библиотека");

library.addBook(new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
));

library.addBook(new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
));

library.addBook(new Magazine(
  "Мурзилка",
  1924,
  60
));

let newBook = library.findBookBy("releaseDate", 1919);
if (!newBook) {
    newBook = new FantasticBook("Иван Иванов", "Фантастическая книга", 1919, 100);
    library.addBook(newBook)
}
console.log(newBook);

console.log("Количество книг до выдачи: " + library.books.length);

let givenBook = library.giveBookByName("Пикник на обочине");
console.log("Количество книг после выдачи:" + library.books.length);

givenBook.state = 40;
console.log("Состояние книги после повреждения:" + givenBook.state);

givenBook.fix();
console.log("Состояние книги после починки:" + givenBook.state);

library.addBook(givenBook);
console.log("Количество книг после возврата:" + library.books.length);