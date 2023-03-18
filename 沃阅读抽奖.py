# -*- coding: utf-8 -*-
# @Time: 2023年03月13日19时36分
# @File: 沃阅读抽奖.py
# @auth: Dreamfeelings
import requests
import time


''''
accesstoken,phoneNumber 和上次的一样

如果加了accesstoken,phoneNumber 报错的话，把下面的换成自己的


开抓包看满15分钟 抽一次奖，下面参数都在请求参数里面
sign1 抓包搜newreadadd

sign2 抓包搜 addDrawTimes

sign3 抓包搜 addReadTime

acticeindex 抓包搜 doDraw
'''

accesstoken = "
phoneNumber4net = ""

token = ''

sign1='YTA1NTlhODVjZWU1N2VjYjA5MTQ3YTdkMzk5YmNjZWZmZjU4Mzg1Y2YzZmQ1NTEzNmIzNDM0Y2E3ZTc1OTQzM2RmYjkzZGM0MGJhYzc1NDZjMTgxODIxZjVjNmUwYTFhN2E3OGU5NDFjYmRjYzRiYzRiODdiNWE5NzI4Y2ZhYjhjMzM5NzAwMTdmMjA5ZDU1NDEwY2M5NTdjZTNjNGUwMDUwMmUxM2E5MTVhZjMzNzNmYzc5Yjc2YmEyZGQ2NDc2NWNhNDVjMTJiNGMwZjM4N2FjY2ZlNDA0NTIxODA3MjViZDRlZTE5YTBiN2ZlZGFmMTc2ODNlNWZmM2ZkN2E3ZDE0ZjU1MTc0OWU1MTFlODk3YTM2ZmNkOGU5ZmJlOTI4Mzg2OWE4ODEyM2EyZWY5YTRjMGRhNjQ0ODk3OGY3YTc2OGY4YTk4MDEwYjM2NzcyOGYyYWU2ZDk5NjFiMDEwYTYyZWU1NzEzNWYyNmQyY2E3ZTRhZjQ5OTRkYjUzZTkzYzkxZjg2YzU3OWFmYWEzOWY5MWFlMTM1YTcyNDRlNjM5ODUzZjExNzcxYzNkNTViNTJlNDI1NmE1MmZmM2RjZDQ3ZTljMzg3OTJmNTQ0MTQ3MTQxOTNmODQ1Y2RmZWYwNWY5NDI0MzM4ZDE4NWFkNmQ3ZTRkOGU0OTBmOWNkY2Y0ZmIxZjNiYmRlZDliZTcyNTk0ZDljNGNjMjFjZGIyNDE4ZDljZjFkNmY4MDNjNDUzMmNhMTkzOGY4NWUzZjM4ZmIxNmMyOGJmMzA1ZTdhNDc3MjdiMWYwMDQ4YTcxOGE1M2U2NGQwMDk3MDEwZmY5NjhhMTVmZjU3NTIzYTY3YjM2NmUyYzFiNjYwMWQ2NWM3Nzg1NDFiNzQyNDgxNTQxMmFiZGM5NmZiZjlhNjdhOTc1MGRlZTg4ZjVkNzZmMTE='

sign2="YTA1NTlhODVjZWU1N2VjYjA5MTQ3YTdkMzk5YmNjZWYyY2M3NTYxYjI1ZjRiN2ViMTEwOWQwMDg1ZThkNDg0OTcxNzQyNjI5YWExNWFlNjkyZjExYmUzNTM2MTkyZTM2YzY4MTk3YmMzZjdmMWRmOTVjZDI1MmM2OGM5YjBlMjdlNjg0NzBjOGQ2ODYxYjM0M2YxMDA2NTQ1MzgzNmNhZDYzZmRmZjJlYWRkMzNmYzE1ZGRhNzZmMjlhZGFlZmQ1MTAzZTA0Mzg3Y2ZjMjhkODc2NTkxODhjZjhlMmY2NmVkMmI2NzIwM2E2OWI4MjM3NGFjNDAzNGUyNGU4MWUxMDc3Zjk5ZmI2YzFhYTRlYTVhOGM1NzQyNGY5NmI4MGU3NjY5MGQzMmMyY2NhMGM1OGIwYmUxOWQ3NDRkMThmZTI2YjYyNmE1YmFiODk4NDA3ZGJkYWJjYWUwMGYyNGQzYjk3ZjRiMmI4ZjRkZWU2NWIyMzlhZDU0ZjAxNjQxZWEyMDMxNjgwYTQzOWUwOTA2MWNlYTFlMGZkYzk2NTdhMmI4YWI4NGIzY2JlMTdkYzE2MGY3ODZlNmYyNzJlYmMzNw=="

