const [navList, navAdd, navContact] = document.querySelectorAll('.list-item');
const allBooks = document.querySelector('.allBooks');
const addBook = document.querySelector('.addBook');
const contact = document.querySelector('.contact');
const show = document.querySelector('.show');
const display = document.querySelector('.display-text');

navList.addEventListener('click', () => {
  addBook.classList.add('hidden');
  contact.classList.add('hidden');
  allBooks.classList.remove('hidden');
  show.classList.remove('hidden');
  display.classList.remove('hidden');
});

navAdd.addEventListener('click', () => {
  addBook.classList.remove('hidden');
  allBooks.classList.add('hidden');
  contact.classList.add('hidden');
  show.classList.add('hidden');
  display.classList.add('hidden');
});

navContact.addEventListener('click', () => {
  contact.classList.remove('hidden');
  allBooks.classList.add('hidden');
  show.classList.add('hidden');
  addBook.classList.add('hidden');
  display.classList.add('hidden');
});