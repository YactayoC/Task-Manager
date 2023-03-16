<template>
  <div class="todo">
    <div class="todo-bar">
      <div class="title-header">
        <i class="fa-regular fa-bookmark"></i>
        <h1>TaskManager</h1>
      </div>
      <i v-if="!isDarkModeActive" class="fa-solid fa-lightbulb" @click="setDarkMode"></i>
      <i v-else class="fa-regular fa-lightbulb" @click="setDarkMode"></i>
    </div>

    <TodoList />
    <Modal v-if="isOpenModal === true" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

import Modal from './components/Modal.vue';
import TodoList from './components/TodoList.vue';
import { useModal } from './composables';

const { isOpenModal } = useModal();
const isDarkModeActive = ref<boolean>();

onMounted(() => {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode) {
    isDarkModeActive.value = JSON.parse(darkMode);
  }
});

watch(isDarkModeActive, (value) => {
  if (value) {
    document.body.classList.add('todo-darkmode');
  } else {
    document.body.classList.remove('todo-darkmode');
  }
});

const setDarkMode = () => {
  isDarkModeActive.value = !isDarkModeActive.value;
  localStorage.setItem('darkMode', JSON.stringify(isDarkModeActive.value));
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

/* Darkmode */
.todo-darkmode {
  background-color: #111315;
  backdrop-filter: blur(100px);
}

.todo-darkmode .todo-bar {
  background-color: #0c0e10;
}

.todo-darkmode .todo-bar i {
  color: #fff;
}

.todo-darkmode .title-header i {
  color: #5810d1;
}

.todo-darkmode .todo-section {
  background: #191d20;
}

.todo-darkmode .todo-section .todo-header h2 {
  color: #fff;
}

.todo-darkmode .todo-element {
  background-color: #111315;
  color: #fff;
}

.todo-darkmode .modal-content {
  background-color: #111315;
}

.todo-darkmode .modal-header {
  color: #fff;
}

.todo-darkmode .modal-form select {
  color: #fff;
}

.todo-darkmode .modal-form select option {
  background-color: #111315;
  color: #fff;
}

.todo-darkmode .modal-form input,
.todo-darkmode .modal-form textarea {
  color: #fff;
}

.todo-darkmode .clear-tasks {
  color: #fff;
}

.todo-darkmode .clear-tasks:hover {
  color: #696969;
}

/* Ligth Mode */
.todo {
  display: flex;
  flex-direction: column;
}

.todo-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 4rem;
  background-color: #f9f9f9;
}

.todo-bar i {
  font-size: 2rem;
  cursor: pointer;
  color: rgb(85, 85, 85);
}

.title-header {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.title-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #5810d1;
}

.title-header i {
  font-size: 3rem;
  color: #5810d1;
  cursor: default;
}
</style>
