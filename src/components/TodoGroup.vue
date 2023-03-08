<template>
  <div class="todos-sections">
    <div class="todo-section">
      <div class="todo-header">
        <div class="todo-header-text">
          <h2>{{ props.category }}</h2>
          <span :class="evaluateCategoryTask(props.category)">{{ listTasks?.length }}</span>
        </div>
        <i class="fa-solid fa-plus" @click="setOpenModal(props.category)"></i>
      </div>

      <draggable class="todo-list" v-model="listTasks" group="people" item-key="id" @change="onDraggableChange">
        <template #item="{ element }">
          <div class="todo-element">
            <div class="todo-element-header">
              <span :class="evaluateRelevanceTask(element.relevance)">{{ element.relevance }}</span>
              <div class="todo-element-header-icons">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash" @click="removeTask(element)"></i>
              </div>
            </div>
            {{ element.title }}
          </div>
        </template>
      </draggable>
      <p class="clear-tasks" @click="clearAllTasksByCategory(props.category)">Clear tasks</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import draggable from 'vuedraggable';

import { CategoryTask } from '@/models/task';
import { useTodo, useModal } from '@/composables';
import { evaluateCategoryTask, evaluateRelevanceTask } from '@/utils/evaluatePropsTask';

interface Props {
  category: CategoryTask;
}

const props = defineProps<Props>();
const { getTasksTodoByCategory, updateMovedTask, updateCategoryTask, removeTask, clearAllTasksByCategory } = useTodo();
const { setOpenModal } = useModal();

const listTasks = getTasksTodoByCategory(props.category);

const onDraggableChange = (payload: any) => {
  if (payload?.added?.element?.category) {
    updateCategoryTask(payload?.added?.element, props.category);
  }

  if (payload?.moved?.element) {
    updateMovedTask(payload?.moved, props.category);
  }
};
</script>

<style>
.todo-section {
  width: 100%;
  border-radius: 20px;
  padding-inline: 1rem;
  padding-block: 1rem;
  background-color: #f6f6f6;
  height: 100%;
  position: relative;
}

.todo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-header h2 {
  color: #060606;
  width: 100%;
  padding-block: 0.5rem;
}

.todo-header i {
  font-size: 1.5rem;
  cursor: pointer;
  color: #555555;
  transition: color 0.3s ease-in-out;
}

.todo-header i:hover {
  color: #5810d1;
}

.todo-header-text {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.todo-header-text span {
  font-size: 1rem;
  border-radius: 100%;
  padding: 0.2rem;
  padding-inline: 0.5rem;
  color: #fff;
}

.header-todo {
  background-color: #787878;
}

.header-inprogress {
  background-color: #e9a236;
}

.header-done {
  background-color: #5bbd72;
}

.todo-list {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 1rem;
  height: 100%;
  overflow-y: auto;
  max-height: 42rem;
}

.todo-element {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 1rem;
  background-color: #ffffff;
  padding-inline: 1rem;
  padding-block: 1rem;
  border-radius: 10px;
  cursor: grab;
}

.todo-element p {
  color: #343434;
  font-weight: 500;
  font-size: 1.2rem;
}

.todo-element i {
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
}

.todo-element:hover i {
  opacity: 1;
  pointer-events: all;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #555555;
  font-size: 1.3rem;
}

.todo-element-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.todo-element-header span {
  font-weight: 700;
  padding-block: 0.3rem;
  padding-inline: 0.5rem;
  border-radius: 10px;
}

.todo-element-header-icons {
  display: flex;
  column-gap: 1rem;
}

.todo-element-header-icons i:nth-child(1):hover {
  color: #3a7cf8;
}

.todo-element-header-icons i:nth-child(2):hover {
  color: #f83a4a;
}

.text-high {
  color: #690eff;
  background-color: #f9feff;
  border: 1px solid #690eff;
}

.text-medium {
  color: #58a19f;
  background-color: #f4fefa;
  border: 1px solid #58a19f;
}

.text-low {
  color: #a3895c;
  background-color: #fff9ec;
  border: 1px solid #a3895c;
}

.clear-tasks {
  position: absolute;
  bottom: -2rem;
  right: 1rem;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}

.clear-tasks:hover {
  color: #696969;
}
</style>
