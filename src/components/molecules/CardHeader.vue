<template>
    <div class="card_header">
        <Text :msg=text />
    </div>
</template>
<script>
import Text from '../atoms/Text.vue';
export default {
    name:'CardHeader',
    components:{
        Text
    },
    props: {
        text: String
    }
}
</script>
<style scoped>
.card_header {
    background-color: #575757;
    padding: 1em 1.5em;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 1px solid #333333;
}
</style>