const books = [
  {
    id: crypto.randomUUID().toString(),
    name: "GROSS ANATOMY CELL BIOLOGY",
    author: "Dr Selim Reza",
    price: 380,
    discount: 60,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "GROSS ANATOMY CELL BIOLOGY",
    author: "Dr Selim Reza",
    price: 380,
    discount: 60,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "GROSS ANATOMY CELL BIOLOGY",
    author: "Dr Selim Reza",
    price: 380,
    discount: 60,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "GROSS ANATOMY CELL BIOLOGY",
    author: "Dr Selim Reza",
    price: 380,
    discount: 60,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
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
