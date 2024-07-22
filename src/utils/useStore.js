import { create } from 'zustand';
const useStore = create(set => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}));
