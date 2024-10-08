const path = "../Assets/";

const icons = {
     logo: require(path + "logo.png"),
     reload: require(path + "reload.png"),
     return: require(path + "return.png"),
     unKnowUser: require(path + "unknow-user.png"),
     lock: {
          open: require(path + "lock-open.png"),
          close: require(path + "lock-close.png")
     },
     background: {
          1: require(path + "bg-01.png"),
          2: require(path + "bg-02.png"),
          3: require(path + "bg-03.png"),
          4: require(path + "bg-04.png"),
          5: require(path + "bg-05.png"),
          6: require(path + "bg-06.png"),
          7: require(path + "bg-07.png"),
     },
};

module.exports = icons;
