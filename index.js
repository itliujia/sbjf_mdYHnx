function onBridgeReady() {
  WeixinJSBridge.call("hideOptionMenu");
}

if (typeof WeixinJSBridge == "undefined") {
  if (document.addEventListener) {
    document.addEventListener("WeixinJSBridgeReady", onBridgeReady, false);
  } else if (document.attachEvent) {
    document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
    document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
  }
} else {
  onBridgeReady();
}

function jf_dzswj() {
  document.location.href =
    "https://etax.sichuan.chinatax.gov.cn/zmpt-web/zmptApp/index.html#/homeSbjf";
}
function jf_zgjsyh() {
  document.location.href =
    "https://shebaofei.zhcs.ccb.com/agfcCZHJS/#/index?EntrstPrjID=CLP004016&txChnlCd=1";
}
function jf_zgnyyh() {
  document.location.href =
    "https://wx.sc.abchina.com/payquery/taxs.html?code=JF-EPAY2020021161354&id=1&url=aHR0cHM6Ly9lbmpveS5hYmNoaW5hLmNvbS9qZi1vcGVuL3BheW1lbnQvcXVlcnlJbnB1dC9KRi1FUEFZMjAyMDAyMTE2MTM1NA%3D%3D";
}
function jf_zggsyh() {
  document.location.href =
    "https://fee.icbc.com.cn/servlet/H5OnlinePaymentServlet?f=ICBCqr&t=2&p=33&x=0&z=&i=UEoxNzIwMTcyMjFBU1NQMDQ0MDI=&n=5Z+O5Lmh5bGF5rCR56S+5L+d5Yy75L+d57y06LS5&l=mQWKPAS/KDVm8oZZT7aOdJXFOLaH7HmRY6SFDGMm+2U2dt6u8ouimD9XjKdGuJ4+kEKjL+RhKWWe";
}
function jf_cdnsyh() {
  document.location.href =
    "https://mbank.cdrcbank.com/dSaleyx/wechat/index.do?state=2&icq=1&cfm=5";
}
function sb() {
  document.location.href =
    "http://csi.cdrsigc.com/cdsb/static/home/sbHome.html";
}
function yb() {
  document.location.href =
    "https://ggfw.scyb.org.cn/hsa-local-prod/web/hsa-pss-wechat-base/#/publicQuery/intensive";
}
