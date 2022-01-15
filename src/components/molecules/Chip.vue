<template>
    <div class="chip_item">
        <Text :msg=text />
    </div>
</template>
<script>
import Text from '../atoms/Text.vue';
export default {
    name: 'Chip',
    components:{
        Text
    },
    props: {
        text: String
    }
}
</script>
<style scoped>
    .chip_item {
        font-size: 13px;
        font-family: Roboto;
        background-color: #333333;
        border-radius: 3px;
        text-decoration: none solid rgb(255, 255, 255);
        color: #ffffff;
        max-width: 100%;
        padding: 14px;
    }
</style>