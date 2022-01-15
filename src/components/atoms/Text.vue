<template>
    <span class="text">{{msg}}</span>    
</template>
<script>
export default {
    name: 'Text',
    props: {
        msg:String
    }
}
</script>
<style scoped>
    .text {
        color: #fff;
        font-family: 'Roboto';
        line-height: 20px;
    }
</style>