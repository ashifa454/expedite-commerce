<template>
  <Main />
</template>

<script>
import Main from './pages/main.vue';
export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
body {
  background: #333333;
}
.row {
  display: flex;
}
.col {
  flex: 1;
}
.col:nth-child(odd){
  padding-right: 4px;
}
.col:nth-child(even){
  padding-left: 4px;
}
.without_middle_gap:nth-child(odd){
  padding-right: 1px;
}
.without_middle_gap:nth-child(even){
  padding-left: 1px;
}
</style>
