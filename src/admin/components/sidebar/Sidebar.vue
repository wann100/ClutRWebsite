<template lang="html">
    <div class="sidebar">
        <h1 class="ui inverted center aligned header" style="margin-bottom:50px">Chat </h1>
        <connected-user></connected-user>
        <channels></channels>
        <div class="ui divider"></div>
        <users></users>
    </div>
</template>

<script>
import ConnectedUser from './ConnectedUser'
import Channels from './Channels'
import Users from './Users'

export default {
    name: 'sidebar',
    components: { ConnectedUser, Channels, Users }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';

.sidebar {
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    width: 35%;
    padding: 10px;
    top: 0;
    left: 6.5%;
    bottom: 0;
    background-color: $color_matterhorn;
    padding-top: 4%;
}

h1{

    color:white!important;

}
</style>
