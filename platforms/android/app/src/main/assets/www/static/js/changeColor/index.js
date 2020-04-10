import store from "../vuex/store";
const factorValue = store.state.factor;
export default {
  // props
  changeColor(user, name, factor, nomal) {
    var color = "";
    switch (name) {
      case "ph":
        if (factor < factorValue.ph * 0.85 || factor > factorValue.ph1 * 1.15) {
          color = "color:red";
        } else if (
          (factor > factorValue.ph * 0.85 && factor < factorValue.ph) ||
          (factor < factorValue.ph1 * 1.15 && factor > factorValue.ph1)
        ) {
          color = "color:orange";
        } else {
          color = "";
        }
        break;
      case "氨氮":
        if (
          factor > factorValue.ammoniaNitrogen &&
          factor < factorValue.ammoniaNitrogen * 1.15
        ) {
          color = "color:orange";
        } else if (factor > factorValue.ammoniaNitrogen * 1.15) {
          color = "color:red";
        }
        break;
      case "总氮":
        if (
          factor > factorValue.nitrogen &&
          factor < factorValue.nitrogen * 1.15
        ) {
          color = "color:orange";
        } else if (factor > factorValue.nitrogen * 1.15) {
          color = "color:red";
        }
        break;
      case "总磷":
        if (
          factor > factorValue.phosphorus &&
          factor < factorValue.phosphorus * 1.15
        ) {
          color = "color:orange";
        } else if (factor > factorValue.phosphorus * 1.15) {
          color = "color:red";
        }
        break;
      case "cod":
        if (factor > factorValue.cod && factor < factorValue.cod * 1.15) {
          color = "color:orange";
        } else if (factor > factorValue.cod * 1.15) {
          color = "color:red";
        }
        break;
      case "总氰化物":
        if (
          factor > factorValue.prussiate &&
          factor < factorValue.prussiate * 1.15
        ) {
          color = "color:orange";
        } else if (factor > factorValue.prussiate * 1.15) {
          color = "color:red";
        }
        break;
      case "总铜":
        if (factor > factorValue.cuprum && factor < factorValue.cuprum * 1.15) {
          color = "color:orange";
        } else if (factor > factorValue.cuprum * 1.15) {
          color = "color:red";
        }
        break;
      case "总铬":
        if (
          factor > factorValue.chromium &&
          factor < factorValue.chromium * 1.15
        ) {
          color = "color:orange";
        } else if (factor > factorValue.chromium * 1.15) {
          color = "color:red";
        }
        break;
      case "总镍":
        if (
          factor > factorValue.prussiate &&
          factor < factorValue.prussiate * 1.15
        ) {
          color = "color:orange";
        } else if (factor > factorValue.prussiate * 1.15) {
          color = "color:red";
        }
        break;
    }
    return color;
  }
};
