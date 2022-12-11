
<script lang="ts">
import NextSevenDaysListCard from './NextSevenDaysListCard.vue';
import { DAYS } from '../constants/days';
export default {
    components: {
        NextSevenDaysListCard
    },
    data() {
        return {
            days: DAYS
        }
    }
}

</script>

<template>
    <v-item-group multiple selected-class="bg-primary">
        <v-row class="next-seven-days-list__row">
            <v-col class="fill-height" v-for="day in days">
                <NextSevenDaysListCard :dayName="day">
                </NextSevenDaysListCard>
            </v-col>
        </v-row>
    </v-item-group>
</template>

<style lang="scss">
.next-seven-days-list {

    &__row {
        overflow-x: auto;
        flex-wrap: nowrap !important;
        height: 700px;
    }

}
</style>

