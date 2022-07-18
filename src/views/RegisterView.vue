<template>
  <div class="container mx-auto">
    <h1 class="text-3xl">Sign up!</h1>
    <div class="flex justify-center w-full">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form @submit.prevent="onSignUp">
          <input
            type="email"
            v-model="signUpEmail"
            placeholder="Email"
            class="rounded bg-gray-200 shadow px-4 py-2 m-1"
          />
          <br />
          <input
            type="password"
            v-model="signUpPassword"
            placeholder="Password"
            class="rounded bg-gray-200 shadow px-4 py-2 m-1"
          />
          <br />
          <button
            type="submit"
            class="bg-gray-600 text-gray-200 mt-2 py-2 px-4 rounded"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSessionStore } from "../stores/session_manager";
const sessionStore = useSessionStore();
const signUpEmail = ref("");
const signUpPassword = ref("");

const onSignUp = () => {
  const data = {
    user: {
      email: signUpEmail.value,
      password: signUpPassword.value,
    },
  };
  sessionStore.registerUser(data);
  resetData();
};

const resetData = () => {
  signUpEmail.value = "";
  signUpPassword.value = "";
};
</script>
