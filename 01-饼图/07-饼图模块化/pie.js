/**
 * 这是注释的内容
 * Author:Wilbert
 *   Date:2017/6/21
 */
var Pie=(function(){
    //colors需要在某个方法中使用，但是没有必要作为参数，用闭包保护colors
    var colors = (function () {
        return ( "aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue," +
        "blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk," +
        "crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta," +
        "darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray," +
        "darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick," +
        "floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey," +
        "honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon," +
        "lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink," +
        "lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow," +
        "lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple," +
        "mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue," +
        "mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid," +
        "palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue," +
        "purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna," +
        "silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,transparent," +
        "tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen" ).split(',');
    })();

    function Pie(opt) {
        if(!opt)    throw new Error("请阅读文档，按照文档格式提供参数");

        //处理必填的参数
        var requireArgs="data,x,y,canvas,radius".split(",");
        requireArgs.forEach(function(v){
            //判断opt对象有没有v属性
            if(!opt.hasOwnProperty(v)){
                throw new Error("请给参数提供属性："+v);
            }
        });

        //处理可选参数
        // if(!opt["beginRadian"]){
        //     this["beginRadian"]=-0.5*Math.PI;
        // }else{
        //     this["beginRadian"]=opt["beginRadian"];
        // }

        //this["beginRadian"]=opt["beginRadian"] || -0.5*Math.PI;


        var defaultOpt={
            beginRadian:-0.5*Math.PI
        };

        for (var key in defaultOpt) {
            this[key]=defaultOpt[key];
        }

        for (var key in opt) {
            this[key]=opt[key];
        }         
        //经过以上步骤，就可以实现如果用户没有传参数，就使用默认值，传递了该参数，就使用传递过来的值
        //也可以使用：$.extend(this,defaultOpt,opt)





        //将opt中的属性和方法放到this中--->混入继承
        for (var key in opt) {
            this[key]=opt[key];
        }

        this.ctx=this.canvas.getContext("2d");

        this.init();
    }

    Pie.prototype = {
        constructor: Pie,

        init: function () {
            //分别调用绘制饼图的几个步骤
            this.getSum();
            this.calculateRate();
            this.getSingleRadian();
            this.drawShan();
        },

        //0、计算出数据的总和
        getSum: function () {
            var sum = 0;
            this.data.forEach(function (v) {
                sum += v;
            });

            this.sum = sum;
        },

        //1、计算出每一个数据占据总和的比重
        calculateRate: function () {
            this.data2 = this.data.map(function (v) {
                //比重
                var rate = v / this.sum;

                //计算出扇形对应的弧度差
                var singleRadian = 2 * Math.PI * rate;

                return {
                    data: v,     //数据
                    rate: rate,   //比重
                    radian: singleRadian //每一个扇形的弧度差
                };

            }, this);
        },

        //2、计算出每一个扇形的起始弧度和结束弧度
        getSingleRadian: function () {
            this.data3 = this.data2.map(function (v) {
                //v:{data:...,rate:....:radian:....}

                var start = this.beginRadian;

                var end = this.beginRadian + v.radian;


                //希望下一次循环的时候，让本次循环的结束弧度(endRadian)，成为下一个循环的起始弧度(beginRadian)
                this.beginRadian = end;

                return {
                    data: v.data,
                    rate: v.rate,
                    radian: v.radian,

                    start: start,//起始弧度
                    end: end//结束弧度
                }


            },this);
        },

        //3、绘制扇形：
        drawShan: function () {
            this.data3.forEach(function (v, i) {
                var ctx=this.ctx;
                
                ctx.beginPath();

                ctx.moveTo(this.x, this.y);
                ctx.arc(this.x, this.y, this.radius, v.start, v.end);
                ctx.fillStyle = colors[i + 15];
                ctx.fill();

            },this);
        }
    };

    return Pie;
})()