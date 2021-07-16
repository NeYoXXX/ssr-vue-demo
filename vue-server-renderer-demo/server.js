const path = require('path');
const server = require('express')();

const template = require('fs').readFileSync(path.resolve(__dirname,'src/template.html'), 'utf-8');

const renderer = require('vue-server-renderer').createRenderer({
  template,
});
// const renderer = require('vue-server-renderer').createRenderer();

const createApp = require('./dist/built-server-bundle.js')

const context = { 
    title: 'vue ssr',
    metas: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
    `,
}

server.get('*', (req, res) => {
    
    const obj ={url:req.url}
    console.log(obj.url);

    createApp(obj).then(app => {
        renderer.renderToString(app, context, (err, html) => {
            if (err) {
                if (err.code === 404) {
                res.status(404).end('Page not found')
                } else {
                res.status(500).end('Internal Server Error')
                }
            } else {
                res.end(html)
            }
        });
    },err=>{
        console.log(err,'err');
    })
  
})

server.listen(8082, '127.0.0.1', function(){
    console.log('127.0.0.1:8082');
  })