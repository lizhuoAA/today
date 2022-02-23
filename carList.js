(function () {
    addCar();
})();

function addCar() {
    /*
    注意 超链接点击时会先触发click然后再触发本省的href属性，
    所以会导致页面的刷新，需要把超链接的href功能给禁用掉！ 
    <a href='javascript:void(0);'></a>
    */
    $('.j_car').prop('href', 'javascript:void(0);').click(function () {
        //1.先获取商品的相关信息
        //① 取名字
        var gName = $(this).parent().prev().first().text();
        console.log(gName);
        //② 取价格
        var gPrice = $(this).parent().prev().prev().first().text().trim();
        console.log(gPrice);
        //③ 取图片路径
        var gImg_src = $(this).parent().parent().find($('img')).prop('src');
        console.log(gImg_src);
        //var num = 1;
        var goodObj = {
            'gName': gName,
            'gPrice': gPrice,
            'gImg_scr': gImg_src,
            'num': 1
        }

        //2.把商品数据存入到本地存储中  carList
        var carList = localStorage.getItem('carList');//此时的carList是字符串
        //定义一个空数组 用来存放所有的商品对象
        var carArr = [];
        //把取出的商品信息存放到 carArr中
        carArr.push(goodObj);

        if (carList == null) {
            //如果本地存储中没有 carList 我们需要创建一个加入进去
            localStorage.setItem('carList', JSON.stringify(carArr));
        } else {
            //如果本地存储中有 carList 我们需要去做判断 该商品是否已经存在？
            //把从本地存储中取出的字符串转换成  json对象
            carList = JSON.parse(carList);

            //假设没有相同的商品
            var state = false;
            $.each(carList, function (i, o) {
                //$.each(o,function(k,v){
                //把当前要添加的商品名字跟 数据中已经存在的商品名字做对比
                if (o.gName == gName) {
                    state = true;
                    //如果存在相同商品  该商品对象中的num值 加上选中的商品数量
                    //console.log(typeof o.num)
                    //o.num++;
                    o.num = o.num + 1
                    return false;
                }
                //})
            })
            //根据第三方变量  状态 state做判断
            if (state == false) {
                //如果没有相同的商品，新增
                carList.push(goodObj);
            }
            //把新增商品后的数组/修改数量后的数组 再次放入本地存储
            localStorage.setItem('carList', JSON.stringify(carList));
        }
    })
}