<script lang="ts">
import Button from './TheButton.vue';
export default {
    components: {
        Button
    },
    data() {
        return {
            userImage: ''
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        uploadAvatar(e: any) {
            const formData = new FormData();
            const image = e.target.files[0];
            formData.append('image', image);
            this.$store.dispatch("auth/uploadUserImage", formData);
        },
        onUploadAvatarClick() {
            (this.$refs.uploadLink as HTMLInputElement).click();
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
                    <v-list-item lines="two" :title="userData?.name + ' ' + userData?.surname" subtitle="Logged in">
                        <template v-slot:prepend>
                            <v-avatar size="x-large" class="user__avatar">
                                <v-img
                                    :src="userData?.image ? 'data:image/jpeg;base64, ' + userData?.image : '../src/assets/user.svg'">
                                </v-img>
                            </v-avatar>
                            <div class="user__plus" @click="onUploadAvatarClick">
                                <v-icon>mdi-plus-circle</v-icon>
                            </div>
                            <input ref="uploadLink" type="file" accept="image/jpeg,image/png,image/jpg"
                                @change="uploadAvatar" hidden>
                        </template>
                    </v-list-item>
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

.user {

    &__plus {
        position: absolute;
        top: 36px;
        left: -7px;
        cursor: pointer;
        color: $primary;
    }

}
</style>