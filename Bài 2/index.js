function result() {
    var soThu1 = document.getElementById('soThu1').value;
    var soThu2 = document.getElementById('soThu2').value;
    var soThu3 = document.getElementById('soThu3').value;
    var soThu4 = document.getElementById('soThu4').value;
    var soThu5 = document.getElementById('soThu5').value;
  
    var gTTB = 0;
    gTTB = (soThu1*1 + soThu2*1 + soThu3*1 + soThu4*1 + soThu5*1) / 5;
    document.getElementById('gTTB').innerHTML= gTTB;

    document.getElementById('result');
}