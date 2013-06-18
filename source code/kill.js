/*
Author: GYZ
Secial Thanks to Kuri
Update: 2013/6/17
*/

var pic = new Array();
pic[1]="http://farm6.staticflickr.com/5499/9063188143_4251fc7ab2_o_d.jpg";
pic[2]="http://farm4.staticflickr.com/3709/9063188033_9ba351af3c_o_d.jpg";
pic[3]="http://farm6.staticflickr.com/5441/9065414852_bd00778d31_o_d.jpg";//有沒有念書
var ele = document.createElement("div");
var ran = Math.ceil(Math.random()*3);
ele.innerHTML = "<table align='center'><tr><td><img class='gyz' src='"+pic[ran]+"'/></td></tr></table>";
var node=document.getElementsByTagName("body")[0];
node.insertBefore(ele,node.firstChild);