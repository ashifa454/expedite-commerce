<template>
    <div class="header_container">
        <CardHeader text="COMPETITORS" />
    </div>
    <div class="form_container">
        <CardForm label="Competitor name" actionTitle="Add" :action="addCompetitorHandler" />
    </div>
    <div v-if="competitors?.length>0" class="chip_container">
        <Chip v-for="item in competitors" v-bind:key="item" :text="item?.name" />
    </div>
</template>
<script>
import CardHeader from '../molecules/CardHeader.vue';
import Chip from '../molecules/Chip.vue';
import CardForm from '../molecules/CardForm.vue';
export default {
        name: 'CompetitorCard',
        components:{
            CardHeader,
            Chip,
            CardForm
        },
        computed: {
            competitors(){
                return this.$store.getters.getCompetitors
            }
        },
        mounted() {
            this.$store.dispatch("getCompetitors");
        },
        methods: {
            addCompetitorHandler(competitor) {
                this.$store.dispatch('setCompetitor', competitor)
            }
        }
}
</script>
<style scoped>
    .chip_container{
        display: flex;
        padding: 16px;
        border: 1px solid #404040;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        background-color: #404040;
    }
</style>