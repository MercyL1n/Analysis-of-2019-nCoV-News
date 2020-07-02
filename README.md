技术栈
------
* Vue
* vue-router
* [D3.js 4.0](https://d3js.org/ "D3js v4") 
* [Mockjs](http://mockjs.com/ "Mockjs")

安装
----
```bash
# 安装node.js
https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz
下载node.js上传到服务器，并解压
tar -xvf node-v12.18.1-linux-x64.tar.xz
mv node-v12.18.1-linux-x64 nodejs
建立软链接
ln -s /nodejs/bin/node /usr/local/bin/
ln -s /nodejs/bin/npm /usr/local/bin/
查看安装是否正确node -v,出现node版本信息则正确
# 安装vue.js
npm install -g cnpm --registry=https://registry.npm.taobao.org
ln -s /nodejs/bin/cnpm /usr/local/bin/cnpm
npm install -g vue-cli
# 下载运行项目
git clone https://github.com/MercyL1n/Analysis-of-2019-nCoV-News.git
cd Analysis-of-2019-nCoV-News
cnpm install
cnpm install echarts
cnpm install echarts-wordcloud
cnpm install --save js-base64
cnpm install vue-particles --save-dev
cnpm i element-ui -S
npm run dev
# 部署
npm run build
# 在项目根目录下生成dist目录，将其复制到网页根目录下
```
然后在浏览器里输入：http:localhost:8080 即可访问


