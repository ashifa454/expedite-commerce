<template>
    <div class="header_container">
        <CardHeader text="CONNECTION" />
    </div>
    <div class="form_container">
        <ConnectionForm />
    </div>
    <div class="connection_container">
        <Connection from="Apple" to="Tesla" challenge="TEST" strategy="TEST" />
    </div>
</template>
<script>
import CardHeader from '../molecules/CardHeader.vue';
import ConnectionForm from '../molecules/ConnectionForm.vue';
import Connection from '../molecules/Connection.vue';
export default {
        name: 'ConnectionCard',
        components:{
            CardHeader,
            ConnectionForm,
            Connection
        }
}
</script>
<style scoped>
    .connection_container{
        padding: 16px;
        border: 1px solid #404040;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        background-color: #404040;
    }
</style>