document.addEventListener("deviceready",onDeviceready,false);

function onDeviceready() {
    cordova.plugins.notification.local.schedule({

        title: 'My first notification',
    
        text: 'Thats pretty easy...',
    
        foreground: true
    
    });
}