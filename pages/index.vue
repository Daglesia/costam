<script setup lang="ts">
import axios from "axios";
import { TodoItem } from "@/types/todo";

const todoItems = ref<TodoItem[]>([]);

onBeforeMount(async ()=>{
	todoItems.value = await todo();
});

const todo = async (): Promise<TodoItem[]> => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
	return response.data;
};
</script>


<template>
  <ul class="list-disc pl-16 pt-4">
    <transition-group name="list">
      <!-- fyi delay-${index} didn't work, maybe some hack I don't know yet is better :) -->
      <li
        v-for="item, index in todoItems"
        :key="item.id"
        :style="`{;transition-delay: ${index*20}ms;}`"
      >
        <nuxt-link :to="`/todo/${item.id}`">
          <span class="text-lg text-slate-500 hover:text-slate-400 w-fit transition ease-in-out">
            {{ item.title }}
          </span>
        </nuxt-link>
      </li>
    </transition-group>
  </ul>
</template>

<style scoped>

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>