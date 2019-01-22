import { gql } from 'apollo-boost';

const getAllStudentsQuery = gql`
    query getAllStudents {
        allStudents {
            id
            firstName
            lastName
            active
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

const removeStudentMutation = gql`
  mutation removeStudent($id: ID!) {
      removeStudent(id : $id)
  }
`;

const toggleActiveMutation = gql`
  mutation toggleActiveMutation($id: ID!, $active: String!) {
      updateStudent(id: $id, active: $active) {
          id
          active
      }
  }
`;

export {
    getAllStudentsQuery,
    createStudentMutation,
    removeStudentMutation,
    toggleActiveMutation
}