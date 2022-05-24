class Book {
  constructor(title, author) {
    (this.title = title), (this.author = author);
  }
}

// the User Interface class
let books;
class UserInterFace {
  static showBooks() {
    books = StoredBooks.getBook(books);
    books.forEach((book) => {
      UserInterFace.showBookList(book);
    });
  }

  static showBookList(book) {
    const display = document.getElementById('display-books');
    const wrapper = document.createElement('div');
    wrapper.className = 'display';
    wrapper.innerHTML = `<p>${book.title} by ${book.author}</p>
  <button type='button' class='btn'>Remove</button>`;

    display.appendChild(wrapper);
  }

  static clearInput() {
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
  }

  static deleteBook(del) {
    if (del.classList.contains('btn')) {
      del.parentElement.remove();
    }
  }
}

// call the books
// document.addEventListener('load', UserInterFace.showBooks);
class StoredBooks {
  static getBook() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = StoredBooks.getBook();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = StoredBooks.getBook();
    const modifiedTitle = title.split(' by')[0];
    books.forEach((book, i) => {
      if (book.title === modifiedTitle) {
        books.splice(i, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new Book(title, author);
  UserInterFace.showBookList(book);
  StoredBooks.addBook(book);
  UserInterFace.clearInput();
});

document.querySelector('#display-books').addEventListener('click', (e) => {
  UserInterFace.deleteBook(e.target);
  StoredBooks.removeBook(e.target.previousElementSibling.textContent);
});
UserInterFace.showBooks();
