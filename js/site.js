// Leave descriptions readable if the jQuery CDN is unavailable.
if (window.jQuery) {
  window.jQuery(function ($) {
    $(".fulldescription").hide();

    $(".problem_space").on("click", function () {
      $(this).next(".fulldescription").stop(true, true).slideToggle(600);
    });
  });
}
