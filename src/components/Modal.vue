<template>
  <div class="modal" @click.self="setCloseModal">
    <div class="modal-content">
      <div class="modal-header">
        <h1>{{ textsModal.title }}</h1>
        <i
          class="fa-solid fa-xmark"
          @click="
            resetForm();
            setCloseModal();
          "
        ></i>
      </div>
      <form class="modal-form" @submit.prevent="!taskActive ? onAddTask(dataForm) : onUpdateTask(dataForm)">
        <div class="form-group">
          <select v-model="dataForm.relevance" :class="isFormErrorSelect && 'form-error'">
            <option value="" disabled selected>Select level of importance</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <p v-if="isFormErrorSelect" class="text-error">This field is required</p>
        </div>
        <div class="form-group">
          <input
            v-model="dataForm.title"
            type="text"
            placeholder="Enter new task"
            :class="isFormErrorInput && 'form-error'"
          />
          <p v-if="isFormErrorInput" class="text-error">This filed is required</p>
        </div>
        <div class="form-group">
          <textarea v-model="dataForm.description" placeholder="Enter description"></textarea>
        </div>
        <button type="submit">{{ textsModal.textButton }}</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useTodo, useModal } from '@/composables';
import { AddTask, CategoryTask } from '@/models/task';

const { getTaskActive, addTask, updateDataTask } = useTodo();
const { categoryInModal, textsModal, setCloseModal } = useModal();
const isFormErrorSelect = ref(false);
const isFormErrorInput = ref(false);

const taskActive = getTaskActive();
const dataForm = ref<AddTask>({
  title: taskActive.value?.title || '',
  description: taskActive.value?.description || '',
  relevance: taskActive.value?.relevance || '',
  category: categoryInModal.value,
});

const resetForm = () => {
  dataForm.value = {
    title: '',
    description: '',
    relevance: 'low',
    category: CategoryTask.Todo,
  };
};

const onAddTask = (dataForm: AddTask) => {
  //   if (!dataForm.level) {
  //     isFormErrorSelect.value = true;
  //     setTimeout(() => {
  //       isFormErrorSelect.value = false;
  //     }, 2000);
  //   }

  //   if (!dataForm.task) {
  //     isFormErrorInput.value = true;
  //     setTimeout(() => {
  //       isFormErrorInput.value = false;
  //     }, 2000);

  //     return;
  //   }

  addTask(dataForm);
  setCloseModal();
  resetForm();
};

const onUpdateTask = (dataForm: AddTask) => {
  updateDataTask(taskActive.value, dataForm);
  setCloseModal();
  resetForm();
};
</script>

<style>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1.5px);
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  background-color: white;
  border-radius: 10px;
  padding-block: 1rem;
  padding-inline: 4rem;
  width: 40rem;
}

.modal-header {
  position: relative;
  text-align: center;
  width: 100%;
  margin-top: 1rem;
}

.modal-header i {
  position: absolute;
  right: 0;
  top: 0.3rem;
  cursor: pointer;
  font-size: 1.8rem;
  color: #f83a4a;
}

.modal-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;
  margin-top: 2rem;
  width: 100%;
  position: relative;
}

.form-group {
  width: 100%;
  position: relative;
}

.modal-form select {
  width: 100%;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border: 2px solid #4a0bdf;
  background: transparent;
  border-radius: 5px;
  font-size: 1.2rem;
  outline: none;
}

.modal-form input {
  width: 100%;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border: 2px solid #4a0bdf;
  border-radius: 5px;
  font-size: 1.2rem;
  outline: none;
  background: transparent;
}

.modal-form textarea {
  width: 100%;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border: 2px solid #4a0bdf;
  border-radius: 5px;
  font-size: 1.2rem;
  outline: none;
  background: transparent;
  resize: none;
}

.modal-form button {
  width: 100%;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
  background-color: #680dff;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease-in-out;
}

.modal-form button:hover {
  background-color: #3e1799;
}

.form-error {
  border: 2px solid red !important;
}

.text-error {
  position: absolute;
  top: 3rem;
  left: 0;
  color: red;
  font-size: 0.8rem;
}
</style>
