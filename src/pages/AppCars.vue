<template>
    <div>
        <cars-list :cars="carsIHave" > </cars-list>
    </div>
</template>

<script>
import CarsList from '../components/CarsList.vue'
import { carsService } from '../services/CarsService.js'


export default {
    components: {
        CarsList
    },

    data(){
        return {
            carsIHave: [{
                id: 1, 
                brand: "Audi", 
                model: "A4", 
                year: 2005, 
                maxSpeed: 200, 
                isAutomatic: false, 
                engine: "Sta god", 
                numberOfDoors: 5
                },

                {
                id: 2, 
                brand: "Skoda", 
                model: "Octavia", 
                year: 2002, 
                maxSpeed: 220, 
                isAutomatic: true, 
                engine: "Sta god", 
                numberOfDoors: 5
                }]
        }
    },

    beforeRouteEnter (to, from, next) {
    carsService
    .getAll()
    .then((response) => {
        next( (vm) => {
            vm.carsIHave = response.data;
        })
    })
    .catch((error) => {console.log(error)})
}
}
</script>

<style>

</style>
