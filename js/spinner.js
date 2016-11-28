function removeSpinner() {
  $(document).find(".spinner").delay(2000).fadeOut(1000, function () {
    $(this).remove();
  });
};

removeSpinner();
