// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://apolon13.vpaname.cc',
  i18n: {
    defaultLocale: 'be',
    locales: ['be', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
    server:{
      open:true,
        host:true
    }
});