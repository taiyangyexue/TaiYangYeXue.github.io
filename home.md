# React开发入门

## 前言
#### React 是一个用于构建用户界面的 JAVASCRIPT 库。

#### React 主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。

#### React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。

#### React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。
## 1、脚手架
#### antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。
### 安装和初始化
#### 在开始之前，你可能需要安装 yarn。
```
$ yarn create react-app antd-demo
# or
$ npx create-react-app antd-demo
```
### 项目并启动。
```
$ cd antd-demo
$ yarn start
```
### 此时浏览器会访问 http://localhost:3000/ ，看到 Welcome to React 的界面就算成功了。
### 这是 create-react-app 生成的默认目录结构。

```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
└── yarn.lock
```
## 2、React使用
### 2.1 HTML部分 React推荐使用JSX语法。
#### 此外React组件有两种定义方法，一种是函数形式，一种是ES6的class形式。

#### 函数形式，称为函数组件：
```
export default function HelloWorld() {
  return (
    <div>hello world</div>
  );
}
```
#### 类组件
```
class HelloMessage extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
```
### 2.2绑定 Class 和 Style
```
export default function HelloWorld() {
  return (
    <div 
      className="title head"
      style={{color:'red',fontSize:'16px'}}
    >
      hello world
    </div>
  );
}
```
### 2.3 Use JavaScript in JSX
```
var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
)
```
### 2.4 Use array in JSX
```
var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```
### 2.5 props用来接收外部传递给组件的数据
```
class HelloMessage extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
```
### 2.6 this.props.children来接收内容中的组件， 效果上类似vue中的插槽
```
class NotesList extends React.Component {
  render() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
}

ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.getElementById('example')
);
```
### 2.7 组件通讯
#### 2.7.1父组件向子组件通信 父组件通过向子组件传递 props，子组件得到 props 后进行相应的处理。
#### 父组件：
```
import React,{ Component } from "react";
import Sub from "./SubComponent.js";
import "./App.css";

export default class App extends Component{

    render(){
        return(
            <div>
                <Sub title = "我是title" />
            </div>
        )
    }
}
```
#### 子组件：SubComponent
```
import React from "react";

const Sub = (props) => {
    return(
        <h1>
            { props.title }
        </h1>
    )
}

export default Sub;
```
#### 2.7.2子组件向父组件通信
#### 利用回调函数，可以实现子组件向父组件通信：父组件将一个函数作为 props 传递给子组件，子组件调用该回调函数，便可以向父组件通信。
#### 子组件:SubComponent
```
import React from "react";

const Sub = (props) => {
    const cb = (msg) => {
        return () => {
            props.callback(msg)
        }
    }
    return(
        <div>
            <button onClick = { cb("我们通信把") }>点击我</button>
        </div>
    )
}

export default Sub;
```
#### 父组件
```
import React,{ Component } from "react";
import Sub from "./SubComponent.js";
import "./App.css";

export default class App extends Component{
    callback(msg){
        console.log(msg);
    }
    render(){
        return(
            <div>
                <Sub callback = { this.callback.bind(this) } />
            </div>
        )
    }
}
```
#### 2.7.3 使用自定义事件的方式通讯
```
npm install events --save
```
#### 新建一个 ev.js，引入 events 包，并向外提供一个事件对象，供通信时使用：
```
import { EventEmitter } from "events";
export default new EventEmitter();
```
#### home.js
```
import React, { Component } from 'react';

import Foo from "./Foo";
import Boo from "./Boo";

import "./App.css";

export default class App extends Component{
    render(){
        return(
            <div>
                <Foo />
                <Boo />
            </div>
        );
    }
} 
```
#### FOO.js
```
import React,{ Component } from "react";
import emitter from "./ev"

export default class Foo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            msg:null,
        };
    }
    componentDidMount(){
        // 声明一个自定义事件
        // 在组件装载完成以后
        this.eventEmitter = emitter.addListener("callMe",(msg)=>{
            this.setState({
                msg
            })
        });
    }
    // 组件销毁前移除事件监听
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter);
    }
    render(){
        return(
            <div>
                { this.state.msg }
                我是非嵌套 1 号
            </div>
        );
    }
}
```
#### Boo.js
```
import React,{ Component } from "react";
import emitter from "./ev"

export default class Boo extends Component{
    render(){
        const cb = (msg) => {
            return () => {
                // 触发自定义事件
                emitter.emit("callMe","Hello")
            }
        }
        return(
            <div>
                我是非嵌套 2 号
                <button onClick = { cb("blue") }>点击我</button>
            </div>
        );
    }
}
```



















### 小细节
#### react 中使用组件第一个字母需大写
#### react中没有指令（如v-if、v-for等）需自己写三目运算符




