import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components:[
        '../../packages/bloc-components/src/components',
    ],
    nitro: {
        preset: 'vercel-edge'
    },
    css: ['~/style.css'],
})
