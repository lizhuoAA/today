//判断商品详情页的登录状态 如果本地存储有 就获取到
if (localStorage.getItem("chk") == "true") {
    $(".dl").text("你好！" + localStorage.getItem("username"))
}
//搜索框
$(".s_ipt").on({
    focus: function () {
        if ($(".s_ipt").val().length > 0) {
            $("#divsame").show()
        } else {
            $("#divsame").hide()
        }
    },
    input: function () {
        if ($(".s_ipt").val().length > 0) {
            $("#divsame").show()
        } else {
            $("#divsame").hide()
        }
    },
    blur: function () {
        $("#divsame").hide()
    },
})
$('.checkbox input').click(function () {
    if (this.checked) {
        var x = $(this).parent().next().text()
        var y = Number(x.substring(1))
        var z = Number($('.team_sum span').text())
        $('.team_sum span').text(z + y)
    } else {
        var x = $(this).parent().next().text()
        var y = Number(x.substring(1))
        var z = Number($('.team_sum span').text())
        $('.team_sum span').text(z - y)
    }
})
//加减按钮
$(".n_btn_1").click(function(){
    $(".n_ipt").val(Number($(".n_ipt").val())+1);
})
$(".n_btn_2").click(function(){
    if(Number($(".n_ipt").val()>1)){
        $(".n_ipt").val(Number($(".n_ipt").val())-1);
    }
})
//尺码选择
$('#choice1 ul li').click(function () {
    $(this).prop('class', 'checked')
    $(this).siblings().prop('class', ' ')
})
//颜色选择
$('#choice2 ul li').click(function () {
    $(this).prop('class', 'checked')
    $(this).siblings().prop('class', ' ')
})
$('.fl a').prop('href', 'javascript:void(0);').click(function () {
    var uname = $('.des_name p').text()
    var uprice = Number($('.des_price b').text().substring(1))
    var size = $("#choice1 ul li[class='checked'] ").text().trim();
    var ucolor = $("#choice2 ul li[class='checked']  ").text().trim();
    var uimg = $('.my-foto').prop('src')
    var unum = Number($(".n_ipt").val());
    var obj1 = {
        "gName": uname,
        "gPrice": uprice,
        "gImg_scr": uimg,
        "priceAll":uprice,
        'num': unum,
        'usize': size,
        'ucolor': ucolor
    }
    var arrlist = []
    arrlist.push(obj1)
    var t = 1
    if (localStorage.getItem('carList') == null) {
        localStorage.setItem('carList', JSON.stringify(arrlist))
    } else {
        var arrlist = JSON.parse(localStorage.getItem('carList'))
        for (var i = 0; i < arrlist.length; i++) {
            if (arrlist[i].gName == $('.des_name p').text()&&arrlist[i].ucolor==ucolor&&arrlist[i].usize==size) {
                t = 0
                break
            }
        }
        if (t == 1) {
            arrlist.push(obj1)
        } else {
            arrlist[i].num += 1
            console.log(t)
        }
        localStorage.setItem('carList', JSON.stringify(arrlist))
    }
})
  