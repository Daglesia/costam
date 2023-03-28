<script setup lang="ts">
import axios from "axios";
import { TodoItem } from "@/types/todo";

const todoItem = ref<TodoItem>();

const router = useRoute();

onBeforeMount(async ()=>{
	todoItem.value = await todo(router.params.id as string);
});

const todo = async (index: number | string): Promise<TodoItem> => {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${index}`);
	return response.data;
};
</script>

<template>
  <main class="flex h-full place-items-center">
    <transition
      name="slide"
      appear
    >
      <div
        v-show="!!todoItem"
        class="m-auto text-slate-700"
      >
        <h1 class="text-3xl font-bold">
          {{ todoItem?.title }}
        </h1>
        <h3 class="italic">
          Item ID: {{ todoItem?.id }}
        </h3>
        <h3 class="italic">
          User ID: {{ todoItem?.userId }}
        </h3>
        <h3 class="italic">
          Completed: {{ todoItem?.completed ? 'Completed' : 'Not yet' }}
        </h3>
      </div>
    </transition>
  </main>
</template>

<style scoped>

.slide-enter-active {
  transition: all 0.6s ease-out;
}

.slide-enter-from {
  transform: translateX(10vmax);
}

</style>