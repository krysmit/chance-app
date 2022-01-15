import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        SavedResume {
          authors
          bookId
          image
          link
          title
          description
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: SavedBookInput) {
    saveBook (input: $input)
    {
      _id
      username
      bookCount
      SavedResume {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      SavedResume {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;