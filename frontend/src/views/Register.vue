<script lang="ts">
import Backdrop from "../components/TheBackdrop.vue";
import Modal from "../components/TheModal.vue";

export default {
    components: {
        Backdrop,
        Modal
    },
    data() {
        return {
            valid: true,
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
        onSubmitForm(){
            
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
    }
}
</script>

<template>
    <Backdrop></Backdrop>
    <Modal :submit-button="{ type: 'primary', text: 'Submit' }" :title="'Register'" @submit="onSubmitForm">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="surname" :rules="surnameRules" label="Surname" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password"  :rules="passwordRules" label="Password"
                required></v-text-field>
            <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules" label="Confirm password"
            required></v-text-field>
        </v-form>
    </Modal>
</template>

<style lang="scss">

</style>