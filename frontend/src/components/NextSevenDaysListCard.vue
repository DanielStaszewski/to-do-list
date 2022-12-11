
<script lang="ts">
    import {DAYS} from '../constants/days';
    import NextSevenDaysListForm from './NextSevenDaysListForm.vue';

    export default {
        components: {
            NextSevenDaysListForm
        },
        props: {
            dayName: String
        },
        data(){
            return {
                tasks: []
            }
        },
        methods: {

        },
        computed: {
            isToday(): boolean{
                return DAYS[new Date().getDay()].toLowerCase() === this.dayName;
            }
        }


    }

</script>

<template>

    <v-card class="fill-height next-seven-days-list-card d-flex flex-column pt-2 px-2">

        <v-card-title>
            {{dayName}}
        </v-card-title>

        <v-card-text>



        </v-card-text>

        <v-card-actions class="">
            <NextSevenDaysListForm>
            </NextSevenDaysListForm>
        </v-card-actions>

    </v-card>

</template>

<style lang="scss">
    @import "../styles/colors";
    
    .next-seven-days-list-card{
        width: 340px;
        color: $font-primary-color !important;
        background-color: $card-color !important;
        border-radius: 15px !important;
        box-shadow: 0 2px 15px 0 rgba(0,0,0,0.4) !important;
    }

</style>

    