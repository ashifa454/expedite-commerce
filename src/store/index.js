import { API, graphqlOperation } from 'aws-amplify';
import { createStore } from 'vuex';
import { listCompetitors } from '../graphql/queries';
export default createStore({
    state: {
        competitors: []
    },
    mutations: {
        appendCompetitor(state, payload) {
            state.competitors.push(payload);
        }
    },
    actions: {
        async getCompetitors(state){
            const response = await API.graphql(graphqlOperation(listCompetitors));
            state.commit("appendCompetitor", response?.data?.listCompetitors?.item);
        }
    },
    modules: {},
    getters: {
        getCompetitors: state => state.competitors,
    }
});
