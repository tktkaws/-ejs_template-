// barba設定
barba.init({
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        console.log("leave");
        //   leaveAnimation();
        //   pageTransition();
        //   await delay(1000);
        done();
      },
      async enter(data) {
        console.log("enter");
        //   await delay(600);
        //   enterAnimation();
      },
    },
  ],
  // ...
});
