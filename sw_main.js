if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    //今回はDocRoot以下をServiceWorkerのスコープとします
    navigator.serviceWorker.register("/service_worker.js", { scope: "./" }).then(
      function (registration) {
        // 登録成功
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // 登録失敗
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}