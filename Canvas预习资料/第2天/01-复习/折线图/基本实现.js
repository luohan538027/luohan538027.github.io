/**
 *
 * Created by WilbertCheng on 2017/5/6.
 */

//1、坐标轴

var data=[
    {x:50,y:50},
    {x:100,y:250},
    {x:150,y:300},
    {x:200,y:150},
    {x:300,y:250}
];



var yTopX = 50, yTopY = 50,
    yLength = 400, xLength = 600,
    arrowBottom=20,arrowHeight=30;

//计算原点坐标
var zeroX=yTopX,zeroY=yTopY+yLength;
//计算x轴顶点坐标
var xTopX=zeroX+xLength,xTopY=zeroY;

//y轴顶点箭头
ctx.moveTo(yTopX+arrowBottom/2,yTopY+arrowHeight);
ctx.lineTo(yTopX,yTopY);
ctx.lineTo(yTopX-arrowBottom/2,yTopY+arrowHeight);

//x轴顶点箭头
ctx.moveTo(xTopX-arrowHeight,xTopY-arrowBottom/2);
ctx.lineTo(xTopX,xTopY);
ctx.lineTo(xTopX-arrowHeight,xTopY+arrowBottom/2);

//坐标线
ctx.moveTo(yTopX,yTopY);
ctx.lineTo(zeroX,zeroY);
ctx.lineTo(xTopX,xTopY);

ctx.stroke();

//2、绘制坐标轴上的点
//2.1、计算每一个点位于canvas中的坐标
data.forEach(function(v,i){
    //v={x:xxx,y:xxx}

    v.cvsX=zeroX+v.x;
    v.cvsY=zeroY-v.y
});

//2.2、绘制点
data.forEach(function(v,i){
    //v={x:xxx,y:xxx,cvsX:xxx,cvsY:xxx}


    //假定小矩形边长为6
    var width=6;

    ctx.fillRect(v.cvsX-width/2,v.cvsY-width/2,width,width);


});


//3、连线
ctx.moveTo(zeroX,zeroY);
data.forEach(function(v,i){
    ctx.lineTo(v.cvsX,v.cvsY);
});
ctx.stroke();