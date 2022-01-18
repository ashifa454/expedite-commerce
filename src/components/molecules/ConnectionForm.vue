<template>
    <form @submit="submitFormHandler">
    <div class="form_container">
        <div class="row">
            <div class="col">
                <Dropdown v-model:value="competitor" :error="errors?.competitor?.length>0" label="Competitor" title="Choose Competitor" :options=competitors />
            </div>
            <div class="col">
                <Dropdown v-model:value="opportunity" :error="errors?.opportunity?.length>0" label="Opportunity" title="Choose Opportunity" :options=opportunities />
            </div>
        </div>
        <div class="row input_wrapper">
            <div class="col">
                <Input v-model:value="challenge" :error="errors?.challenge?.length>0" label="Challenge" placeholder="Challenge Description..." />
            </div>
            <div class="col">
                <Input v-model:value="stratergy" :error="errors?.stratergy?.length>0" label="Strategy" placeholder="Strategy Description..." />
            </div>
        </div>
        <div class="row action_wrapper">
            <Button type="submit" title="Connect" />
        </div>
    </div>
    </form>
</template>
<script>
import Dropdown from '../atoms/Dropdown.vue';
import Input from '../atoms/Input.vue';
import Button from '../atoms/Button.vue';
import { CONNECTION_FORM_FIELDS } from '../../constants';
export default {
    name: 'ConnectionForm',
    props: {
        competitors: Array,
        opportunities: Array,
        action: Function,
    },
    components: {
        Dropdown,
        Input,
        Button
    },
    data() {
        return {
            errors: {},
            [CONNECTION_FORM_FIELDS.stratergy]: null,
            [CONNECTION_FORM_FIELDS.opportunity]: null,
            [CONNECTION_FORM_FIELDS.challenge]: null,
            [CONNECTION_FORM_FIELDS.competitor]: null
        }
    },
     watch:{
        [CONNECTION_FORM_FIELDS.stratergy]: function(){
            this.validateForm(CONNECTION_FORM_FIELDS.stratergy);
        },
        [CONNECTION_FORM_FIELDS.challenge]: function(){
            this.validateForm(CONNECTION_FORM_FIELDS.challenge);
        },
        [CONNECTION_FORM_FIELDS.competitor]: function(){
            this.validateForm(CONNECTION_FORM_FIELDS.competitor);
        },
        [CONNECTION_FORM_FIELDS.opportunity]: function(){
            this.validateForm(CONNECTION_FORM_FIELDS.opportunity);
        }
    },
    methods: {
         validateForm: function(target) {
            if(target) {
                if(Object.keys(this.errors)?.length<1)
                    this.errors = {};
                    
                if(!this[target]) {
                    if(!this.errors[target])
                        this.errors[target] = [];
                    this.errors[target].push(`${CONNECTION_FORM_FIELDS[target]} is Required`);
                } else {
                        this.errors[target] = [];
                }
                return this.errors[target]?.length<1;
            } else {
              this.errors = {};
              Object.keys(CONNECTION_FORM_FIELDS).forEach((item)=>{
                if(!this[item]) {
                    if(!this.errors[item])
                    this.errors[item] = [];

                    this.errors[item].push(`${CONNECTION_FORM_FIELDS[item]} is Required`);
                    }
                })
                return Object.keys(this.errors)?.length <1;
            }
        },
        resetForm: function(){
            this.errors={};
            this[CONNECTION_FORM_FIELDS.competitor]=null;
            this[CONNECTION_FORM_FIELDS.opportunity]=null;
            this[CONNECTION_FORM_FIELDS.challenge]=null;
            this[CONNECTION_FORM_FIELDS.stratergy]=null;
        },
        submitFormHandler: function(e) {
            e.preventDefault();
            if(this.validateForm()) {
                this.action({
                    c_id: this[CONNECTION_FORM_FIELDS.competitor],
                    o_id: this[CONNECTION_FORM_FIELDS.opportunity],
                    challenge: this[CONNECTION_FORM_FIELDS.challenge],
                    strategy: this[CONNECTION_FORM_FIELDS.stratergy]
                });
                this.resetForm();
            }
        }
    }
}
</script>
<style scoped>
.input_wrapper {
    padding-top: 24px;
}
.form_container {
    background-color: #404040;
    border: 1px solid #404040;
    padding: 16px;
}
.action_wrapper {
    justify-content: end;
    padding: 16px 0;
}
</style>