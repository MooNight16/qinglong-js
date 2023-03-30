/*

微信阅读
阅读入口，复制链接微信打开
https://sgyd.twyd.site/user?refererUserUuid=b247b189704f4ff5bea792425c87bd56

变量名称：qwyd

抓包获取cookie ，关键词_JSID= 
多账号换行或者@隔开
_JSID@_JSID@_JSID

每1小时刷新一轮25篇文章
定时一小时一次 一天跑6次
检测不知道，待测试...
cron:17 5-15 * * *
绑定二维码后自动提现
* 
* 　　　┏┓　　　┏┓
* 　　┏┛┻━━━┛┻┓
* 　　┃　　　　　　　┃ 　
* 　　┃　　　━　　　┃
* 　　┃　┳┛　┗┳　┃
* 　　┃　　　　　　　┃
* 　　┃　　　┻　　　┃
* 　　┃　　　　　　　┃
* 　　┗━┓　　　┏━┛
* 　　　　┃　　　┃神兽保佑
* 　　　　┃　　　┃代码无BUG！
* 　　　　┃　　　┗━━━┓
* 　　　　┃　　　　　　　┣┓
* 　　　　┃　　　　　　　┏┛
* 　　　　┗┓┓┏━┳┓┏┛
* 　　　　　┃┫┫　┃┫┫
* 　　　　　┗┻┛　┗┻┛
*
*
*/


const $ = new Env("趣味阅读");
const notify = $.isNode() ? require('./sendNotify') : '';
let envSplitor = ['@', '\n']
let httpResult, httpReq, httpResp
let ckName = 'qwyd'
let userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || '';
let userList = []
let userIdx = 0
let userCount = 0
var msg = ''
let newurl = "https://sg.dgtzyd.cn"
///////////////////////////////////////////////////////////////////
class UserInfo {
    constructor(str, id) {
        this.index = ++userIdx,
            this.idx = `账号[${this.index}] `,
            this.ck = "_JSID=" + str//.split('#'), this.u = this.ck[0], this.t = this.ck[1]
        this.userid = id
    }

    async getreadurl() {
        try {
            //用户领取任务
            let t = Date.now()
            // this.ul = newurl;
            let url = newurl + "/user/getUserTaskInfo?typeCode=mpArticleReader&t=" + t;
            let urlObject = popu(url, '', this.ck)
            await httpRequest('get', urlObject)
            let result = httpResult;
            if (result.success && !result.msg) {
                // console.log(result.msg + ",任务id:" + result.data.user_task_id)
                await this.read(result.token)
            }
            else {
                console.log(result.msg)
            }
            /*
            "1" == result.info.type && 1 !== this.dx && (console.log(`文章获取成功 `), this.b = 1, await $.wait(1000), await this.readfinish()),
                "3" == result.info.type && 1 !== this.dx && (console.log(`已限制阅读   尝试过验证`), this.x = result.info.key, this.c = result.info.url.split("/s/")[1], this.b = 2,
                    await $.wait(6000), await this.readfinish());
                    */
        } catch (e) {
            console.log(e)
        }
    }

