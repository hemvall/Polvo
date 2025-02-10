<script setup>
import { ref } from 'vue';

const message = ref("Hello, Crypto!");

const updateMessage = () => {
  message.value = "New Message!";
};
</script>

<template>
  <div class="popup-container">
    <h2>{{ message }}</h2>
    <button @click="updateMessage">Changer</button>
  </div>
</template>

<style scoped>
.popup-container {
  width: 200px;
  padding: 10px;
  text-align: center;
}
button {
  margin-top: 10px;
  padding: 5px;
}
</style>
