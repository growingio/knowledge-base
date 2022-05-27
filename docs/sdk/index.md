---
slug: /sdk
title: SDK

---

GrowingIO 是基于用户行为数据的增长平台，产品的最主要功能是用户行为分析(User Behavior Analysis, UBA)。

GrowingIO SDK 是用户行为数据采集的的重要工具，网站、APP、小程序通过SDK实现用户行为数据采集，并将用户行为数据上传至设定的服务器，完成用户行为数据采集。
## SDK支持范围

SDK 包括客户端SDK和服务端SDK。目前客户端SDK支持Android和iOS原生，Web JS，小程序，以及众多第三方混合开发框架。服务端SDK支持Java、PHP、Python。
### 移动端框架支持版本

|  框架  | SDK类别 | App适配的系统版本 | 框架版本|
|  :----  | :----:  | : ----: | :----:|
| 原生Android | 无埋点、埋点 | Android 4.2+ | - |
| 原生iOS | 无埋点、埋点 | iOS 8+ |  - |
| React Native | 埋点 | Android 4.2+  iOS 8+ |  0.46-0.56、0.59.9 |
| Flutter | 埋点 | Android 4.2+  iOS 8+ |  - |
:::tip 说明
* 埋点SDK 只自动采集用户访问事件，需要开发同学调用相应埋点 API 采集埋点事件
* 无埋点SDK 具备 埋点SDK 的所有功能，同时具备自动采集基本用户行为事件，如原生和内嵌H5的页面访问，控件点击，输入框内容改变，以及内嵌H5页面表单提交
:::

### 小程序框架支持范围
小程序支持微信小程序、支付宝小程序、百度小程序、字节(抖音头条)小程序、QQ小程序、淘宝小程序、快应用。

微信小程序支持的开发框架如下：
- 原生 、 原生+第三方插件
- Taro 2(React)
- Taro 3(React)、Taro 3(vue2)、Taro 3(vue3)
- uni-app(vue2)、uni-app(vue3)
- mpvue、mpvue+第三方插件
- WePY 1.x、WePY 2.x 以及第三方插件
- Chameleon
- Remax

### 服务端支持范围
Java SDK 支持 Java 6、7、8<br/>
PHP SDK 支持 PHP 版本 => 5.5<br/>
Python SDK 兼容 Python2.7+ 和 Python3.5+


## SDK事件支持范围

各SDK支持的事件类型如下表：

| SDK | 访问 |  页面浏览  | 元素点击 | 输入框改变内容 | 表单提交 | 埋点 | 用户属性 | 激活 | 唤醒 | 应用关闭 | 
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:----:|  
|Android无埋点| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|Android埋点  | ✅ | - | - | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
|iOS无埋点    | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|iOS埋点      | ✅ | - | - | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
|Web JS      | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |  -|
|小程序       | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | -  | - | ✅ |
|React Native| ✅ | - | - | - | - | ✅ | ✅ | - | - | - |
|Flutter     | ✅ | - | - | - | - | ✅ | ✅ | - | - | - |
|Java        | - | - | - | - | - | ✅ | ✅ | - | - | - |
|PHP         | - | - | - | - | - | ✅ | ✅ | - | - | - |
|Python      | - | - | - | - | - | ✅ | ✅ | - | - | - |

:::tip 说明
关于事件类型说明请查看[**事件模型**](/docs/sdk/basic/eventModel)，事件包含字段信息请查看[**测量协议**](sdk/basic/measurement-protocol) <br/>
服务端SDK支持多维度表，用户融合功能，具体参考服务端SDK<br/>
SDK未支持的服务端开发语言，GrowingIO 提供有 OPEN API
:::


