/*
[MITM]
hostname = oto.yunw2.cn
oto.yunw2.cn/app/index.php url script-request-header https://kireinasakura.coding.net/p/could/d/there/git/raw/master/zl.js

打开小程序 自动获取ck


无圈×   手动抓包   

抓包查看域名  oto.yunw2.cn   网址链接中token数值

变量zlcookie

定时  4小时一次  

青龙    配置
export zlcookie='抓到的token数值'

例如
export zlcookie='123xxx'

多账号回车隔开

脚本地址
https://kireinasakura.coding.net/p/could/d/there/git/raw/master/zl.js
*/

const $ = new Env("走路");
let envSplitor = ['\n']
let httpResult, httpReq, httpResp
let userCookie = ($.isNode() ? process.env.zlcookie : $.getdata('zlcookie')) || '';
let userList = []
let userIdx = 0
let userCount = 0
let defaultUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/4G Language/zh_CN'
///////////////////////////////////////////////////////////////////
class UserInfo {
	constructor(str) {
		this.index = ++userIdx
		this.name = this.index
		this.valid = false
		try {
			this.ck = str
			this.ckValid = true
		} catch (e) {
			this.ckValid = false
			$.logAndNotify(`账号[${this.index}]CK无效，请检查格式`)
		}
	}





	async kong() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=suspension&m=bh_step&sign=${this.sign}&token=${this.ck}&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;

			console.log(`账号[${this.name}] ` + ` 当前步数 ` + result.info.toady.step)
			//console.log(`${JSON.stringify(result)}`)
			for (let i = 1; i < 2; i++) {
				this.today = result.info.currency[0].id
				await this.k()
			}



