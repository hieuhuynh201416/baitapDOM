
function result() {
    var uSD= document.getElementById('uSD').value;

    var vND= 0;
    vND = uSD*1 *23500;
    document.getElementById('vND').innerHTML= vND;
    console.log(new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 2,
        maximumFractionDigits: 3,
    })
    .format(vND));
    document.getElementById('result');
}


