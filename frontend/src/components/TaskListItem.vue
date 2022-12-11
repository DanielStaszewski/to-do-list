<script lang="ts">
    export default {
       props: {
        task: Object,
        index: Number
       },
       data: () => ({
        done: false
       }),
       methods: {
        onRemoveTask(){
          this.$emit("remove", this.$props.task);
        } ,
        onToggleSelectionTask(){
          return this.done ? this.$emit("select", this.$props.task) : this.$emit("unselect", this.$props.task);
        }
       },
       mounted(){
       }
    }
</script>

<template>
  <v-list-item
        :key="index"
        :value="task"
        active-color="primary"
      >
        <template v-slot:prepend>
          <v-checkbox
          class="list-item__checkbox"
          v-model="done"
          @change="onToggleSelectionTask"
          :value="task?.text"
          ></v-checkbox>
        </template>

        <v-list-item-title v-text="task?.text">
        </v-list-item-title>

        <template v-slot:append>
          <v-icon
            icon="mdi-close"
            @click="onRemoveTask"
          ></v-icon>
        </template>   
  </v-list-item>
</template>

<style lang="scss" scoped>
  .list-item{

    &__checkbox{
      display: flex;
      align-items: center;
    }

  }

</style>

