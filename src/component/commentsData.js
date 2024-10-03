// src/component/commentsData.js

import { faker } from '@faker-js/faker'; // Mengimpor Faker

// Membuat data komentar menggunakan faker
const commentsData = Array.from({ length: 10 }, () => ({
  avatar: faker.image.avatar(), // Menghasilkan avatar acak
  author: faker.name.firstName(), // Menghasilkan nama depan acak
  date: faker.date.recent().toLocaleString(), // Menghasilkan tanggal acak
  text: `The ${faker.commerce.productAdjective()} cooling performance of the Alpenfohn Black Ridge is impressive! ${faker.hacker.phrase()}`, // Kalimat terkait produk
}));

// Mengekspor data komentar agar bisa digunakan di tempat lain
export default commentsData;
