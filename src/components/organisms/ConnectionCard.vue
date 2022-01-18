<template>
    <div class="header_container">
        <CardHeader text="CONNECTION" />
    </div>
    <div class="form_container">
        <ConnectionForm :opportunities=oportunities :competitors=competitors :action="addConnection" />
    </div>
    <div v-if="connections?.length>0" class="connection_container">
        <Connection v-for="item in connections" v-bind:key="item" :from="item?.competitor?.name" :to="item?.opportunity?.name" :challenge="item?.challenge" :strategy="item?.strategy" />
    </div>
</template>
<script>
import CardHeader from '../molecules/CardHeader.vue';
import ConnectionForm from '../molecules/ConnectionForm.vue';
import Connection from '../molecules/Connection.vue';
export default {
        name: 'ConnectionCard',
        computed: {
            competitors() {
                return this.$store.getters.getCompetitors
            },
             oportunities() {
                return this.$store.getters.getOpportunities
            },
            connections() {
                return this.$store.getters.getConnections
            }
        },
        methods: { 
            addConnection(connection){
                this.$store.dispatch('addConnection', connection)
            }
        },
        mounted() {
            this.$store.dispatch("listConnections");
        },
        components:{
            CardHeader,
            ConnectionForm,
            Connection
        }
}
</script>
<style scoped>
    .connection_container{
        background-color: #404040;
    }
</style>