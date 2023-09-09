function result() {
    var kySo_2 = document.getElementById('kySo_2').value;

    var hangDonvi = kySo_2*1 % 10;
    var hangChuc = Math.floor(kySo_2*1 / 10) %10;

    var tongSo = hangDonvi + hangChuc;
document.getElementById('tongSo').innerHTML=tongSo;

document.getElementById('result');
}