function sendXhrRequest(url, data, method, callback) {
    if (url != null && data != null && method != null && callback != null) { //輸入變數不能有null
        if (typeof (callback) === 'function') { //callback一定要是function
            if (method == 'POST' || method == 'GET') { //method只能是POST或GET
                var xhttp = new XMLHttpRequest(); //開始進行XHR
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        callback(this.responseText);
                    }
                };

                xhttp.open(method, url, true);
                if (method == 'POST') { //如果方法使用POST
                    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                }
                xhttp.send(data); //資料送出
            } else {
                console.log('you have to use POST or GET to be method of xhr.');
            }
        } else {
            console.log('callback must be function.');
        }
    } else {
        console.log('cannot have null arguments.');
    }
}
