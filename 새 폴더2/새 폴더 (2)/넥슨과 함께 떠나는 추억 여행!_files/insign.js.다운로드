(function () {
  const infaceLoginAPI = {
    gotoSignIn: function () {
      return window.inface.auth.gotoSignIn();
    },
    gotoSignOut: function () {
      return window.inface.auth.gotoSignOut();
    },
  };

  window.infaceLoginAPI = window.infaceLoginAPI ? window.infaceLoginAPI : infaceLoginAPI;
})();

function onStartInfaceAuth() {
  // 사용자 작업을 여기에서 수행 할 수 있습니다.
}

function onErrorInfaceAuth(error) {
  // 자바스크립트 SDK 초기화 실패시 호출됩니다.
  // console.error('onErrorInfaceAuth', error);
  // {code: 113002, name: "FAIL_TO_INIT", message: "초기화를 실패했습니다.", data: TypeError: _content...}
}
