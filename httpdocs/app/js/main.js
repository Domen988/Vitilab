$(function () {
  "use strict";
  // toggle password masking
  $('.toggle-mask').on('click', function () {
    var maskToggle = $(this).text();
    var password = $('#password').val();
    if (maskToggle === 'Hide') {
      $(this).text("Show");
      $('#password').replaceWith('<input type="password" id="password" name="password" maxlength="12" autocorrect="off" autocapitalize="off" value=' + password + '>');
    } else if (maskToggle === 'Show') {
      $(this).text("Hide");
      $('#password').replaceWith('<input type="text" id="password" name="password" maxlength="12" autocorrect="off" autocapitalize="off" value=' + password + '>');
    }
  });

  // highlight row on focus
  $('#full-name, #email, #password').focus(function () {
    $(this).parent().addClass('active');
  });
  $('#full-name, #email, #password').focusout(function () {
    $('.active').removeClass('active');
  });
});