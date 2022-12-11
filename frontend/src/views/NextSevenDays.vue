<script lang="ts">
import NextSevenDaysList from '../components/NextSevenDaysList.vue';
import TheFloatedToolbar from '../components/TheFloatedToolbar.vue';

export default {
   components: {
      NextSevenDaysList,
      TheFloatedToolbar
   }
}

</script>

<template>
   <div class="next-seven-days__container">
      <div class="next-seven-days__header">
         <TheFloatedToolbar :title="'Next 7 days'"></TheFloatedToolbar>
      </div>
      <div class="next-seven-days__content">
         <NextSevenDaysList></NextSevenDaysList>
      </div>
   </div>
</template>

<style lang="scss">

   .next-seven-days{

      &__header{
         display: flex;
         padding: 30px 0;
         box-sizing: border-box;
      }
      
      &__container {
        margin-left: 20px;
    }

   }

</style>