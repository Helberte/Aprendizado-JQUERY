// nome de tag
console.log($('h1').css('color', 'red'));

$('.header-menu ul, li').css('border', '1px yellow solid');

$(document).ready(function(){
  document.getElementById('h1-titulo').classList.add('active');
});

$('main>li').css('color', 'yellow');

// selecionando a tag p mais proxima do .paragrafo

$('.paragrafo+p').css({
  'background-color': 'blue',
  'font-size': '17px '
});

// selecionando todas que estão próximas ao .paragrafo
$('.paragrafo~p').css({
  'background-color': 'red',
  'font-size': '17px '
});