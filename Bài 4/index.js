// input
function result() {
var chieuDai = document.getElementById('dai').value;
// console.log('chieuDai',chieuDai);

var chieuRong = document.getElementById('rong').value;
// console.log('chieuRong',chieuRong);

var dienTich=0;
dienTich = chieuDai * chieuRong;
document.getElementById('dienTich').innerHTML= "Diện tích là" +" " + dienTich;
var chuVi=0;
chuVi = (chieuDai*1 + chieuRong*1) *2;
document.getElementById('chuVi').innerHTML= "Chu Vi là" + " " + chuVi + ";" ;


document.getElementById("result");
}