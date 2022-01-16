/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompetitors = /* GraphQL */ `
  query GetCompetitors($id: ID!) {
    getCompetitors(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCompetitors = /* GraphQL */ `
  query ListCompetitors(
    $filter: ModelCompetitorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompetitors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
