<template>
    <div class="header_container">
        <CardHeader text="BUSINESS OPPORTUNITY" />
    </div>
    <div class="form_container">
        <CardForm label="Opportunity name" actionTitle="Add" :action="addOpportunityHandler" />
    </div>
    <div v-if="oportunity?.length>0" class="chip_container">
        <Chip v-for="item in oportunity" v-bind:key="item" :text="item?.name" />
    </div>
</template>
<script>
import CardHeader from '../molecules/CardHeader.vue';
import Chip from '../molecules/Chip.vue';
import CardForm from '../molecules/CardForm.vue';
export default {
        name: 'BussinessOportunity',
        components:{
            CardHeader,
            Chip,
            CardForm
        },
        computed: {
            oportunity() {
                return this.$store.getters.getOpportunities
            }
        },
        mounted() {
            this.$store.dispatch("getOpportunity");
        },
        methods: {
            addOpportunityHandler(oportunity) {
                this.$store.dispatch('addOportunity', oportunity)
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