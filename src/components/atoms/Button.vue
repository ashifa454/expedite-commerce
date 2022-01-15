<template>
    <button>{{title}}</button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        title: String
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
}
</style>