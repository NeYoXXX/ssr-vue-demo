const axios = require('axios');

const instance = axios.create({
    baseURL: 'https:http://www.weather.com.cn/data/sk',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });


export function getBeiJingWeather(){
    return instance({
        url:'/101010100.html',
        method:'get'
    })
}

/**
101010100=北京 
101010200=海淀 
101010300=朝阳 
101010400=顺义 
101010500=怀柔 
101010600=通州 
101010700=昌平 
101010800=延庆 
101010900=丰台 
101011000=石景山 
101011100=大兴 
101011200=房山 
101011300=密云 
101011400=门头沟 
101011500=平谷 
101011600=八达岭 
101011700=佛爷顶 
101011800=汤河口 
101011900=密云上甸子 
101012000=斋堂 
101012100=霞云岭
 */