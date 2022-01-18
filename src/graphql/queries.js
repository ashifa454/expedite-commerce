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
export const getOpportunities = /* GraphQL */ `
  query GetOpportunities($id: ID!) {
    getOpportunities(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listOpportunities = /* GraphQL */ `
  query ListOpportunities(
    $filter: ModelOpportunitiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunities(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getConnections = /* GraphQL */ `
  query GetConnections($id: ID!) {
    getConnections(id: $id) {
      id
      c_id
      o_id
      competitor {
        id
        name
        createdAt
        updatedAt
      }
      opportunity {
        id
        name
        createdAt
        updatedAt
      }
      challenge
      strategy
      createdAt
      updatedAt
    }
  }
`;
export const listConnections = /* GraphQL */ `
  query ListConnections(
    $filter: ModelConnectionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        c_id
        o_id
        competitor {
          id
          name
          createdAt
          updatedAt
        }
        opportunity {
          id
          name
          createdAt
          updatedAt
        }
        challenge
        strategy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
