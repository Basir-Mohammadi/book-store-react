const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
// export const appId = async () => {
//   const response = await fetch(`${API_URL}/apps/`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   const id = response.text().then((data) => {
//     if (response.status === 201) {
//       localStorage.setItem('book-store-react', data);
//     }
//     return data;
//   })
//     .catch((err) => err);
//   return id;
// };

// App ID
// export const fetchAppId = () => {
//   const key = localStorage.getItem('book-store-react');
//   if (key === null) {
//     appId();
//     const newKey = localStorage.getItem('book-store-react');
//     return newKey;
//   }
//   return key;
// };
// app id from the local storage
const appId = '6QokoJSAh5dHBW2fXVma';
export const getBooks = async () => {
  // const id = fetchAppId();
  const response = await fetch(`${API_URL}/apps/${appId}/books`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const bookList = [];
  const books = await response.json().then((data) => data)
    .catch((err) => { console.log('Error', err); });
  Object.keys(books).forEach((book) => {
    books[book][0].id = book;
    bookList.push(books[book][0]);
  });
  return bookList;
};

export const postBook = async (bookdetails) => {
  // const id = fetchAppId();
  const response = await fetch(`${API_URL}/apps/${appId}/books`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookdetails),
    });
  const book = await response.text().then((data) => data).catch((err) => { console.log('Error', err); });
  await getBooks();
  return book;
};

export const deleteBook = async (bookId) => {
  // const id = fetchAppId();
  const response = await fetch(`${API_URL}/apps/${appId}/books/${bookId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  await response.json();
  // await getBooks();
  return bookId;
};
