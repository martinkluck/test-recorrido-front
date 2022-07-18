<template>
  <div class="container mx-auto">
    <h1 class="text-3xl">Login</h1>
    <div class="flex justify-center w-full">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form @submit.prevent="onLogin">
          <input
            type="email"
            v-model="loginEmail"
            placeholder="Email"
            class="rounded bg-gray-200 shadow px-4 py-2 m-1"
          />
          <input
            type="password"
            v-model="loginPassword"
            placeholder="Password"
            class="rounded bg-gray-200 shadow px-4 py-2 m-1"
          />
          <br />
          <button
            type="submit"
            class="bg-gray-600 text-gray-200 mt-2 py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSessionStore } from "../stores/session_manager";
const sessionStore = useSessionStore();
const loginEmail = ref("");
const loginPassword = ref("");
const router = useRouter();

const onLogin = () => {
  const data = {
    user: {
      email: loginEmail.value,
      password: loginPassword.value,
    },
  };
  sessionStore.loginUser(data);
  resetData();
  if (sessionStore.isLoggedIn) {
    router.push("/profile");
  }
};

const resetData = () => {
  loginEmail.value = "";
  loginPassword.value = "";
};
</script>
