import {defaultTheme, defineUserConfig} from "vuepress";

export default defineUserConfig({
  lang: 'zh-TW',
  title: 'Chung Chih\'s Blog',
  description: 'for sharing',
  head: [['link', { rel: 'icon', href: '/blog/images/logo.png' }]],
  base: '/blog/',
  locales: {
    '/': {
      lang: 'zh-TW',
    },
    '/en/': {
      lang: 'en-US',
    }
  },
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'js910924/blog',
    docsDir: 'docs',
    navbar: [
      {
        text: 'Home',
        link: '/'
      }
    ]
  })
})