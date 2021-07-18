# ssr-vue-demo
## 编写原因
想自学ssr，看了vue官网的ssr教程，一知半解索性自己手动打一遍，官网上的示例都是核心代码，缺少对各个文件之间的组织（PS：最好可以直接运行），所以此项目内部核心代码都是官网上的示例，对于ssr和vue新手比较友好。请配合官方网站ssr教程学习。

官方ssr教程：https://ssr.vuejs.org/

## vue-server-renderer-demo
### 能学到什么
- 对vue脚手架有一个清楚的认识（不要被vue-cli迫害）
- 会对webpack打包有一定的了解（可查看官方vue-loader教程：https://vue-loader.vuejs.org/）
- 会对ssr有一个最底层的了解包括nuxt.js

### 启动方式
```
cd vue-server-renderer-demo
// 安装依赖
npm install
// webpack打包
npm run build
// 启动服务
node server.js
```
### 后续
项目目前只是基本内容，缺少vue中常用的工具集成，如下：
- esLink
- axios
- mockjs
- webpack相关优化
- 等

### 问题
- export 'createStaticVNode' (imported as '_createStaticVNode') was not found in 'vue'
https://github.com/vuejs/vue-loader/issues/1852