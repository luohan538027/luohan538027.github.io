## 刮刮乐
### 基础API补充
1. globalAlpha：绘制的图形的透明度(0-1之间的值)

2. globalCompositeOperation：表示图形之间重叠的时候指定的操作：参考文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing
   1. source-over (default) 这是默认设置，新图形会覆盖在原有内容之上。重合的部分是新图
   2. destination-over 会在原有内容之下绘制新图形。-->重合的部分是旧图
   3. source-in 新图形会仅仅出现与原有内容重叠的部分。其它区域都变成透明的。只显示新内容
   4. destination-in 旧图中与新图形重叠的部分会被保留，其它区域都变成透明的。只显示旧内容
   5. source-out 结果是只有新图形中与原有内容不重叠的部分会被绘制出来。只显示新内容
   6. destination-out 原有内容中与新图形不重叠的部分会被保留。只显示旧内容
   7. source-atop 新图形中与原有内容重叠的部分会被绘制，并覆盖于原有内容之上。
   8. destination-atop 原有内容中与新内容重叠的部分会被保留，并会在原有内容之下绘制新图形
   9. lighter 两图形中重叠部分作加色处理。
   10. darker 两图形中重叠的部分作减色处理。
   11. xor 重叠的部分会变成透明。
   12. copy 只有新图形会被保留，其它都被清除掉。

3. ctx.getImageData(x,y,width,height)：返回一个ImageData对象，该对象中的data属性是一个数组，该数组中每4个元素表示一个像素点的rgba的值，width属性表示该区域的宽度，height表示该区域的高度

4. rgba：就是在rgb的颜色的基础上，加上透明度，就组成了rgba的值