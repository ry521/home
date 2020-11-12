(function switchStyle() {
  const path = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  )
    ? 'mobile.css'
    : 'pc.css';
  document.write(`<link href="./css/${path}" type="text/css" rel=stylesheet>`);
})();
