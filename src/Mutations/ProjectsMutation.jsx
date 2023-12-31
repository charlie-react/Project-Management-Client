import { gql } from "@apollo/client";

const ADD_PROJECT = gql`

mutation AddProject($name: String!, $description: String!, $status: ProjectStatus!, $clientId: String!) {
  addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
    id
    name
    description
    status
    client {
      id
      name
      email
      phone
    }
  }
}

 
`;

const DELETE_PROJECT = gql`
mutation deleteProject($id:ID!){
  deleteProject(id:$id){
    name
    description
    status
  }
}


`

const UPDATE_PROJECT = gql`
mutation updateProject($id:ID! $name: String!, $description: String!, $status: ProjectStatusUpdate!){
  updateProject(id:$id name:$name,description:$description,status:$status){
    id
    name
    description
    status
    client{
      id
      name
      email
      phone
    }
  }
}

`

export { ADD_PROJECT,DELETE_PROJECT,UPDATE_PROJECT };
