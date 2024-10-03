// src/component/commentsData.js

// Data komentar
const commentsData = [
  {
    avatar: './images/matt.jpg',
    author: 'Matt',
    date: 'Today at 5:42PM',
    text: 'How artistic!',
  },
  {
    avatar: './images/elliot.jpg',
    author: 'Elliot Fu',
    date: 'Yesterday at 12:30AM',
    text: 'This has been very useful for my research. Thanks as well!',
    subComments: [
      {
        avatar: './images/jenny.jpg',
        author: 'Jenny Hess',
        date: 'Just now',
        text: 'Elliot you are always so right :)',
      },
    ],
  },
  {
    avatar: './images/joe.jpg',
    author: 'Joe Henderson',
    date: '5 days ago',
    text: 'Dude, this is awesome. Thanks so much',
  },
  {
    avatar: '/images/avatar/small/Raha.jpg',
    author: 'Rahadian',
    date: '4 days ago',
    text: 'Good Game',
  },
];

// Mengekspor data komentar agar bisa digunakan di tempat lain
export default commentsData;
