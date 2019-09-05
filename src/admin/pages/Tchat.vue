<template>
   <div class="container" >
    <!-- notification -->
  
    <div class="tchat__container">
        <sidebar></sidebar>
        <messages></messages>
    </div>
   </div>
</template>
</div>
<script>
    import Sidebar from '../components/sidebar/Sidebar'
    import Messages from '../components/messages/Messages'
    import notifier from "@/admin/mixins/notifier";

    export default {
        name: 'tchat',
        components: { Sidebar, Messages }
    }
</script>

<style scoped>

.tchat__container {
    height: 100%;
}

</style>
