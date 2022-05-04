import { path } from '@vuepress/utils'
import { defineUserConfig} from 'vuepress'
import notes from './notes'
import { themePlume } from '@vuepress-plume/vuepress-theme-plume'

console.log('NODE_ENV', process.env.NODE_ENV);

export default defineUserConfig({
  lang: 'zh-CN',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '鹏展博',
      description: '热爱生活',
    },
  },
  dest: 'docs',
  public: path.resolve(__dirname, '../public'),
  temp: path.resolve(__dirname, '.temp'),
  cache: path.resolve(__dirname, '.cache'),
  head: [
    ['link', { rel: 'icon', href: '/g.gif' }],
    ['meta', { 'name': 'keywords', content: '鹏展博,前端，健身' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'id=edg' }],
  ],
  theme: themePlume({
    logo: '/g.gif',
    darkMode: true,
    hostname: "https://pengzhanbo.cn/",
    avatar: {
      name: '鹏展博',
      url: '/images/blogger.jpg',
      description: 'good good study, day day up !'
    },
    social: {
      email: 'volodymyr@foxmail.com',
      github: 'pengzhanbo',
      QQ: '942450674',
    },
    navbar: [
      { text: 'Theme-Plume', link: '/note/vuepress-theme-plume' },
      {
        text: '笔记',
        children: [
          { text: '面试题解析', link: '/note/interview-question/' },
        ]
      }
    ],
    notes,
    footer: {
      copyright: 'Copyright © 2022-present pengzhanbo',
      content: '',
    },
    themePlugins: {
      search: {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
      comment: {
        type: 'giscus',
        comment: true,
        repo: 'pengzhanbo/pengzhanbo-blog-vuepress',
        repoId: 'MDEwOlJlcG9zaXRvcnkxNDgwMzY4MDc=',
        category: 'Announcements',
        categoryId: 'DIC_kwDOCNLcx84COcVd',
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
      },
      markdownEnhance: {
        sub: true,
        sup: true,
        container: true,
        codegroup: true,
        align: true,
        mark: true,
        tasklist: true,
        demo: true,
      }
    },
  }),
})
