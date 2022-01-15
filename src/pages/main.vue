<template>
<div class="container">
<div class="card_container">
    <CompetitorCard />
</div>
<div class="card_container">
    <BussinessOportunityCard />
</div>
<div class="card_container">
    <ConnectionCard />
</div>
</div>
</template>
<script>
import ConnectionCard from '../components/organisms/ConnectionCard.vue';
import CompetitorCard from '../components/organisms/CompetitorCard.vue';
import BussinessOportunityCard from '../components/organisms/BussinessOportunityCard.vue';
export default {
    components: {
        ConnectionCard,
        CompetitorCard,
        BussinessOportunityCard
    }
}
</script>
<style scoped>
    .card_container {
        margin-bottom: 20px;
        box-shadow: 1px 1px 15px 0px rgba(0,0,0,0.21);
        -webkit-box-shadow: 1px 1px 15px 0px rgba(0,0,0,0.21);
        -moz-box-shadow: 1px 1px 15px 0px rgba(0,0,0,0.21); 
    }
    .container {
        margin: 54px auto;
        max-width: 680px;
    }
</style>