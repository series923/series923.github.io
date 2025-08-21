document.addEventListener('DOMContentLoaded', function() {
    // ページが完全に読み込まれた後に実行されるすべてのコードをここに記述します。

    // 1. 見出しのテキストを変更
    const myHeading = document.getElementById('my-heading');
    if (myHeading) {
        myHeading.textContent = 'Series923のホームページをようこそ！！';
    }

    // 2. ダークモード切り替え機能
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }

    // 3. ポップアップ機能
    const openPopupButton = document.getElementById('open-popup');
    if (openPopupButton) {
        openPopupButton.addEventListener('click', function() {
            alert('🎉 ウェブサイトへようこそ！');
        });
    }

    // 4. ページトップに戻るボタン機能
    const toTopButton = document.getElementById('to-top');
    if (toTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                toTopButton.style.display = 'block';
            } else {
                toTopButton.style.display = 'none';
            }
        });
        
        toTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});