import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
    user: {
        name: 'Alexander Zapata',
        email: 'alexander@example.com',
        avatar: 'https://github.com/alexanderzapata.png',
    },
}))