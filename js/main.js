$('.main-table').stacktable();
      $(function() {
        $('.btn-toggle').on('click', function() {
        $('.sidebar-list').slideToggle(300, function() {
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
      if ($(this).is(':visible')) {
        $(this).css('display','flex');
      }
      });
    });
  });