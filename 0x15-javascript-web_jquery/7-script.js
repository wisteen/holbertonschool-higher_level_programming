$.get('https://swapi.co/api/people/5/?format=json', function (data) {
  $('DIV#character')
    .append(data.name);
});
