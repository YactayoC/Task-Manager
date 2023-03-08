import { AddTask } from '@/models/task';
import { ref } from 'vue';

export const validateForm = (dataForm: AddTask) => {
  const selectHasError = ref(false);
  const inputHasError = ref(false);

  if (dataForm.title.trim() === '') {
    inputHasError.value = true;
  } else {
    inputHasError.value = false;
  }

  if (dataForm.relevance === '') {
    selectHasError.value = true;
  } else {
    selectHasError.value = false;
  }

  const isFormValid = !inputHasError.value && !selectHasError.value;

  return {
    inputHasError,
    selectHasError,
    isFormValid,
  };
};
