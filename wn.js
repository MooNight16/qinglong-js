/*
@jzack 

蜗牛 【自动提现，自动领取企业微信1000金币，扫任务ID】

如抓包后重新打开网页数据失效

项目地址 https://lh100-1253806495.cos.ap-beijing.myqcloud.com/index.html?carteamflg=100036&extflg=30182

抓包任意 https://api.shandian.shandianyueche.com/task/Task.php 请求 passport的值。

例 30583.1678933602.66d35918ffe0e3aaa1a45d2a8f40ce36.LNw54w 多账户换行 或者 @ 分割 

变量名 wnck   一天一次或者一天2次 12或者6小时一次

脚本第30行 const CAHSADD = "0.3";  此处为提现金额  大于0.3才提现 可自己修改

可随意修改脚本  转发请留作者名 
*/
const $ = new Env("蜗牛");
let envSplitor = ["@", "\n"];
let httpResult, httpReq, httpResp;
let userCookie =
   ($.isNode() ? process.env["wnck"] : $.getdata("wnck")) ||
   "";
let userList = [],
   userIdx = 0,
   userCount = 0;
const method = "post";
const CAHSADD = "0.3";//提现金额
///////////////////////////////////////////////////////////////////
class UserInfo {
   constructor(str) {
      this.index = ++userIdx;
      this.idx = `账号 [${this.index}] `;
      this.u = str.split(".")[0];
      this.k = str;
      this.url = `https://api.shandian.shandianyueche.com/task/Task.php`;
   }
   async addUserMoneyCash() {
      const body = `act=addUserMoneyCash&money=${this.cash}&password=&type=2&cash_type=6&passport=${this.k}`;
      await httpRequest(method, popu(this.url, body));
      let result = httpResult;
      if (result.code == 0) {
         console.log(`${this.idx}提现：${JSON.stringify(result)}`);
      } else {
         console.log(`${this.idx}提现：${JSON.stringify(result.msg)}`);
      }
   }
   async getUserMoneyAccounts() {
      const body = `act=getUserMoneyAccounts&passport=${this.k}`;
      await httpRequest(method, popu(this.url, body));
      let result = httpResult;
      if (result.ret == "succ") {
         this.cash = (result.money_account.read_money * 0.01).toFixed(2);
         console.log(`${this.idx}查询：余额${this.cash}`);
         if (this.cash > CAHSADD) await this.addUserMoneyCash();
         this.f = 1;
      } else {
         console.log(
            `${this.idx}${JSON.stringify(
               result.msg
            )} 原因：填错了 或者抓到后又重新打开网页了`
         );
      }
   }
   async userDrawReadTaskBaidu(a) {
      const body = `act=userDrawReadTaskBaidu&task_id=${a}&passport=${this.k}`;
      await httpRequest(method, popu(this.url, body));
      let result = httpResult;
      if (result.code == 0) {
         console.log(`${this.idx}领取：${a}` + result.msg);
         this.id = result.data.user_task_id;
         result.msg == "任务领取成功" &&
            (await $.wait(15080), await this.finishUserReadTaskBaidu());
      }
   }

   async finishUserReadTaskBaidu() {
      const body = `act=finishUserReadTaskBaidu&user_task_id=${this.id}&passport=${this.k}`;
      await httpRequest(method, popu(this.url, body));
      let result = httpResult;
      if (result.code == 0) {
         console.log(`${this.idx}阅读：阅读成功增加100金币`);
         await this.getUserMoneyAccounts();
      } else {
         console.log(`${this.idx}${JSON.stringify(result)}`);
      }
   }
   async finishAddCompanyWexinReward() {
      const body = `act=finishAddCompanyWexinReward&user_task_id=${this.id}&passport=${this.k}`;
      await httpRequest(method, popu(this.url, body));
      let result = httpResult;
      if (result.code == 0) {
         console.log(`${this.idx}企业：${JSON.stringify(result)}`);
      } else {
         console.log(`${this.idx}企业：${result.msg}`);
      }
   }
   async task() {
      await this.getUserMoneyAccounts();
      if (this.f == 1) {
         await this.finishAddCompanyWexinReward();
         console.log(
            `${this.idx}静默扫任务ID ：扫到后运行领取 一直空白或者等会直接结束就是今天没文章了`
         );
         for (let a of [...new Array(600).keys()]) {
            await this.userDrawReadTaskBaidu(3800 - a);
         }
      }
   }
}
!(async () => {
   if (typeof $request !== "undefined") {
      await GetRewrite();
   } else {
      if (!(await checkEnv())) return;
      if (userList.length > 0) {
         console.log("\n------- 运行 -------\n");
         for (let user of userList) await user.task();
      }
   }
})()
   .catch((e) => console.log(e))
   .finally(() => $.done());

