// 1.判断时间阶段
var time=+prompt("请问现在几点了？");
if(time<=12&&time>=6){
    alert("上午好");
}else if(time<=18&&time>=13){
    alert("下午好");
}else if(time<=23&&time>=19){
    alert("晚上好");
}else if(time<=5&&time>=0) {
    alert("这是休息时间，不要说话！");
}else {
    alert("请输入正确的数");
}

// 2.比较两个数的最大值
var num1=+prompt("请第一个数");
var num2=+prompt("请第二个数");
if(num1>num2){
    alert("最大值为"+num1);
}else {
    alert("最大值为"+num2);
}

// 3.判断奇偶性
var num3=+prompt("请输入一个数");
if(num3%2==0){
    alert("这个数为偶数");
}else {
    alert("这个数为奇数");
}

// 4.判断星期
var week=+prompt("请输入日期数");
if(week<=31){
    if(week%7==1){
        alert("今天星期一");
    }else if(week%7==2){
        alert("今天星期二");
    }else if(week%7==3){
        alert("今天星期三");
    }else if(week%7==4){
        alert("今天星期四");
    }else if(week%7==5){
        alert("今天星期五");
    }else if(week%7==6){
        alert("今天星期六");
    }else if(week%7==7){
        alert("今天星期天");
    }
}else {
    alert("你输入有误");
}



// 5.请客吃饭
var str=+prompt("请输入钱数");
if(str>=2000){
    console.log("请大家吃西餐");
}else if (str>=1500&&str<2000){
    console.log("请大家吃快餐");
}else if (str>=1000&&str<1500){
    console.log("请大家喝饮料");
}else if (str>=500&&str<1000){
    console.log("请大家吃棒棒糖");
}else {
    console.log("下次把钱带够");
}

// 6.成绩表
var score=+prompt("请输入分数");
if(score>=90){
    console.log("A");
}else if(score>=80&&score<90){
    console.log("B");
}else if(score>=70&&score<80){
    console.log("C");
}else if(score>=60&&score<70){
    console.log("D");
}else if(score<60&&score>=0){
    console.log("E");
}else {
    console.log("你输入有误，请重新输入");
}

// 7.比较三个数的最大值
var num3=+prompt("请第一个数");
var num4=+prompt("请第二个数");
var num5=+prompt("请第三个数");
if(num3>num4){
    if(num3>num5){
        console.log(num3);
    }else {
        console.log(num5);
    }
}else {
    if(num4>num5){
        console.log(num4);
    }else {
        console.log(num5);
    }
}
