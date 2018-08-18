<template>
    <div class="listing cars">
        <div v-for="car in cars" :key= "car.id">
            <h2> <span>{{ car.id }} </span> {{ car.brand }} </h2> 
            <p> Model: {{ car.model }} </p>
            <p> Year: {{ car.year }} </p>
            <p> Maximum speed: {{ car.maxSpeed }} </p>
            <p> {{ car.isAutomatic ? 'Automatic' : 'Manual' }} </p>
            <p> Engine: {{ car.engine }} </p>
            <p> number of doors: {{ car.numberOfDoors }} </p>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        cars: Array
    }

}


</script>

<style>

</style>

