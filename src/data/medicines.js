const medicines = [
  {
    id: crypto.randomUUID().toString(),
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "NAPA RAPID 500 MG TABLET",
    author: "Dr Selim Reza",
    price: 351,
    discount: 15,
    rating: 5,
    image: "/medicines/medicine-1.png",
    description: "",
  },
  {
    id: crypto.randomUUID().toString(),
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
