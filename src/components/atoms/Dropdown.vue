<template>
<div>
     <div class="label">
            <Text :msg=label />
    </div>
    <select>
    <option value="" disabled selected>{{title}}</option>
    <option value="1">Audi</option>
    <option value="2">BMW</option>
    <option value="3">Citroen</option>
    <option value="4">Ford</option>
    <option value="5">Honda</option>
    <option value="6">Jaguar</option>
    <option value="7">Land Rover</option>
    <option value="8">Mercedes</option>
    <option value="9">Mini</option>
    <option value="10">Nissan</option>
    <option value="11">Toyota</option>
    <option value="12">Volvo</option>
  </select>
</div>
</template>
<script>
import Text from './Text.vue';
export default {
    name: 'AppDropdown',
    components: {
        Text,
    },
    props: {
        label: String,
        title: String
    }
}
</script>
<style scoped>
.label {
    padding-bottom: 4px;
}
select{
    width: -webkit-fill-available;
    height: 32px;
    border: 1px solid #5f5f5f;
    padding: 0px 8px;
    color: #ffffff;
    text-decoration: none solid rgb(255, 255, 255);
    font-size: 13px;
    background-color: #404040;
}
 input:focus, textarea:focus, select:focus{
        outline: none;
    }
</style>