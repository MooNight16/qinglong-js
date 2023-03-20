/*
微信打开: #小程序://蒙牛营养生活家/FzGssVYt9

点会员-签到 搜tasklist
抓域名member-api.mengniu.cn
请求头X-Token
请求连接 unionId
变量
export mnflaghd='X-Token&unionId'
*/
const $ = new Env('猛男');
const axios = require('axios');
let request = require("request");
request = request.defaults({
    jar: true
});
const {
    log
} = console;
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
const debug = 0; //0为关闭调试，1为打开调试,默认为0

let mnflaghd = ($.isNode() ? process.env.mnflaghd : $.getdata("mnflaghd")) || ""
let mnflaghdArr = [];
let data = '';
let msg = '';
var hours = new Date().getMonth();

var timestamp = Math.round(new Date().getTime()).toString();
!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite();
    } else {
        if (!(await Envs()))
            return;
        else {

            log(`\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：${new Date(
                new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 +
                8 * 60 * 60 * 1000).toLocaleString()} \n=============================================\n`);



            log(`\n============ 微信公众号：老司机上线============`)
            log(`\n=================== 共找到 ${mnflaghdArr.length} 个账号 ===================`)
            if (debug) {
                log(`【debug】 这是你的全部账号数组:\n ${mnflaghdArr}`);
            }
            for (let index = 0; index < mnflaghdArr.length; index++) {

                let num = index + 1
                addNotifyStr(`\n==== 开始【第 ${num} 个账号】====\n`, true)

                mnflaghd = mnflaghdArr[index];
                //ck = mnflaghd.split('&')[0]
                tokens = mnflaghd.split('&')[0]
                unionId = mnflaghd.split('&')[1]


                log('\n=====去做任务=====')                              
                await taskList()
                log('\n=====查询=====')                  
                await centerInfo()


            }
            await SendMsg(msg);
        }
    }
})()
    .catch((e) => log(e))
    .finally(() => $.done())

