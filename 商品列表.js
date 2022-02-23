//判断商品列表页的登录状态 如果本地存储有 就获取到
if(localStorage.getItem("chk")=="true"){
    $(".dl").text("你好！"+localStorage.getItem("username"))
}
$(".now").prop('href','javascript:void(0);')
//升序
$(".i_up").click(function () {
    $.ajax({
        type: 'get',
        url: 'list.json',
        dataType: 'json',
        success: function (tet) {
            var a=tet.list 
            var min = 0
            for (var i = 0; i < tet.list.length; i++) {
                for (var j = 0; j < tet.list.length; j++) {
                    if (tet.list[i].price <=tet.list[j].price) {
                        min = tet.list[i]
                        tet.list[i] = tet.list[j]
                        tet.list[j] = min
                    }
                }
            }
           var html= template("list1",{
                data:tet
            })
            $(".cate_list").html(html)
        }
    })

})
//降序
$(".i_down").click(function () {
    $.ajax({
        type: 'get',
        url: 'list.json',
        dataType: 'json',
        success: function (tet) {
            var a=tet.list 
            var max = 0
            for (var i = 0; i < tet.list.length; i++) {
                for (var j = 0; j < tet.list.length; j++) {
                   
                    if (tet.list[i].price >=tet.list[j].price) {
                        max = tet.list[i]
                        tet.list[i] = tet.list[j]
                        tet.list[j] = max
                    }
                }
            }
           var html= template("list1",{
                data:tet
            })
            $(".cate_list").html(html)
        }
    })

})
//默认
$(".mo").prop('href','javascript:void(0);').click(function () {
    $.ajax({
        type: 'get',
        url: 'list.json',
        dataType: 'json',
        success: function (tet) {
           var html= template("list1",{
                data:tet
            })
            $(".cate_list").html(html)
        }
    })

})
//搜索框
$(".s_ipt").on({
    focus: function () {
        if($(".s_ipt").val().length>0){
            $("#divsame").show()
        }else{
            $("#divsame").hide()
        }
    },
    input:function(){
        if($(".s_ipt").val().length>0){
            $("#divsame").show()
        }else{
            $("#divsame").hide()
        }
    },
    blur: function () {
        $("#divsame").hide()
    },
})