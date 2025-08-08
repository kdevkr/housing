import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Housing",
  description: "내집마련 뽀개기",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '주택청약 민영주택', link: '/subscription' },
      { text: '생애최초 특별공급', link: '/firsthouse' },
      // { text: '양주역 제일풍경채 위너스카이', link: '/jeil-yj' },
    ],

    sidebar: [
      // https://vitepress.dev/reference/default-theme-config#sidebar
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kdevkr/housing' }
    ]
  }
})
