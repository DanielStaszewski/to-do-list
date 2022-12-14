<script lang="ts">

export default {
    props: {
        fill: String,  //solid, bordered
        type: {
            type: String,
            default: "primary" //primary, secondary, error
        }, 
        disabled: Boolean, //true, false
        width: String //per-100 (100%)
    },
    computed: {
        classList(): string{
            return `base-button ${'base-button--' + this.fill} ${'base-button--' + this.type} ${this.width}`;
        }
    },
    methods: {
        onConfirmClick(){
            this.$emit("confirm");
        }
    }
}

</script>

<template>
    <button :class="classList" :disabled="disabled" @click="onConfirmClick">
        <slot></slot>
    </button>
</template>

<style lang="scss">
@import '../styles/colors';

.base-button {
    font-style: normal;
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.25px;
    padding: 10px 16px;
    border-radius: 4px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: .2s;

    &--primary {
        border-color: $primary;
    }

    &--secondary {
        border-color: $secondary;
    }

    &--error {
        border-color: $error;
    }

    &:disabled {
        color: $white;
        border-color: #BDBDBD;
        background-color: #BDBDBD;

        &:hover {
            cursor: not-allowed;
        }
    }

    &--solid:not(:disabled) {
        color: $white;

        &.base-button--primary {
            background-color: $primary;

            &:hover {
                color: $primary;
            }
        }

        &.base-button--secondary {
            background-color: $secondary;

            &:hover {
                color: $secondary;
            }
        }

        &.base-button--error {
            background-color: $error;

            &:hover {
                color: $error;
            }
        }

        &:hover {
            background-color: transparent;
        }
    }

    &--bordered:not(:disabled) {
        background-color: transparent;

        &.base-button--primary {
            color: $primary;

            &:hover {
                background-color: $primary;
            }
        }

        &.base-button--secondary {
            color: $secondary;

            &:hover {
                background-color: $secondary;
            }
        }

        &.base-button--error {
            color: $error;

            &:hover {
                background-color: $error;
            }
        }

        &:hover {
            color: $white;
        }
    }
}

.per-100 {
    width: 100%;
}
</style>