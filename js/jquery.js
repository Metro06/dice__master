$(document).ready(function () {

  jQuery.noConflict();

  jQuery("#exampleModalToggle1").on('shown.bs.modal', function () {
    jQuery(this).find('input[type="text"]').focus();

  });

  jQuery("#exampleModalToggle2").on('shown.bs.modal', function () {
    jQuery(this).find('input[type="text"]').focus();

  });






});