async function taskList() {
    return new Promise((resolve) => {
var options = {
  method: 'GET',
  url: 'https://member-api.mengniu.cn/user/mnme/member/taskList',
  params: {businessCode: '01', position: '2', unionId: unionId},
  headers: {
    Host: 'member-api.mengniu.cn',
    Connection: 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF',
    'X-Token': tokens,
    'content-type': 'application/json',
    Accept: '*/*',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://member.mengniu.cn/pages/activity/protein_earn/index?wxUrlType=5&appToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtdWwtY21sLm1lbmduaXUuY24iLCJhdWQiOiJtdWwtY21sLm1lbmduaXUuY24iLCJpYXQiOjE2NzIwNDY4MjQsIm5iZiI6MTY3MjA0NjgyNCwiZXhwIjoxNjc0NjM4ODI0LCJqdGkiOls1ODQyNjM5LCJ1c2VyIiwicHJvZHVjdGlvbiIsInd4MTM0MmM1OWE3MGM3YTk0ZiIsInJvdXRpbmUiXX0.6IBKFy7N-FzMolXCyAuO4EwSzvz6Cw9TJB5uvjvThUw',
    'Accept-Language': 'en-us,en'
  }
};
        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data.success == true) {
                 
                 lists = data.data
                 await taskSubmit('01',113)   
                 for(i = 0; i < lists.length; i++){
                  
                 await taskSubmit(lists[i].businessCode,lists[i].id)
                 }
                 
                } else
                    log(data.msg)



            } catch (e) {
                log(`异常：${data}，原因：${data.msg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function taskSubmit(businessCode,taskId) {
    return new Promise((resolve) => {
var options = {
  method: 'POST',
  url: 'https://member-api.mengniu.cn/user/mnme/member/taskSubmit',
  headers: {
    Host: 'member-api.mengniu.cn',
    Connection: 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF',
    'X-Token': tokens,
    'content-type': 'application/json',
    Accept: '*/*',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://member.mengniu.cn/pages/activity/protein_earn/index?wxUrlType=5&appToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtdWwtY21sLm1lbmduaXUuY24iLCJhdWQiOiJtdWwtY21sLm1lbmduaXUuY24iLCJpYXQiOjE2NzIwNDY4MjQsIm5iZiI6MTY3MjA0NjgyNCwiZXhwIjoxNjc0NjM4ODI0LCJqdGkiOls1ODQyNjM5LCJ1c2VyIiwicHJvZHVjdGlvbiIsInd4MTM0MmM1OWE3MGM3YTk0ZiIsInJvdXRpbmUiXX0.6IBKFy7N-FzMolXCyAuO4EwSzvz6Cw9TJB5uvjvThUw',
    'Accept-Language': 'en-us,en'
  },
  data: {businessCode: businessCode, taskId: taskId, unionId: unionId}
};
        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data.code == 200) {
                
                   log(data.msg)
                 
                } else
                    log(data.msg)



            } catch (e) {
                log(`异常：${data}，原因：${data.msg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function centerInfo() {
    return new Promise((resolve) => {
var options = {
  method: 'POST',
  url: 'https://member-api.mengniu.cn/user/mnme/member/centerInfo',
  headers: {
    Host: 'member-api.mengniu.cn',
    Connection: 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF',
    'X-Token': tokens,
    'content-type': 'application/json',
    Accept: '*/*',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://member.mengniu.cn/pages/activity/protein_earn/index?wxUrlType=5&appToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtdWwtY21sLm1lbmduaXUuY24iLCJhdWQiOiJtdWwtY21sLm1lbmduaXUuY24iLCJpYXQiOjE2NzIwNDY4MjQsIm5iZiI6MTY3MjA0NjgyNCwiZXhwIjoxNjc0NjM4ODI0LCJqdGkiOls1ODQyNjM5LCJ1c2VyIiwicHJvZHVjdGlvbiIsInd4MTM0MmM1OWE3MGM3YTk0ZiIsInJvdXRpbmUiXX0.6IBKFy7N-FzMolXCyAuO4EwSzvz6Cw9TJB5uvjvThUw',
    'Accept-Language': 'en-us,en'
  },
  data: {"mer_id":1}
};
        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data.code == 200) {
                
                   log('等级:'+data.data.memberInfo.memberLevelName)
                   log('积分:'+parseInt(data.data.memberInfo.pointsBalance))
                   log('蛋白质:'+parseInt(data.data.memberInfo.proteinBalance))
                   msg +='\n等级:'+data.data.memberInfo.memberLevelName+'\n积分:'+parseInt(data.data.memberInfo.pointsBalance)+'\n蛋白质:'+parseInt(data.data.memberInfo.proteinBalance)
                } else
                    log(data.msg)



            } catch (e) {
                log(`异常：${data}，原因：${data.msg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function share_success(mer_id,id) {
    return new Promise((resolve) => {
var options = {
  method: 'POST',
  url: 'https://mul-cml.mengniu.cn/api/store/lottery/share_success/'+id,
  headers: {
    Host: 'mul-cml.mengniu.cn',
    Connection: 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF',
    'X-Token': tokens,
    'content-type': 'application/json',
    Accept: '*/*',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://servicewechat.com/wx1342c59a70c7a94f/211/page-frame.html',
    'Accept-Language': 'en-us,en'
  },
  data: {"mer_id":mer_id}
};
        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data.status == 200) {
                
                   log(data)
                 
                } else
                    log(data.message)



            } catch (e) {
                log(`异常：${data}，原因：${data.message}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function lottery(mer_id,id) {
    return new Promise((resolve) => {
var options = {
  method: 'POST',
  url: 'https://mul-cml.mengniu.cn/api/store/lottery/lucky_draw/'+id,
  headers: {
    Host: 'mul-cml.mengniu.cn',
    Connection: 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF',
    'X-Token': tokens,
    'content-type': 'application/json',
    Accept: '*/*',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://servicewechat.com/wx1342c59a70c7a94f/211/page-frame.html',
    'Accept-Language': 'en-us,en'
  },
  data: {"mer_id":mer_id}
};
        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data.status == 200) {
                
                   log(data)
                 
                } else
                    log(data.message)



            } catch (e) {
                log(`异常：${data}，原因：${data.message}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function saveshare() {
    return new Promise((resolve) => {
var options = {
  method: 'POST',
  url: 'https://mengniu.app.h5work.com/saveshare',
  headers: {
    Host: 'mengniu.app.h5work.com',
    Connection: 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF',
    'Cookie': ck,
    'Accept': 'application/json, text/plain, */*',
    'Origin': 'https://mengniu.app.h5work.com',
    'X-Requested-With': 'com.tencent.mm',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://mengniu.app.h5work.com/home/wapIndex',
    'Accept-Language': 'en-us,en'
  },

};
        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data.code == 0) {
                
                   log(data.msg)
                 
                } else
                    log(data.msg)



            } catch (e) {
                log(`异常：${data}，原因：${data.msg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function save() {
    return new Promise((resolve) => {
var options = {
  method: 'POST',
  url: 'https://mengniu.app.h5work.com/save',
  headers: {
    Host: 'mengniu.app.h5work.com',
    Connection: 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF',
    'Cookie': ck,
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json, text/plain, */*',
    'Origin': 'https://mengniu.app.h5work.com',
    'X-Requested-With': 'com.tencent.mm',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://mengniu.app.h5work.com/home/wapIndex',
    'Accept-Language': 'en-us,en'
  },
data:{"serverId":"ZtMO9lngq2fy2Q7yZy03vTOSc7D8r4M6Z6Zm9F4Pweaa0XnKU6fZNcke5sz3TGXk"}
};
        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data.code == 0) {
                
                   log(data.msg)
                 
                } else
                    log(data.msg)



            } catch (e) {
                log(`异常：${data}，原因：${data.msg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function lotterys() {
    return new Promise((resolve) => {
var options = {
  method: 'POST',
  url: 'https://mengniu.app.h5work.com/lottery',
  headers: {
    Host: 'mengniu.app.h5work.com',
    Connection: 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF',
    'Cookie': ck,
    'Accept': 'application/json, text/plain, */*',
    'Origin': 'https://mengniu.app.h5work.com',
    'X-Requested-With': 'com.tencent.mm',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://mengniu.app.h5work.com/home/wapIndex',
    'Accept-Language': 'en-us,en'
  },

};
        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data.code == 0) {
                
                   log(data.msg)
                 
                } else
                    log(data.msg)



            } catch (e) {
                log(`异常：${data}，原因：${data.msg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function getwinners() {
    return new Promise((resolve) => {
var options = {
  method: 'GET',
  url: 'https://mengniu.app.h5work.com/getwinners',
  headers: {
    Host: 'mengniu.app.h5work.com',
    Connection: 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF',
    'Cookie': ck,
    'Accept': 'application/json, text/plain, */*',
    'Origin': 'https://mengniu.app.h5work.com',
    'X-Requested-With': 'com.tencent.mm',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://mengniu.app.h5work.com/home/wapIndex',
    'Accept-Language': 'en-us,en'
  },

};
        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data.code == 0) {
                
                   log('当前卡片：'+data.data.length+'张卡片 收集5张不同卡 集齐召唤神龙换乃子')
                 msg +='\n当前卡片：'+data.data.length+'张卡片 收集5张不同卡 集齐召唤神龙换乃子'
                } else
                    log(data.msg)



            } catch (e) {
                log(`异常：${data}，原因：${data.msg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function Envs() {
    if (mnflaghd) {
        if (mnflaghd.indexOf("@") != -1) {
            mnflaghd.split("@").forEach((item) => {

                mnflaghdArr.push(item);
            });
        } else if (mnflaghd.indexOf("\n") != -1) {
            mnflaghd.split("\n").forEach((item) => {
                mnflaghdArr.push(item);
            });
        } else {
            mnflaghdArr.push(mnflaghd);
        }
    } else {
        log(`\n 【${$.name}】：未填写变量 mnflaghd`)
        return;
    }

    return true;
}
function addNotifyStr(str, is_log = true) {
    if (is_log) {
        log(`${str}\n`)
    }
    msg += `${str}\n`
}
	function md5(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}
// ============================================发送消息============================================ \\
async function SendMsg(message) {
    if (!message)
        return;

    if (Notify > 0) {
        if ($.isNode()) {
            var notify = require('./sendNotify');
            await notify.sendNotify($.name, message);
        } else {
            $.msg(message);
        }
    } else {
        log(message);
    }
}
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}   