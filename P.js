$('.car_t').mouseenter('click',function(){
    $('.last').show()
})
     
                                                                                                                                                                                                                                        
$(function(){

   var shop = {jia: []}
   $.each($('.shop>ul>li'), function(index){
       //item:普通的dom元素， 需要用jq方法$(item) 变成jq对象
       var num = $(this).find('input').val() -0
       var price = $(this).find('.J_smallTotalPrice').html().split('￥')[1] - 0
       shop.jia.push({
           num:num,
           price:price,
           tpri:num * price,
       })
   })
 console.log(shop)
   shop.J_totalPrice = $('.J_totalPrice').text().split('￥')[1] - 0
   shop.J_tota= $('.J_totalCount').text().split('(')[1].split(')')[0] - 0

   //2 通过事件来操作数据
   $('.J_btnAddCount').on('click',function(){
       //点击加号时获取对应的下标，方便修改对应的数据
       var index = $(this).parents('li').index()

       //对应你的数据num++
       var newNum = ++shop.jia[index].num
       //后期会有多个数据修改的过程，最好封装一个方法
       changeDate(index, newNum)
   })
    //3通过事件来操作数据
    $('.J_btnDelCount').on('click',function(){
        //点击——号时，要获取对应的下标，方便修改对应的数据
        var index = $(this).parents('li').index()
        console.log(index)
        //对应你的数据num++
        var newNum = --shop.jia[index].num
        //后期会有多个数据修改的过程，最好封装一个方法
        if(newNum <= 0){
            //删除商品
            if(confirm('是否要删除')){
              del(index)
            }
            return
        }
        changeDate(index, newNum    )
    })

//修改数据
     function changeDate(index, n){
         if(index >= 0){
             // 单个商品总价
             var price = shop.jia[index].price
             shop.jia[index].tpri = n * price

         }
     //整个购物车的总数量/总价
       shop.J_totalPrice = 0
       shop.J_tota = 0
       $.each(shop.jia,function(index , item){
           shop.J_totalPrice+=item.num
           shop.J_tota+=item.tpri
       })
       renderHtml(index)
     }
     //渲染数据

     function renderHtml(index){
         if(index >=0){
             var num = shop.jia[index].num
             var tp  = shop.jia[index].tpri
             $('.shop>ul>li').eq(index).find('input').val(num)
             console.log(index)
             $('.shop>ul>li')
             .eq(index)
             .find('.J_smallTotalPrice')
             .html('￥'+ tp)
         }
         $('.J_totalPrice').text(shop.J_totalPrice)
         $('.J_totalCount').text(shop.J_tota)
     }
     $('.del').on('click',function(){
         var index=$(this).parent().index()
         del(index)
     })
     //del
     function del(index){
         //删除dom页面
         $('.shop>ul>li').eq(index).remove()
         //删shop.jia
         shop.jia.splice(index, 1)
         changeDate(-1)
     }
})




$('.shop').mouseleave('click',function(){
    $('.last').hide()
})

