<template>
    <div class="form_container">
        <div class="row">
            <div class="col">
            <Dropdown label="Competitor" title="Choose Competitor" />
            </div>
                        <div class="col">
            <Dropdown label="Opportunity" title="Choose Opportunity" />
                        </div>
        </div>
        <div class="row input_wrapper">
            <div class="col">
                <Input label="Challenge" placeholder="Challenge Description..." />
            </div>
            <div class="col">
                <Input label="Strategy" placeholder="Strategy Description..." />
            </div>
        </div>
        <div class="row action_wrapper">
            <Button title="Connect" />
        </div>
    </div>
</template>
<script>
import Dropdown from '../atoms/Dropdown.vue';
import Input from '../atoms/Input.vue';
import Button from '../atoms/Button.vue';
export default {
    name: 'ConnectionForm',
    components: {
        Dropdown,
        Input,
        Button
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