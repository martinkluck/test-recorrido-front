import { defineStore } from "pinia";
import axios from "axios";
import type User from "../interfaces/user";

const BASE_URL = "http://localhost:3000";

interface Session {
  auth_token: string | null;
  user: User;
}

interface Request {
  user: {
    email: string;
    password: string;
  };
}

export const useSessionStore = defineStore("store", {
  state: (): Session => ({
    auth_token: null,
    user: {
      id: null,
      username: null,
      email: null,
    },
  }),
  actions: {
    registerUser(payload: Request) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${BASE_URL}/users`, payload)
          .then((response) => {
            this.user = response.data.user;
            this.auth_token = response.headers.authorization;
            axios.defaults.headers.common["Authorization"] = this.auth_token;
            localStorage.setItem("auth_token", this.auth_token);
            resolve(response);
          })
          .catch((error) => {
            this.resetData();
            reject(error);
          });
      });
    },
    loginUser(payload: Request) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${BASE_URL}/users/sign_in`, payload)
          .then((response) => {
            this.user = response.data.user;
            this.auth_token = response.headers.authorization;
            axios.defaults.headers.common["Authorization"] = this.auth_token;
            localStorage.setItem("auth_token", this.auth_token);
            resolve(response);
          })
          .catch((error) => {
            this.resetData();
            reject(error);
          });
      });
    },
    logoutUser() {
      const config = {
        headers: {
          Authorization: this.auth_token || "",
        },
      };
      return new Promise((resolve, reject) => {
        axios
          .delete(`${BASE_URL}/users/sign_out`, config)
          .then((response) => {
            this.resetData();
            resolve(response);
          })
          .catch((error) => {
            this.resetData();
            reject(error);
          });
      });
    },
    loginWithToken(payload: string) {
      const config = {
        headers: {
          Authorization: payload,
        },
      };
      new Promise((resolve, reject) => {
        axios
          .get(`${BASE_URL}/member-data`, config)
          .then((response) => {
            if (response.status !== 200) throw new Error("Invalid token");
            this.user = response.data.user;
            this.auth_token = localStorage.getItem("auth_token");
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            this.resetData();
            reject(error);
          });
      });
    },
    resetData() {
      this.user = {
        id: null,
        username: null,
        email: null,
      };
      this.auth_token = null;
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("auth_token");
    },
  },
  getters: {
    isLoggedIn(): boolean {
      const loggedOut =
        this.auth_token === null || this.auth_token === JSON.stringify(null);
      return !loggedOut;
    },
  },
});
