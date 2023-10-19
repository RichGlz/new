$(document).ready(function(){

  $('#imgModal').on('show.bs.modal', function (event) {
    var a = $(event.relatedTarget); // a that triggered the modal
    var fuente = a.data('src'); // Extract info from data-* attributes
    var title = a.data('title'); // Extract info from data-* attributes
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.modal-body #modal-img').attr('src', fuente);
    // modal.find('.modal-body #modal-img').attr('alt', fuente);
  });

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-150410395-1');
});