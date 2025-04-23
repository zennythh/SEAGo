import { defineConfig } from 'vite'

export default defineConfig({
   //base: '/SEAGo/',
   base: process.env.VITE_BASE_PATH || "/SEAGo/",
})