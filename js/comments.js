window.disqus_config = function () {
  this.page.url = "https://code.daviddoolin.com/index.html";
  // Preserve the existing discussion when switching the page to HTTPS.
  this.page.identifier = "dmdcodeindex";
};

(() => {
  const script = document.createElement("script");
  script.src = "https://codedaviddoolincom.disqus.com/embed.js";
  script.async = true;
  script.dataset.timestamp = Date.now().toString();
  document.head.appendChild(script);
})();