sign3="YjU3NTgyNThiNDE0ZTIwYzU1MzU0YTk3NTg2MTZmYzMyZGQ2MmIyMjEzNDgzZGM4OGNmOGEzODFlMjRhMWJjNDk4YWRkMTA1YjQ4MGEyNmRhOTljZWFlMjBkNmFjMDhiNjEwOTg1YzM4MzA2ZjdiZjdhMjYzYzZmZjIzMDA5NWE1YzliMmRhNmI0N2M1ZTg4NTcxZTY2ZjYzNWU3YWMwNTE3NzQ4MWZjMWQ5NmExNmQ2ZTQ1MjMzOTIxYzM5NzBiNWRmMGVhNTk0ZjE3ZWM1NTM5NDY2MGUxNmU0NDJiOWU3OGRjZTIzYjhjMGVmYThkYjg4NzIzMDljYzZmYTQ4MTAxMjZjNmVhNWE0NzM3YTFhODM2ZmUzZmFmNjBiMzEyZDg1MjUzYjA2ODVjMTI4ZGY3NTEwNmFjZjdlNmI5MzAxMWE3OTNiMzVlZDNlZThjZTFiNDg3M2NjMmM2MGRlMzUzYTgzNTQ2NmJkYTgwMzQ0MDJlYzEzNTEzYTlhZTEwM2MwYTU4M2QwZTgxNzljZmNhMGU3NzBhMjQzMGY0NmUzODYyMDNiYmY1ZGQxZTA0ZTUwZjM5YjU2YjQ3YTZlMWU5NWY3NWQ5NzEzNmU0ZDNmNDg4NDEzMDQ5YzBkNmU4OGU4N2ZkNTJhZDQ5YTEzZjg4MTc3M2NjZjZmNzRkMzU4OWJiZDgwMTVmYTE0YTQzMDU0OWM2OWY2ODM1YTI1OTRhMTk0YTY0NTQ0NTQxMTU2MzY1MDA4ZWRmZGY0NmFiMGE5Mjc4ZmQ2MTJkMjkxNGRkNTdiMDBmMWJlZjQxYzFlMDQ4N2YxMmIwNDM5OThhMGMzNmZjMmU4NGNiYzlkZGJlYmMxY2I1ZWQwYjNhM2ExNmFmM2JjNjkwZDkyNTQyYzU0OGI2ZmVlYTIzNGE1NmY2NmVjNDhjOWYyNDgxZmQ5NTM4MzI3ZWFmNmRjNTRjMDg3ZmU1ZGZjN2FkZTIxNDk4MTJmYmJmZTUyNzhjY2EyMDliN2FmMjJkZGMxMDBh"

acticeindex="OEJFMjJFQjhEQTBDNDFBMkU5RUI3M0Y0MTI3NzA1N0Q1="


class Main():
    def __init__(self,accesstoken,phoneNumber4net,token,sign1,sign2,sign3,acticeindex):
        self.headers = {
            "accesstoken": accesstoken,
        }
        self.cookies = {
            "useraccount": phoneNumber4net,
            "phoneNumber4net": phoneNumber4net,
        }
        self.token = token
        self.sign1 = sign1
        self.sign2 = sign2
        self.sign3 = sign3
        self.acticeindex = acticeindex
        
        
        self.messsage = '>>> 沃阅读抽奖：\n\n'

        for i in range(32):
            self.newreadadd()  #获取阅读
            self.addDrawTime()  #开始阅读
            self.addReadtime()  #完成阅读
            self.lottery()   #开始抽奖
        self.push_notifacation()

        print('--------抽奖完成！--------\n\n')
        print('----------by:   Dreamfeelings')
    #获取阅读
    def newreadadd(self):
        time.sleep(2)
        print('\n--------获取阅读任务!--------\n')
        url = "https://10010.woread.com.cn/ng_woread_service/rest/basics/newreadadd"
        data = {
            "sign": self.sign1
        }
        response = requests.post(url, headers=self.headers, cookies=self.cookies, json=data)
        print(response.text)

    #开始阅读
    def addDrawTime(self):
        time.sleep(2)
        print('\n--------开始阅读!--------\n')
        data = {
            "sign": self.sign2
        }
        url = "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes"
        response = requests.post(url, headers=self.headers, cookies=self.cookies, json=data)
        print(response.text)

        print('正在阅读:    ')
        # for i in tqdm(range(1000)):
        for i in range(120):
            time.sleep(1)
        print('阅读完成！\n')

    #完成阅读
    def addReadtime(self):
        time.sleep(2)
        print('\n--------正在完成阅读任务！--------\n')
        data = {
            "sign": self.sign3
        }
        url = "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime"
        response = requests.post(url, headers=self.headers, cookies=self.cookies, json=data).json()

        if response['code'] == '0000' :
            print(response)
            print('阅读任务提交成功！')
            return 1
        else:
            time.sleep(5)
            response = requests.post(url, headers=self.headers, cookies=self.cookies, json=data).json()
            if response['code'] == '0000' :
                print(response)
                print('阅读任务提交成功！')
                return 1
            else:
                print(response)
                print('阅读任务提交失败！')

    #开始抽奖
    def lottery(self):
        print('\n--------开始抽奖！--------\n\n')
        time.sleep(3)

        data = {
            "acticeindex": self.acticeindex,
            "t": int(time.time())
        }
        url = "https://10010.woread.com.cn/touchextenernal/actsub/doDraw.action"
        response = requests.post(url, headers=self.headers, cookies=self.cookies, data=data).json()
        print(response)
        try:
           if response['prizedesc'] != '':
               self.messsage += response['prizedesc']
        except:
           pass

    #推送消息
    def push_notifacation(self):
        title = '联通任务通知: '
        content = self.messsage

        url = 'http://www.pushplus.plus/send'
        data = {
            'token': self.token,
            'title': title,
            'content': content
        }

        res = requests.post(url, data=data).json()
        # print(res)
        try:
            status = '推送成功！' if res['code'] == 200 else res['msg']
            print(status)
        except:
            print('推送异常！')

if __name__ == '__main__':
    Main(accesstoken,phoneNumber4net,token,sign1,sign2,sign3,acticeindex)