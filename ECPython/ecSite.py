from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 商品リストを設定
product_list = ["商品1", "商品2", "商品3"]

# WebDriverを起動
driver = webdriver.Chrome()  # 使用するブラウザに合わせてWebDriverを選択

# メインの処理
for product_name in product_list:
    # eBayに移動
    driver.get("https://www.ebay.com/")

    # 商品名を検索ボックスに入力
    search_box = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "gh-btn"))
    )
    search_box.send_keys(product_name)

    # 検索を実行
    search_box.send_keys(Keys.RETURN)

    # 検索結果ページがロードされるのを待機
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, ".s-item__link"))
    )

    # 検索結果から最初の商品のURLを取得
    product_url = driver.find_element_by_css_selector(".s-item__link").get_attribute("href")

    # 商品詳細ページに移動
    driver.get(product_url)

    # 商品詳細ページがロードされるのを待機
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "Body"))  # Bodyタグが読み込まれるまで待機
    )

    # 商品ページのHTMLを取得
    product_page_html = driver.page_source

    # BeautifulSoupでHTMLを解析
    soup = BeautifulSoup(product_page_html, 'html.parser')

    # 商品データを抽出（正確な要素に置き換える）
    product_data = soup.find("div", class_="itemAttr")  # eBayの商品情報のクラス

    if product_data:
        print("商品データ:", product_data.text)
    else:
        print(f"{product_name}のデータが見つかりませんでした")

# WebDriverを閉じる
driver.quit()
