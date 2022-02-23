   

//  树形菜单
var lis = document.getElementsByClassName('fj')
var list = document.getElementsByClassName('zj')
  for(var i = 0; i<lis.length; i++){
      lis[i].index = i
      lis[i].onmouseenter=function(){
          list[this.index].style.display ='block'
      }
      lis[i].onmouseleave=function(){
        list[this.index].style.display ='none'
}
}



//广告轮播
function zhuo(){
    var str = document.getElementById('express')
    var timer = null
    var index = 0

function time1(){
    timer = setInterval(function(){
        index++
        if(index>str.children.length){
            index= 0
        }
        str.scrollTop = str.children.length * index
    },200)
}
time1()
    
    
   str.addEventListener('mouseenter',function(){
       clearInterval(timer)
   })

str.addEventListener('mouseleave',function(){
    time1()
})
}
zhuo()

//轮播图效果
var str = document.getElementsByClassName('slide_box ')[0]
var timer = null
var index = 0
var lis =document.getElementsByClassName('lizhuo')[0]
var timer1 = null
var num1 = document.getElementsByClassName('num')[0]
function time1(){
timer = setInterval(function(){
    index++
    if(index>=str.children.length){
        index= 0
    }
    //  console.log(index);
    move()
    listStyle(index)
    // lis.scrollTop = str.children[0].offsetHeight * index
    // console.log(str.children[0].offsetHeight,index,lis.scrollTop)
},1000)
}
time1()
function move(){
    var step = 0
    var maxstep= 20
    var stetr = lis.scrollTop
    var end = str.children[0].offsetHeight * index
    var everystep = (end - stetr) / maxstep
    time1 = setInterval(function(){
        step++
        if(step>=maxstep){
           clearInterval(time1)
        }
        stetr+=everystep
        lis.scrollTop = stetr
    },4)
}
function listStyle(index){
      for(var i = 0; i<num1.children.length; i++){
          num1.children[i].className = ''
      }
    num1.children[index].className='active'
}