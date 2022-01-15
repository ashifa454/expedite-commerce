<template>
    <div class="input_container">
        <div v-if="label" class="label">
            <Text :msg=label />
        </div>
        <input :placeholder=placeholder />
    </div>
</template>
<script>
import Text from './Text.vue';
export default {
    name: 'AppInput',
    components: {
        Text
    },
    props:{
        label: String,
        placeholder: String
    }
}
</script>
<style scoped>
input {
    width: -webkit-fill-available;
    height: 32px;
    border: 1px solid #5f5f5f;
    padding: 0px 8px;
    color: #ffffff;
    text-decoration: none solid rgb(255, 255, 255);
    font-size: 13px;
    background-color: #404040;
}
.label{
    padding-bottom: 4px;
}
 input:focus, textarea:focus, select:focus{
        outline: none;
    }
</style>