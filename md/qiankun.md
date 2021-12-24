## qiankun

介绍
qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。

qiankun 孵化自蚂蚁金融科技基于微前端架构的云产品统一接入平台，在经过一批线上应用的充分检验及打磨后，我们将其微前端内核抽取出来并开源，希望能同时帮助社区有类似需求的系统更方便的构建自己的微前端系统，同时也希望通过社区的帮助将 qiankun 打磨的更加成熟完善。

目前 qiankun 已在蚂蚁内部服务了超过 200+ 线上应用，在易用性及完备性上，绝对是值得信赖的。

什么是微前端
Techniques, strategies and recipes for building a modern web app with multiple teams that can ship features independently. -- Micro Frontends

微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。

微前端架构具备以下几个核心价值：

技术栈无关
主框架不限制接入应用的技术栈，微应用具备完全自主权

独立开发、独立部署
微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新

增量升级

在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略

独立运行时
每个微应用之间状态隔离，运行时状态不共享

微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用(Frontend Monolith)后，随之而来的应用不可维护的问题。这类问题在企业级 Web 应用中尤其常见。

更多关于微前端的相关介绍，推荐大家可以去看这几篇文章：

Micro Frontends
Micro Frontends from martinfowler.com
可能是你见过最完善的微前端解决方案
微前端的核心价值
qiankun 的核心设计理念
🥄 简单

由于主应用微应用都能做到技术栈无关，qiankun 对于用户而言只是一个类似 jQuery 的库，你需要调用几个 qiankun 的 API 即可完成应用的微前端改造。同时由于 qiankun 的 HTML entry 及沙箱的设计，使得微应用的接入像使用 iframe 一样简单。

🍡 解耦/技术栈无关

微前端的核心目标是将巨石应用拆解成若干可以自治的松耦合微应用，而 qiankun 的诸多设计均是秉持这一原则，如 HTML entry、沙箱、应用间通信等。这样才能确保微应用真正具备 独立开发、独立运行 的能力。

它是如何工作的
TODO

为什么不是 iframe
看这里 Why Not Iframe

特性
📦 基于 single-spa 封装，提供了更加开箱即用的 API。
📱 技术栈无关，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他等框架。
💪 HTML Entry 接入方式，让你接入微应用像使用 iframe 一样简单。
🛡​ 样式隔离，确保微应用之间样式互相不干扰。
🧳 JS 沙箱，确保微应用之间 全局变量/事件 不冲突。
⚡️ 资源预加载，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度。
🔌 umi 插件，提供了 @umijs/plugin-qiankun 供 umi 应用一键切换成微前端架构系统。

#### qiankun 实战

##### 1.新建项目

```
vue create qiankun-base
vue create qiankun-vue
npx create-react-app antd-demo

```

#### 2.qiankun-base 里面安装 qiankun

修改主文件以及修改一下端口

```
 <div id="app">
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">home</el-menu-item>
      <el-menu-item index="/vue">vue应用</el-menu-item>
      <el-menu-item index="/react">react应用</el-menu-item>
    </el-menu>
    <router-view />
    <div id="vue"></div>
    <div id="react"></div>
  </div>
```

```
import { registerMicroApps, start } from 'qiankun';
const apps = [
  {
    name: 'vueapp', // app name registered
    entry: '//localhost:10000',//默认会加载html 解析里面js 动态执行 子应用必须支持跨域
    container: '#vue',//挂载到vue上
    activeRule: '/vue',//访问vue被激活
  },
  {
    name: 'reactapp',
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react',
  },
]
registerMicroApps(apps);//注册应用

start();//开启
```

#### 3.qiankun-vue 文件修改

修改 router 额外的路径

```
const router = createRouter({
  history: createWebHistory('/vue'),
  routes
})

export default router
```

处理 main.js

```
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let instance = null; //定义一个实例
function render(props) {
    instance = createApp(App)
    instance.use(store).use(router).mount('#app')
}
// 使用 webpack 运行时 publicPath 配置
//qiankun 将会在微应用 bootstrap 之前注入一个运行时的 publicPath 变量，你需要做的是在微应用的 entry js 的顶部添加如下代码：
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) {
    //如果独立运行
    render();
}
//子组件得协议
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
    console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
    render(props)
    //需要设置一下全局的属性
    instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
    instance.unmount();
    instance._container.innerHTML = "";
    instance = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
    console.log('update props', props);
}
```

配置 config.js

```
module.exports = {
  devServer: {
    port: 10000,
    disableHostCheck: true,
    headers:{
      'Access-Control-Allow-Origin':'*'
    }

  },
  configureWebpack: {
    output: {
      library: 'vueapp',
      libraryTarget: 'umd',
    }
  },
};
```

#### 4.react 文件修改

配置 index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

}
if (!window.__POWERED_BY_QIANKUN__) {
  //如果独立运行
  render();
}
export async function bootstrap() {
  console.log('react app bootstraped');
}
export async function mount() {
  render()
}
export async function unmount(props) {
  await ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

```

引入 react-app-rewired 插件
react-app-rewired 重新配置文件

```
$ npm install react-app-rewired
```

修改 package.json 里的启动配置

```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
  },
```

如果需要在项目中配置一些 webpack 配置，需要在根目录下新建一个名称为 config-overrides.js 的文件

```
const { name } = require('./package.json');
module.exports = {
  webpack: function override(config, env) {
    config.entry = config.entry.filter(
      (e) => !e.includes('webpackHotDevClient')
    );
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd'; //导出umd类型
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.publicPath = 'http://localhost:20000/'
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',//跨域
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};
```

react 配置端口

```
PORT=20000
WDS_SOCKET_PORT=20000
```

#### 5.问题

       5.1react版本问题
       5.2react配置端口

#### 6.通信
主应用中创建一个 actions
```
import { initGlobalState } from "qiankun";
import store from "./store";

const initialState = {
  //这里写初始化数据

};

// 初始化 state
const actions = initGlobalState(initialState);
actions.onGlobalStateChange((state, prev) => {//监听公共状态的变化
  console.log("主应用: 变更前");
  console.log(prev);
  console.log("主应用: 变更后");
  console.log(state);
  // store.commit('common/globalInfo',state);//这里我把公共状态存到主应用的vuex里了
});
// actions.setGlobalState(initialState);
// actions.offGlobalStateChange();

export default actions;

```
页面中监听
```
  // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：token 改变前的值为 ", prevState);
      console.log(
        "主应用观察者：登录状态发生改变，改变后的 token 的值为 ",
        state
      );
    });
```
vue 子应用 
```
export async function mount(props) {
    render(props)
     // 设置通讯
     instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange
     instance.config.globalProperties.$setGlobalState = props.setGlobalState
}
```
子应用的监听
```
   this.$onGlobalStateChange((state) => {
      //监听全局状态
      console.log("子应用的监听");
      console.log(state);
    }, true);
```
子应用的提交
```
 this.$setGlobalState({ token: "qiankun" }); //改变全局状态
```