			this.video = result.info.videoAd[0].id
			await this.videoAd()
			this.ta = result.info.task[0].id
			await this.ta()
			await this.ch()
		} catch (e) {
			//console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}

	async k() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=receive&m=bh_step&sign=${this.sign}&token=${this.ck}&id=${this.today}&formid=1ceec2ae26c14ba0a8041665e65d43a9&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
			if (result.status == 1) {
				console.log(`账号[${this.name}] 领取步数币ID ${this.today} 增加至->` + result.info)
			} else console.log(`账号[${this.name}] 领取步数币ID  ${this.today}` + result.info)
		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}

	async ex() {
		try {
			for (let i = 7; i <= 9; i++) {
				this.id = i
				if (this.id == 7) this.x = '1元'
				if (this.id == 8) this.x = '8元'
				if (this.id == 9) this.x = '10元'
				await this.exchange()
			}

		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}

	async exchange() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=exchange&m=bh_step&sign=${this.sign}&token=${this.ck}&id=${this.id}&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;

			if (result.status == 1) {
				console.log(`账号[${this.name}] 兑现 ${this.x}  ` + result.info)
			} else console.log(`账号[${this.name}] 兑现  ${this.x}  ` + result.info)
		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}

	async check() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=my&m=bh_step&sign=${this.sign}&token=${this.ck}&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
			if (result.status == 1) {
				this.nickname = result.info.nickname
				console.log(`账号[${this.name}] \n账号: ${this.nickname} 余额` + result.info.money + `元 \n我的步数币 ` + result.info.currency + `个\n`)
			}
		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}


	async videoAd() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=receive&m=bh_step&sign=${this.sign}&token=${this.ck}&id=${this.video}&formid=1ceec2ae26c14ba0a8041665e65d43a9&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
			if (result.status == 1) {
				console.log(`账号[${this.name}] 领取视频步数币 增加至->` + result.info)
			} else console.log(`账号[${this.name}] 领取视频步数币 ` + result.info)
		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}

	async ta() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=receive&m=bh_step&sign=${this.sign}&token=${this.sign}&id=${this.ta}&formid=1ceec2ae26c14ba0a8041665e65d43a9&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
			if (result.status == 1) {
				console.log(`账号[${this.name}] 领取早起步数币 增加至->` + result.info)
			} else console.log(`账号[${this.name}] 领取早起步数币 ` + result.info)

		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}






	async ch() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=sigin&m=bh_step&sign=${this.sign}&token=${this.ck}&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;

			if (result.status == 1) {
				console.log(`账号[${this.name}] 签到 成功`)

			}
			await this.dou()
		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}


	async dou() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=signinDouble&m=bh_step&sign=${this.sign}&token=${this.ck}&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;

			if (result.status == 1) {
				console.log(`账号[${this.name}] 翻倍签到 成功`)
			} else if (result.status == 2) console.log(`账号[${this.name}] 翻倍签到 已翻倍`)

		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}


	async taskday() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=task&m=bh_step&sign=${this.sign}&token=${this.ck}&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
			for (let i = 1; i < 10; i++) {
				this.id = i
				await this.tas()
			}
			for (let i = 1; i <= 5; i++) {
				this.id = i
				await this.bagx()
			}
		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}


	async tas() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=taskComplete&m=bh_step&sign=${this.sign}&token=${this.ck}&task_id=${this.id}&form=1&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
			if (result.status == 1) {
				console.log(`账号[${this.name}] 领取步数币ID ${this.id} 增加至->` + result.info)
			}


		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}


	async bagx() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=bag&m=bh_step&sign=${this.sign}&frequency=${this.id}&token=${this.ck}&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
			if (result.status == 1) {
				console.log(`账号[${this.name}] 领现金ID ${this.id} 增加至->` + result.info)
			}

		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}

	async bag() {
		try {

			let url = `https://oto.yunw2.cn/app/index.php?i=270&t=0&v=3.10&from=wxapp&c=entry&a=wxapp&do=shareBag&m=bh_step&sign=${this.sign}&token=${this.ck}&version=3.2.49`
			let body = ``
			let urlObject = populateUrlObject(url, body)
			await httpRequest('get', urlObject)
			let result = httpResult;
			if (result.status == 1) {
				console.log(`\n账号[${this.name}] 领现金 下次领现金需等待` + result.info[0].cooling + ` 小时`)
				console.log(`\n账号[${this.name}] 领现金 下次领现金需等待` + result.info[1].cooling + ` 小时`)
			}

		} catch (e) {
			console.log(e)
		} finally {
			return Promise.resolve(1);
		}
	}




}!(async () => {
	if (typeof $request !== "undefined") {
		await GetRewrite()
	} else {
		if (!(await checkEnv())) return;
		let taskall = []
		let validList = userList.filter(x => x.ckValid)
		if (validList.length > 0) {
			console.log('\n-------------- 账号 --------------')
			taskall = []
			for (let user of validList) {
				taskall.push(user.check())
			}
			await Promise.all(taskall)

			console.log('-------------- 兑现 --------------')
			taskall = []
			for (let user of validList) {
				taskall.push(user.ex())
			}
			await Promise.all(taskall)

			console.log('\n-------------- 资料 --------------')
			taskall = []
			for (let user of validList) {
				taskall.push(user.kong())
			}
			await Promise.all(taskall)

			console.log('\n-------------- 领取 --------------')
			taskall = []
			for (let user of validList) {
				taskall.push(user.taskday())
			}
			await Promise.all(taskall)

			console.log('\n-------------- 领现金 --------------')
			taskall = []
			for (let user of validList) {
				taskall.push(user.bag())
			}
			await Promise.all(taskall)

		}
		await $.showmsg();
		console.log('\nps: 领步数红包如果没成功则不打印，\n    默认不领取话费，只兑换现金')
	}
})()
.catch((e) => console.log(e))
	.finally(() => $.done())
///////////////////////////////////////////////////////////////////
async function GetRewrite() {
	if ($request.url.indexOf(`app/index.php?`) > -1) {
		if (!$request.headers) return;
		let token = $request.url.match(/token=(\w+)/)[1]
		let ck = `${token}`
		console.log(ck)
		if (userCookie) {
			if (userCookie.indexOf(ck) == -1) {
				userCookie = userCookie + '\n' + ck
				$.setdata(userCookie, 'zlcookie');
				ckList = userCookie.split('\n')
				$.msg(`获取第${ckList.length}个ck成功: ${ck}`)
			}
		} else {
			$.setdata(ck, 'zlcookie');
			$.msg(`获取第1个ck成功: ${ck}`)
		}
	}
}
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
			if (userCookies) userList.push(new UserInfo(userCookies))
		}
		userCount = userList.length
	} else {
		console.log('未找到CK')
		return;
	}
	console.log(`共找到${userCount}个账号`)
	return true
}
////////////////////////////////////////////////////////////////////
function populateUrlObject(url, body = '') {
	let host = url.replace('//', '/')
		.split('/')[1]
	let urlObject = {
		url: url,
		headers: {
			'Host': host,
			'Referer': "https://servicewechat.com/wx4281030da97b2e0e/2/page-frame.html",
			'Connection': "keep-alive",
			'Content-Type': "application/x-www-form-urlencoded",
			'User-Agent': defaultUA,
		},
		timeout: 5000,
	}
	//console.log(`${JSON.stringify(urlObject)}`)
	if (body) {
		urlObject.body = body
	}
	return urlObject;
}

