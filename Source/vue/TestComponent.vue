<template>
  <h1>Header</h1>
  <p>some text</p>
  <ItemCard :items="items"></ItemCard>
<!--  <div v-for="item in basket" :key=item.name>{{item.name}}</div>-->
</template>

<script setup>

// import {ref} from "vue";
import ItemCard from "@/components/ItemCard";

// const basket = ref([]);

const items = [
  {
    name: "name 1",
    description: "some description",
    price: 100,
    discount: 10,
  },
  {
    name: "name 2",
    description: "some description",
    price: 100,
    discount: 10,
  },
  {
    name: "name 3",
    description: "some description",
    price: 100,
  },
  {
    name: "name 4",
    description: "some description",
    price: 100,
  },
  {
    name: "name 5",
    description: "some description",
    price: 100,
  },
  {
    name: "name 6",
    description: "some description",
    price: 100,
    discount: 10,
  },
]


</script>


<style scoped>

</style>
