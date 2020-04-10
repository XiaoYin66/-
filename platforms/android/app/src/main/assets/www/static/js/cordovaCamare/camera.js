import store from "../../js/vuex/store";
import AppBace from "../../ajax";
var token = sessionStorage.getItem("token");
var formDate = new FormData();
export default {
  cameraTake() {
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
      //  Camera.PictureSourceType.SAVEDPHOTOALBUM
    });
    function onSuccess(imageData) {
      console.log(imageData);
      //   data:image/jpeg;base64,

      store.commit("cameraPicture", "data:image/jpeg;base64," + imageData);
    }

    function onFail(message) {
      console.log(message);
    }
  },
  cameraTakeEvent(e) {
    alert(e);
    var config = {};
    switch (e) {
      case 0:
        config = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          // --是否允许编辑，如果设置为true,用户可对图片进行缩小放大及滑动等操作来编辑图片。
          encodingType: Camera.EncodingType.JPEG,
          //  --告诉函数返回何种图片类型，支持的选项有JPEG和PNG.
          targetWdith: 100,
          // --目标高度，决定函数将返回多大尺寸的图片，你可以设置targetWidth或者targetHeight中的任何一个，图片会据此进行缩放。如果你两个值都指定了，图片的缩放比例会根据最小的那个值进行缩放。无论哪种方式，长宽比都不会发生改变。

          targetHeight: 100,
          // --目标宽度
          popoverOptions: CameraPopoverOptions,
          // 设置项调用相机自带的设置项
          saveToPhotoAlbum: false
          // -是否保存到本地相册中
        };
        break;

      case 1:
        config = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
          allowEdit: true,
          // --是否允许编辑，如果设置为true,用户可对图片进行缩小放大及滑动等操作来编辑图片。
          encodingType: Camera.EncodingType.JPEG,
          //  --告诉函数返回何种图片类型，支持的选项有JPEG和PNG.
          targetWdith: 100,
          // --目标高度，决定函数将返回多大尺寸的图片，你可以设置targetWidth或者targetHeight中的任何一个，图片会据此进行缩放。如果你两个值都指定了，图片的缩放比例会根据最小的那个值进行缩放。无论哪种方式，长宽比都不会发生改变。

          targetHeight: 100,
          // --目标宽度
          popoverOptions: CameraPopoverOptions,
          // 设置项调用相机自带的设置项
          saveToPhotoAlbum: false
          // -是否保存到本地相册中
        };
        break;
      //    Camera.PictureSourceType.PHOTOLIBRARY
      // 设备库

      // Camera.PictureSourceType.SAVEDPHOTOALBUM
      // 相册
    }
    navigator.camera.getPicture(onSuccess, onFail, config);
    function onSuccess(imageData) {
      console.log(imageData);
      //   data:image/jpeg;base64,

      // store.commit("cameraPicture", "data:image/jpeg;base64," + imageData);
    }

    function onFail(message) {
      console.log(message);
    }
  },
  cameraTakePoint(e, id) {
    var config = {};
    switch (e) {
      case 0:
        config = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          // --是否允许编辑，如果设置为true,用户可对图片进行缩小放大及滑动等操作来编辑图片。
          encodingType: Camera.EncodingType.JPEG,
          //  --告诉函数返回何种图片类型，支持的选项有JPEG和PNG.
          targetWdith: 100,
          // --目标高度，决定函数将返回多大尺寸的图片，你可以设置targetWidth或者targetHeight中的任何一个，图片会据此进行缩放。如果你两个值都指定了，图片的缩放比例会根据最小的那个值进行缩放。无论哪种方式，长宽比都不会发生改变。

          targetHeight: 100,
          // --目标宽度
          popoverOptions: CameraPopoverOptions,
          // 设置项调用相机自带的设置项
          saveToPhotoAlbum: false
          // -是否保存到本地相册中
        };
        break;

      case 1:
        config = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
          allowEdit: true,
          // --是否允许编辑，如果设置为true,用户可对图片进行缩小放大及滑动等操作来编辑图片。
          encodingType: Camera.EncodingType.JPEG,
          //  --告诉函数返回何种图片类型，支持的选项有JPEG和PNG.
          targetWdith: 100,
          // --目标高度，决定函数将返回多大尺寸的图片，你可以设置targetWidth或者targetHeight中的任何一个，图片会据此进行缩放。如果你两个值都指定了，图片的缩放比例会根据最小的那个值进行缩放。无论哪种方式，长宽比都不会发生改变。

          targetHeight: 100,
          // --目标宽度
          popoverOptions: CameraPopoverOptions,
          // 设置项调用相机自带的设置项
          saveToPhotoAlbum: false
          // -是否保存到本地相册中
        };
        break;
      //    Camera.PictureSourceType.PHOTOLIBRARY
      // 设备库

      // Camera.PictureSourceType.SAVEDPHOTOALBUM
      // 相册
    }
    navigator.camera.getPicture(onSuccess, onFail, config);
    async function onSuccess(imageData) {
      console.log(imageData);
      //   data:image/jpeg;base64,

      store.commit("pointPicUpload", "data:image/jpeg;base64," + imageData);
      var url = "/mobile/point/image";
      formDate.append("files", imageData);
      formDate.append("id", id);
      var res = await AppBace.request(url, "POST", formDate, token);
      console.log(res);
    }

    function onFail(message) {
      console.log(message);
    }
  }
};
