<template>
    <div class="header_container">
        <CardHeader text="BUSINESS OPPORTUNITY" />
    </div>
    <div class="form_container">
        <CardForm label="Opportunity name" actionTitle="Add" />
    </div>
    <div class="chip_container">
        <Chip text="Apple" />
        <Chip text="Apple" />
        <Chip text="Apple" />
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