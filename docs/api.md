
#### 获取页面常用信息

- URL

```
/income/page
```


- 入参

| 参数名 | 类型 | 长度 | 是否必须 | 说明 | 缺省 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| token | string | | Y| 令牌 |


- 结果返回

```json

{
  "code":200,
  "data":{
    "rate":7.0,//汇率
    "tele":"18756239832",//用户手机号
    "bankName":"中国建设银行",
    "bankPic":"/api/demo.jpg",
    "tailNumber":"1404",
    "transactionLimit":"5万",
    "dayLimit":"5万",
    "id":33}//默认银行卡
  }
}

```



#### 获取用户绑定的银行卡列表

- URL

```
/user/banks
```
- 入参

| 参数名 | 类型 | 长度 | 是否必须 | 说明 | 缺省 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| token | string | | Y| 令牌 |



- 结果返回

```json
{
  "code":200,
  "data":[
    {
    "bankName":"中国建设银行",//银行卡
    "bankPic":"/api/demo.jpg",//银行卡图片地址
    "tailNumber":"1404",//银行卡尾号
    "transactionLimit":"5万",//单笔交易限额
    "dayLimit":"5万",//每日交易限额
    "id":33//银行卡ID
    },
   ...
     ]
}

```



#### 发送验证码

- URL

```
/user/verify
```
- 入参

| 参数名 | 类型 | 长度 | 是否必须 | 说明 | 缺省 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| token | string | | Y| 令牌 |
|tel| string | |Y |手机号码|



- 结果返回

```json
{
  "code":200,
  "data":"",
  "msg":"发送成功"
}

```



#### 充值

- URL

```
/user/charge
```
- 入参

| 参数名 | 类型 | 长度 | 是否必须 | 说明 | 缺省 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| token | string | | Y| 令牌 |
|bankId| int | |Y |银行卡ID |
|verify| string | |Y |验证码|
|income| int | |Y |金额| （元）




- 结果返回

```json
{
  "code":200,
  "data":"",
  "msg":"充值成功"
}

```


#### 生成支付宝支付链接

- URL

```
alipay/gennerateUrl
```
- 入参

| 参数名 | 类型 | 长度 | 是否必须 | 说明 | 缺省 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| token | string | | Y| 令牌 |
|url| string | |Y |回调url|
|income| int | |Y |金额| （元）




- 结果返回

```json
{
  "code":200,
  "data":"https://m.alipay.com/asdfafdsa/fdsjaifdjsaijf/",//生成的支付宝链接
  "msg":""
}

```