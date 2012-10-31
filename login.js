
$(document).ready(function(){
  $('#UULogin').prepend('<h1 class="l1">Přihlašuji...</h1>')
  $('#UES_AccessCode1').click().val('').change();
  $('#UES_AccessCode2').click().val('').change();
  
  $('#UULogin').submit();
  
})