
'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

})(jQuery);

// -------------------------------------------------------------

// Star Rating
let stars = document.querySelectorAll('.star-rating i');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.remove('fa-star');
                s.classList.add('fa-star');
            } else {
                s.classList.remove('fa-star');
                s.classList.add('fa-star');
            }
        });
    });
});

// Feedback Submission
document.getElementById("feedback-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const feedbackMsg = document.getElementById("feedback-msg");
    feedbackMsg.innerHTML = "Thank you for your feedback!";
});

