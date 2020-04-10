import Store from "../vuex/store";

export default {
  selectDataPicStation(res) {
    // this.open = false;
    var menu = res;
    // var name = "";
    var _this = this;
    var pickerView = new PickerView({
      bindElem: classPicstation, // 绑定的元素,用于区别多个组件存在时回显区别，如果单个可以随意填某个元素
      data: menu, // 说明：该参数必须符合json格式 且最里层是个数组，如上面的data变量所展示的[3,4]。
      title: "选择站点", // 顶部标题文本 默认为“标题”
      leftText: "取消", // 头部左侧按钮文本 默认为‘取消’
      rightText: "确定", // 头部右侧按钮文本 默认为“确定”
      rightFn: function(selectArr) {
        // 点击头部右侧按钮的回调函数，参数为一个数组，数组对应滚轮中每项对应的值
        console.log(selectArr[0]);
        // _this.initDataType(selectArr[0]);
        // _this.normal.value1 = selectArr[0];
        // _this.open = true;
        // name = selectArr[0];
        Store.state.dropDownData = selectArr[0];
      }
    });
  }
};
