$(function() {
  function loadContent(url) {
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {
    e.preventDefault();
    var href = this.href;
    var $this = $(this);
    $('a').removeClass('current');
    $this.addClass('current');
    loadContent(href);
    history.pushState('', $this.text, href);
  });

  window.onpopstate = function() {
    var path = location.pathname;
    loadContent(path);
  }
});
