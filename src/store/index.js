import { API, graphqlOperation } from 'aws-amplify';
import { createStore } from 'vuex';
import { listCompetitors, listConnections, listOpportunities } from '../graphql/queries';
import { createCompetitors, createConnections, createOpportunities } from '../graphql/mutations';

export default createStore({
    state: {
        competitors: [],
        opportunities: [],
        connections: []
    },
    mutations: {
        appendCompetitor(state, payload) {
            state.competitors=[...state.competitors, ...payload];
        },
        appendOpportunities(state,payload){
            state.opportunities = [...state.opportunities, ...payload]
        },
        appendConnections(state, payload) {
            state.connections = [...state.connections, ...payload];
        }
    },
    actions: {
        // action to get competitor
        async getCompetitors(state) {
            const response = await API.graphql(graphqlOperation(listCompetitors));
            state.commit("appendCompetitor", response?.data?.listCompetitors?.items);
        },
        // action to add Competitor
        async setCompetitor(state, payload) {
            const response = await API.graphql(graphqlOperation(createCompetitors,{
                input:{ name: payload}
            }));
            state.commit("appendCompetitor", [response?.data?.createCompetitors]);
        },
        // action to get oportunities
        async getOpportunity(state) {
            const response = await API.graphql(graphqlOperation(listOpportunities));
            state.commit("appendOpportunities", response?.data?.listOpportunities?.items)
        },
        async addOportunity(state, payload) {
            const response = await API.graphql(graphqlOperation(createOpportunities,{
                input:{ name: payload}
            }));
            state.commit("appendOpportunities", [response?.data?.createOpportunities]);
        },
        // action to add Connection
        async addConnection(state, payload) {
            const response = await API.graphql(graphqlOperation(createConnections, {
                input: payload,
            }));
            state.commit('appendConnections',[response?.data?.createConnections]);
        },
        // action to get Connections
        async listConnections(state) {
            const response = await API.graphql(graphqlOperation(listConnections));
            state.commit("appendConnections", response?.data?.listConnections?.items)
        }
    },
    modules: {},
    getters: {
        getCompetitors: state => state.competitors,
        getOpportunities: state => state.opportunities,
        getConnections: state => state.connections
    }
});
