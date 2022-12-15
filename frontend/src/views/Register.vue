<script lang="ts">
import Backdrop from "../components/TheBackdrop.vue";
import Modal from "../components/TheModal.vue";
import Alert from '../components/TheAlert.vue';

export default {
    components: {
        Backdrop,
        Modal,
        Alert
    },
    data() {
        return {
            alert: false,
            successful: false,
            loading: false,
            valid: true,
            message: '',
            name: '',
            nameRules: [
                (v: string) => !!v || 'Name is required'
            ],
            surname: '',
            surnameRules: [
                (v: string) => !!v || 'Surname is required'
            ],
            email: '',
            emailRules: [
                (v: string) => !!v || 'E-mail is required',
                (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            password: '',
            passwordRules: [
                (v: string) => !!v || 'Name is required',
                (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
            confirmPassword: '',
            confirmPasswordRules: [
                (value: string) => !!value || 'type confirm password',
                (value: any) => value === this.password || 'The password confirmation does not match.'
            ]
        }
    },
    methods: {
        onSubmitRegister() {
            const userData = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                password: this.password
            }

            this.message = "";
            this.successful = false;
            this.loading = true;

            this.$store.dispatch("auth/register", userData)
            .then(
                (data) => {
                    this.message = data.message;
                    this.successful = true;
                    this.loading = false;
                    this.$router.push("/login");
                },
                (error) => {
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.successful = false;
                    this.loading = false;
                }
            );
        },
        validate() {
            (this.$refs.form as HTMLFormElement).validate()
        },
        reset() {
            (this.$refs.form as HTMLFormElement).reset()
        },
        resetValidation() {
            (this.$refs.form as HTMLFormElement).resetValidation()
        },
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
        },
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push("/next-seven-days");
        }
    },
}
</script>

<template>
    <Backdrop></Backdrop>
    <Alert :title="'Error'" :message="message" :type="'error'" v-if="alert"></Alert>
    <Modal :submit-button="{ type: 'primary', text: 'Submit' }" :title="'Register'" @submit="onSubmitRegister">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="surname" :rules="surnameRules" label="Surname" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
            <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules" label="Confirm password"
                required></v-text-field>
        </v-form>
    </Modal>
</template>

<style lang="scss">

</style>