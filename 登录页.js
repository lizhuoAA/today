//计时器 如果记住账号和密码 3秒后自动跳转首页
var timer = setInterval(function () {
    if ($(".loadGiet").prop("checked") == true&&localStorage.getItem('chk') == "true") {
        $('.tableBtn').trigger('click');
    }
}, 3000)
//如果localStorage内的自动登录按钮状态是选中的话
//就获取到所有的值 赋值给input框内
if (localStorage.getItem('chk') == "true") {
    $(".sjh").val(localStorage.getItem('username'));
    $(".pword").val(localStorage.getItem('password'));
    $(".loadGiet").prop("checked", JSON.parse(localStorage.getItem('chk')));
}
//登录
$(".tableBtn").prop('href', 'javascript:void(0);').on("click", function () {
    $.ajax({
        type: "post",
        url: "http://127.0.0.1:3001/user",
        dataType: "json",
        data: {
            "act": "login",
            'user': $(".sjh").val(),
            'pass': $(".pword").val(),
        },
        success: function (result) {
            if (result.ok==true) {
                localStorage.setItem('username', $(".sjh").val())
                localStorage.setItem('password', $(".pword").val())
                localStorage.setItem('chk', $(".loadGiet").prop("checked"))
                window.location.href = "./首页.html"
                /* if ($(".loadGiet").prop("checked") == true) {
                    localStorage.setItem('aaa', 'true')
                }else{
                    localStorage.removeItem('aaa')
                } */
            }else{
                localStorage.removeItem('username');
                localStorage.removeItem('password');
                localStorage.removeItem('chk');
                alert(result.msg)
            }
        }
    })
})
