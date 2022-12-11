<script lang="ts">

    export default {
        props: {
            title: String
        }
    }

</script>

<template>
    <div class="floated-toolbar">
        <h3 class="floated-toolbar__title" v-if="title">
            {{title}}
        </h3>
        <div class="floated-toolbar__tools">
            <v-btn
                size="small"
                variant="text"
                icon="mdi-close-circle-outline"
            ></v-btn>
            <v-btn
                size="small"
                variant="text"
                icon="mdi-sort"
            ></v-btn>
            <v-btn
                size="small"
                variant="text"
                icon="mdi-dots-horizontal"
            ></v-btn>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../styles/colors';

    .floated-toolbar{
        display: flex;
        align-items: center;
        height: 40px;
        color: $font-primary-color;
        background-color: $card-color;
        padding: 5px 15px 5px 25px;
        box-sizing: border-box;
        border-radius: 25px;

        &__title{
            font-size: 18px;
            font-weight: 700;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: text;
            margin: 0;
            padding: 0;
            border-right: 1px solid #424242;
            padding-right: 15px;
            margin-right: 10px;
        }

    }

</style>