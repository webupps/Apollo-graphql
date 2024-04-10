const books = [
    {
      id: 1,
      title: 'The Awakening',
      author: 1,
      comments: [1]
    },
    {
      id: 2,
      title: 'City of Glass',
      author: 'Paul Auster',
      comments: [2]
    },
  ];

  const writers = [
    {
      id: 1,
      name: 'Kate Chopin',
      email: 'kchopin@email.com',
      book: [1]
    },
    {
      id: 2,
      name: 'Paul Auster',
      email: 'pauster@email.com',
      book: [2]
    },
  ];

  const comments = [
    {
      id: 1,
      content: 'This book is awesome to read.',
      book: 1
    },
    {
      id: 2,
      content: 'This book is a must book to read.',
      book: 2
    },
  ];

  
  export default { books, writers, comments }