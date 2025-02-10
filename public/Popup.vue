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
  padding: 20px;
  text-align: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}
button {
  margin-top: 10px;
  padding: 5px;
  cursor: pointer;
}
</style>
