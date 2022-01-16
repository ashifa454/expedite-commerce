<template>
    <form @submit="submitFormHandler">
        <div class="formContainer">
            <Text :msg=label />
                <div class="input_wrapper">
                    <AppInput v-model:value="value" :error="errors.length>0" />
                </div>
                <AppButton type="submit" :title=actionTitle />
        </div>
    </form>
</template>
<script>
import Text from '../atoms/Text.vue';
import AppButton from '../atoms/Button.vue';
import AppInput from '../atoms/Input.vue';
export default {
    name: 'CardForm',
    props: {
        label: String,
        actionTitle: String,
        action: Function,
        name: String
    },
    data() {
        return {
            errors:[],
            value: null
        }
    },
    components:{
        Text,
        AppButton,
        AppInput
    },
    watch:{
        'value': function(){
            this.validateForm();
        }
    },
    methods: {
        validateForm: function() {
            this.errors=[];
            if(!this.value){
                this.errors.push(`${this.name} is Required`);
            }
            return this.errors?.length <1;
        },
        resetForm: function(){
            this.errors=[];
            this.value = null;
        },
        submitFormHandler: function(e) {
            e.preventDefault();
            if(this.validateForm()){
                this.action(this.value);
                this.resetForm();
            }
        }
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