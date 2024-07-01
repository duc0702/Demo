var canhThuNhat = parseFloat(prompt('Mời nhập cạnh thứ nhất:')) 
var canhThuHai = parseFloat(prompt('Mời nhập cạnh thứ hai:')) 
var canhHuyen = Math.sqrt(Math.pow(canhThuNhat,2)+Math.pow(canhThuHai,2))
alert(`Độ dài cạnh huyền: ${canhHuyen}`)