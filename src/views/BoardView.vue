<template>
  <div class="container mx-auto">
    <h1 class="text-3xl">Tablero</h1>
    <div class="flex justify-center w-full">
      <div class="block p-6 rounded-lg shadow-lg bg-white w-full">
        <div class="flex flex-wrap gap-3">
          <ServiceSelector />
          <WeekSelector />
        </div>
        <div class="text-gray-700 text-base mb-4">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="border-b">
                      <tr>
                        <th
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          scope="col"
                        >
                          ID
                        </th>
                        <th
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          scope="col"
                        >
                          Email
                        </th>
                        <th
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          scope="col"
                        >
                          Token
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b">
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                          [{{ sessionStore.user.id }}]
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          {{ sessionStore.user.email }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          {{ sessionStore.auth_token }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from "../stores/session_manager";
import ServiceSelector from "../components/ServiceSelector.vue";
import WeekSelector from "../components/WeekSelector.vue";
const sessionStore = useSessionStore();
</script>
