<script lang="ts">
import { uuidv4 } from '@firebase/util';

    export default {
        data(){
            return {
                taskName: ""
            }
        },
        methods: {
            onAddTaskClick(){
                //const taskId = uuidv4();
                //this.$emit("addTask", {id: taskId, name: this.taskName});
             
            }
        }
    }
</script>

<template>
    <v-form
    class="w-100 d-flex"
    ref="form"
    >
        <v-text-field
        class="mr-2"
        v-model="taskName"
        placeholder="Click to quickly add a task"
        :counter="10"
        required
        ></v-text-field>

        <v-btn 
        color="primary"
        icon="mdi-arrow-up"
        variant="flat"
        class="next-seven-days-list-form__btn"
        @click="onAddTaskClick"
        >
        </v-btn>
    </v-form>
</template>

<style lang="scss">
    .next-seven-days-list-form{

        &__btn{
            transform: translateY(4px);
        }

    }
</style>