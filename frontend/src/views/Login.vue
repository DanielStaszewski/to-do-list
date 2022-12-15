<script lang="ts">
import Backdrop from "../components/TheBackdrop.vue";
import Modal from "../components/TheModal.vue";
import Alert from "../components/TheAlert.vue";

export default {
    components: {
        Backdrop,
        Modal,
        Alert
    },
    data: () => ({
        alert: false,
        loading: false,
        message: "",
        valid: true,
        email: '',
        emailRules: [
            (v: string) => !!v || 'E-mail is required',
            (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passwordRules: [
            (v: string) => !!v || 'Name is required',
            (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ]
    }),
    methods: { 
        validate() {
            (this.$refs.form as HTMLFormElement).validate()
        },
        reset() {
            (this.$refs.form as HTMLFormElement).reset()
        },
        resetValidation() {
            (this.$refs.form as HTMLFormElement).resetValidation()
        },
        handleLogin() {
            const user = {email: this.email, password: this.password};
            this.loading = true;

            this.$store.dispatch("auth/login", user).then(
                () => {
                    this.$router.push("/next-seven-days");
                },
                (error) => {
                    this.loading = false;
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            );
        }
    },
    watch: {
        message(value: string){
            if(!value) return;
            this.alert = true;
            setTimeout(() => {
                this.alert = false;
                this.message = "";
            }, 3000);
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    created() {
        if (this.loggedIn) {
            this.$router.push("/next-seven-days");
        }
    },
}
</script>

<template>
    <Backdrop></Backdrop>
    <Alert :title="'Error'" :message="message" :type="'error'" v-if="alert"></Alert>
    <Modal :submit-button="{ type: 'primary', text: 'Submit' }" :title="'Login'" @submit="handleLogin">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" :counter="10" :rules="passwordRules" label="Password"
                required></v-text-field>
        </v-form>
    </Modal>
    
</template>

<style lang="scss">

</style>