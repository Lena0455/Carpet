<template>
  <div class="card" v-for="item in props.items" :key="item.name">
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
    <p>{{ getDiscount(item) }}rub. <span style="text-decoration: line-through"
                                         v-if="item.discount">{{ item.price }}rub.</span></p>
    <button @click="() => {
      // basket.push(item)
    }">add
    </button>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps(["items"]);

function getDiscount(item) {
  return item.discount ? item.price - (item.price / 100) * item.discount : item.price;

}
</script>

<style scoped>
.card {
  display: inline-block;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}

</style>
