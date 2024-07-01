var x =10 +Math.round(Math.random() *5)
console.log(x)
var a = prompt("Số nhập vào:")
if(a == x){
    alert("Chúc mừng bạn đã đoán đúng")
}
else if(a >x){
alert("Giá trị của bạn lớn hơn con số bí mật")
}
else{
    alert("Con số của bạn nhỏ hơn con số bí mật")
}