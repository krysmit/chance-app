import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

// const SavedResume = () => {
//   const { loading, data } = useQuery(GET_ME);
//   const userData = data?.me || [];

//   // use this to determine if `useEffect()` hook needs to run again
//   const [removeBook, {error}] = useMutation(REMOVE_BOOK);

//   // create function that accepts the book's mongo _id value as param and deletes the book from the database
//   const handleDeleteBook = async (bookId) => {
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const response = await removeBook({
//         variables: {bookId: bookId}
//       });

//       if (!response) {
//         throw new Error('something went wrong!');
//       }

//       // upon success, remove book's id from localStorage
//       removeBookId(bookId);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // if data isn't here yet, say so
//   if (!loading) {
//     return <h2>LOADING...</h2>;
//   }

//   // const savedBookIds = userData.SavedResume.map((book) => book.bookId);
//   // saveBookIds(savedBookIds)

//   return (
//     <>
//       <Jumbotron fluid className='text-light bg-dark'>
//         <Container>
//           <h1>Viewing saved books!</h1>
//         </Container>
//       </Jumbotron>
//       <Container>
//         <h2>
//           {userData.SavedResume.length
//             ? `Viewing ${userData.SavedResume.length} saved ${userData.SavedResume.length === 1 ? 'book' : 'books'}:`
//             : 'You have no saved books!'}
//         </h2>
//         <CardColumns>
//           {userData.SavedResume.map((book) => {
//             return (
//               <Card key={book.bookId} border='dark'>
//                 {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
//                 <Card.Body>
//                   <Card.Title>{book.title}</Card.Title>
//                   <p className='small'>Authors: {book.authors}</p>
//                   <Card.Text>{book.description}</Card.Text>
//                   <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
//                     Delete this Book!
//                   </Button>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };

// export default SavedResume;
