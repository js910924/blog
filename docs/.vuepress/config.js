import {defaultTheme, defineUserConfig} from "vuepress";

export default defineUserConfig({
  lang: 'zh-TW',
  title: 'Chung Chih\'s Blog',
  description: 'for sharing',
  head: [['link', { rel: 'icon', href: '/blog/images/logo.png' }]],
  base: '/blog/',
  // locales: {
  //   '/': {
  //     lang: 'zh-TW',
  //   },
  //   '/en/': {
  //     lang: 'en-US',
  //   }
  // },
  theme: defaultTheme({
    editLink: false,
    contributors: false,
    lastUpdated: false,
    logo: '/images/logo.png',
    repo: 'js910924/blog',
    docsDir: 'docs',
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Articles',
        link: '/articles'
      },
      {
        text: 'About Me',
        link: '/about-me'
      }
    ]
  })
})