function MD5Encrypt(a) {
	function b(a, b) {
		return a << b | a >>> 32 - b
	}

	function c(a, b) {
		var c, d, e, f, g;
		return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
	}

	function d(a, b, c) {
		return a & b | ~a & c
	}

	function e(a, b, c) {
		return a & c | b & ~c
	}

	function f(a, b, c) {
		return a ^ b ^ c
	}

	function g(a, b, c) {
		return b ^ (a | ~c)
	}

	function h(a, e, f, g, h, i, j) {
		return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e)
	}

	function i(a, d, f, g, h, i, j) {
		return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d)
	}

	function j(a, d, e, g, h, i, j) {
		return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d)
	}

	function k(a, d, e, f, h, i, j) {
		return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d)
	}

	function l(a) {
		for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
		return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
	}

	function m(a) {
		var b, c, d = "",
			e = "";
		for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
		return d
	}

	function n(a) {
		a = a.replace(/\r\n/g, "\n");
		for (var b = "", c = 0; c < a.length; c++) {
			var d = a.charCodeAt(c);
			128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
		}
		return b
	}
	var o, p, q, r, s, t, u, v, w, x = [],
		y = 7,
		z = 12,
		A = 17,
		B = 22,
		C = 5,
		D = 9,
		E = 14,
		F = 20,
		G = 4,
		H = 11,
		I = 16,
		J = 23,
		K = 6,
		L = 10,
		M = 15,
		N = 21;
	for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
	var O = m(t) + m(u) + m(v) + m(w);
	return O.toLowerCase()
}

