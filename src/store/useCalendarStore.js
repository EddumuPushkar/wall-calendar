import { create } from "zustand";

const useCalendarStore = create((set) => ({
  selectedStart: null,
  selectedEnd: null,
  notes: {}, // { "2026-4": "note text" }

  // Select start date
  setStart: (date) => {
    if (!date) {
      set({ selectedStart: null, selectedEnd: null });
      return;
    }
    const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
    localStorage.setItem(`${monthKey}-start`, date.toISOString());
    set({ selectedStart: date, selectedEnd: null });
  },

  // Select end date
  setEnd: (date) => {
    if (!date) {
      set({ selectedEnd: null });
      return;
    }
    set((state) => {
      if (!state.selectedStart) return {};
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      localStorage.setItem(`${monthKey}-end`, date.toISOString());
      return { selectedEnd: date };
    });
  },

  // Clear start/end for a month
  clearRange: (monthKey) => {
    localStorage.removeItem(`${monthKey}-start`);
    localStorage.removeItem(`${monthKey}-end`);
    set({ selectedStart: null, selectedEnd: null });
  },

  // Load start/end for a month
  loadRange: (monthKey) => {
    const startStr = localStorage.getItem(`${monthKey}-start`);
    const endStr = localStorage.getItem(`${monthKey}-end`);
    return {
      start: startStr ? new Date(startStr) : null,
      end: endStr ? new Date(endStr) : null,
    };
  },

  // Notes
  addMonthNote: (monthKey, text) => {
    localStorage.setItem(monthKey, text);
    set((state) => ({
      notes: { ...state.notes, [monthKey]: text },
    }));
  },

  loadMonthNote: (monthKey) => {
    const text = localStorage.getItem(monthKey) || "";
    set((state) => ({
      notes: { ...state.notes, [monthKey]: text },
    }));
    return text;
  },
}));

export default useCalendarStore;