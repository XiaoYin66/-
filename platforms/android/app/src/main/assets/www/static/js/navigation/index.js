export default {
  /**
   *
   * @param {router名称，需要return一个path} e
   */
  menuRouter(e) {
    var event = "";
    switch (e) {
      case "事件上报":
        // this.$router.replace("/EventControlList");
        event = "/EventControl";
        break;
      case "任务管理":
        // this.$router.replace("/TaskControlList");
        event = "/TaskControlList";
        break;
      case "日志管理":
        // this.$router.replace("/JournalControlList");
        event = "/JournalControlList";
        break;
      case "数据管理":
        // this.$router.replace("/dataListControl");
        event = "/dataListControl";
        // this.$toast.warning("暂时未对此用户开放权限");
        break;
      case "预警管理":
        // this.$router.replace("/Warning");
        event = "/Warning";
        // this.$toast.warning("暂时未对此用户开放权限");
        break;
      case "车辆管理":
        // this.$router.replace("/carPage");
        event = "/carPage";
        // this.$toast.warning("暂时未开放");
        break;
      case "用户审核":
        // this.$router.replace("/carPage");
        event = "/Toexamine";
        //
        // this.$toast.warning("暂时未开放");
        break;
      case "反馈列表":
        // this.$router.replace("/carPage");
        event = "/feedBackList";
        // this.$toast.warning("暂时未开放");
        break;
      case "监测调度":
        // this.$router.replace("/carPage");
        event = "/MonitoringDispatching";
        // this.$toast.warning("暂时未开放");
        break;
      case "监测任务":
        // this.$router.replace("/carPage");
        event = "/MonitoringTasks";
        // this.$toast.warning("暂时未开放");
        break;
    }
    return event;
  }
};
