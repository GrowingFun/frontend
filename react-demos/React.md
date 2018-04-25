## React - 用于构建用户界面的声明式，高效且灵活的JavaScript库。
> 相关生态 react router，react redux
> [中文文档](https://doc.react-china.org/docs/hello-world.html)
> 版本：16.3，15与16差别较大，舍弃了React.createClass 和 React.PropTypes

1. 安装
    * 直接使用BootCDN的React CDN库
    ```
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    ...
     <body>
        <div id="example"></div>
        <script type="text/babel">
          ReactDOM.render(
            <h1>Hello, world!</h1>,
            document.getElementById('example')
          );
        </script>
      </body>
    ```
        * 引入三个库，react.development.js,react-dom.development.js,babel.min.js
            * react.development.js - React核心库
            * react-dom.development.js - 与DOM相关的功能
            * babel.min.js  将Es6编译为Es5、内嵌了对JSX的支持
    * npm 安装React
        * npm i react / cnpm i react
        ```js
        var React = require('react');
        ```
    * 使用 create-react-app 快速构建 React 开发环境
    ```
    $ cnpm install -g create-react-app
    $ create-react-app my-app
    $ cd my-app/
    $ npm start
    ```
2. React JSX
    * JSX是一个很像XML的Javascript语法扩展
    * 用来声明React中的元素
        * 如何渲染？
            * ReactDOM.render()
            * 只会更新必要的部分，所以性能很好
        * 如何更新渲染？
            * 继续调用 ReactDOM.render()
            * state状态机，修改后会自动调用render方法
        * 会在渲染前做防XSS攻击
    * 推荐在JSX的外面加上一个小括号，防止分号自动插入的bug
    * JSX代表Objects
        * 标签名
        * 属性对象
        * 文本
        ```js
        const element = React.createElement(
          'h1',
          {className: 'greeting'},
          'Hello, world!'
        );
        ```

    * 优点
        * 编写模板简单快捷
        * 执行更快，编译时做了优化
        * 类型安全，编译时可以发现错误
    * 特点
        * 必须有一个根标签
        * 特殊属性
            * class
            * onClick等
            * 添加自定义属性需加data- 前缀
        * javascript 表达式
        * 样式，指定元素数字后自动添加px,样式本身是一个对象
        * 数组 JSX 允许在模板中插入数组，数组会自动展开所有成员：
        * React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。
        * 由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。作为替代，React DOM 使用 className 和 htmlFor 来做对应的属性。
* 组件
    * 独立、可复用
    * 定义
        * 函数定义
            * 接收参数props
            * 返回组件元素

                ![](.React_images\props.png)
        * 类定义（增强功能）
        ```js
        class Welcome extends React.Component {
          render() {
            return <h1>Hello, {this.props.name}</h1>;
          }
        }
        ```
    * 组件名称首字母大写
    * props 只读
    * 组件响应用户 - state (状态机)


> 参考：[runoob](http://www.runoob.com/react/react-install.html)