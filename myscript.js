//content_scripts는 새로운 페이지가 불렸을 때 실행되는 자바스크립트
(function remover(){
  try
  {
    document.querySelector('.side-nav').style.display = 'none';
  }
  catch(exception)
  {
    console.log('side-nav was not founded');
  }

})();
