document.getElementById("btnTinh").onclick=()=>{
    var soluong = document.getElementById("luong").value;
    var songay = document.getElementById("songay").value;
    var tongcong =Number(soluong * songay);
    document.getElementById("ketqua").style.color="orange"
    document.getElementById("ketqua").innerText = tongcong
}