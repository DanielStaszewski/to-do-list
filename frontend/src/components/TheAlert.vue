<script lang="ts">

export default {
    props: {
        type: {
            default: undefined,
            type: String
        },
        message: String,
        title: String
    },
    data() {
        return {

        }
    }
}

</script>

<template>

    <div class="alert">
        <v-alert density="comfortable" :type="(type as any)" :title="title" closable>
            {{ message }}
        </v-alert>
    </div>

</template>

<style scoped lang="scss">
    .alert{
        position: fixed;
        top: 20px;
        z-index: 1000;
        right: 20px;
    }
</style>