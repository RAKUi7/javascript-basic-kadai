const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
  document.getElementById('text').innerHTML = 'テキストが変更されました！';  
});
