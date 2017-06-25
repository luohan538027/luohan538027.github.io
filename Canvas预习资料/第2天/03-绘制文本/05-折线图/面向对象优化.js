/**
 *
 * Created by WilbertCheng on 2017/5/6.
 */

function LineChart(opt) {
    //把opt中的属性放到this中-->混入继承
    for (var key in opt) {
        this[key] = opt[key];
    }


    //计算原点坐标
    this.zeroX = this.yTopX;
    this.zeroY = this.yTopY + this.yLength;
    //计算x轴顶点坐标
    this.xTopX = this.zeroX + this.xLength;
    this.xTopY = this.zeroY;

    this.init();
}

// var line2=new LineChart();//line2.__proto__--->默认原型

LineChart.prototype = {
    constructor: LineChart,
    init: function () {
        //1、坐标轴


        this.drawAxis();
        this.drawPoints();
        this.line();
        this.drawText();


    },
    drawAxis: function () {
        //y轴顶点箭头
        ctx.moveTo(this.yTopX + this.arrowBottom / 2, this.yTopY + this.arrowHeight);
        ctx.lineTo(this.yTopX, this.yTopY);
        ctx.lineTo(this.yTopX - this.arrowBottom / 2, this.yTopY + this.arrowHeight);

        //x轴顶点箭头
        ctx.moveTo(this.xTopX - this.arrowHeight, this.xTopY - this.arrowBottom / 2);
        ctx.lineTo(this.xTopX, this.xTopY);
        ctx.lineTo(this.xTopX - this.arrowHeight, this.xTopY + this.arrowBottom / 2);

        //坐标线
        ctx.moveTo(this.yTopX, this.yTopY);
        ctx.lineTo(this.zeroX, this.zeroY);
        ctx.lineTo(this.xTopX, this.xTopY);

        ctx.stroke();
    },

    drawPoints: function () {
        //2、绘制坐标轴上的点
        //2.1、计算每一个点位于canvas中的坐标

        var self = this;
        this.data.forEach(function (v, i) {
            //v={x:xxx,y:xxx}

            v.cvsX = self.zeroX + v.x;
            v.cvsY = self.zeroY - v.y
        });

        //2.2、绘制点
        this.data.forEach(function (v, i) {
            //v={x:xxx,y:xxx,cvsX:xxx,cvsY:xxx}


            //假定小矩形边长为6
            var width = 6;

            ctx.fillRect(v.cvsX - width / 2, v.cvsY - width / 2, width, width);


        });
    },

    line: function () {
        //3、连线
        ctx.moveTo(this.zeroX, this.zeroY);
        this.data.forEach(function (v, i) {
            ctx.lineTo(v.cvsX, v.cvsY);
        });
        ctx.stroke();
    },

    //绘制文字
    drawText:function(){

        ctx.font="20px 微软雅黑";
        ctx.textAlign="center";

        this.data.forEach(function(v,i){
            //v:{x:...,y:...,cvsX:...,cvsY:...}


            ctx.fillText("("+v.x+","+v.y+")",v.cvsX,v.cvsY-15);
        })
    }
};