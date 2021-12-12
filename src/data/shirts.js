const shirts = [
  {
    id: 1,
    image:
      process.env.PUBLIC_URL +
      "/assets/images/polo-manga-larga-vestir-nino_id_11-04161-061-M-4.jpg",
    title: "Polo manga larga vestir niño",
    price: 24.99,
    discount: 0.2,
    hasMoreColors: true,
  },
  {
    id: 2,
    image:
      process.env.PUBLIC_URL +
      "/assets/images/polo-manga-larga-print-nino_id_11-04159-031-M-4.jpg",
    title: "Polo manga larga print niño",
    price: 22.99,
    discount: 0,
    hasMoreColors: true,
  },
  {
    id: 3,
    image:
      process.env.PUBLIC_URL +
      "/assets/images/polo-manga-larga-combinado-nino_id_11-04154-066-M-4.jpg",
    title: "Polo manga larga combinado niño",
    price: 22.99,
    discount: 0.1,
    hasMoreColors: true,
  },
  {
    id: 4,
    image:
      process.env.PUBLIC_URL +
      "/assets/images/polo-ecofriends-manga-larga-skate-nino_id_11-04155-071-M-4.jpg",
    title: "Polo ECOFRIENDS manga larga skate niño",
    price: 24.99,
    discount: 0,
    hasMoreColors: false,
  },
  {
    id: 5,
    image:
      process.env.PUBLIC_URL +
      "/assets/images/polo-manga-larga-print-nino_id_11-04159-030-M-4.jpg",
    title: "Polo manga larga print niño",
    price: 22.99,
    discount: 0.3,
    hasMoreColors: true,
  },
  {
    id: 6,
    image:
      process.env.PUBLIC_URL +
      "/assets/images/polo--ecofriends-manga-larga-estampado-nino_id_11-04158-097-M-4.jpg",
    title: "Polo ECOFRIENDS manga larga estampado niño",
    price: 22.99,
    discount: 0,
    hasMoreColors: true,
  },
  {
    id: 7,
    image:
      process.env.PUBLIC_URL +
      "/assets/images/polo-ecofriends-manga-larga-skate-nino_id_11-04155-072-M-4.jpg",
    title: "Polo ECOFRIENDS manga larga skate niño",
    price: 22.99,
    discount: 0,
    hasMoreColors: false,
  },
  {
    id: 8,
    image:
      process.env.PUBLIC_URL +
      "/assets/images/polo-rugby-banda-diagonal--nino_id_11-55121-701-M-4.jpg",
    title: "Polo rugby banda diagonal niño",
    price: 22.99,
    discount: 0.2,
    hasMoreColors: true,
  },
  {
    id: 9,
    image:
      process.env.PUBLIC_URL +
      "/assets/images/polo-ecofriends--manga-larga-nino_id_11-04160-054-M-4.jpg",
    title: "Polo ECOFRIENDS manga larga niño",
    price: 22.99,
    discount: 0,
    hasMoreColors: true,
  },
  {
    id: 10,
    image:
      process.env.PUBLIC_URL +
      "/assets/images/polo-manga-larga-desagujado-blocking-nino_id_11-55125-701-M-4.jpg",
    title: "Polo manga larga desagujado blocking niño",
    price: 24.99,
    discount: 0,
    hasMoreColors: true,
  },
];

export function getShirts() {
  return shirts;
}
