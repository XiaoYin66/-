function news(params) {
  cordova.plugins.notification.local.schedule({
    title: "My first notification",

    text: "Thats pretty easy...",

    foreground: true
  });
}
export{
    news
}
