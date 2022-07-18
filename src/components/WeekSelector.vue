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
          @click="weekButtonHidden = !weekButtonHidden"
        >
          {{
            boardStore.selectedWeek
              ? "Semana " + boardStore.selectedWeek
              : "Seleccione una semana"
          }}
          <ChevronUp v-if="!weekButtonHidden" />
          <ChevronDown v-else />
        </button>
        <ul
          class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
          aria-labelledby="dropdownMenuButton1"
          v-show="!weekButtonHidden"
        >
          <li v-for="week in boardStore.weeks" :key="week">
            <a
              @click="selectWeek(week)"
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Semana {{ week }}</a
            >
          </li>
        </ul>
      </div>
      <div>
        del {{ boardStore.dateFrom }} al
        {{ boardStore.dateTo }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBoardStore } from "@/stores/board";
import { ref } from "vue";
import ChevronDown from "./icons/ChevronDown.vue";
import ChevronUp from "./icons/ChevronUp.vue";
const boardStore = useBoardStore();
const weekButtonHidden = ref(true);
boardStore.getDatesFromWeek();
const selectWeek = (week: number) => {
  boardStore.selectWeek(week);
  boardStore.getDatesFromWeek();
  weekButtonHidden.value = true;
};
</script>
