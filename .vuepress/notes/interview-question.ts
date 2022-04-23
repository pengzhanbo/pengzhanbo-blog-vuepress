export default {
  link: '/interview-question',
  text: '面试题解析',
  dir: '面试题',
  sidebar: [
    '',
    {
      text: 'HTML',
      dir: 'HTML',
      children: [
        'DOCTYPE',
        '元素的分类',
        'HTML5新特性',
        '语义化理解'
      ]
    },
    {
      text: 'CSS',
      dir: 'CSS',
      children: [
        '盒模型',
        '外边距合并',
        'BFC块级格式化上下文',
        'IFC,GFC,FFC',
        'CSS浮动',
        '元素垂直居中',
        'Flex弹性布局',
        'css三角形原理'
      ]
    },
    {
      text: 'JavaScript',
      dir: 'JavaScript',
      children: [
        '变量',
        '数据类型',
        '数据类型转换',
        '栈和堆',
        '原型和原型链',
        '执行上下文和执行栈',
        '作用域链',
        '闭包',
        '严格模式',
        '字符串',
        'NaN',
        '数组和对象',
        '集合对象',
        'this对象',
        '函数与箭头函数',
        'new操作符',
        '事件',
        '写一个通用事件侦听器',
        '模块化',
        '模块加载器原理',
        '浅拷贝和深拷贝',
        'DOM节点操作',
        '跨域',
        '节流与防抖',
        'promise',
        '设计模式',
        'MV-设计模式'
      ]
    },
    {
      text: '浏览器',
      dir: '浏览器',
      children: [
        '对浏览器的理解',
        '浏览器内核',
        '渲染原理',
        '浏览器解析过程',
        '浏览器渲染过程',
        '重绘与回流',
        '浏览器存储',
        '垃圾回收机制',
        '内存泄露',
        '事件循环',
        '浏览器输入URL',
      ]
    },
    {
      text: '计算机网络',
      dir: '计算机网络',
      children: [
        'http协议',
        'http缓存',
        'http2',
        'TCP协议',
        'UDP协议',
        'CDN',
        '代理',
        '负载均衡',
      ]
    },
    {
      text: 'Vue',
      dir: 'Vue',
      children: [
        'VirtualDom',
        'v-if和v-show的区别',
        'v-if和v-for优先级',
        'v-model',
        'computed和watch',
        'keep-alive',
        {
          text: 'vue@3',
          children: [
            '响应式原理v3'
          ]
        },
        {
          text: 'vue@2',
          children: [
            '响应式原理v2',
            'data为什么必须是函数v2',
            '组件通信方式v2',
            '生命周期v2',
            '路由v2'
          ]
        },
      ]
    },
    {
      text: 'React',
      dir: 'React',
      children: []
    },
    {
      text: 'NodeJs',
      dir: 'NodeJs',
      children: [
        '模块打包器',
        'webpack',
        'pm2'
      ]
    },
    {
      text: '工具',
      dir: '工具',
      children: [
        'git',
        'git-hook',
        'jenkins',
        '代码检查工具',
      ]
    },
    {
      text: '常用库',
      dir: '常用库',
      children: [
        'axios',
        'lodash',
        'UI框架'
      ]
    },
    {
      text: '安全',
      dir: '安全',
      children: [
        'XSS攻击',
        'CSRF攻击',
        'SQL注入攻击',
        'CSP内容安全',
        '点击劫持'
      ]
    },
    {
      text: '其他',
      dir: '其他',
      children: [
        '前端SEO',
        '前端性能优化',
      ]
    },
  ]
}
