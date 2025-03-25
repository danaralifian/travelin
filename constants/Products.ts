export const data = [
  {
    id: "1",
    title: "Open Trip Pulau Komodo",
    destination: "Labuan Bajo, Indonesia",
    duration: "3 Hari 2 Malam",
    departure_date: "2025-04-10",
    price: 3500000,
    currency: "IDR",
    rating: 4.8,
    reviews_count: 120,
    image_url: "https://example.com/images/pulau-komodo.jpg",
    gallery: [
      "https://example.com/images/komodo1.jpg",
      "https://example.com/images/komodo2.jpg",
      "https://example.com/images/komodo3.jpg",
    ],
    facilities: [
      "Transportasi",
      "Makan 3x sehari",
      "Guide wisata",
      "Penginapan",
    ],
    meeting_point: "Bandara Komodo, Labuan Bajo",
    quota: {
      available: 8,
      min_pax: 5,
      max_pax: 15,
    },
    packages: [
      {
        name: "Standard",
        price: 3500000,
        include: [
          "Transportasi selama tour",
          "Makan 3x sehari",
          "Penginapan 2 malam",
          "Tiket masuk destinasi wisata",
        ],
        exclude: [
          "Tiket pesawat ke Labuan Bajo",
          "Asuransi perjalanan",
          "Pengeluaran pribadi",
        ],
      },
    ],
    terms_conditions: [
      "Minimal peserta 5 orang.",
      "Pembatalan H-7 kena biaya 50%, H-3 tidak bisa refund.",
    ],
    reviews: [
      {
        user: "Andi",
        rating: 5,
        comment: "Luar biasa! Guide sangat informatif.",
      },
    ],
  },
  {
    id: "2",
    title: "Open Trip Bromo Sunrise",
    destination: "Gunung Bromo, Indonesia",
    duration: "2 Hari 1 Malam",
    departure_date: "2025-05-01",
    price: 1200000,
    currency: "IDR",
    rating: 4.7,
    reviews_count: 85,
    image_url: "https://example.com/images/bromo-sunrise.jpg",
    gallery: [
      "https://example.com/images/bromo1.jpg",
      "https://example.com/images/bromo2.jpg",
      "https://example.com/images/bromo3.jpg",
    ],
    facilities: ["Jeep Bromo", "Makan 2x", "Guide wisata"],
    meeting_point: "Stasiun Malang",
    quota: {
      available: 10,
      min_pax: 4,
      max_pax: 20,
    },
    packages: [
      {
        name: "Standard",
        price: 1200000,
        include: ["Jeep Bromo", "Makan 2x", "Tiket masuk Taman Nasional Bromo"],
        exclude: ["Transportasi ke Malang", "Sewa kuda", "Pengeluaran pribadi"],
      },
    ],
    terms_conditions: [
      "Minimal peserta 4 orang.",
      "Pembatalan H-5 kena biaya 30%, H-2 tidak bisa refund.",
    ],
    reviews: [{ user: "Rina", rating: 5, comment: "Sunrise magis!" }],
  },
  {
    id: "3",
    title: "Open Trip Raja Ampat",
    destination: "Papua Barat, Indonesia",
    duration: "5 Hari 4 Malam",
    departure_date: "2025-06-15",
    price: 7500000,
    currency: "IDR",
    rating: 4.9,
    reviews_count: 60,
    image_url: "https://example.com/images/raja-ampat.jpg",
    gallery: [
      "https://example.com/images/raja-ampat1.jpg",
      "https://example.com/images/raja-ampat2.jpg",
      "https://example.com/images/raja-ampat3.jpg",
    ],
    facilities: ["Boat Tour", "Penginapan", "Makan 3x sehari"],
    meeting_point: "Bandara Domine Eduard Osok, Sorong",
    quota: {
      available: 6,
      min_pax: 4,
      max_pax: 12,
    },
    packages: [
      {
        name: "Standard",
        price: 7500000,
        include: [
          "Transportasi selama tour",
          "Makan 3x sehari",
          "Penginapan 4 malam",
        ],
        exclude: ["Tiket pesawat ke Sorong", "Pengeluaran pribadi"],
      },
    ],
    terms_conditions: [
      "Minimal peserta 4 orang.",
      "Pembatalan H-10 kena biaya 50%, H-5 tidak bisa refund.",
    ],
    reviews: [
      {
        user: "Eka",
        rating: 5,
        comment: "Surga dunia! Air lautnya jernih sekali.",
      },
    ],
  },
  {
    id: "4",
    title: "Open Trip Dieng Culture Festival",
    destination: "Dieng, Jawa Tengah",
    duration: "3 Hari 2 Malam",
    departure_date: "2025-07-10",
    price: 1500000,
    currency: "IDR",
    rating: 4.6,
    reviews_count: 40,
    image_url: "https://example.com/images/dieng-festival.jpg",
    gallery: [
      "https://example.com/images/dieng1.jpg",
      "https://example.com/images/dieng2.jpg",
      "https://example.com/images/dieng3.jpg",
    ],
    facilities: ["Tiket festival", "Camping gear", "Makan 3x sehari"],
    meeting_point: "Terminal Mendolo, Wonosobo",
    quota: {
      available: 15,
      min_pax: 6,
      max_pax: 25,
    },
    packages: [
      {
        name: "Standard",
        price: 1500000,
        include: ["Tiket Festival", "Camping Gear", "Makan 3x sehari"],
        exclude: ["Transportasi ke Wonosobo", "Pengeluaran pribadi"],
      },
    ],
    terms_conditions: [
      "Minimal peserta 6 orang.",
      "Tidak ada refund setelah H-5.",
    ],
    reviews: [
      {
        user: "Budi",
        rating: 4.5,
        comment: "Festival keren! Tapi malamnya sangat dingin.",
      },
    ],
  },
  {
    id: "5",
    title: "Open Trip Pulau Derawan",
    destination: "Kalimantan Timur, Indonesia",
    duration: "4 Hari 3 Malam",
    departure_date: "2025-08-05",
    price: 4800000,
    currency: "IDR",
    rating: 4.9,
    reviews_count: 75,
    image_url: "https://example.com/images/pulau-derawan.jpg",
    gallery: [
      "https://example.com/images/derawan1.jpg",
      "https://example.com/images/derawan2.jpg",
      "https://example.com/images/derawan3.jpg",
    ],
    facilities: ["Snorkeling", "Makan 3x sehari", "Penginapan"],
    meeting_point: "Bandara Kalimarau, Berau",
    quota: {
      available: 10,
      min_pax: 5,
      max_pax: 18,
    },
    packages: [
      {
        name: "Standard",
        price: 4800000,
        include: ["Snorkeling", "Makan 3x sehari", "Penginapan 3 malam"],
        exclude: ["Tiket pesawat ke Berau", "Pengeluaran pribadi"],
      },
    ],
    terms_conditions: [
      "Minimal peserta 5 orang.",
      "Tidak ada refund setelah H-7.",
    ],
    reviews: [
      {
        user: "Citra",
        rating: 5,
        comment: "Turtles everywhere! Worth every penny.",
      },
    ],
  },
];
