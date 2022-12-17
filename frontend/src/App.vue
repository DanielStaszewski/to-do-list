<script lang="ts">
import eventBusService from "./services/event-bus.service";
import TheSidebar from './components/TheSidebar.vue';

export default {
    components: {
        TheSidebar
    },
    computed: {
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    },
    mounted() {
        eventBusService.on("logout", this.logOut);
    },
    beforeDestroy() {
        eventBusService.remove("logout", this.logOut);
    }
};

</script>

<template>
    <div class="app-container">
        <div class="app-sidebar">
            <TheSidebar />
        </div>
        <main class="main">
            <router-view />
        </main>
    </div>
</template>

<style lang="scss">
.main {
    margin-left: 255px;
}
</style>
