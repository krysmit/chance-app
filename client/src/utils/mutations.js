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
      }
    }
  }
`;
export const SAVE_RESUME = gql`
  mutation resumeSaved($input: ResumeSaved) {
    resumeSaved (input: $input) {
      username
      email
      education
      pastJobs
      skills
    }
  }
`;
// export const SAVE_JOBS = gql`
//   mutation savedJobs`
