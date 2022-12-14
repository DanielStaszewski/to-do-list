<script lang="ts">
import Backdrop from "../components/TheBackdrop.vue";
import Modal from "../components/TheModal.vue";

export default {
    components: {
        Backdrop,
        Modal
    },
    data: () => ({
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
    }
}
</script>

<template>
    <Backdrop></Backdrop>
    <Modal :submit-button="{type: 'primary', text: 'Submit'}" :title="'Login'">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" :counter="10" :rules="passwordRules" label="Password"
                required></v-text-field>
        </v-form>
    </Modal>
</template>

<style lang="scss">

</style>