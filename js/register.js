function App() {

}

App.prototype = {
    init: function () {
        this.reset()
        this.initEvent()
    },

    // 选择元素, 初始化属性
    reset: function () {
        let _this = this
        this.$mobileInput = $("#mobile")
        this.$mobileAlert = $("#mobile_alert")

        this.$passwordInput = $("#password")
        this.$passwordAlert = $("#password_alert")

        this.$passwordConfirmInput = $("#password_confirm")
        this.$passwordConfirmAlert = $("#password_confirm_alert")

        this.$registerButton = $("#register_button")

        this.mobile = ""
        this.password = ""
        this.passwordConfirm = ""

        this.mobileCheckResult = false
        this.passwordCheckResult = false
        this.passwordConfirmResult = false
    },

    // 绑定事件
    initEvent: function () {
        let _this = this
        this.$mobileInput.on("keyup", function () {
            _this.mobile = $(this).val()
            setTimeout(function () {
                _this.mobileCheck(_this.mobile)
            }, 500)
        })

        this.$passwordInput.on("keyup", function () {
            _this.password = $(this).val()
            setTimeout(function () {
                _this.passwordCheck(_this.password)
            }, 500)
        })

        this.$passwordConfirmInput.on("keyup", function () {
            _this.passwordConfirm = $(this).val()
            setTimeout(function () {
                _this.passwordConfirmCheck(_this.passwordConfirm)
            }, 500)
        })

        this.$registerButton.on("click", function () {

        })
    },

    // 检查手机号
    mobileCheck: function (mobile) {
        let _this = this
        _this.mobileCheckResult = /^1[3-9]\d{9}$/.test(mobile)
        if (_this.mobileCheckResult === false) {
            _this.$mobileAlert.fadeIn()
        } else {
            _this.$mobileAlert.fadeOut()
        }
    },

    // 检查密码
    passwordCheck: function (password) {
        let _this = this
        _this.passwordCheckResult = password.length >= 6 && password.length <= 18
        if (_this.passwordCheckResult === false) {
            _this.$passwordAlert.fadeIn()
        } else {
            _this.$passwordAlert.fadeOut()
        }
    },

    // 确认密码
    passwordConfirmCheck: function (passwordConfirm) {
        let _this = this
        _this.passwordConfirmResult = _this.password === passwordConfirm
        if (_this.passwordConfirmResult === false) {
            _this.$passwordConfirmAlert.fadeIn()
        } else {
            _this.$passwordConfirmAlert.fadeOut()
        }
    }
}
new App().init()