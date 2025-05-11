const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log("✅ Puppeteer スクリプト開始");

    // ブラウザを起動
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // 任意のURLへアクセス（ここではexample.com）
    const url = 'https://example.com';
    console.log(`🌐 URLへアクセス中: ${url}`);
    
    await page.goto(url, { waitUntil: 'networkidle2' });

    // ページのHTMLを取得
    const html = await page.content();
    console.log("✅ ページのHTMLを取得しました");

    // コンソールにログ表示
    console.log("HTMLの最初の500文字: ", html.slice(0, 500));

    // 結果をファイルに保存
    const fs = require('fs');
    fs.writeFileSync('page.html', html, 'utf-8');
    console.log("✅ HTMLを 'page.html' に保存しました");

    // ブラウザを閉じる
    await browser.close();
    console.log("✅ Puppeteer スクリプト終了");
  } catch (error) {
    console.error("❌ エラーが発生しました: ", error);
  }
})();