    //提交任务
    async read(token) {
        try {
            //readurl = decodeURIComponent(readurl);
            let t = Date.now()
            let url = `${newurl}/reader/goMpArticle?token=${token}&_t=${t}`;
            let urlObject = popu(url, '', this.ck)
            await httpRequest('get', urlObject)
            let result = httpResult;
            if (result) {
                console.log(result);
                if (result.indexOf("<title>提示信息</title>") > -1) {
                    return;
                }
                else if (result.indexOf("<script>window.location.href=") > -1) {
                    let jump = result.replace("<script>window.location.href=", "").replace("'<\/script>", "")
                    console.log(jump);
                    urlObject = popu(jump, '', 'PHPSESSID=d0tjnbftcpqiaj8km6kin8e46k; udtauth7=c5f6FtPUHWgfvZ1GZFDsSXY%2BQgMZbw2eXYkEQgDl%2FxFX7oVTwpuB4KBeDsIOXPMyvJGrAZnvUZdiD0eeNeFP1T1lz7xKGLkBPu5Cy4bDO45p0L9e8QaPC3liFgdyyxnsWyVe7HF7uOikA5mh8b6ZCF%2ByersscAHYgBUGT46NZoo')
                    await httpRequest('get', urlObject)
                    console.log("出现检测，尝试过检测，请重新阅读尝试。")
                    return;
                }
                else {
                    return;
                }
            }

            var sj = Math.random() * 20000 + 6000

            //等待时间提交
            await $.wait(sj)
            t = Date.now()
            url = newurl + "/user/getUserTaskInfo?typeCode=mpArticleReader&t=" + t;
            urlObject = popu(url, '', this.ck)
            await httpRequest('get', urlObject)
            result = httpResult;
            // console.log(result);
            if (result.success && !result.msg) {
                //获取用户阅读金额
                console.log('阅读成功金币+120')
                await this.read(result.token)
                // console.log(result.msg)
            }
            else {
                console.log(result.msg)
            }
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }

    async getmoney() {
        try {
            let t = Date.now()
            let url = newurl + "/user/getUserInfo?t=" + t;
            let urlObject = popu(url, '', this.ck)
            await httpRequest('get', urlObject)
            let result = httpResult;
            if (result.success) {
                console.log(`\n当前账号余额 ${result.data.totalCoin}金币 \n`)
                if (result.data.totalCoin < 3000) {
                    console.log(`不满足0.3 提现门槛`)
                }
                else {
                    console.log(`去提现0.3元。。。。。。`)
                    await this.doWithdraw()
                }
            }
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }

    async doWithdraw() {
        try {
            let t = Date.now()
            let url = newurl + "/user/userCoinDraw?drawUuid=674e0f17e3e34cefae57b8d087f2b550&t=" + t;
            let urlObject = popu(url, '', this.ck)
            await httpRequest('get', urlObject)
            let result = httpResult;
            console.log(result)

        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }

    async task() {
        console.log(`\n=========== ${this.idx} 开始阅读文章 ===========\n`)
        //构建请求体
        try {
            let t = Date.now()
            let url = newurl + "/user/getUserInfo?t=" + t;
            // let body = { act: "getUserInfoByID", passport: this.ck, userid: this.userid }
            let urlObject = popu(url, '', this.ck)
            await httpRequest('get', urlObject)
            let result = httpResult;
            // console.log(JSON.stringify(result));
            if (result.success) {
                // console.log("账号登陆成功！");
                await this.getreadurl()
                await this.getmoney()
            }
            else {
                console.log(JSON.stringify(result));
                msg += `\n${this.idx}${this.userid}微信阅读账号失效`
            }
        } catch (e) {
            console.log(e);
            msg += `\n${this.idx}${this.userid}微信阅读账号失效`
        } finally {
            return Promise.resolve(1);
        }
    }
}


!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite()
    } else {

        if (!(await checkEnv())) {
            console.log('环境变量错误，检查环境变量后在执行')
            return;
        }

        if (userList.length > 0) {

            //  console.log('获取到newurl：'+newurl)
            for (let user of userList) {
                // await gethost(user.ck,user.userid)
                await user.task()
            }
            //  if (msg) await notify.sendNotify('微信阅读检测',msg)
        }
    }
})()
    .catch((e) => console.log(e))
    .finally(() => $.done())

///////////////////////////////////////////////////////////////////


//获取环境变量的ck 放到userList中去
async function checkEnv() {
    if (userCookie) {
        let splitor = envSplitor[0];
        for (let sp of envSplitor) {
            if (userCookie.indexOf(sp) > -1) {
                splitor = sp;
                break;
            }
        }
        for (let userCookies of userCookie.split(splitor)) {
            if (userCookies) {
                if (userCookies.indexOf('&') > -1) {
                    ck = userCookies.split('&')
                    userList.push(new UserInfo(ck[0], ck[1]))
                }
                else {
                    userList.push(new UserInfo(userCookies, userCookies.split('.')[0]))
                }
            }
        }
        userCount = userList.length
    } else {
        console.log(`找到[${ckName}] 变量 配置错误`)
        return false
    }
    console.log(`找到[${ckName}] 变量 ${userCount}个账号`)

    return true
}

