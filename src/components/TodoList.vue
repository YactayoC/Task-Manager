<template>
  <div class="todos-sections">
    <TodoGroup :category="CategoryTask.Todo" />
    <TodoGroup :category="CategoryTask.InProgress" />
    <TodoGroup :category="CategoryTask.Done" />
  </div>
</template>

<script setup lang="ts">
import { CategoryTask } from '@/models/task';
import TodoGroup from './TodoGroup.vue';
</script>

<style>
.todos-sections {
  display: flex;
  column-gap: 1rem;
  justify-items: center;
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  margin-top: 4rem;
  height: 100%;
}
</style>
