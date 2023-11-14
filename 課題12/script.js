// 行をテーブルに追加する関数
function addRowToTable(data) {
    // テーブルのtbody要素を取得
    const tableBody = document.getElementById('dataTable').querySelector('tbody');
    // 新しい行（tr要素）を作成
    const newRow = document.createElement('tr');

    // 行の中にデータと削除ボタンを挿入
    newRow.innerHTML = `
        <td>${data.input1}</td>
        <td>${data.input2}</td>
        <td>${data.input3}</td>
        <td><button class="delete-btn">削除</button></td>
    `;

    // 作成した行をテーブルのtbodyに追加
    tableBody.appendChild(newRow);

    // 削除ボタンにイベントリスナーを設定し、クリック時に行を削除
    newRow.querySelector('.delete-btn').addEventListener('click', function() {
        this.closest('tr').remove();
    });
}

// フォームの送信イベントを監視
document.getElementById('inputForm').addEventListener('submit', function(event) {
    // デフォルトのフォーム送信を防止
    event.preventDefault();

    // フォームからデータを取得
    const formData = {
        input1: document.getElementById('input1').value,
        input2: document.getElementById('input2').value,
        input3: document.getElementById('input3').value
    };

    // 取得したデータを使ってテーブルに行を追加
    addRowToTable(formData);
    // フォームの入力フィールドをリセット
    document.getElementById('inputForm').reset();
});
