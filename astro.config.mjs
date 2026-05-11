// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://apollo13.vpaname.cc',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'be'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
    server:{
      open:true,
        host:true
    }
});