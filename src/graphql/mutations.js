/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompetitors = /* GraphQL */ `
  mutation CreateCompetitors(
    $input: CreateCompetitorsInput!
    $condition: ModelCompetitorsConditionInput
  ) {
    createCompetitors(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCompetitors = /* GraphQL */ `
  mutation UpdateCompetitors(
    $input: UpdateCompetitorsInput!
    $condition: ModelCompetitorsConditionInput
  ) {
    updateCompetitors(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCompetitors = /* GraphQL */ `
  mutation DeleteCompetitors(
    $input: DeleteCompetitorsInput!
    $condition: ModelCompetitorsConditionInput
  ) {
    deleteCompetitors(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createOpportunities = /* GraphQL */ `
  mutation CreateOpportunities(
    $input: CreateOpportunitiesInput!
    $condition: ModelOpportunitiesConditionInput
  ) {
    createOpportunities(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateOpportunities = /* GraphQL */ `
  mutation UpdateOpportunities(
    $input: UpdateOpportunitiesInput!
    $condition: ModelOpportunitiesConditionInput
  ) {
    updateOpportunities(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteOpportunities = /* GraphQL */ `
  mutation DeleteOpportunities(
    $input: DeleteOpportunitiesInput!
    $condition: ModelOpportunitiesConditionInput
  ) {
    deleteOpportunities(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createConnections = /* GraphQL */ `
  mutation CreateConnections(
    $input: CreateConnectionsInput!
    $condition: ModelConnectionsConditionInput
  ) {
    createConnections(input: $input, condition: $condition) {
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
export const updateConnections = /* GraphQL */ `
  mutation UpdateConnections(
    $input: UpdateConnectionsInput!
    $condition: ModelConnectionsConditionInput
  ) {
    updateConnections(input: $input, condition: $condition) {
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
export const deleteConnections = /* GraphQL */ `
  mutation DeleteConnections(
    $input: DeleteConnectionsInput!
    $condition: ModelConnectionsConditionInput
  ) {
    deleteConnections(input: $input, condition: $condition) {
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
