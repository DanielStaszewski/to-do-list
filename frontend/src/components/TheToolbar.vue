<script lang="ts">

    export default {
        props: {
            itemsLength: Number
        },
        methods: {
            onRemoveClick(){
                this.$emit("remove");
            },
            onCloseClick(){
                this.$emit("close");
            }
        }

    }

</script>

<template>
    <v-card
      class="mx-auto"
    >
      <v-toolbar dark
      >
        <v-btn
          icon
          @click="onCloseClick"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
  
        <v-toolbar-title>
          {{`${itemsLength} tasks selected`}}
        </v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-scale-transition>
          <v-btn
            key="delete"
            icon
            @click="onRemoveClick"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-scale-transition>
  
      </v-toolbar>
  
    </v-card>
  </template>
<style>
</style>
