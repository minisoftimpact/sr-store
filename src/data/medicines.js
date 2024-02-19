const medicines = [
  {
    id: 1,
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: 2,
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: 3,
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: 4,
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: 5,
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: 6,
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: 7,
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: 8,
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
];

function getMedicines(limit) {
  const allMedicines = [...medicines];

  if (limit) {
    allMedicines.length = limit;
  }

  return allMedicines;
}

export { getMedicines };
