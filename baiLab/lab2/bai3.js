var chieuCao=parseFloat(prompt("Nhập vào chiều cao:"))
var canNang=parseFloat(prompt("Nhập vào cân nặng"))
var bmi= parseFloat(canNang/(Math.pow(chieuCao,2)))
console.log(bmi)
if (bmi <18.5) {
    alert("Thiếu cân")
} else if(18.5<=bmi && bmi<25) {
alert("Bình thường")
    
}else if(25<=bmi && bmi<30){
    alert("Thừa cân")
}
else{
   
    alert("Béo phì")
}