import EchartsCommon from "../echartsCommon";
export default {
  casoulListData(a, b, c, d, e, f, g, h, k, count) {
    var name1 = "";
    var name2 = "";
    var m = "";
    var n = "";
    var pip1 = 0;
    var pip2 = 0;
    switch (count) {
      case 0:
        name1 = "pH";
        name2 = "总铜";
        m = "";
        n = "mg/L";
        pip1 = 9;
        pip2 = 2.0;
        // this.initTest(a, b, k,name1,name2,m,n,pip1,pip2);
        EchartsCommon.initTest2(a, b, k, name1, name2, m, n, pip1, pip2);

        break;
      case 1:
        name1 = "总氮";
        name2 = "氨氮";
        m = "mg/L";
        n = "mg/L";
        pip1 = 45;
        pip2 = 35;
        // this.initTest(c, d, k,name1,name2,m,n,pip1,pip2);
        EchartsCommon.initTest2(c, d, k, name1, name2, m, n, pip1, pip2);
        //  debugger
        break;
      case 2:
        name1 = "总磷";
        name2 = "总镍";
        m = "mg/L";
        n = "mg/L";
        pip1 = 4;
        pip2 = 1;
        // this.initTest(e, f, k,name1,name2,m,n,pip1,pip2);
        EchartsCommon.initTest2(e, f, k, name1, name2, m, n, pip1, pip2);
        break;
      case 3:
        name1 = "总铬";
        name2 = "总氰化物";
        m = "mg/L";
        n = "mg/L";
        pip1 = 1.5;
        pip2 = 1.0;
        // this.initTest(g, h, k,name1,name2,m,n,pip1,pip2);
        EchartsCommon.initTest2(g, h, k, name1, name2, m, n, pip1, pip2);
        break;
    }
  }
};
