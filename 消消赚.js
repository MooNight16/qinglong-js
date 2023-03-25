/*
抓包https://wx.huanmou.cc域名heders里的token
格式：export huanmou="token=eyJhxxxxxxxx"  多账号换行隔开
*/

const $ = new Env("消消赚");
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义
///////////////////////////////维护参数自行更换//////////////////////////////////
let defaultUA = ''                    //默认UA
let shua = 0;       //刷奖励控制开关 0为关,1为开 默认开启

var version_='jsjiami.com.v7';const _0x927a5d=_0x334f;(function(_0x1b6d4c,_0x5778a0,_0x1c7f3f,_0x5a59be,_0x26f080,_0x33bb22,_0x2dd300){return _0x1b6d4c=_0x1b6d4c>>0x4,_0x33bb22='hs',_0x2dd300='hs',function(_0x599cf4,_0x54eea9,_0x12744b,_0x52dd3e,_0x4b0bd4){const _0x2169dd=_0x334f;_0x52dd3e='tfi',_0x33bb22=_0x52dd3e+_0x33bb22,_0x4b0bd4='up',_0x2dd300+=_0x4b0bd4,_0x33bb22=_0x12744b(_0x33bb22),_0x2dd300=_0x12744b(_0x2dd300),_0x12744b=0x0;const _0xcf4210=_0x599cf4();while(!![]&&--_0x5a59be+_0x54eea9){try{_0x52dd3e=-parseInt(_0x2169dd(0x139,'kq1Y'))/0x1+-parseInt(_0x2169dd(0x224,'&4Bc'))/0x2*(-parseInt(_0x2169dd(0x1ce,'ubXc'))/0x3)+-parseInt(_0x2169dd(0x225,'e1S3'))/0x4+-parseInt(_0x2169dd(0x261,'k#F9'))/0x5+-parseInt(_0x2169dd(0xf5,'%tO4'))/0x6*(-parseInt(_0x2169dd(0x1d4,'Do^]'))/0x7)+parseInt(_0x2169dd(0x14a,'^xSH'))/0x8+-parseInt(_0x2169dd(0x285,'%tO4'))/0x9;}catch(_0x598d3d){_0x52dd3e=_0x12744b;}finally{_0x4b0bd4=_0xcf4210[_0x33bb22]();if(_0x1b6d4c<=_0x5a59be)_0x12744b?_0x26f080?_0x52dd3e=_0x4b0bd4:_0x26f080=_0x4b0bd4:_0x12744b=_0x4b0bd4;else{if(_0x12744b==_0x26f080['replace'](/[LNlWEQXBquGhCOJFwUyS=]/g,'')){if(_0x52dd3e===_0x54eea9){_0xcf4210['un'+_0x33bb22](_0x4b0bd4);break;}_0xcf4210[_0x2dd300](_0x4b0bd4);}}}}}(_0x1c7f3f,_0x5778a0,function(_0x33f33e,_0x5a4501,_0x5054c4,_0x288a39,_0xa0c11c,_0x5b6106,_0x572b08){return _0x5a4501='\x73\x70\x6c\x69\x74',_0x33f33e=arguments[0x0],_0x33f33e=_0x33f33e[_0x5a4501](''),_0x5054c4=`\x72\x65\x76\x65\x72\x73\x65`,_0x33f33e=_0x33f33e[_0x5054c4]('\x76'),_0x288a39=`\x6a\x6f\x69\x6e`,(0x125589,_0x33f33e[_0x288a39](''));});}(0xc00,0x6d178,_0x21b7,0xc2),_0x21b7)&&(version_=_0x21b7);function _0x334f(_0x1e1879,_0x36e8fb){const _0x21b7c3=_0x21b7();return _0x334f=function(_0x334fe8,_0x23e490){_0x334fe8=_0x334fe8-0xec;let _0x7c019b=_0x21b7c3[_0x334fe8];if(_0x334f['fCJlgT']===undefined){var _0x40d4ad=function(_0x4d708a){const _0x583552='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x303964='',_0x599d5f='';for(let _0x26185f=0x0,_0x1454dc,_0x330280,_0x4200bd=0x0;_0x330280=_0x4d708a['charAt'](_0x4200bd++);~_0x330280&&(_0x1454dc=_0x26185f%0x4?_0x1454dc*0x40+_0x330280:_0x330280,_0x26185f++%0x4)?_0x303964+=String['fromCharCode'](0xff&_0x1454dc>>(-0x2*_0x26185f&0x6)):0x0){_0x330280=_0x583552['indexOf'](_0x330280);}for(let _0x52915d=0x0,_0x498431=_0x303964['length'];_0x52915d<_0x498431;_0x52915d++){_0x599d5f+='%'+('00'+_0x303964['charCodeAt'](_0x52915d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x599d5f);};const _0x1fb9a4=function(_0x210e12,_0x4fb236){let _0x214232=[],_0x329007=0x0,_0x294eca,_0x26c9f1='';_0x210e12=_0x40d4ad(_0x210e12);let _0x86168d;for(_0x86168d=0x0;_0x86168d<0x100;_0x86168d++){_0x214232[_0x86168d]=_0x86168d;}for(_0x86168d=0x0;_0x86168d<0x100;_0x86168d++){_0x329007=(_0x329007+_0x214232[_0x86168d]+_0x4fb236['charCodeAt'](_0x86168d%_0x4fb236['length']))%0x100,_0x294eca=_0x214232[_0x86168d],_0x214232[_0x86168d]=_0x214232[_0x329007],_0x214232[_0x329007]=_0x294eca;}_0x86168d=0x0,_0x329007=0x0;for(let _0xfe4d22=0x0;_0xfe4d22<_0x210e12['length'];_0xfe4d22++){_0x86168d=(_0x86168d+0x1)%0x100,_0x329007=(_0x329007+_0x214232[_0x86168d])%0x100,_0x294eca=_0x214232[_0x86168d],_0x214232[_0x86168d]=_0x214232[_0x329007],_0x214232[_0x329007]=_0x294eca,_0x26c9f1+=String['fromCharCode'](_0x210e12['charCodeAt'](_0xfe4d22)^_0x214232[(_0x214232[_0x86168d]+_0x214232[_0x329007])%0x100]);}return _0x26c9f1;};_0x334f['vGxrQN']=_0x1fb9a4,_0x1e1879=arguments,_0x334f['fCJlgT']=!![];}const _0x2c1e7d=_0x21b7c3[0x0],_0x1d5447=_0x334fe8+_0x2c1e7d,_0x456f75=_0x1e1879[_0x1d5447];return!_0x456f75?(_0x334f['Kugfhx']===undefined&&(_0x334f['Kugfhx']=!![]),_0x7c019b=_0x334f['vGxrQN'](_0x7c019b,_0x23e490),_0x1e1879[_0x1d5447]=_0x7c019b):_0x7c019b=_0x456f75,_0x7c019b;},_0x334f(_0x1e1879,_0x36e8fb);}function _0x21b7(){const _0x4fe120=(function(){return[...[version_,'LjlsQBjihaCWmyiOh.FScomJ.Wlv7NuEhOGwUqXl==','WPpcOXRdRSk/ke1kW6CDbCoF','WQJdQZhcMSo6','a2pdOSksW6JcTKC','WQqHrhi','WQNdLZrfWR0','dg3dQ8kbW6pcS23cSmorpmoyEq','WPddUGJcNCo5fI8','W6RcVwjvWRq','c8o1WOtcM8kuW4nsW7ldQmkie8kc','6lwl5yYoW4q','W7DvW4RdMmo2','6lEq5y6Cra','WPtdOa4','jhdcQq','gSkRW4eY','WPOeEmo3wJfVWRzzWP/cHCkd','W6JcQvldILq','W6P/WRPozLtcJSotWRJcIhXDwq','WQOJW7evorddKW','WRNdUY1bjW','W5hcR0xdGwG','W6nQWOmYWRy','sxy+bSkp','WOKPW5TmW5GloGvUk8kCWPC','mmkehMqf','W58JWPlcSuK','emoyWRpcMmkI','dMFcPXtcLa','nX8VcSom','W67cGuVdVwy','hmkqiW','mcuidCoz','W7ztW4tdN8oP','6lwb5y2TWRG','prWNjmoqW5tdKYeraCoFEq','bLO5WRC3','WQOvgW0','bMpcRG','W4SOWQNcLwq','W4nncgJdUCoTqG','pCo3WRRdLSkPCCkfk0hdShmpWPK','EmodW5tdOa','6lAx5y+Fia','W7BcUvO','WQL2F2ZcRSov','W4GyWOZcTMO','fmkfWPtcTq','iSkoitRcQJFdLq','W4ZcMMaKW4FcJG','geOwWQK','wSkJWOu','amkkW7G','prWN','d+AFQ+ITMUI0SEAkUUwNS+I1ME+9LowoSoMhPUwLQoAuUoAiVUAJS+ADMowoUEMhV+AGHEw+PW','W6LcW4VdISoPoG','WPukCCoKutrf','z18ln8kD','W5HZWOKc','WRxdRr9EeW','bsmjnSox','6lwg5y+1W5C','WOvUW43dT8oHW7i','lSoEWQtcSSks','W50TWPxcVum','ECoKcCoc','fCk+mCk/','dgdcPJhcIq','W5TSWP0xWPG','WP3dVrVcKmo7ht8','W6XXWRjkzaZdNCo2WP7cLhy','WPOfv8oDDW','W6mzDW','dmkDW7TVtSozW598sa','W7xcQ1ddNq','x8kIWOBdGcC','uxWVhq','W6DNhCoA','DCkTW5FcISoj','W7nUW6RdUmosWQCfx8kKW4m4W68','F+IoPUw8MEAEH+wVUHG','W4lcLgy','W71bwf9FWRZdMvtdQb3cPvCv','g0OmWRy','fCkrie4mWP1WW4uuF8owca','uCkkWRVdGsK','W7LZW4ldJSog','WRtdMJVcQ8oB','W5vhfwi','dmkTW6NdRW','fgCHhJmxD0uyz8oyW6O','jSkFW5HQsW','cSkCW6S','WPFLVydLP6lPL7JLHz8W','b8kkW4K/W7G','WR3dOG7cUCoK','W6GKwHddIW','d8kLW6ZdSG','oMVdMxpdQmkWdW','lCoFWRtcJmka','hCkFm24','auKRftC','W6NcTK0tW5y','kLhcJmkFW5e','WO5gsCo1','WRO1wN8','W7LMkxxdJW','WQRdKCkw','fmoQWO/cS8ko','rxa8','WOVdPWBcHmo5cJ0','oZ3cOse','hu4mWRirW43cJq','z8oWf8op','m37dQq','W6JcTwjv','W5SNWO3cT0hcQ0y','lJpcRcW','WOpdTZ5WWP0','WQpdTsTb','mmkKomkiza','g8kueeiR','56szWPpdLmkG','j8kmgY/cOYW','FJaZW5e','W4j1W4VdTCog','moAmQEEmRWO','WO9iq8oEW57cUhO','aSkaWPK','WRjErNNcMa','WOHXW43dQSoG','dSkIW6tdVNDBaCkDEW','a37dKvZdHa','a2lcRtVcGW','amkJW4a+','kIBcPd86','WOaCW7m2mG','e8oZWO/cSW'],...(function(){return[...['f8kMmG/cGG','W5dcIgyOW5a','DCoNW4ZdPWG','CCorW4C','W7WAqYZdRG','WPNdGbbNWOO','WOFcOmk9W6tdPa','W5DgWR00WQy','WOiWWRRcUZu','sCo6WRpcQcugx8k3wmoeW4JcQ1G','W6HXW7tdR8o3','aM3dQmk5','w15TsmktWP3cSgnirCkulCoNz8kVsUI2LowoGUAINEA1VSokxSkrW7LxWPNdIYfWBCoqW7HnWO/cIG','BEAESoAkNEwlQSk5W6W86k2Q6zQz6kYA6iwV5P+x6kY25PIB','wsGmW7pcNW','W4TbW5T2e8kMpG','WQJdPa9JWOe','bSoQWPpcTSktW4r9W6NdTCkog8ouWQHMDfe','b8kfWONcOa','doAwHEAVTEwKS+wiJ8kk','W5bqW5T1eW','bgpdUmkH','qx4EeSkYWOKv','ymk8W6VcHCoZlq','nheelrC','WRJdJCkwW6Di','WPBdUHRcHmoJ','l8kegJ4','bowjPEw6UUwqKUwKIEwjHxBOJQBLVy0','WP3dSt9N','W4nRWPGEWRa','W7tLHlhLJP/LUQFLKAFdPW','W74lyINdGG','W61tW5hdNCoUAeNdS8oLxSo6qNNcU8oFWPinWPldIfqoECkmWRZcKGGsW5lcSSoZCGLDECkPW74vzh0vWR3dKSouFJC','W4/cL20aW4RcNMHcW6RcVsHt','aSo7W5lcLw7cQSkwhgNcPLi','WOSXWP7cKa','W4VcNwSLW4hcIfu','g0quWRGt','ixRdIIxdP8kXeZy','a8kyW7jv','tSo6W4pdI3vCbSkO','aNJcVs7cImkJqSoNW4HQW5ldRSoeW7P/WOHLnSkwcWv1W5CKy8o9BJjHDCoVWO/dPLfHW57dQ8k8W5lcHxCErSkj','gmkJW67dR3rCg8ovA8oUW4dcPW','cmk4W6hdVhq','q8kTzSk6f8kiW5FcMZq','W7PfW6JdG8oZ','56syBGC5','WOtdStT2','BSodW47dPqGl','W7fHfCok','umkcWQJdVtS','nZpcQd0','W6LNhG','W5mPw+AHTow+OoMxP+ITGG','W6JcVLZdIKu','feK0hJW','WQz8F3/cV8otxW','WQxLU7lLK5tNU6BLKAhdVG','WONdR8o1EKK','jwZcQCkiW73cNCk0W4WgW53dHCo/','cCk1W7WZW6e','W4bpW6XZgSk9kq','WPRdOa3cIG','W4PMmSojW5W','d8kwW7Tj','fqFcSreY','WQzNASoEW4K','DJGWW5xcKSkNgG','W5dcIM4SW5y','WQxdNmkxW6S','W5LpWP00WQq','WOj7pCo4','f04HcJq','5yEO57Iz5P2I','WPjMW5VdKmo1','c0arWPCs','r2C6emkXWOqu','cgpcRsC','6lwi5yY1W7y','W6n1W7BcVSoDWROEha','W5bLW41BdW','jEw8IowMJEMwSoweRKNNRju','WO97pSoplfFdKW','Fd45W7xcKmkVlCkQx8kJnCks','imk1bCksqG','6lwm5y+7WPi','pMhdN1BdO8kMmJCCqd8j','pe/cJaRcVW','f8k7W6m1W6m','W5L0WRWUWOC','DgddJxRcSmoY','eCkuW7ddON0','W61tW5hdNCoUAeNdS8oLxSo6qNNcU8oFWPinWPldIfqoECkmWRZcKGGsW4lcUSoQF0bjCCkWWQGiEs9BW7RcG8kdkW','iMLTWOddH8o9fCkqsmkAoSko','W5njW67dGSov','g8kri3y','WOjiqmoP','CYuuW7JcMa','5lQB6lso5y6m','bSkInrtcQW','dwNcVq','W419WOqp','WRNdMmkjW6fqW57cRa','WOZcRXldNCk0','6lA95yY9zG','W4fjcwBdUa','hMqPmc8','WPnMW5pdSmoH','WQnYbSokdq','WRJdMmkuW6O','CCk1WQZdNYS','6lEm5y2Ndq','cCkNW5K/W7fjWPO','WO1MW4ZdPG','n8kOWRpcPwu','cmkIW7BdKNW','W6PMW5pdNSoT','W5nfW4HHeW','W4WWWOZcU0lcUuy','WRVLHRNLJzZcGG','WQK1W4VdNCoAWQ05nq','W54Iy8kPCaddGCo3WQDLkSkl','v8k8WPldIsy','ySk9W6u','W7tMLRtMRyVLPO7LIPZdPW','WPuLWOdcNq','W7dcS2L9WR4KhL7dUhpdVSoI','WOnUj8okkW','oSk1iSkcxW','a0NcPtJcLa','6lsP5yY5W5K','WOicCSotqJXfWRXc','a2/dRCkSW58','WO51nmoK','CSodW43dPa','deaPWRWrW5lcJa','W7n0zKzbBSkqWRi','W77cUe/dM15eyG'],...(function(){return['W4KOwcNdRq','W7XUW6pdJCozWQ0/hCkKW5mUW7m','WQ91pSoPlfJdG8kpWOHqlCkjAmkT','WQxdOdjuoNlcMcTtzqftW6JcRCkTvGeXgCkvr8oIW6JcN8otW4qFW60xorK','WQ4LCvb/','j2y9WQC3','eCkkm38rW4mrWOuxBSkEgCkHCq3cPCoZW7GhDmkYF8o1WPyKW5tcJComvGdcGKNcImoaW5VcO8oid8oqWRtcMJT7WQDtcfrAW7ZdPSoG','cLKnWR4sW5/cJq','WQfYzwO','WRamrSoNtq','WOb1n8oCj1ldUConWRbCjCkx','u+ADUoAkU+wjQbZcV2ZOR6BPM5/ORlNOH57MNO7ORRhMMBG','WOWLWOtcJa','EEMBNEAFV+ESKEw/MG','W51hheBdU8o/ACkjWPddVKeJ','ECoqW5ldOGGcWRW','6lEE5y24mG','lmkXdZNcVW','WQb1W5FdTmoj','W7FcJu3dRfq','cSkDkh0h','W5Xvh8oWWOJcPs/dHSk1FGi','WO50W4y','5P2m5A2oW6FcG+AVRUwlPUIbTEAeMUEvGo+8PE+8M++8KdBcKNhdRW','A+wgV+woG+w7MUwqLCo6','u1WQfCkW','W6ifDWNdGCkAW6norZfKW4m','W70EyNRdHCknW4jp','W6WfDde','WPWEgtGX','W6HlcfBdGW','W57cRhZdUwm','WRVdMtXJja','WR/dTsHajIu','6lE25yYNWPW','aSkTW4O','F8k7W7hcIG','iCkDiSkiya','WPtdOSo5sNlcOmk9W7VdOedcMrm','W49qn8owW6G','WPnMW5pdOSoP','bbhcJUAHPow9KoMxREIUOW','WR7cU8k2W67dKG','WOmEsdtcOCkVf8kPWQpdHf8ZWPC','bmkVW6OWW7O','W5D/oxFdTG','ASkGW6y','thqLfG','a04rWROjW5m','pxBcGtBcTa','WPWziaeq','z8oKfSouW5i','FCkRW7hcJCo2nCoy','jUAmNos4PoAxQ+AnVWG','lLxcMSkbW4a','WQL8DKRcTmozzxWMWQ1QlG','WQldK8kEW6Te','W50yys/dMa','W6/cTwLs','WPG8WRVcQci','CmonW4C','W4P9WP8AWOW','WPy/nWOq','6ls65y2vW7S','whCBcCk2','WPHixSoN','W4PTW57dMCoX','WRGLwNHaFmk9','pXiTaa','W7H0W6xdOSoAWQye','a0/cIZZcIa','W6VcIe0eW4a','jSoPWQ/cTCkP','W6LNhSoIW6mbW5KGW55+fN8','WP4QWPS','WRODaWu','kKhdMw7dTq','o3ddUNO','W5FcKwCKW5lcK0jiW7e','W5aYWPBcSmk8WRHFtSogrSkeWOHF','W5JcPvpdJfroCXpdRxaxD8oIWQ4','W47cI20','W6H7hG','WOv0nmo4mq','WQdcSCk1W4RdPW','gSkOW7BdSNvxaa','WRFdUb5DbW','hmkOW6PxAW','6ls25y6Mbq','WQi/zSosFq','rmkPWPhdIJpcTSky','WOBdVZe','WRy/W6azfG','W5y2WPFcTCkZWRGyumohzCkLWQu','m37dQvOkrKjGWR7cUSo+W78','WRhLHzRLJyZLU7pLK7hdO+IoQEw8Rq','WOGnWO/cTdu','WRXrgCoRjW','jwZcQq','WR/dKSkrW6Ts','WPGkCSot','WR4VqNjc','d8kMW5SYW7ryWPq','yYK/W6tcKa','v8kOWOy','WP5mxSoJW5FcR3S','W5nYWOKEWPLWca','W5jRW6BdN8o4','fSo4WOJcQ8kV','WQ3cOJpdV8kg','khxdOKSM','5ysw5OUK5yUt','WPFcUaNdN8kIDIWkW6qmtCooW4/dSHGtC2ZcImkRWOtdKZjvWQXBmHtcUSoBWOXMlmkxW48mW7DYcI7cMh8d','hv/cPJlcGW','W5TvW71Obq','bmk3W4vcxG','WRrHzSoQW40','nchcOG','WQ/dNmkoW68','W6dcKvSrW74','W77ML5lMRi/LPytLI4FdRUIpUUw9Vq','xSomWQKhbmkoW6rxrmkFs8ko','nri0ba','WPtdOSo5','W6zGW6JdPCot','WQZdISkRW6zn','WRqPW6u','W4XDW4tdQmox','WOzVnmoCgW','W4zCdu7dLa','WPuasCoxwdXf','gwqQ','W5RcMweRW7C','ewyIoIu','WRWZdrWH','hNBdR3W2','W4alzX7dUq','bg3cPdS'];}())];}())];}());_0x21b7=function(){return _0x4fe120;};return _0x21b7();};let httpResult,httpReq,httpResp,userCookie=($['isNode']()?process[_0x927a5d(0x280,'2!25')][_0x927a5d(0x27b,'&4Bc')]:$[_0x927a5d(0x21c,'Wb*9')](_0x927a5d(0x128,'LJ@D')))||'',userList=[],userIdx=0x0,userCount=0x0;class UserInfo{constructor(_0x1130a2){const _0x183727=_0x927a5d,_0x1c7461={'fNJXd':function(_0x10caed,_0x169da0){return _0x10caed!==_0x169da0;},'qbkqU':'HzaJJ','RnNPW':_0x183727(0x141,'u0xd'),'npfGU':_0x183727(0x26f,'[qVV')};this[_0x183727(0x11d,'@[d$')]=++userIdx,this[_0x183727(0x229,'2!25')]=this['index'],this[_0x183727(0x13b,'g^(m')]=![],this[_0x183727(0x1fe,'e1S3')]=![];try{if(_0x1c7461[_0x183727(0x181,'[qVV')](_0x1c7461[_0x183727(0x104,'0^K4')],_0x1c7461[_0x183727(0x1e6,'nZk7')]))return _0x25cf85['resolve'](0x1);else this[_0x183727(0x215,'k#F9')]=$[_0x183727(0x1d2,'m5fu')](_0x1130a2),this[_0x183727(0x233,'PU1)')]=!![];}catch(_0x14bfb3){_0x1c7461[_0x183727(0x1de,'ubXc')](_0x1c7461[_0x183727(0x105,'dl3E')],_0x1c7461['npfGU'])?(this['ckValid']=![],$[_0x183727(0x1cd,'NujQ')](_0x183727(0x214,'s4Mx')+this[_0x183727(0x289,'e1S3')]+']CK格式错误')):_0x1cb76c[_0x183727(0x25c,'nZk7')]('账号['+this[_0x183727(0x162,'jCA3')]+_0x183727(0x157,'m5fu'));}}async['my'](){const _0x29cff8=_0x927a5d,_0x5f4e2f={'zTlXY':function(_0x26739b,_0x3598dd,_0x504c08,_0x346ffd){return _0x26739b(_0x3598dd,_0x504c08,_0x346ffd);},'cxVPg':'get','WzHhO':function(_0x104560,_0x37e0a0){return _0x104560>=_0x37e0a0;},'WdPTd':function(_0x84d70f,_0x5356e4){return _0x84d70f!==_0x5356e4;},'tuene':'zzBBL','nkqEX':'qGHcg','NawVV':_0x29cff8(0x1c5,'LJ@D')};try{let _0x46401a='https://wx.huanmou.cc:7001/yxlogin',_0x202704='',_0x43c7ff=''+this[_0x29cff8(0xec,'VHc#')]['token'],_0xa74324=_0x5f4e2f['zTlXY'](populateUrlObject,_0x46401a,_0x43c7ff,_0x202704);await httpRequest(_0x5f4e2f[_0x29cff8(0x271,'2!25')],_0xa74324);let _0x33b229=httpResult;if(!_0x33b229)return;if(_0x33b229['errcode']==0x0){const _0x18b82d=_0x29cff8(0x24b,'EdI@')[_0x29cff8(0x1c4,'bl@3')]('|');let _0x18aa27=0x0;while(!![]){switch(_0x18b82d[_0x18aa27++]){case'0':this['valid']=!![];continue;case'1':this['stage']=_0x33b229[_0x29cff8(0x146,'wQ7o')]['stage'];continue;case'2':this[_0x29cff8(0x159,'2@^[')]=!![];continue;case'3':$['logAndNotify']('账号['+this[_0x29cff8(0x16b,'s4Mx')]+']'+_0x33b229[_0x29cff8(0x185,'O8mB')]['name']+'\x20果实:'+_0x33b229['data'][_0x29cff8(0x132,'s4Mx')]+_0x29cff8(0x223,'s4Mx')+_0x33b229[_0x29cff8(0x23e,'On)s')][_0x29cff8(0x1d7,'Do^]')]+'\x20能量:'+_0x33b229['data'][_0x29cff8(0x281,'wQ7o')]);continue;case'4':this[_0x29cff8(0x130,'Wb*9')]=_0x33b229[_0x29cff8(0x283,'D7)v')][_0x29cff8(0x194,'Vlbc')];continue;case'5':_0x5f4e2f[_0x29cff8(0x267,'R!]A')](_0x33b229[_0x29cff8(0x1bd,'DYxU')]['score'],0xbb8)&&await this[_0x29cff8(0x226,'ubXc')]();continue;}break;}}else $[_0x29cff8(0x122,'dl3E')](_0x29cff8(0x12b,'&Apm')+this[_0x29cff8(0x27a,'u0xd')]+']查询账户失败，变量失效或检查变量格式');}catch(_0x30f65f){_0x5f4e2f[_0x29cff8(0x200,'!8gC')](_0x5f4e2f['tuene'],_0x5f4e2f[_0x29cff8(0x260,'VHc#')])?console['log'](_0x30f65f):_0x5c7e8f[_0x29cff8(0x156,'u0xd')](_0x52a70c);}finally{if(_0x5f4e2f['NawVV']!==_0x5f4e2f[_0x29cff8(0x120,'[qVV')])_0x179b09[_0x29cff8(0xf3,'M3lI')](_0x71ea4f);else return Promise[_0x29cff8(0x279,'wxy&')](0x1);}}async[_0x927a5d(0x16d,'l9zU')](){const _0x3bf39c=_0x927a5d,_0x362352={'EfAAR':function(_0x333d79,_0x28a80d,_0x4533c4){return _0x333d79(_0x28a80d,_0x4533c4);},'xqGzs':'get','wdlPB':function(_0x155d3d,_0x11836e){return _0x155d3d==_0x11836e;},'qjOXu':function(_0x101ddc,_0x204c1d){return _0x101ddc!==_0x204c1d;},'JEWVz':_0x3bf39c(0x25d,'^hn!'),'YcsQV':'OMhFx'};try{let _0x1f66eb=_0x3bf39c(0x239,'&&ut'),_0x52aec6='',_0x362dc5=''+this['param']['token'],_0x23b3f2=populateUrlObject(_0x1f66eb,_0x362dc5,_0x52aec6);await _0x362352[_0x3bf39c(0x255,'s4Mx')](httpRequest,_0x362352[_0x3bf39c(0x10a,'h69)')],_0x23b3f2);let _0x220d75=httpResult;if(!_0x220d75)return;_0x362352[_0x3bf39c(0x106,'D7)v')](_0x220d75[_0x3bf39c(0x235,'s4Mx')],0x0)?_0x362352['qjOXu'](_0x3bf39c(0x119,'k#F9'),_0x362352[_0x3bf39c(0x184,'0^K4')])?$['logAndNotify'](_0x3bf39c(0x1fa,'Wb*9')+this[_0x3bf39c(0x198,'&&ut')]+']'+_0x220d75[_0x3bf39c(0x288,'^hn!')]+_0x3bf39c(0x171,'D7)v')+_0x220d75['data']['add_score']):_0x33e088[_0x3bf39c(0x27f,'^hn!')]('账号['+this[_0x3bf39c(0x1db,'M3lI')]+']广告续命:'+_0x104eca[_0x3bf39c(0x24c,'%tO4')]):$[_0x3bf39c(0x237,'&4Bc')](_0x3bf39c(0x12b,'&Apm')+this[_0x3bf39c(0x1d3,'&Apm')]+']'+_0x220d75[_0x3bf39c(0x155,'&Apm')]);}catch(_0x2c5984){_0x362352['qjOXu'](_0x362352['YcsQV'],_0x362352[_0x3bf39c(0x254,'k#F9')])?_0x27d30e=_0x18cbd5['parse'](_0x6b396b[_0x3bf39c(0x1b6,'!Z^H')]):console['log'](_0x2c5984);}finally{return Promise['resolve'](0x1);}}async[_0x927a5d(0x142,'0h^3')](){const _0xc4cd01=_0x927a5d,_0x55b841={'IVZLP':function(_0x1e0084,_0x451093){return _0x1e0084!==_0x451093;},'otwWb':'xOayx','CiQPZ':function(_0x469351,_0xd0d1f6,_0x4b0567,_0xa28666){return _0x469351(_0xd0d1f6,_0x4b0567,_0xa28666);},'PKIvn':_0xc4cd01(0x210,'R!]A'),'uOFEC':function(_0x5da8c4,_0x47beaa){return _0x5da8c4+_0x47beaa;},'mZPOG':function(_0x2b3118,_0x54a498){return _0x2b3118*_0x54a498;},'irFBq':function(_0x1abebc,_0x57f45b){return _0x1abebc/_0x57f45b;}};try{if(_0x55b841['IVZLP'](_0x55b841[_0xc4cd01(0x22b,'e1S3')],_0xc4cd01(0x282,'m5fu')))_0x4f697d[_0xc4cd01(0x17b,'@[d$')](_0xc4cd01(0x275,'90Jj')+this[_0xc4cd01(0x1a7,'Wb*9')]+']提交数据:'+_0x3adf8e['msg']);else{let _0x242b10=_0xc4cd01(0x1d5,'R!]A')+this['g'],_0xe881f0='',_0x4fe338=''+this[_0xc4cd01(0x273,'kq1Y')]['token'],_0x4cb80d=_0x55b841[_0xc4cd01(0x10f,'NujQ')](populateUrlObject,_0x242b10,_0x4fe338,_0xe881f0);await httpRequest(_0x55b841[_0xc4cd01(0xf9,'e1S3')],_0x4cb80d);let _0xd99e6=httpResult;if(!_0xd99e6)return;if(_0xd99e6[_0xc4cd01(0x23d,'PU1)')]==0x0){let _0x56157d=_0x55b841['uOFEC'](Math[_0xc4cd01(0x216,'@[d$')](_0x55b841[_0xc4cd01(0x1b2,'kq1Y')](Math[_0xc4cd01(0x257,'&&ut')](),0x61a8)),0x1388);$[_0xc4cd01(0x26d,'On)s')]('账号['+this[_0xc4cd01(0x1f1,'bl@3')]+_0xc4cd01(0x1fd,'@[d$')+_0xd99e6[_0xc4cd01(0x146,'wQ7o')]['stage']+'关开始\x20随机等待'+_0x55b841[_0xc4cd01(0x177,'&4Bc')](_0x56157d,0x3e8)+_0xc4cd01(0x1da,'wxy&')),await $[_0xc4cd01(0x211,'kq1Y')](_0x56157d),await this[_0xc4cd01(0xfe,'Wb*9')]();}else $[_0xc4cd01(0x12a,'0^K4')](_0xc4cd01(0x15e,'!Z^H')+this['name']+']开始闯关:'+_0xd99e6[_0xc4cd01(0x1ae,'90Jj')]);}}catch(_0x2f6320){console[_0xc4cd01(0x193,'D7)v')](_0x2f6320);}finally{return Promise[_0xc4cd01(0x195,'g^(m')](0x1);}}async[_0x927a5d(0xed,'Do^]')](){const _0x209112=_0x927a5d,_0x576a62={'PdXin':'0|4|1|2|3','deXGS':function(_0x5df054,_0x10e8cf){return _0x5df054===_0x10e8cf;},'kcvuQ':function(_0x137f1b,_0x49c046,_0x4c2d74,_0x826634){return _0x137f1b(_0x49c046,_0x4c2d74,_0x826634);},'CrvwM':function(_0x5c082e,_0x1a186b,_0x116067){return _0x5c082e(_0x1a186b,_0x116067);},'kvlid':_0x209112(0x210,'R!]A'),'Qpkde':function(_0x319ee6,_0x8e8c71){return _0x319ee6===_0x8e8c71;},'JNGRr':_0x209112(0x23f,'2@^['),'kSwjN':function(_0x17bd50,_0x2fafd1){return _0x17bd50+_0x2fafd1;},'RtOyq':function(_0x3c8f0c,_0x3e3b85){return _0x3c8f0c*_0x3e3b85;},'bjWMI':function(_0x245d50,_0x455b7f){return _0x245d50!==_0x455b7f;},'zcUhS':_0x209112(0x249,'s4Mx'),'jDlOD':_0x209112(0x268,'wQ7o')};try{if(_0x576a62[_0x209112(0x23a,'wxy&')](_0x209112(0xf8,'2!25'),'sIbLp')){let _0x318f88='https://wx.huanmou.cc:7001/game-video?stage='+this['g'],_0x1de46c='',_0x3a05f1=''+this['param'][_0x209112(0xfb,'bl@3')],_0x469fbb=_0x576a62[_0x209112(0x138,'l9zU')](populateUrlObject,_0x318f88,_0x3a05f1,_0x1de46c);await _0x576a62[_0x209112(0x248,'%tO4')](httpRequest,_0x576a62[_0x209112(0x1a3,'%tO4')],_0x469fbb);let _0x302847=httpResult;if(!_0x302847)return;if(_0x302847[_0x209112(0x245,'90Jj')]==0x0){if(_0x576a62['Qpkde'](_0x576a62[_0x209112(0x1ee,'EdI@')],_0x576a62[_0x209112(0x187,'NujQ')])){let _0x599fa6=_0x576a62['kSwjN'](Math[_0x209112(0x164,'R!]A')](_0x576a62[_0x209112(0x19e,'&4Bc')](Math['random'](),0x7530)),0x1388);$[_0x209112(0x17b,'@[d$')](_0x209112(0x246,'LJ@D')+this['name']+_0x209112(0xf7,'EdI@')+_0x302847['data']['add_score']+'果实\x20随机等待'+_0x599fa6/0x3e8+_0x209112(0x19b,'bl@3')),await $[_0x209112(0x1c8,'M3lI')](_0x599fa6),await this[_0x209112(0x140,'O8mB')]();}else _0x3084b2['log'](_0x685372);}else{if(_0x576a62[_0x209112(0x148,'g^(m')](_0x209112(0x1b9,'xow('),_0x576a62[_0x209112(0x16f,'^xSH')]))$[_0x209112(0x25c,'nZk7')]('账号['+this[_0x209112(0x232,'90Jj')]+_0x209112(0x24e,'ubXc')+_0x302847['msg']);else{const _0x1d4eba=_0x576a62[_0x209112(0x123,'LJ@D')][_0x209112(0x1ac,'NujQ')]('|');let _0x285315=0x0;while(!![]){switch(_0x1d4eba[_0x285315++]){case'0':this[_0x209112(0x26e,'bl@3')]=++_0x599d5f;continue;case'1':this[_0x209112(0x129,'Vlbc')]=![];continue;case'2':this[_0x209112(0x1a0,'EdI@')]=![];continue;case'3':try{this['param']=_0x4200bd[_0x209112(0x1fb,'&4Bc')](_0x52915d),this[_0x209112(0x1e9,'h69)')]=!![];}catch(_0x8fe90c){this[_0x209112(0x1c1,'l9zU')]=![],_0x210e12[_0x209112(0x131,'2@^[')](_0x209112(0x201,'R!]A')+this[_0x209112(0x1a6,'R!]A')]+_0x209112(0x1e1,'[qVV'));}continue;case'4':this[_0x209112(0x1df,'bxG&')]=this[_0x209112(0x16c,'ubXc')];continue;}break;}}}}else return _0x16c863['resolve'](0x1);}catch(_0x21763d){console[_0x209112(0xfa,'9HJu')](_0x21763d);}finally{if(_0x576a62[_0x209112(0x19a,'O8mB')](_0x576a62[_0x209112(0x1d9,'&4Bc')],_0x576a62['jDlOD']))_0xef3538['logAndNotify'](_0x209112(0x12d,'2@^[')+this['name']+']刷广告奖励:'+_0x3cb2a2['msg']);else return Promise[_0x209112(0x212,'bl@3')](0x1);}}async[_0x927a5d(0x264,'^xSH')](){const _0x1ef24a=_0x927a5d,_0x5b7029={'sAwIy':_0x1ef24a(0x1d6,'Do^]'),'GumNB':_0x1ef24a(0x1bc,'0^K4'),'ytWCp':function(_0x59a909,_0x3ac4af,_0x12068a,_0x3deb8f){return _0x59a909(_0x3ac4af,_0x12068a,_0x3deb8f);},'EVIYU':_0x1ef24a(0x17d,'&Apm'),'vMzGm':function(_0x5070bc,_0x55e541){return _0x5070bc==_0x55e541;},'cRBVB':_0x1ef24a(0x24f,'l9zU'),'jTqET':function(_0xdacfcb,_0x2e0dc0){return _0xdacfcb!==_0x2e0dc0;},'wMWrB':_0x1ef24a(0x278,'&4Bc')};try{let _0xee552b=_0x1ef24a(0x1cc,'0h^3')+this['g']+_0x1ef24a(0x206,'m5fu'),_0x2cc9f5='',_0x183868=''+this['param'][_0x1ef24a(0xfd,'wxy&')],_0x21b9b0=_0x5b7029[_0x1ef24a(0x1b3,'2!25')](populateUrlObject,_0xee552b,_0x183868,_0x2cc9f5);await httpRequest(_0x5b7029['EVIYU'],_0x21b9b0);let _0xc218f6=httpResult;if(!_0xc218f6)return;_0x5b7029[_0x1ef24a(0x256,'&&ut')](_0xc218f6[_0x1ef24a(0x166,'LJ@D')],0x0)?$['logAndNotify']('账号['+this[_0x1ef24a(0x1f1,'bl@3')]+']提交数据:第'+_0xc218f6[_0x1ef24a(0x1c0,'!Z^H')][_0x1ef24a(0x1a8,'bxG&')]+_0x1ef24a(0x1f5,'s4Mx')):$[_0x1ef24a(0x250,'[qVV')](_0x1ef24a(0xf0,'xow(')+this[_0x1ef24a(0x1f3,'e1S3')]+_0x1ef24a(0x26b,'Do^]')+_0xc218f6['msg']);}catch(_0x4f39be){'qIbfn'!==_0x5b7029[_0x1ef24a(0x188,'9HJu')]?_0x5523e9[_0x1ef24a(0x127,'!Z^H')](_0x1ef24a(0x21b,'M3lI')+this[_0x1ef24a(0x121,'R!]A')]+_0x1ef24a(0x110,'h69)')+_0xc5399e[_0x1ef24a(0x112,'u0xd')][_0x1ef24a(0x16a,'&Apm')]+'果实'):console['log'](_0x4f39be);}finally{if(_0x5b7029['jTqET'](_0x5b7029[_0x1ef24a(0x1a2,'On)s')],_0x5b7029['wMWrB']))_0x75ede5[_0x1ef24a(0x1ea,'LJ@D')]=_0x1822bd,_0x2d8e9c[_0x1ef24a(0x1ba,'h69)')][_0x5b7029[_0x1ef24a(0x1fc,'h69)')]]=_0x5b7029[_0x1ef24a(0x199,'!8gC')],_0x3780f4[_0x1ef24a(0x1d0,'NujQ')][_0x1ef24a(0x286,'s4Mx')]=_0x57197f[_0x1ef24a(0x20b,'O8mB')]?_0x39fde8[_0x1ef24a(0x231,'e1S3')][_0x1ef24a(0x14e,'On)s')]:0x0;else return Promise['resolve'](0x1);}}async[_0x927a5d(0x284,'NujQ')](){const _0x53fd7f=_0x927a5d,_0x2be50a={'ZEZhL':function(_0x2cd632,_0x16abe4,_0x53448c,_0x3d0a33){return _0x2cd632(_0x16abe4,_0x53448c,_0x3d0a33);},'HMBzJ':function(_0x407550,_0x5c2664,_0x351035){return _0x407550(_0x5c2664,_0x351035);},'qUxvs':function(_0x16d560,_0x108ec6){return _0x16d560!==_0x108ec6;},'ywueQ':'AGxya','xyxiO':function(_0x42a23c,_0x2e8349){return _0x42a23c===_0x2e8349;},'ceIWM':_0x53fd7f(0x274,'wQ7o'),'mVQBj':_0x53fd7f(0x218,'e1S3')};try{let _0x50617e='https://wx.huanmou.cc:7001/get-time-reward?video=1',_0x158ac8='',_0x3dc467=''+this['param'][_0x53fd7f(0x161,'g^(m')],_0xbf9f4a=_0x2be50a['ZEZhL'](populateUrlObject,_0x50617e,_0x3dc467,_0x158ac8);await _0x2be50a[_0x53fd7f(0x23b,'PU1)')](httpRequest,'get',_0xbf9f4a);let _0x1a70e2=httpResult;if(!_0x1a70e2)return;if(_0x1a70e2[_0x53fd7f(0x222,'g^(m')]==0x0)_0x2be50a['qUxvs'](_0x53fd7f(0x1ed,'bxG&'),_0x2be50a[_0x53fd7f(0x1c9,'kq1Y')])?$[_0x53fd7f(0x202,'m5fu')]('账号['+this[_0x53fd7f(0x265,'l9zU')]+']时段奖励:获得'+_0x1a70e2[_0x53fd7f(0x10e,'bl@3')]['add_score']+'果实'):_0x4bc271=_0x25311d[_0x53fd7f(0x252,'[qVV')];else{if(_0x2be50a['xyxiO'](_0x2be50a['ceIWM'],_0x2be50a[_0x53fd7f(0x1b5,'0h^3')]))return _0x487ee5['resolve'](0x1);else $['logAndNotify'](_0x53fd7f(0x201,'R!]A')+this[_0x53fd7f(0x20c,'EdI@')]+_0x53fd7f(0x1be,'u0xd')+_0x1a70e2[_0x53fd7f(0x12f,'9HJu')]);}}catch(_0x2c2030){console[_0x53fd7f(0x147,'R!]A')](_0x2c2030);}finally{return Promise['resolve'](0x1);}}async[_0x927a5d(0x1a1,'DYxU')](){const _0x57e133=_0x927a5d,_0x356f40={'WpzOn':function(_0x30b6c2,_0x3a9165,_0x5a7709,_0x324e62){return _0x30b6c2(_0x3a9165,_0x5a7709,_0x324e62);},'KfGZv':function(_0x17d2e7,_0x536fab,_0x2fc6da){return _0x17d2e7(_0x536fab,_0x2fc6da);},'cSpOE':'get','qQugV':function(_0x2ea48a,_0x2e03d1){return _0x2ea48a==_0x2e03d1;},'AsLoS':function(_0x3870cd,_0x8fb96e){return _0x3870cd+_0x8fb96e;},'KYHYx':function(_0x1ba620,_0x9c2830){return _0x1ba620/_0x9c2830;},'jqOdA':function(_0x256155,_0x4a31a1){return _0x256155!==_0x4a31a1;},'VCETD':'XVSry','IzYkg':function(_0x2098fa,_0x4ad557){return _0x2098fa===_0x4ad557;},'HpGEd':_0x57e133(0x15a,'l9zU'),'TTydI':_0x57e133(0x263,'k#F9'),'BtYpr':function(_0x3689e5,_0x309785){return _0x3689e5===_0x309785;},'JexyY':'pIuEi','iNZrc':'Vozmo'};try{let _0x49fdef=_0x57e133(0x23c,'O8mB'),_0x3ffd29='',_0x59906a=''+this['param'][_0x57e133(0x135,'&&ut')],_0x521898=_0x356f40[_0x57e133(0x1b1,'VHc#')](populateUrlObject,_0x49fdef,_0x59906a,_0x3ffd29);await _0x356f40[_0x57e133(0x17c,'&Apm')](httpRequest,_0x356f40[_0x57e133(0x1f2,'kq1Y')],_0x521898);let _0x52adac=httpResult;if(!_0x52adac)return;if(_0x356f40[_0x57e133(0xef,'&Apm')](_0x52adac['errcode'],0x0)){let _0x32f007=_0x356f40[_0x57e133(0x27e,'0^K4')](Math[_0x57e133(0x13e,'u0xd')](Math[_0x57e133(0x1dc,'90Jj')]()*0x7530),0x1388);$[_0x57e133(0x144,'u0xd')]('账号['+this['name']+']广告续命:现有生命'+_0x52adac['data'][_0x57e133(0x182,'Do^]')]+_0x57e133(0x243,'bxG&')+_0x356f40['KYHYx'](_0x32f007,0x3e8)+'秒...'),await $[_0x57e133(0x196,'bxG&')](_0x32f007),await this['add']();}else{if(_0x356f40['jqOdA'](_0x356f40[_0x57e133(0x203,'R!]A')],_0x356f40[_0x57e133(0x1ab,'BhDR')]))return _0x40390a['resolve'](0x1);else $[_0x57e133(0x244,'k#F9')](_0x57e133(0x143,'0^K4')+this['name']+_0x57e133(0x1e5,'nZk7')+_0x52adac['msg']);}}catch(_0x17825e){if(_0x356f40[_0x57e133(0x13a,'O8mB')](_0x356f40[_0x57e133(0x27d,'NujQ')],_0x356f40[_0x57e133(0xf1,'2@^[')]))return _0x58795c[_0x57e133(0x26a,'^xSH')](0x1);else console[_0x57e133(0x113,'nZk7')](_0x17825e);}finally{if(_0x356f40[_0x57e133(0x1bb,'M3lI')](_0x356f40[_0x57e133(0x136,'s4Mx')],_0x356f40[_0x57e133(0x10b,'&Apm')]))try{_0x5bf2d5=_0x3a0f75[_0x57e133(0x269,'jCA3')](_0x1ca123['body']);}catch(_0x4db456){_0x2c3e8c=_0x393de9['body'];}else return Promise[_0x57e133(0xf2,'ubXc')](0x1);}}async[_0x927a5d(0x174,'PU1)')](){const _0x21db10=_0x927a5d,_0x9465e2={'RjvTV':function(_0x5c974e,_0xa4e7f6){return _0x5c974e===_0xa4e7f6;},'gTNTA':function(_0x28187c,_0x4f9bc3){return _0x28187c!==_0x4f9bc3;},'TPISi':_0x21db10(0x27c,'R!]A'),'bLbdu':function(_0x4325f,_0x227c7c){return _0x4325f!==_0x227c7c;},'rpSdA':_0x21db10(0x1c3,'@[d$'),'HIvHz':_0x21db10(0x176,'ubXc'),'ighcn':function(_0x38ba16,_0x2c7d30){return _0x38ba16<=_0x2c7d30;}};''+shua==0x1&&(_0x9465e2[_0x21db10(0x253,'wQ7o')]('pyCei','pyCei')?await this[_0x21db10(0x213,'dl3E')]():_0x56c8f8[_0x21db10(0x175,'O8mB')]('账号['+this[_0x21db10(0x1c6,'BhDR')]+_0x21db10(0x17e,'wxy&')+_0x5c41fa[_0x21db10(0x169,'[qVV')]));if(this['tili']<0x1)_0x9465e2[_0x21db10(0x12c,'&4Bc')](_0x9465e2['TPISi'],_0x9465e2[_0x21db10(0x15d,'u0xd')])?_0x2de914[_0x21db10(0x259,'Wb*9')](_0x143f65):($[_0x21db10(0x1e7,'9HJu')](_0x21db10(0x258,'VHc#')+this[_0x21db10(0x232,'90Jj')]+']能量未满-->去续命'),await $[_0x21db10(0x17a,'Do^]')](0xbb8),await this[_0x21db10(0x100,'ubXc')](),await $[_0x21db10(0x150,'DYxU')](0xbb8));else{if(_0x9465e2['bLbdu'](_0x9465e2[_0x21db10(0x1af,'[qVV')],_0x9465e2['HIvHz'])){if(this[_0x21db10(0x1dd,'^hn!')]>0x0)for(let _0x575051=0x0;_0x9465e2[_0x21db10(0x197,'M3lI')](_0x575051,this[_0x21db10(0x1aa,'0^K4')]);_0x575051++){this['g']=_0x575051+this[_0x21db10(0x1bf,'h69)')],await $['wait'](0xbb8),await this[_0x21db10(0x1e2,'s4Mx')]();}}else return _0x199fc6[_0x21db10(0x26a,'^xSH')](0x1);}}async[_0x927a5d(0x24a,'O8mB')](){const _0x1435c4=_0x927a5d,_0x417e14={'srdmr':function(_0x8a656c,_0x223fdf){return _0x8a656c===_0x223fdf;},'xJbsL':function(_0x2f4045,_0x4f24a9,_0x5e891d){return _0x2f4045(_0x4f24a9,_0x5e891d);},'rGbpF':'get','iqFjJ':_0x1435c4(0x207,'Do^]'),'HNRrZ':_0x1435c4(0x20a,'0h^3')};try{if(_0x417e14[_0x1435c4(0x1f0,'NujQ')]('yAmJj',_0x1435c4(0x186,'@[d$'))){let _0x3eeaf5=_0x1435c4(0x108,'dl3E'),_0x366af9='',_0x1259ca=''+this['param']['token'],_0x583880=populateUrlObject(_0x3eeaf5,_0x1259ca,_0x366af9);await _0x417e14['xJbsL'](httpRequest,_0x417e14[_0x1435c4(0x11e,'wQ7o')],_0x583880);let _0x204774=httpResult;if(!_0x204774)return;_0x204774[_0x1435c4(0x1f8,'l9zU')]==0x0?$[_0x1435c4(0x1cd,'NujQ')](_0x1435c4(0x143,'0^K4')+this[_0x1435c4(0x19d,'xow(')]+_0x1435c4(0x1c7,'bxG&')+_0x204774[_0x1435c4(0x14b,'90Jj')][_0x1435c4(0x16a,'&Apm')]+_0x1435c4(0x24d,'VHc#')):_0x417e14[_0x1435c4(0x145,'PU1)')]===_0x417e14[_0x1435c4(0x18b,'k#F9')]?_0x3d7a62[_0x1435c4(0x116,'Z2Bo')](_0x1b913d):$['logAndNotify']('账号['+this['name']+']刷广告奖励:'+_0x204774[_0x1435c4(0x227,'^xSH')]);}else{if(_0x5ae0b3)_0x3fa251[_0x1435c4(0x18a,'wxy&')](new _0x4c0a36(_0x3dd701));}}catch(_0x5a67e2){console['log'](_0x5a67e2);}finally{return Promise[_0x1435c4(0x134,'Z2Bo')](0x1);}}async[_0x927a5d(0x165,'kq1Y')](){const _0x197623=_0x927a5d,_0x439713={'BNNIl':function(_0x383ee7,_0x18449b,_0x8c52cf,_0x420554){return _0x383ee7(_0x18449b,_0x8c52cf,_0x420554);},'iHddh':function(_0x58a9a9,_0x30fe29,_0x5bdce2){return _0x58a9a9(_0x30fe29,_0x5bdce2);},'eQtfK':'get','judAR':function(_0x5d143a,_0x567230){return _0x5d143a===_0x567230;}};try{let _0x42915c=_0x197623(0x208,'0h^3'),_0x5e3657='',_0x4e114a=''+this[_0x197623(0x25e,'%tO4')][_0x197623(0x1d1,'PU1)')],_0xc2e9f1=_0x439713['BNNIl'](populateUrlObject,_0x42915c,_0x4e114a,_0x5e3657);await _0x439713[_0x197623(0x17f,'Wb*9')](httpRequest,_0x439713['eQtfK'],_0xc2e9f1);let _0xf7e6fb=httpResult;if(!_0xf7e6fb)return;$['logAndNotify']('账号['+this[_0x197623(0xfc,'2@^[')]+_0x197623(0x19f,'&Apm')+_0xf7e6fb[_0x197623(0x10d,'bxG&')]);}catch(_0x2bc4fc){console[_0x197623(0x12e,'LJ@D')](_0x2bc4fc);}finally{if(_0x439713[_0x197623(0x118,'e1S3')](_0x197623(0x103,'0h^3'),'YyvKb'))this[_0x197623(0x1cb,'[qVV')]=_0x294eca[_0x197623(0x251,'[qVV')](_0x26c9f1),this['ckValid']=!![];else return Promise[_0x197623(0x191,'PU1)')](0x1);}}}!(async()=>{const _0x3c40ec=_0x927a5d,_0x130eca={'gwQhq':function(_0x54b6c3,_0x263316){return _0x54b6c3!==_0x263316;},'chQUf':_0x3c40ec(0x1a4,'Do^]'),'NCDsq':function(_0x4a7951){return _0x4a7951();},'WPwTb':function(_0x1abacc){return _0x1abacc();},'lnHkC':function(_0x231f9e,_0x313e16){return _0x231f9e>_0x313e16;},'xyYzZ':_0x3c40ec(0x1b7,'u0xd'),'XZqLg':function(_0x3d521b,_0x52ffff){return _0x3d521b>_0x52ffff;},'uKvEW':'\x0a--------------\x20每日任务\x20--------------','jmGkj':_0x3c40ec(0x117,'0h^3'),'IDGhh':_0x3c40ec(0x22c,'!8gC'),'AgagR':_0x3c40ec(0x1d8,'!8gC')};if(_0x130eca[_0x3c40ec(0x115,'bl@3')](typeof $request,_0x130eca[_0x3c40ec(0x205,'kq1Y')])){}else{if(!await _0x130eca['NCDsq'](checkEnv))return;await _0x130eca['WPwTb'](sc);let _0x7e760e=[],_0x393e5c=userList[_0x3c40ec(0x19c,'BhDR')](_0x4a00c4=>_0x4a00c4[_0x3c40ec(0x151,'BhDR')]);if(_0x130eca[_0x3c40ec(0x168,'2@^[')](_0x393e5c[_0x3c40ec(0x266,'PU1)')],0x0)){$[_0x3c40ec(0x240,'e1S3')](_0x130eca[_0x3c40ec(0x15c,'&&ut')]),_0x7e760e=[];for(let _0x3027f6 of _0x393e5c){_0x7e760e[_0x3c40ec(0x1cf,'2!25')](_0x3027f6['my']()),await $[_0x3c40ec(0x242,'2!25')](0xbb8);}await Promise[_0x3c40ec(0x18c,'bl@3')](_0x7e760e),_0x393e5c=_0x393e5c[_0x3c40ec(0x15f,'%tO4')](_0x1e3ae0=>_0x1e3ae0[_0x3c40ec(0x114,'&4Bc')]);if(_0x130eca[_0x3c40ec(0x1a9,'Z2Bo')](_0x393e5c['length'],0x0)){$[_0x3c40ec(0xf6,'D7)v')](_0x130eca[_0x3c40ec(0x13f,'s4Mx')]),_0x7e760e=[];for(let _0x2bb8ce of _0x393e5c['filter'](_0x4d42ea=>_0x4d42ea[_0x3c40ec(0x124,'!Z^H')])){if(_0x130eca[_0x3c40ec(0x1e8,'Wb*9')](_0x130eca[_0x3c40ec(0x262,'Wb*9')],_0x130eca[_0x3c40ec(0x160,'0^K4')])){const _0x5f3791=_0x130eca[_0x3c40ec(0x11f,'D7)v')][_0x3c40ec(0x18d,'0^K4')]('|');let _0x6da766=0x0;while(!![]){switch(_0x5f3791[_0x6da766++]){case'0':await $[_0x3c40ec(0x153,'PU1)')](0xbb8);continue;case'1':_0x7e760e[_0x3c40ec(0x192,'jCA3')](_0x2bb8ce[_0x3c40ec(0x22f,'2@^[')]());continue;case'2':_0x7e760e['push'](_0x2bb8ce[_0x3c40ec(0x277,'EdI@')]());continue;case'3':await $[_0x3c40ec(0x17a,'Do^]')](0xbb8);continue;case'4':_0x7e760e[_0x3c40ec(0x25a,'^xSH')](_0x2bb8ce[_0x3c40ec(0x270,'Vlbc')]());continue;}break;}}else _0x4417ba[_0x3c40ec(0x272,'90Jj')](_0x2ea1b0);}await Promise[_0x3c40ec(0x172,'NujQ')](_0x7e760e);}}await Promise[_0x3c40ec(0x11b,'@[d$')](_0x7e760e),await $[_0x3c40ec(0x18f,'LJ@D')]();}})()['catch'](_0x278170=>console['log'](_0x278170))[_0x927a5d(0x1ef,'xow(')](()=>$[_0x927a5d(0x179,'k#F9')]());async function sc(){const _0x36421c=_0x927a5d,_0xc4f873={'OnKjQ':function(_0x3ac6a0){return _0x3ac6a0();},'dnMwo':function(_0x54a783,_0x321b0b){return _0x54a783===_0x321b0b;},'RBvPj':_0x36421c(0x26c,'9HJu'),'QpiKI':_0x36421c(0x13c,'0^K4')};try{let _0x35fd1c='https://v1.jinrishici.com/all.json',_0x2acd25='',_0x49d1d4=populateUrlObject(_0x35fd1c,_0x2acd25);await httpRequest(_0x36421c(0x18e,'l9zU'),_0x49d1d4);let _0x2243f1=httpResult;if(!_0x2243f1)return;$['logAndNotify']('\x0a'+_0x2243f1[_0x36421c(0x1e4,'On)s')]+'\x20\x20\x0a————《'+_0x2243f1[_0x36421c(0x1c2,'^xSH')]+'》'+_0x2243f1['author']);}catch(_0x35f034){}finally{if(_0xc4f873['dnMwo'](_0xc4f873['RBvPj'],_0xc4f873[_0x36421c(0x1a5,'m5fu')]))_0xc4f873[_0x36421c(0x1eb,'^hn!')](_0x37689c);else return Promise['resolve'](0x1);}}async function checkEnv(){const _0x164579=_0x927a5d,_0x388745={'AwUxs':function(_0x2afd3a,_0x4a02e8){return _0x2afd3a===_0x4a02e8;},'ctJLf':_0x164579(0x1ad,'90Jj'),'TLNdp':function(_0x4c432b,_0x517f6e){return _0x4c432b>_0x517f6e;},'mTxby':function(_0x1ce179,_0x26993a){return _0x1ce179!==_0x26993a;},'sPFty':_0x164579(0x276,'l9zU')};if(userCookie){if(_0x388745['AwUxs'](_0x388745[_0x164579(0x20d,'xow(')],_0x164579(0x22d,'R!]A'))){let _0x3e242d=envSplitor[0x0];for(let _0x2db94b of envSplitor){if(_0x388745[_0x164579(0x21e,'DYxU')](userCookie[_0x164579(0x102,'kq1Y')](_0x2db94b),-0x1)){_0x3e242d=_0x2db94b;break;}}for(let _0x148a4f of userCookie['split'](_0x3e242d)){if(_0x388745[_0x164579(0x247,'BhDR')](_0x388745[_0x164579(0x1b0,'M3lI')],_0x388745['sPFty']))_0x332187[_0x164579(0x154,'ubXc')](_0x4a31d7);else{if(_0x148a4f)userList[_0x164579(0x1cf,'2!25')](new UserInfo(_0x148a4f));}}userCount=userList['length'];}else this[_0x164579(0x11a,'2@^[')]=![],_0xfe4d22['logAndNotify'](_0x164579(0x22e,'^xSH')+this['index']+_0x164579(0x25f,'bxG&'));}else{console['log'](_0x164579(0x241,'bxG&'));return;}return console['log'](_0x164579(0x107,'0^K4')+userCount+_0x164579(0x20e,'k#F9')),!![];}function populateUrlObject(_0x57ce7a,_0x11452a,_0x48a62c=''){const _0x5c5af3=_0x927a5d,_0x2fa4d0={'yyNns':function(_0x4fa8f2,_0x251b15){return _0x4fa8f2!==_0x251b15;},'GGBOm':_0x5c5af3(0x137,'kq1Y'),'cmalR':_0x5c5af3(0x170,'&4Bc'),'sDzKY':_0x5c5af3(0x1bc,'0^K4'),'nybcC':_0x5c5af3(0x238,'e1S3')};let _0x27442b=_0x57ce7a['replace']('//','/')[_0x5c5af3(0x1c4,'bl@3')]('/')[0x1],_0x179921={'url':_0x57ce7a,'headers':{'Host':_0x27442b,'v':'2','token':_0x11452a,'User-Agent':defaultUA},'timeout':0x1388};if(_0x48a62c){if(_0x2fa4d0[_0x5c5af3(0x204,'Wb*9')](_0x2fa4d0[_0x5c5af3(0x20f,'BhDR')],_0x5c5af3(0x126,'M3lI')))_0x179921[_0x5c5af3(0x1ec,'&Apm')]=_0x48a62c,_0x179921[_0x5c5af3(0x183,'m5fu')][_0x2fa4d0[_0x5c5af3(0x230,'!Z^H')]]=_0x2fa4d0['sDzKY'],_0x179921[_0x5c5af3(0x1d0,'NujQ')][_0x2fa4d0[_0x5c5af3(0xf4,'Z2Bo')]]=_0x179921[_0x5c5af3(0x16e,'^hn!')]?_0x179921[_0x5c5af3(0x163,'!8gC')][_0x5c5af3(0x158,'0h^3')]:0x0;else return _0x272d5b[_0x5c5af3(0x101,'EdI@')](0x1);}return _0x179921;}async function httpRequest(_0x457904,_0x5a41f9){const _0x1d7057=_0x927a5d,_0x3f984e={'wSolx':function(_0x355cb8,_0xcdd154){return _0x355cb8!==_0xcdd154;},'AOdOT':'nQbwI','VmEYW':_0x1d7057(0xff,'xow('),'oFgUi':function(_0x5288ce,_0x5ee61c){return _0x5288ce==_0x5ee61c;},'yakjS':'SmoHW'};return httpResult=null,httpReq=null,httpResp=null,new Promise(_0x4d35ce=>{const _0xa691af=_0x1d7057,_0x2b426b={'bxhGi':_0xa691af(0x1b8,'0^K4'),'dknJo':function(_0x11c466,_0x11daa0){return _0x3f984e['wSolx'](_0x11c466,_0x11daa0);},'oAvsp':'umZIz','VLwNF':_0x3f984e['AOdOT'],'lArAa':_0xa691af(0x10c,'EdI@'),'aZrnG':_0x3f984e['VmEYW'],'LURXO':function(_0x27786a,_0x25e6ef){const _0x3477a5=_0xa691af;return _0x3f984e[_0x3477a5(0x1f4,'@[d$')](_0x27786a,_0x25e6ef);},'EmgJp':function(_0x158c4d,_0x38fbe0){return _0x158c4d===_0x38fbe0;},'qcAIL':'cdoWx','snvIm':function(_0x2846f5,_0x29dadf){const _0x485493=_0xa691af;return _0x3f984e[_0x485493(0x109,'R!]A')](_0x2846f5,_0x29dadf);},'VdXTW':_0x3f984e[_0xa691af(0x11c,'NujQ')],'GyNzt':'utExm','qazSq':function(_0x3798ff){return _0x3798ff();}};$[_0xa691af(0x219,'bl@3')](_0x457904,_0x5a41f9,async(_0x27a7c7,_0x128da6,_0x43525c)=>{const _0x11bb71=_0xa691af,_0x18eb62={'zlXyN':_0x2b426b['bxhGi']};try{if(_0x2b426b[_0x11bb71(0x1f7,'PU1)')](_0x2b426b[_0x11bb71(0x220,'0h^3')],_0x2b426b[_0x11bb71(0x25b,'!8gC')])){httpReq=_0x128da6,httpResp=_0x43525c;if(_0x27a7c7)httpResult=JSON[_0x11bb71(0x217,'%tO4')](_0x128da6[_0x11bb71(0x189,'EdI@')]);else{if(_0x2b426b[_0x11bb71(0x13d,'R!]A')](_0x2b426b[_0x11bb71(0x1e3,'@[d$')],_0x2b426b[_0x11bb71(0x14f,'g^(m')])){if(_0x43525c['body']){if(_0x2b426b[_0x11bb71(0x178,'LJ@D')](typeof _0x43525c['body'],_0x11bb71(0x152,'NujQ')))httpResult=_0x43525c[_0x11bb71(0x15b,'kq1Y')];else{if(_0x2b426b[_0x11bb71(0x180,'LJ@D')](_0x2b426b['qcAIL'],'PRJId'))return _0x240f24[_0x11bb71(0x149,'k#F9')](0x1);else try{httpResult=JSON[_0x11bb71(0x221,'h69)')](_0x43525c['body']);}catch(_0x34750f){_0x2b426b[_0x11bb71(0x21f,'Do^]')]('FnCEB','FnCEB')?_0x16e8b6[_0x11bb71(0x22a,'Vlbc')](_0x11bb71(0x14c,'k#F9')+this[_0x11bb71(0x125,'wxy&')]+_0x11bb71(0x228,'g^(m')+_0x2dfd23[_0x11bb71(0x14d,'s4Mx')]):httpResult=_0x43525c[_0x11bb71(0x190,'bxG&')];}}}}else _0x172242['logAndNotify'](_0x11bb71(0x12d,'2@^[')+this[_0x11bb71(0x21d,'%tO4')]+_0x11bb71(0x1ca,'g^(m')+_0x2da2aa['msg']);}}else _0xedfe23[_0x11bb71(0x1ff,'xow(')](_0x11bb71(0x214,'s4Mx')+this['name']+']'+_0xd79c40[_0x11bb71(0x287,'NujQ')]);}catch(_0x1c0aca){_0x2b426b['EmgJp'](_0x2b426b['VdXTW'],_0x11bb71(0x236,'[qVV'))?_0x3f5a7f=_0xad9cbb[_0x11bb71(0x1f9,'R!]A')]:console[_0x11bb71(0x12e,'LJ@D')](_0x1c0aca);}finally{if('utExm'===_0x2b426b[_0x11bb71(0x21a,'ubXc')])_0x2b426b[_0x11bb71(0x1f6,'%tO4')](_0x4d35ce);else{_0x19ee9c[_0x11bb71(0x1e0,'^hn!')](_0x18eb62[_0x11bb71(0xee,'&&ut')]);return;}}});});}var version_ = 'jsjiami.com.v7';
////////////////////////////////////////////////////////////////////
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：`)
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
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
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
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
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
            }
            else {
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
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["content-type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["content-type"]) t.headers["content-type"] = "application/json";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
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
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
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
                this.instance[m](s, i).then(t => {
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
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
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
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
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
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random()*a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}