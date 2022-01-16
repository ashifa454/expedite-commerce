<template>
    <button :type=type @click="onclick">{{title}}</button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        title: String,
        onclick: Function,
        type: String
    }
}
</script>
<style scoped>
button {
    text-decoration: none solid rgb(255, 255, 255);
    background-color: #57c046;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
    font-family: 'Montserrat';
    border-radius: 3px;
    padding: 12px 56px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}
button:hover {
    background-color: #1c8d0a;
}
</style>