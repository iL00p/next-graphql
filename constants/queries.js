import { gql } from 'apollo-boost';

const getAllStudentsQuery = gql`
    query getAllStudents {
        allStudents {
            id
            firstName
            lastName
        }
    }
`;

const createStudentMutation = gql`
  mutation createStudent($id: ID!, $firstName: String!, $lastName: String!,$active: String!) {
    createStudent(id: $id, firstName: $firstName, lastName: $lastName, active: $active) {
      id
      firstName
      lastName
      active
    }
  }
`;

export {
    getAllStudentsQuery,
    createStudentMutation
}