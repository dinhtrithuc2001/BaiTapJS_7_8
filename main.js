// Khai báo mảng rỗng để chứa các số người dùng nhập vào

var listNumber = [];

document.getElementsByTagName("button")[0].onclick = () => {
    var numbers = +document.getElementsByTagName("input")[0].value;
    // thêm vào mảng
    listNumber.push(numbers);
    // đẩy giá trị mảng ra màn hình
    document.querySelector(".container .row .accordion .my-5 .d-flex input").value = listNumber;
}

// BÀI 1 Tổng số dương
document.querySelectorAll("button")[2].onclick = () => {
    
    var sumNumber = 0;
    listNumber.forEach((item, index) => {
        if(item > 0)
            sumNumber += item
    })
    
    document.querySelectorAll("input")[2].value = 'Tổng số dương: '+sumNumber
}

// BÀI 2 Đếm số dương
document.querySelectorAll("button")[4].addEventListener("click", () => {
    var count = 0;
    for(var i = 0; i < listNumber.length; i++)
        if(listNumber[i] > 0)
            count++;
    document.querySelectorAll("input")[3].value = 'Có '+count+' số dương';
})

// BÀI 3 Tìm số nhỏ nhất
document.getElementsByTagName("button")[6].addEventListener("click", () => {
    var min = listNumber[0];
    listNumber.forEach((item, index) => {
        min = min > item ? item : min;
    })
    if(listNumber.length != 0)
    {
        document.getElementsByTagName("input")[4].value = 'Số nhỏ nhất là: '+ min;
    }
    else {
        document.getElementsByTagName("input")[4].value = 'Mảng rỗng';
    }
})

// BÀI 4 Tìm số dương nhỏ nhất
document.getElementById("btnSoDuongNhoNhat").addEventListener("click", ()=> {
    var listSort = listNumber.filter((n)=>n > 0);
    listSort.sort((a,b)=> a - b);
    if(listSort.length != 0)
    {
        document.getElementById("ketQuaSoDuongNhoNhat").value = 'Số dương nhỏ nhất là: '+ listSort[0];
    }
    else {
        document.getElementById("ketQuaSoDuongNhoNhat").value = 'Mảng không có số dương nào';
    }
})

// BÀI 5 Tìm số chẵn cuối cùng
function btnSoChanCuoiCung(){
    var soChan = 0;
    // cách 1: 
    // listNumber.forEach((item) => {
    //     soChan = item % 2 == 0 ? item : soChan;
    // })
    // cách 2: 
    for(var i = listNumber.length-1; i >= 0; i--){
        if(listNumber[i] % 2 == 0){
            soChan = listNumber[i];
            break;
        }
    }
    document.getElementById("ketQuaSoChanCuoiCung").value = 'Số chẵn cuối cùng là: '+ soChan;
}

// BÀI 6 Đổi chỗ 2 số trong mảng
document.getElementById("btnDoiCho").onclick = () => {
    var index1 = document.getElementById("index1").value;
    var index2 = document.getElementById("index2").value;
    var swap = 0;
    if(index1 == "" || index2 == ""){
        alert('vui lòng điền đủ 2 vị trí')
    }
    else {
        index1 *=1;
        index2 *=1;
        if(index1 >= listNumber.length || index2 >= listNumber.length){
            alert("Vị trí cần đổi không tồn tại")
        }
        else{
            swap = listNumber[index1];
            listNumber[index1] = listNumber[index2];
            listNumber[index2] = swap;
            document.getElementById("ketQuaSauKhiDoi").value = 'Mảng sau khi hoán đổi: '+listNumber;
        }
    }
}

// BÀI 7 Sắp xếp tăng dần
document.getElementById("btnSapXepTang").addEventListener("click", () => {
    listNumber.sort((a,b) => a - b);
    document.getElementById("ketQuaSapXepTang").value = 'Mảng sau khi sắp xếp tăng dần: '+listNumber;
})

// BÀI 8 Tìm số nguyên tố đầu tiên

function kiemTraSoNguyenTo(number){
    if(number == 2){
        return true;
    }
    else if(number < 2){
        return false;
    }
    else if(Number.isInteger(number) == false){
        return false;
    }
    else{
        for(var i = 2; i <= Math.sqrt(number); i++){
            if(number % i == 0)
                return false;
        }
        return true;
    }
}

document.getElementById("btnTimSoNguyenToDauTien").addEventListener('click',() => {
    for(var i = 0; i < listNumber.length; i++)
    {
        if(kiemTraSoNguyenTo(listNumber[i]) == true){
            document.getElementById('soNguyenToDauTien').value = 'Số nguyên tố đầu tiên là: '+listNumber[i];
            break;
        }
    }
})

// BÀI 9: ĐẾM SỐ NGUYÊN

var listInteger = [];

function kiemTraSoNguyen(number){
        return Number.isInteger(number);
}

document.getElementById("btnThemSoNguyen").addEventListener("click", () => {
    var inputThemSoNguyen = document.getElementById("inputThemSoNguyen").value * 1;
    listInteger.unshift(inputThemSoNguyen);
    document.getElementById("outputMangSoCanKiemTra").value = listInteger;
})

document.getElementById("btnDemSoNguyen").addEventListener("click", () => {
    var countInteger = 0;
    listInteger.forEach((number) => {
        if(kiemTraSoNguyen(number)){
            countInteger++
        }
    })
    document.getElementById("ketQuaDemSoNguyen").value = 'Có '+countInteger+' số nguyên trong mảng trên';
})

// BÀI 10: So sánh số lượng âm và dương trong mảng

document.getElementById("btnSoSanhAmDuong").onclick = () => {
    var soLuongAm = 0;
    var soLuongDuong = 0;
    var phepSoSanh =''
    listNumber.forEach((n) => {
        if(n > 0){
            soLuongDuong++;
        }
        if(n < 0){
            soLuongAm++;
        }
    })
    if(soLuongDuong > soLuongAm){
        phepSoSanh = '>'
    }
    else if(soLuongDuong < soLuongAm){
        phepSoSanh = '<'
    }
    else {
        phepSoSanh = '='
    }
    document.getElementById("ketQuaAmDuong").value = 'Số dương '+ phepSoSanh +' Số âm'
}