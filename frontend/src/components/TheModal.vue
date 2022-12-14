<script lang="ts">
    import Button from "../components/TheButton.vue";

    export default {
        components: {
            Button
        },
        props: {
            title: String,
            cancelButton: Object,
            submitButton: Object,
            titleIcon: Object
        },
        methods: {
            cancel(){

            },
            submit(){
                this.$emit("submit");
            }
        },
        data: () => ({
            dialog: true
        })
    }

</script>

<template>
<div class="custom-modal">
    <div class="custom-modal__top">
        <h3 class="custom-modal__title">
            <v-icon v-if="titleIcon" class="custom-modal__icon">
                {{titleIcon.type}}
            </v-icon>
            <span>
                {{title}}
            </span>
        </h3>
        <span class="custom-modal__close-btn" @click="cancel"></span>
    </div>
    <div class="custom-modal__content">
        <slot></slot>
    </div>
    <div>
        <div class="custom-modal__buttons">
            <Button v-if="submitButton" @click="submit" fill="solid" :type="submitButton.type">
                <span>
                    {{submitButton.text}}
                </span>
            </Button>
            <Button v-if="cancelButton" @click="cancel" fill="bordered" :type="cancelButton.type" class="mr-10">
                <span>
                    {{cancelButton.text}}
                </span>
            </Button>
        </div>
    </div>
</div>
</template>

<style lang="scss">
    @import '../styles/colors';

    .custom-modal {
        width: 510px;
        position: fixed;
        left: 50%;
        top: 50%;
        z-index: 1000;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        padding: 2.4rem;
        box-sizing: border-box;
        border-radius: 4px;
        color: $font-primary-color;
        background-color: $card-color;
        box-shadow: 0 2px 15px 0 rgba(0,0,0,0.4);

        &__content{
            flex-grow: 1;
        }

        &__title{
            color: $primary;
        }

        &__icon{
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
        }

        &__top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1.5rem;

            .custom-modal__title {
                font-size: 31px !important;
                font-weight: 600;
            }
        }

        &__icon{
            margin-left: 6px;
            font-size: 18px;
            height: 18px;
            width: 18px;
            cursor: default; 
            margin-right: 8px;   
        }
        &__buttons {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            margin-top: 1.5rem;
        }

        &__close-btn {
            position: relative;
            width: 12px;
            height: 12px;
            cursor: pointer;
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);

            &:after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 12px;
                height: 12px;
                background-image: url('../assets/IconClose.svg');
                background-repeat: no-repeat;
            }
        }

        button {
            width: 200px;
            height: 48px;
            font-size: 16px;
        }
    }

    .mr-10{
        margin-right: 1rem;
    }

</style>