////////////////////////////////////////////////////////////////////

//组装请求头
function popu(url, body = '', ck) {
    let host = url.replace('//', '/').split('/')[1]
    let urlObject = {
        url: url,
        headers: {
            "Host": host,
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; M2012K11AC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4425 MMWEBSDK/20221206 Mobile Safari/537.36 MMWEBID/4883 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
            "Accept": "*/*",
            "Referer": newurl,
            "Cookie": ck,
            "x-requested-with": "com.tencent.mm"
        },
        timeout: 6000
    }
    return urlObject;
}
function popugethost(url, body = '') {
    let host = url.replace('//', '/').split('/')[1]
    let urlObject = {
        url: url,
        headers: {
            "Host": host,
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "http://read.imoney888.shop",
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; M2012K11AC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4425 MMWEBSDK/20221206 Mobile Safari/537.36 MMWEBID/4883 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
            "Accept": "*/*",
            "Referer": "http://read.imoney888.shop"
        },
        form: body,
        timeout: 6000,
    }
    return urlObject;
}

async function httpRequest(method, url) {
    //console.log(url)
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                } else {
                    if (resp.body) {
                        if (typeof resp.body == "object") {
                            httpResult = resp.body;
                        } else {
                            try {
                                httpResult = JSON.parse(resp.body);
                            } catch (e) {
                                httpResult = resp.body;
                            }
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
}
////////////////////////////////////////////////////////////////////
function Env(a, b) {
    return "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0), new class {
        constructor(a, b) {
            this.name = a, this.notifyStr = "", this.startTime = (new Date).getTime(), Object.assign(this, b), console.log(`${this.name} 开始运行：
`)
        } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } getdata(b) { let a = this.getval(b); if (/^@/.test(b)) { let [, c, f] = /^@(.*?)\.(.*?)$/.exec(b), d = c ? this.getval(c) : ""; if (d) try { let e = JSON.parse(d); a = e ? this.lodash_get(e, f, "") : a } catch (g) { a = "" } } return a } setdata(c, d) { let a = !1; if (/^@/.test(d)) { let [, b, e] = /^@(.*?)\.(.*?)$/.exec(d), f = this.getval(b), i = b ? "null" === f ? null : f || "{}" : "{}"; try { let g = JSON.parse(i); this.lodash_set(g, e, c), a = this.setval(JSON.stringify(g), b) } catch (j) { let h = {}; this.lodash_set(h, e, c), a = this.setval(JSON.stringify(h), b) } } else a = this.setval(c, d); return a } getval(a) { return this.isSurge() || this.isLoon() ? $persistentStore.read(a) : this.isQuanX() ? $prefs.valueForKey(a) : this.isNode() ? (this.data = this.loaddata(), this.data[a]) : this.data && this.data[a] || null } setval(b, a) { return this.isSurge() || this.isLoon() ? $persistentStore.write(b, a) : this.isQuanX() ? $prefs.setValueForKey(b, a) : this.isNode() ? (this.data = this.loaddata(), this.data[a] = b, this.writedata(), !0) : this.data && this.data[a] || null } send(b, a, f = () => { }) { if ("get" != b && "post" != b && "put" != b && "delete" != b) { console.log(`无效的http方法：${b}`); return } if ("get" == b && a.headers ? (delete a.headers["Content-Type"], delete a.headers["Content-Length"]) : a.body && a.headers && (a.headers["Content-Type"] || (a.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon()) { this.isSurge() && this.isNeedRewrite && (a.headers = a.headers || {}, Object.assign(a.headers, { "X-Surge-Skip-Scripting": !1 })); let c = { method: b, url: a.url, headers: a.headers, timeout: a.timeout, data: a.body }; "get" == b && delete c.data, $axios(c).then(a => { let { status: b, request: c, headers: d, data: e } = a; f(null, c, { statusCode: b, headers: d, body: e }) }).catch(a => console.log(a)) } else if (this.isQuanX()) a.method = b.toUpperCase(), this.isNeedRewrite && (a.opts = a.opts || {}, Object.assign(a.opts, { hints: !1 })), $task.fetch(a).then(a => { let { statusCode: b, request: c, headers: d, body: e } = a; f(null, c, { statusCode: b, headers: d, body: e }) }, a => f(a)); else if (this.isNode()) { this.got = this.got ? this.got : require("got"); let { url: d, ...e } = a; this.instance = this.got.extend({ followRedirect: !1 }), this.instance[b](d, e).then(a => { let { statusCode: b, request: c, headers: d, body: e } = a; f(null, c, { statusCode: b, headers: d, body: e }) }, b => { let { message: c, response: a } = b; f(c, a, a && a.body) }) } } time(a) { let b = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "h+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; for (let c in /(y+)/.test(a) && (a = a.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))), b) new RegExp("(" + c + ")").test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? b[c] : ("00" + b[c]).substr(("" + b[c]).length))); return a } async showmsg() { if (!this.notifyStr) return; let a = this.name + " \u8FD0\u884C\u901A\u77E5\n\n" + this.notifyStr; if ($.isNode()) { var b = require("./sendNotify"); console.log("\n============== \u63A8\u9001 =============="), await b.sendNotify(this.name, a) } else this.msg(a) } logAndNotify(a) { console.log(a), this.notifyStr += a, this.notifyStr += "\n" } msg(d = t, a = "", b = "", e) { let f = a => { if (!a) return a; if ("string" == typeof a) return this.isLoon() ? a : this.isQuanX() ? { "open-url": a } : this.isSurge() ? { url: a } : void 0; if ("object" == typeof a) { if (this.isLoon()) { let b = a.openUrl || a.url || a["open-url"], c = a.mediaUrl || a["media-url"]; return { openUrl: b, mediaUrl: c } } if (this.isQuanX()) { let d = a["open-url"] || a.url || a.openUrl, e = a["media-url"] || a.mediaUrl; return { "open-url": d, "media-url": e } } if (this.isSurge()) return { url: a.url || a.openUrl || a["open-url"] } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(d, a, b, f(e)) : this.isQuanX() && $notify(d, a, b, f(e))); let c = ["", "============== \u7CFB\u7EDF\u901A\u77E5 =============="]; c.push(d), a && c.push(a), b && c.push(b), console.log(c.join("\n")) } getMin(a, b) { return a < b ? a : b } getMax(a, b) { return a < b ? b : a } padStr(e, b, f = "0") { let a = String(e), g = b > a.length ? b - a.length : 0, c = ""; for (let d = 0; d < g; d++)c += f; return c + a } json2str(b, e, f = !1) { let c = []; for (let d of Object.keys(b).sort()) { let a = b[d]; a && f && (a = encodeURIComponent(a)), c.push(d + "=" + a) } return c.join(e) } str2json(e, f = !1) { let d = {}; for (let a of e.split("#")) { if (!a) continue; let b = a.indexOf("="); if (-1 == b) continue; let g = a.substr(0, b), c = a.substr(b + 1); f && (c = decodeURIComponent(c)), d[g] = c } return d } randomString(d, a = "abcdef0123456789") { let b = ""; for (let c = 0; c < d; c++)b += a.charAt(Math.floor(Math.random() * a.length)); return b } randomList(a) { let b = Math.floor(Math.random() * a.length); return a[b] } wait(a) { return new Promise(b => setTimeout(b, a)) } done(a = {}) {
            let b = (new Date).getTime(), c = (b - this.startTime) / 1e3; console.log(`
${this.name} 运行结束，共运行了 ${c} 秒！`), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(a)
        }
    }(a, b)
}
