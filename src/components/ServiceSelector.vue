<template>
  <div class="flex justify-center">
    <div>
      <div class="dropdown relative">
        <button
          class="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap gap-2"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          @click="toggleServiceButton"
        >
          {{ boardStore.selectedService?.name || "Seleccione un servicio" }}
          <ChevronUp v-if="!serviceButtonHidden" />
          <ChevronDown v-else />
        </button>
        <ul
          class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
          aria-labelledby="dropdownMenuButton1"
          v-show="!serviceButtonHidden"
        >
          <li v-for="service in boardStore.services" :key="service.id">
            <a
              @click="selectService(service)"
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >{{ service.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Service } from "@/interfaces/board";
import { useBoardStore } from "@/stores/board";
import { ref } from "vue";
import ChevronDown from "./icons/ChevronDown.vue";
import ChevronUp from "./icons/ChevronUp.vue";
const boardStore = useBoardStore();
const serviceButtonHidden = ref(true);
const toggleServiceButton = () => {
  serviceButtonHidden.value = !serviceButtonHidden.value;
};
const selectService = (service: Service) => {
  boardStore.selectService(service);
  serviceButtonHidden.value = true;
};
</script>
