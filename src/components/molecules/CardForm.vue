<template>
    <div class="formContainer">
        <Text :msg=label />
        <div class="input_wrapper">
            <AppInput />
        </div>
        <AppButton :title=actionTitle />
    </div>
</template>
<script>
import Text from '../atoms/Text.vue';
import AppButton from '../atoms/Button.vue';
import AppInput from '../atoms/Input.vue';
export default {
    name: 'CardForm',
    props: {
        label: String,
        actionTitle: String
    },
    components:{
        Text,
        AppButton,
        AppInput
    }
}
</script>
<style scoped>
.input_wrapper {
    flex: 1;
    text-align: right;
    margin:0px 10px 0px 16px;
}
    .formContainer {
        display: flex;
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #333333;
        background-color: #404040;
    }
</style>