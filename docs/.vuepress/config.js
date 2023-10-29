import {defaultTheme, defineUserConfig} from "vuepress";

export default defineUserConfig({
  lang: 'zh-TW',
  title: 'Chung Chih\'s Blog',
  description: 'for sharing',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  base: '/blog/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Jasonnnnnnnn\'s Blog',
      description: 'blog for articles'
    },
    '/zh/': {
      lang: 'zh-TW',
      title: 'Jasonnnnnnnn\'s 部落格',
      description: '紀錄文章之地'
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