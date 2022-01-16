import { API, graphqlOperation } from 'aws-amplify';
import { createStore } from 'vuex';
import { listCompetitors } from '../graphql/queries';
import { createCompetitors } from '../graphql/mutations';
export default createStore({
    state: {
        competitors: []
    },
    mutations: {
        appendCompetitor(state, payload) {
            state.competitors=[...state.competitors, ...payload];
        }
    },
    actions: {
        async getCompetitors(state){
            const response = await API.graphql(graphqlOperation(listCompetitors));
            state.commit("appendCompetitor", response?.data?.listCompetitors?.items);
        },
        // action to add Competitor
        async setCompetitor(state, payload){
            const response = await API.graphql(graphqlOperation(createCompetitors,{
                input:{ name: payload}
            }));
            state.commit("appendCompetitor", [response?.data?.createCompetitors]);
        }
    },
    modules: {},
    getters: {
        getCompetitors: state => state.competitors,
    }
});