function encrypt() {
	let timestamp = new Date()
	let sign = ''
	let key = "vvFhwN1vVNZMSW"
	let sion = `3249`
	let tmpstr = timestamp + key + sion
	sign = MD5Encrypt(tmpstr)
	return sign
}
async function httpRequest(method, url) {
	httpResult = null, httpReq = null, httpResp = null;
	return new Promise((resolve) => {
		$.send(method, url, async (err, req, resp) => {
			try {
				httpReq = req;
				httpResp = resp;
				if (err) {
					console.log(`${method}请求失败`);
					console.log(JSON.stringify(err));
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
function Env(name, env) {
	"undefined" != typeof process && JSON.stringify(process.env)
		.indexOf("GITHUB") > -1 && process.exit(0);
	return new class {
		constructor(name, env) {
			this.name = name;
			this.notifyStr = '';
			this.startTime = (new Date)
				.getTime();
			Object.assign(this, env);
			console.log(`${this.name} 开始运行：\n`);
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
		getdata(t) {
			let e = this.getval(t);
			if (/^@/.test(t)) {
				const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
					r = s ? this.getval(s) : "";
				if (r)
					try {
						const t = JSON.parse(r);
						e = t ? this.lodash_get(t, i, "") : e
					}
				catch (t) {
					e = ""
				}
			}
			return e
		}
		setdata(t, e) {
			let s = !1;
			if (/^@/.test(e)) {
				const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
					o = this.getval(i),
					h = i ? "null" === o ? null : o || "{}" : "{}";
				try {
					const e = JSON.parse(h);
					this.lodash_set(e, r, t),
						s = this.setval(JSON.stringify(e), i)
				} catch (e) {
					const o = {};
					this.lodash_set(o, r, t),
						s = this.setval(JSON.stringify(o), i)
				}
			} else {
				s = this.setval(t, e);
			}
			return s
		}
		getval(t) {
			return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
		}
		setval(t, e) {
			return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
		}
		send(m, t, e = (() => {})) {
			if (m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
				console.log(`无效的http方法：${m}`);
				return;
			}
			if (m == 'get' && t.headers) {
				delete t.headers["Content-Type"];
				delete t.headers["Content-Length"];
			} else if (t.body && t.headers) {
				if (!t.headers["Content-Type"]) t.headers["Content-Type"] = "application/x-www-form-urlencoded";
			}
			if (this.isSurge() || this.isLoon()) {
				if (this.isSurge() && this.isNeedRewrite) {
					t.headers = t.headers || {};
					Object.assign(t.headers, {
						"X-Surge-Skip-Scripting": !1
					});
				}
				let conf = {
					method: m,
					url: t.url,
					headers: t.headers,
					timeout: t.timeout,
					data: t.body
				};
				if (m == 'get') delete conf.data
				$axios(conf)
					.then(t => {
						const {
							status: i,
							request: q,
							headers: r,
							data: o
						} = t;
						e(null, q, {
							statusCode: i,
							headers: r,
							body: o
						});
					})
					.catch(err => console.log(err))
			} else if (this.isQuanX()) {
				t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
						hints: !1
					})),
					$task.fetch(t)
					.then(t => {
						const {
							statusCode: i,
							request: q,
							headers: r,
							body: o
						} = t;
						e(null, q, {
							statusCode: i,
							headers: r,
							body: o
						})
					}, t => e(t))
			} else if (this.isNode()) {
				this.got = this.got ? this.got : require("got");
				const {
					url: s,
					...i
				} = t;
				this.instance = this.got.extend({
					followRedirect: false
				});
				this.instance[m](s, i)
					.then(t => {
						const {
							statusCode: i,
							request: q,
							headers: r,
							body: o
						} = t;
						e(null, q, {
							statusCode: i,
							headers: r,
							body: o
						})
					}, t => {
						const {
							message: s,
							response: i
						} = t;
						e(s, i, i && i.body)
					})
			}
		}
		time(t) {
			let e = {
				"M+": (new Date)
					.getMonth() + 1,
				"d+": (new Date)
					.getDate(),
				"h+": (new Date)
					.getHours(),
				"m+": (new Date)
					.getMinutes(),
				"s+": (new Date)
					.getSeconds(),
				"q+": Math.floor(((new Date)
					.getMonth() + 3) / 3),
				S: (new Date)
					.getMilliseconds()
			};
			/(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date)
					.getFullYear() + "")
				.substr(4 - RegExp.$1.length)));
			for (let s in e)
				new RegExp("(" + s + ")")
				.test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s])
					.substr(("" + e[s])
						.length)));
			return t
		}
		async showmsg() {
			if (!this.notifyStr) return;
			let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
			if ($.isNode()) {
				var notify = require('./sendNotify');
				console.log('\n============== 推送 ==============')
				await notify.sendNotify(this.name, notifyBody);
			} else {
				this.msg(notifyBody);
			}
		}
		logAndNotify(str) {
			console.log(str)
			this.notifyStr += str
			this.notifyStr += '\n'
		}
		msg(e = t, s = "", i = "", r) {
			const o = t => {
				if (!t)
					return t;
				if ("string" == typeof t)
					return this.isLoon() ? t : this.isQuanX() ? {
							"open-url": t
						} :
						this.isSurge() ? {
							url: t
						} :
						void 0;
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
			this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
			let h = ["", "============== 系统通知 =============="];
			h.push(e),
				s && h.push(s),
				i && h.push(i),
				console.log(h.join("\n"))
		}
		getMin(a, b) {
			return ((a < b) ? a : b)
		}
		getMax(a, b) {
			return ((a < b) ? b : a)
		}
		padStr(num, length, padding = '0') {
			let numStr = String(num)
			let numPad = (length > numStr.length) ? (length - numStr.length) : 0
			let retStr = ''
			for (let i = 0; i < numPad; i++) {
				retStr += padding
			}
			retStr += numStr
			return retStr;
		}
		json2str(obj, c, encodeUrl = false) {
			let ret = []
			for (let keys of Object.keys(obj)
				.sort()) {
				let v = obj[keys]
				if (v && encodeUrl) v = encodeURIComponent(v)
				ret.push(keys + '=' + v)
			}
			return ret.join(c);
		}
		str2json(str, decodeUrl = false) {
			let ret = {}
			for (let item of str.split('&')) {
				if (!item) continue;
				let idx = item.indexOf('=')
				if (idx == -1) continue;
				let k = item.substr(0, idx)
				let v = item.substr(idx + 1)
				if (decodeUrl) v = decodeURIComponent(v)
				ret[k] = v
			}
			return ret;
		}
		randomString(len, charset = 'abcdef0123456789') {
			let str = '';
			for (let i = 0; i < len; i++) {
				str += charset.charAt(Math.floor(Math.random() * charset.length));
			}
			return str;
		}
		randomList(a) {
			let idx = Math.floor(Math.random() * a.length)
			return a[idx]
		}
		wait(t) {
			return new Promise(e => setTimeout(e, t))
		}
		done(t = {}) {
			const e = (new Date)
				.getTime(),
				s = (e - this.startTime) / 1e3;
			console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
			if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
		}
	}(name, env)
}
