function App() {

}

App.prototype = {
    init: function () {
        this.reset()
        this.initEvent()
    },

    reset: function () {
        let _this = this
        this.$mobileInput = $("#mobile")
        this.$mobileAlert = $("#mobile_alert")

        this.$passwordInput = $("#password")
        this.$passwordAlert = $("#password_alert")

        this.$loginButton = $("#login_button")

        this.mobile = ""
        this.password = ""

        this.mobileCheckResult = false
        this.passwordCheckResult = false
    },

    initEvent() {
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
    }
}

let app = new App()
app.init()

let vue = new Vue({
    el: "#login_button",
    data: {
        app: app
    },
    computed: {
        isDisabled: function () {
            return !(this.app.mobileCheckResult && this.app.passwordCheckResult)
        }
    }
})