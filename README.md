# 遊戲程式作品集

靜態單頁作品集網站，可直接以 GitHub Pages 發布。

## 結構

- `index.html` — 工作經歷（依時間順序）
- `lab.html` — 個人研究：MMO 遊戲後端與 AI 協作開發流程
- `style.css`、`site.js` — 兩頁共用的樣式與圖片燈箱（無建置流程、無外部相依）
- `images/` — 已去識別化的截圖與動畫；`images/lab/` 是個人研究頁的架構圖

## 本機預覽

直接以瀏覽器開啟 `index.html` 即可。

## 發布到 GitHub Pages

1. 在 GitHub 建立一個新的 repository
2. 於本資料夾執行：
   ```
   git remote add origin https://github.com/<帳號>/<repo>.git
   git push -u origin main
   ```
3. 進入該 repo 的 **Settings → Pages**，Source 選 `Deploy from a branch`，
   Branch 選 `main` / `(root)`，儲存
4. 約一分鐘後即可由 `https://<帳號>.github.io/<repo>/` 存取

## 注意

`images/` 內的截圖已移除瀏覽器分頁與書籤列、帳號、本機路徑、
內部專案代號與端點名稱。未處理的原始檔保留在本機 `images_original/`，
已列入 `.gitignore` 不會上傳。
