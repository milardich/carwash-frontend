<script setup lang="ts">
import StationDropdown from '@/components/StationDropdown.vue';
import UnitCard from '@/components/UnitCard.vue';
import ResourcecGraphCard from '@/components/ResourceGraphCard.vue'
</script>


<template>
    <div class="h-full">
        <div>
            <StationDropdown />
        </div>

        <div class="grid grid-cols-2 gap-4 h-percent-90 mt-5">
            <div class="rounded-lg overflow-y-auto p-6 h-full  bg-white-medium shadow-lg">
                <div class="text-3xl">Resource consumption</div>

                <div>
                    <!-- TODO: fetch card data from backend -->
                    <ResourcecGraphCard />
                    <ResourcecGraphCard />
                    <ResourcecGraphCard />
                    <ResourcecGraphCard />
                </div>
            </div>

            <div class="rounded-lg overflow-y-auto p-6 h-full bg-white-medium shadow-lg">
                <div class="text-3xl">Units</div>

                <div class="grid grid-cols-3 gap-4 mt-6">
                    <!-- TODO: fetch card data from backend -->
                    <UnitCard state="AVAILABLE" />
                    <UnitCard state="IN USE" />
                    <UnitCard state="IN USE" />
                    <UnitCard state="AVAILABLE" />
                    <UnitCard state="INACTIVE" />
                    <UnitCard state="INACTIVE" />
                    <UnitCard state="AVAILABLE" />
                </div>
            </div>

        </div>
    </div>


</template>