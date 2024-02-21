const products = [
  {
    id: crypto.randomUUID().toString(),
    category: "books",
    name: "Gross Anatomy Cell Biology and Histology With Colour Atlas",
    author: "Dr Selim Reza",
    price: 1600,
    discount: 200,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
    specifications: {
      author: "Dr. Selim Reza",
      publisher: "Mediaplex",
      edition: "2nd Printed, 2015",
      numberOfPages: 413,
      country: "Bangladesh",
      language: "English",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "books",
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description:
      "The awesome approach of the book will help you to understand the basic three subjects of medical science. Let start the study of the hard but important subjects of medical science with confidence with my book! Be relax and enjoy learning. I welcome comments, criticisms and suggestions from my readers and respected teachers for further improvement of this student friendly book.",
    specifications: {
      author: "Dr. Selim Reza",
      publisher: "Mediaplex",
      edition: "Revised Seventh Edition, 2021",
      numberOfPages: 619,
      country: "Bangladesh",
      language: "English",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "books",
    name: "Gross Anatomy Cell Biology and Histology With Colour Atlas",
    author: "Dr Selim Reza",
    price: 1600,
    discount: 200,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
    specifications: {
      author: "Dr. Selim Reza",
      publisher: "Mediaplex",
      edition: "2nd Printed, 2015",
      numberOfPages: 413,
      country: "Bangladesh",
      language: "English",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "books",
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description:
      "The awesome approach of the book will help you to understand the basic three subjects of medical science. Let start the study of the hard but important subjects of medical science with confidence with my book! Be relax and enjoy learning. I welcome comments, criticisms and suggestions from my readers and respected teachers for further improvement of this student friendly book.",
    specifications: {
      author: "Dr. Selim Reza",
      publisher: "Mediaplex",
      edition: "Revised Seventh Edition, 2021",
      numberOfPages: 619,
      country: "Bangladesh",
      language: "English",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "books",
    name: "Gross Anatomy Cell Biology and Histology With Colour Atlas",
    author: "Dr Selim Reza",
    price: 1600,
    discount: 200,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
    specifications: {
      author: "Dr. Selim Reza",
      publisher: "Mediaplex",
      edition: "2nd Printed, 2015",
      numberOfPages: 413,
      country: "Bangladesh",
      language: "English",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "books",
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description:
      "The awesome approach of the book will help you to understand the basic three subjects of medical science. Let start the study of the hard but important subjects of medical science with confidence with my book! Be relax and enjoy learning. I welcome comments, criticisms and suggestions from my readers and respected teachers for further improvement of this student friendly book.",
    specifications: {
      author: "Dr. Selim Reza",
      publisher: "Mediaplex",
      edition: "Revised Seventh Edition, 2021",
      numberOfPages: 619,
      country: "Bangladesh",
      language: "English",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "books",
    name: "Gross Anatomy Cell Biology and Histology With Colour Atlas",
    author: "Dr Selim Reza",
    price: 1600,
    discount: 200,
    rating: 5,
    image: "/books/book-1.png",
    description: "",
    specifications: {
      author: "Dr. Selim Reza",
      publisher: "Mediaplex",
      edition: "2nd Printed, 2015",
      numberOfPages: 413,
      country: "Bangladesh",
      language: "English",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "books",
    name: "SELIM'S MATS 1 FOR 1ST YEAR MATS STUDENTS",
    author: "Dr Selim Reza",
    price: 1200,
    discount: 400,
    rating: 5,
    image: "/books/book-2.png",
    description:
      "The awesome approach of the book will help you to understand the basic three subjects of medical science. Let start the study of the hard but important subjects of medical science with confidence with my book! Be relax and enjoy learning. I welcome comments, criticisms and suggestions from my readers and respected teachers for further improvement of this student friendly book.",
    specifications: {
      author: "Dr. Selim Reza",
      publisher: "Mediaplex",
      edition: "Revised Seventh Edition, 2021",
      numberOfPages: 619,
      country: "Bangladesh",
      language: "English",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "medicines",
    name: "NAPA RAPID 500 MG TABLET",
    author: "Beximco Pharmaceuticals Ltd.",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
    specifications: {
      numberOfTablet: 270,
      generic: "Paracetamol",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "medicines",
    name: "NAPA RAPID 500 MG TABLET",
    author: "Beximco Pharmaceuticals Ltd.",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
    specifications: {
      numberOfTablet: 270,
      generic: "Paracetamol",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "medicines",
    name: "NAPA RAPID 500 MG TABLET",
    author: "Beximco Pharmaceuticals Ltd.",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
    specifications: {
      numberOfTablet: 270,
      generic: "Paracetamol",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "medicines",
    name: "NAPA RAPID 500 MG TABLET",
    author: "Beximco Pharmaceuticals Ltd.",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
    specifications: {
      numberOfTablet: 270,
      generic: "Paracetamol",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "medicines",
    name: "NAPA RAPID 500 MG TABLET",
    author: "Beximco Pharmaceuticals Ltd.",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
    specifications: {
      numberOfTablet: 270,
      generic: "Paracetamol",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "medicines",
    name: "NAPA RAPID 500 MG TABLET",
    author: "Beximco Pharmaceuticals Ltd.",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
    specifications: {
      numberOfTablet: 270,
      generic: "Paracetamol",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "medicines",
    name: "NAPA RAPID 500 MG TABLET",
    author: "Beximco Pharmaceuticals Ltd.",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
    specifications: {
      numberOfTablet: 270,
      generic: "Paracetamol",
    },
  },
  {
    id: crypto.randomUUID().toString(),
    category: "medicines",
    name: "NAPA RAPID 500 MG TABLET",
    author: "Beximco Pharmaceuticals Ltd.",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
    specifications: {
      numberOfTablet: 270,
      generic: "Paracetamol",
    },
  },
];

function getBooks(limit) {
  return getProducts("books", limit);
}

function getMedicines(limit) {
  return getProducts("medicines", limit);
}

function getProduct(productId) {
  const selectedProduct = products.find((product) => product.id === productId);

  return selectedProduct;
}

function getProducts(category = null, limit = null) {
  const allProducts = products.filter((product) => {
    return category ? product.category === category : true;
  });

  if (limit) {
    allProducts.length = limit;
  }

  return allProducts;
}

export { getBooks, getMedicines, getProduct, getProducts };
