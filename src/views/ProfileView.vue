<template>
  <div class="container mx-auto">
    <h1 class="text-3xl">Vue session Manager</h1>
    <div class="flex justify-center w-full">
      <div class="block p-6 rounded-lg shadow-lg bg-white w-full">
        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
          Card title
        </h5>
        <button
          @click="sessionStore.logoutUser()"
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Logout
        </button>
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
const sessionStore = useSessionStore();
</script>
