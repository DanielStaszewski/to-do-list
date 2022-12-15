<script lang="ts">
import Button from './TheButton.vue';
export default {
    components: {
        Button
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    },
    computed: {
        userData() {
            return this.$store.getters['auth/getUser'];
        }
    }
}
</script>

<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer permanent location="left" theme="dark">
                <template v-slot:prepend>
                    <v-list-item lines="two" :prepend-avatar="userData?.image"
                        :title="userData?.name + ' ' + userData?.surname" subtitle="Logged in"></v-list-item>
                </template>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <router-link to="/my-day">
                        <v-list-item title="My day" value="MyDay" class="list__item"></v-list-item>
                    </router-link>
                    <router-link to="/next-seven-days">
                        <v-list-item title="Next 7 days" value="NextSevenDays" class="list__item"></v-list-item>
                    </router-link>
                </v-list>
                <template v-slot:append>
                    <div class="pa-2">
                        <Button type="primary" fill="solid" width="per-100" @confirm="logout">
                            Logout
                        </Button>
                    </div>
                </template>
            </v-navigation-drawer>
        </v-layout>
    </v-card>
</template>

<style scoped lang="scss">
@import "../styles/colors";

.list {

    &__item {
        color: $primary;
    }

}
</style>