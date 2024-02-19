const books = [
  {
    id: 1,
    name: "GROSS ANATOMY CELL BIOLOGY",
    author: "Dr Selim Reza",
    price: 380,
    discount: 60,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
  },
  {
    id: 2,
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description: "",
  },
  {
    id: 3,
    name: "GROSS ANATOMY CELL BIOLOGY",
    author: "Dr Selim Reza",
    price: 380,
    discount: 60,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
  },
  {
    id: 4,
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description: "",
  },
  {
    id: 5,
    name: "GROSS ANATOMY CELL BIOLOGY",
    author: "Dr Selim Reza",
    price: 380,
    discount: 60,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
  },
  {
    id: 6,
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description: "",
  },
  {
    id: 7,
    name: "GROSS ANATOMY CELL BIOLOGY",
    author: "Dr Selim Reza",
    price: 380,
    discount: 60,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
  },
  {
    id: 8,
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description: "",
  },
];

function getBooks(limit) {
  const allBooks = [...books];

  if (limit) {
    allBooks.length = limit;
  }

  return allBooks;
}

export { getBooks };
