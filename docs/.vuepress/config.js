import {defaultTheme, defineUserConfig} from "vuepress";

export default defineUserConfig({
  base: '/blog/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Jasonnnnnnnn\'s Blog',
      description: 'blog for articles'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Jasonnnnnnnn\'s 部落格',
      description: '紀錄文章之地'
    }
  },
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'vuepress/vuepress-next',
    docsDir: 'docs',
  })
})