///////////////////////////////////////////////////////////////////
async function GetRewrite() {}

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
         if (userCookies) userList.push(new UserInfo(userCookies));
      }
      userCount = userList.length;
   } else {
   }

   console.log(`找到 ${userCount}个账号`);

   return true;
}
////////////////////////////////////////////////////////////////////
function popu(url, body = "") {
   let urlObject = {
      url: url,
      headers: {
         "Content-Type": `application/x-www-form-urlencoded`,
         Host: `api.shandian.shandianyueche.com`,
      },
      timeout: 1000,
   };
   if (body) {
      urlObject.body = body;
   }

   return urlObject;
}
async function httpRequest(method, url) {
   (httpResult = null), (httpReq = null), (httpResp = null);
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
function Env(e, s) {
   return (
      "undefined" != typeof process &&
         JSON.stringify(process.env).indexOf("GITHUB") > -1 &&
         process.exit(0),
      new (class {
         constructor(e, s) {
            (this.name = e),
               (this.notifyStr = ""),
               (this.startTime = new Date().getTime()),
               Object.assign(this, s),
               console.log(`开始运行：
`);
         }
         isNode() {
            return "undefined" != typeof module && !!module.exports;
         }
         isQuanX() {
            return "undefined" != typeof $task;
         }
         getdata(e) {
            let s = this.getval(e);
            if (/^@/.test(e)) {
               let [, n, i] = /^@(.*?)\.(.*?)$/.exec(e),
                  r = n ? this.getval(n) : "";
               if (r)
                  try {
                     let o = JSON.parse(r);
                     s = o ? this.lodash_get(o, i, "") : s;
                  } catch (l) {
                     s = "";
                  }
            }
            return s;
         }
         setdata(e, s) {
            let n = !1;
            if (/^@/.test(s)) {
               let [, i, r] = /^@(.*?)\.(.*?)$/.exec(s),
                  o = this.getval(i);
               try {
                  let l = JSON.parse(
                     i ? ("null" === o ? null : o || "{}") : "{}"
                  );
                  this.lodash_set(l, r, e),
                     (n = this.setval(JSON.stringify(l), i));
               } catch (a) {
                  let h = {};
                  this.lodash_set(h, r, e),
                     (n = this.setval(JSON.stringify(h), i));
               }
            } else n = this.setval(e, s);
            return n;
         }
         getval(e) {
            return this.isQuanX()
               ? $prefs.valueForKey(e)
               : this.isNode()
               ? ((this.data = this.loaddata()), this.data[e])
               : (this.data && this.data[e]) || null;
         }
         setval(e, s) {
            return this.isQuanX()
               ? $prefs.setValueForKey(e, s)
               : this.isNode()
               ? ((this.data = this.loaddata()),
                 (this.data[s] = e),
                 this.writedata(),
                 !0)
               : (this.data && this.data[s]) || null;
         }
         send(e, s, n = () => {}) {
            if ("get" != e && "post" != e && "put" != e && "delete" != e) {
               console.log(`无效的http方法：${e}`);
               return;
            }
            if (this.isQuanX())
               (s.method = e.toUpperCase()),
                  this.isNeedRewrite &&
                     ((s.opts = s.opts || {}),
                     Object.assign(s.opts, { hints: !1 })),
                  (s.headers.Host = s.url.replace("//", "/").split("/")[1]),
                  "GET" == s.method
                     ? (delete s.headers["content-type"],
                       delete s.headers["Content-type"],
                       delete s.headers["content-Type"],
                       delete s.headers["Content-Length"])
                     : "POST" == s.method &&
                       (delete s.headers["content-type"],
                       delete s.headers["Content-type"],
                       delete s.headers["content-Type"]),
                  s.body && (s.headers["Content-Length"] = s.body.length),
                  $task.fetch(s).then(
                     (e) => {
                        let {
                           statusCode: s,
                           request: i,
                           headers: r,
                           body: o,
                        } = e;
                        n(null, i, { statusCode: s, headers: r, body: o });
                     },
                     (e) => n(e)
                  );
            else if (this.isNode()) {
               this.got = this.got ? this.got : require("got");
               let { url: i, ...r } = s;
               (this.instance = this.got.extend({ followRedirect: !1 })),
                  this.instance[e](i, r).then(
                     (e) => {
                        let {
                           statusCode: s,
                           request: i,
                           headers: r,
                           body: o,
                        } = e;
                        n(null, i, { statusCode: s, headers: r, body: o });
                     },
                     (e) => {
                        let { message: s, request: i, response: r } = e;
                        n(s, i, r);
                     }
                  );
            }
         }
         time(e, s = null) {
            let n = s ? new Date(s) : new Date(),
               i = {
                  "M+": n.getMonth() + 1,
                  "d+": n.getDate(),
                  "h+": n.getHours(),
                  "m+": n.getMinutes(),
                  "s+": n.getSeconds(),
                  "q+": Math.floor((n.getMonth() + 3) / 3),
                  S: this.padStr(n.getMilliseconds(), 3),
               };
            for (let r in (/(y+)/.test(e) &&
               (e = e.replace(
                  RegExp.$1,
                  (n.getFullYear() + "").substr(4 - RegExp.$1.length)
               )),
            i))
               RegExp("(" + r + ")").test(e) &&
                  (e = e.replace(
                     RegExp.$1,
                     1 == RegExp.$1.length
                        ? i[r]
                        : ("00" + i[r]).substr(("" + i[r]).length)
                  ));
            return e;
         }
         msg(e = t, s = "", n = "", i) {
            this.isMute ||
               (this.isQuanX() &&
                  $notify(
                     e,
                     s,
                     n,
                     ((e) => {
                        if (!e) return e;
                        if ("string" == typeof e)
                           return this.isQuanX() ? { "open-url": e } : void 0;
                        if ("object" == typeof e && this.isQuanX()) {
                           return {
                              "open-url": e["open-url"] || e.url || e.openUrl,
                              "media-url": e["media-url"] || e.mediaUrl,
                           };
                        }
                     })(i)
                  ));
            let r = ["", "============== 系统通知 =============="];
            r.push(e),
               s && r.push(s),
               n && r.push(n),
               console.log(r.join("\n"));
         }
         sendlog(str) {
            console.log(str);
            this.notifyStr += str;
            this.notifyStr += "\n";
         }
         async showmsg() {
            if (!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr;
            if ($.isNode()) {
               var notify = require("./sendNotify");
               console.log("\n============== 推送 ==============");
               await notify.sendNotify(this.name, notifyBody);
            } else {
               this.msg(notifyBody);
            }
         }
         randomarr(e) {
            return [...Array(e)].map((e, s) => s + 1);
         }
         ts(s) {
            if (s == 10) {
               let TS = Math.round(new Date().getTime() / 1000).toString();
               return TS;
            } else {
               let TS = new Date().getTime();
               return TS;
            }
         }
         json2str(e, s, n = !1) {
            let i = [];
            for (let r of Object.keys(e).sort()) {
               let o = e[r];
               o && n && (o = encodeURIComponent(o)), i.push(r + "=" + o);
            }
            return i.join(s);
         }
         str2json(e, s = !1) {
            let n = {};
            for (let i of e.split("&")) {
               if (!i) continue;
               let r = i.indexOf("=");
               if (-1 == r) continue;
               let o = i.substr(0, r),
                  l = i.substr(r + 1);
               s && (l = decodeURIComponent(l)), (n[o] = l);
            }
            return n;
         }
         randomPattern(e, s = "abcdef0123456789") {
            let n = "";
            for (let i of e)
               "x" == i
                  ? (n += s.charAt(Math.floor(Math.random() * s.length)))
                  : "X" == i
                  ? (n += s
                       .charAt(Math.floor(Math.random() * s.length))
                       .toUpperCase())
                  : (n += i);
            return n;
         }
         randomString(e, s = "abcdef0123456789") {
            let n = "";
            for (let i = 0; i < e; i++)
               n += s.charAt(Math.floor(Math.random() * s.length));
            return n;
         }
         randomList(e) {
            return e[Math.floor(Math.random() * e.length)];
         }
         padStr(e, s, n = {}) {
            let i = n.padding || "0",
               r = n.mode || "l",
               o = String(e),
               l = s > o.length ? s - o.length : 0,
               a = "";
            for (let h = 0; h < l; h++) a += i;
            return "r" == r ? (o += a) : (o = a + o), o;
         }
         log(e, s = {}) {
            let n = { console: !0 };
            Object.assign(n, s),
               n.time && (e = `[${this.time(n.fmt || "hh:mm:ss")}]` + e),
               n.notify && this.notifyStr.push(e),
               n.console && console.log(e);
         }
         wait(e) {
            return new Promise((s) => setTimeout(s, e));
         }
         done(e = {}) {
            let s = new Date().getTime(),
               n = (s - this.startTime) / 1e3;
            console.log(`
${this.name} 运行结束，共运行了 ${n} 秒！`),
               this.isQuanX() && $done(e);
         }
      })(e, s)
   );
}
