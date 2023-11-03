const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('text').innerHTML = 'テキストが変更されました！';
  }, 2000);  
});
