var urlAPI = 'http://157.230.17.132:3011/todos';
var container = $('.container');
var input = $('#type-text');
var button = $('#go');

$(document).ready(function(){

  getData();

  button.click(function(){
    var text = input.val();
    $.ajax({
      url: urlAPI,
      method: 'POST',
      data: {
        text:mytext
      },
      success: function(data){
        getData();
      },
      error: function(errore){

      }
    });
  });

});

function printData(file) {
  container.html('<ul>');
  for (var i = 0; i < file.length; i++) {
  container.append('<li>' + file[i].text + '</li>');
 }
 container.append('<ul>');
}

function getData(){
  $.ajax({
  url: urlAPI,
  method: 'GET',
  success: function(data){
   printData(data);
  },
  error: function(errore) {

    }
  });
}
