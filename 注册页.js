var one = 0;
var two = 0;
var there = 0;
var four = 0;
$(".tableBtn").prop("disabled", true);
//手机号码表单验证
$("input:eq(0)").on("input", function () {
    var reg = eval("/" + $(this).prop("pattern") + "/");
    var reg_ = reg.test($(this).val())
    if ($(this).val() == 0) {
        $(".tableItem:eq(0)").css("border", "1px solid #e0e0e0")
        $(".iphone").eq(0).hide()
        one = 0;
    }
    if (reg_ == false) {
        $(".tableItem:eq(0)").css("border", "1px solid red")
        $(".iphone").eq(0).show()
        one = 0;
    } else {
        $(".tableItem:eq(0)").css("border", "1px solid #e0e0e0")
        $(".iphone").eq(0).hide()
        one = 1;
    }
    if (one == 1 && two == 1 && there == 1 && four == 1) {
        $(".tableBtn").prop("disabled", false);
    } else {
        $(".tableBtn").prop("disabled", true);
    }
})
//验证码表单验证
$(".yanzheng").on("input", function () {
    var reg_ = /[0-9]{6}/;
    var reg = reg_.test($(".yanzheng").val());
    if ($(".yanzheng").val() == 0) {
        $(".fl").css("border", "1px solid #e0e0e0")
        two = 0;
    }
    if (reg == false) {
        $(".fl").css("border", "1px solid red")
        two = 0;
    } else {
        $(".fl").css("border", "1px solid #e0e0e0")
        two = 1;
    }
    if (one == 1 && two == 1 && there == 1 && four == 1) {
        $(".tableBtn").prop("disabled", false);
    } else {
        $(".tableBtn").prop("disabled", true);
    }
})
//验证码倒计时
$(".hidyzm").hide()
$(".yzmdjs").on("click", function () {
    var i = 60;
    var timer = setInterval(function () {
        $(".yzmdjs").hide()
        $(".hidyzm").show()
        i--;
        i > 9 ? $(".hidyzm").text("倒计时" + i + "秒") : $(".tableText").text("倒计时0" + i + "秒")
        if (i == -1) {
            $(".yzmdjs").show()
            $(".hidyzm").hide()
            $(".yzmdjs").text("再次获取验证码");
            clearInterval(timer);
        }
    }, 1000)
})
//设置密码
$(".pword").on("input", function () {
    var reg_ = /^\w{6,10}$/;
    var reg = reg_.test($("input:eq(2)").val());
    if ($(this).val() == 0) {
        console.log();
        $(".tableItem:eq(2)").css("border", "1px solid #e0e0e0")
        $(".iphone").eq(1).hide()
        there = 0;
    }
    if (reg == false) {
        $(".tableItem:eq(2)").css("border", "1px solid red")
        $(".iphone").eq(1).show()
        there = 0;
    } else {
        $(".tableItem:eq(2)").css("border", "1px solid #e0e0e0")
        $(".iphone").eq(1).hide()
        there = 1;
    }
    if (one == 1 && two == 1 && there == 1 && four == 1) {
        $(".tableBtn").prop("disabled", false);
    } else {
        $(".tableBtn").prop("disabled", true);
    }
})
//确认密码
$(".ppword").on("input", function () {
    if ($(this).val() == 0) {
        $(".tableItem:eq(3)").css("border", "1px solid #e0e0e0")
        $(".iphone").eq(2).hide()
        four = 1;
    }
    if ($(this).val() == $(".pword").val()) {
        $(".tableItem:eq(3)").css("border", "1px solid #e0e0e0")
        $(".iphone").eq(2).hide()
        four = 1;
    } else {
        $(".tableItem:eq(3)").css("border", "1px solid red")
        $(".iphone").eq(2).show()
        four = 0;
    }
    if (one == 1 && two == 1 && there == 1 && four == 1) {
        $(".tableBtn").prop("disabled", false);
    } else {
        $(".tableBtn").prop("disabled", true);
    }
})
//后台服务器
$(".tableBtn").on("click", function () {
    $.post('http://127.0.0.1:3001/user', {
        'act': 'reg',
        'user': $(".sjh").val(),
        'pass': $(".pword").val(),
    },
        function (result) {
            if (result.ok) {
                window.location.href = './登录.html'
            }else{
                alert("用户名已存在")
            }
        }, "json")
})