export default {
  selectBtn(index, array) {
    switch (index) {
      case 0:
        array[0].colorBtn = "background:#b4d0ff;color:#005cff";
        array[1].colorBtn = "background:white";
        array[2].colorBtn = "background:white";
        array[3].colorBtn = "background:white";
        break;
      case 1:
        array[0].colorBtn = "background:white";
        array[1].colorBtn = "background:#b4d0ff;color:#005cff";
        array[2].colorBtn = "background:white";
        array[3].colorBtn = "background:white";
        break;
      case 2:
        array[0].colorBtn = "background:white";
        array[1].colorBtn = "background:white";
        array[2].colorBtn = "background:#b4d0ff;color:#005cff";
        array[3].colorBtn = "background:white";
        break;
      case 3:
        array[0].colorBtn = "background:white";
        array[1].colorBtn = "background:white";
        array[2].colorBtn = "background:white";
        array[3].colorBtn = "background:#b4d0ff;color:#005cff";
        break;
    }
    return array;
  }
};
