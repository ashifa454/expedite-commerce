<template>
<div>
     <div class="label">
            <Text :msg=label />
    </div>
    <select v-bind:class="{hasError:error}" @change="$emit('update:value',$event.target.value)">
    <option value="" disabled selected>{{title}}</option>
    <option v-for="item in options" v-bind:key="item" :value="item.id">{{item.name}}</option>
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
        title: String,
        error: Boolean,
        options: Array
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
.hasError {
        border: 1px solid red;
}
 input:focus, textarea:focus, select:focus{
        outline: none;
    }
</style>