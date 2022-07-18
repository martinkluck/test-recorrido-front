import { arrOfNumberOfWeeks, getDateOfWeek } from "./../utils/functions";
import type { Service } from "@/interfaces/board";
import { defineStore } from "pinia";

interface BoardState {
  services: Service[];
  weeks: number[];
  selectedService: Service | null;
  selectedWeek: number;
  dateFrom: string;
  dateTo: string;
}

export const useBoardStore = defineStore({
  id: "board",
  state: (): BoardState => ({
    services: [
      { id: 1, name: "Service 1" },
      { id: 2, name: "Service 2" },
      { id: 3, name: "Service 3" },
    ],
    weeks: arrOfNumberOfWeeks(),
    selectedService: { id: 1, name: "Service 1" },
    selectedWeek: 1,
    dateFrom: "",
    dateTo: "",
  }),
  getters: {},
  actions: {
    selectService(payload: Service) {
      this.selectedService = payload;
    },
    selectWeek(payload: number) {
      this.selectedWeek = payload;
    },
    getDatesFromWeek() {
      const date = getDateOfWeek(this.selectedWeek, 2022);
      this.dateFrom = date.toLocaleDateString();
      date.setDate(date.getDate() + 7);
      this.dateTo = date.toLocaleDateString();
    },
  },
});
