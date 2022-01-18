<template>
<div class="connection_wrapper">
    <div class="row">
        <div class="col title_wrapper">
        <Text :msg=from />
        <img src="@/assets/arrow_icon.svg" alt="arrow_icon" />
        <Text :msg=to />
        </div>
    </div>
    <div class="row">
        <div class="col without_middle_gap">
            <Chip :text=challenge />
        </div>
        <div class="col without_middle_gap">
    <Chip :text=strategy />
        </div>
    </div>
</div>
</template>
<script>
import Text from '../atoms/Text.vue';
import Chip from '../molecules/Chip.vue';

export default {
    name: 'Connection',
    components:{
        Text,
        Chip
    },
    props: {
        from: String,
        to: String,
        challenge: String,
        strategy: String
    }
}
</script>
<style>
.connection_wrapper {
    padding: 16px;
     border-top-width: 0px;
    border-bottom-width: 1px;
    border-right-width: 0px;
    border-left-width: 0px;
    border-style: solid;
    border-color: #333333;
}
.connection_wrapper:first-child {
    border-top-width: 1px;
}
.connection_wrapper:last-child {
    border-bottom-width: 1px;
}
.title_wrapper {
    padding-bottom: 14px;
    display: flex;
    align-items: center;
}
.title_wrapper img{
    height: 16px;
    width: 16px;
    margin: 0px 18px;
    transform: rotate(180deg);
    color: white;
}
</style>