
//問1 Ajaxを使いボタンを押した際に"sample.txt"からデータを取得しテキストファイルに記載の
//「フロントエンド基礎お疲れ様！！次はフロントエンド模写だね！！引き続き頑張ろう！！」を画面に表示させてください。
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click',function() {
    // ウェブサーバーにデータを要求するための特別なオブジェクト
    // ファイルやデータをウェブページに読み込むことができる
    let xhr = new XMLHttpRequest(); // XMLHttpRequestの作成:

    // sample.txtファイルからデータを取得するようにリクエストを設定
    // xhr.openメソッドはリクエストの種類（ここでは'GET'）、取得するファイルの名前
    // リクエストが非同期であること（true）を指定
    xhr.open('GET','sample.txt',true); // リクエストの設定と送信:
// ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
// 0 (UNSENT): open() メソッドがまだ呼び出されていない。
// 1 (OPENED): open() が実行された。
// 2 (HEADERS_RECEIVED): send() が実行され、ヘッダーとステータスが利用可能。
// 3 (LOADING): レスポンスの本体を受信中。
// 4 (DONE): リクエストの処理が完了。
    // XMLHttpRequest オブジェクトに関連するイベントハンドラー
    xhr.onreadystatechange = function() {
        // xhr.readyState == 4はリクエストが完了したこと
        // xhr.status == 200はリクエストが成功したことを意味する
        if(xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('inputArea1').innerText = xhr.responseText;
        }
    }
    // リクエストを実際に送信する命令
    xhr.send();
})

//問2 Ajaxを使いボタンを押した際に"addAPI.json"からtitleのデータを取得して取得したデータの内容として「Next → フロントエンド模写」と画面に表示してください。
document.getElementById('btn2').addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'addAPI.json', true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            document.getElementById('inputArea2').innerText = data.title;
        }
    };
    xhr.send();
});

//問3 Ajaxを使いボタンを押した際に"profile.json"から'name','e-mail'のデータを取得して
//「会社名:Drive Line,メール:DriveLine@gmail.com」と画面に表示してください。

document.getElementById('btn3');
btn3.addEventListener('click',function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','profile.json',true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            let input3 = document.getElementById('inputArea3');
            input3.innerText = data.name;
            input3.innerText = data.email;
        }
    }
    xhr.send();
})