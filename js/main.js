$(document).ready(function () {

    // STICKY NAVBAR
    $(window).on("scroll", function () {

        $(".navbar").toggleClass(
            "secondary",
            $(window).scrollTop() >= 60
        );


        // BACK TO TOP
        if ($(window).scrollTop() > 300) {
            $("#back-to-top").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
        }


        // ACTIVE NAVIGATION LINK
        var currentSection = "";

        $("header[id], section[id]").each(function () {

            if ($(window).scrollTop() >= $(this).offset().top - 120) {
                currentSection = $(this).attr("id");
            }

        });

        $(".navbar .nav-link").removeClass("active");

        $('.navbar .nav-link[href="#' + currentSection + '"]')
            .addClass("active");

    });


    // SMOOTH SCROLLING
    $('a[href^="#"]').on("click", function (e) {

        var target = $(this).attr("href");

        if (target && target.length > 1 && $(target).length) {

            e.preventDefault();

            $("html, body").animate({
                scrollTop: $(target).offset().top - 70
            }, 700);


            // CLOSE MOBILE NAVBAR
            var navbar = document.getElementById("hotelNavbar");

            if (navbar && navbar.classList.contains("show")) {

                bootstrap.Collapse
                    .getOrCreateInstance(navbar)
                    .hide();

            }

        }

    });


    // TYPING EFFECT
    var words = [
        "WELCOME TO JEN HOTEL",
        "EXPERIENCE COMFORT",
        "ENJOY YOUR STAY"
    ];

    var wordIndex = 0;
    var letterIndex = 0;
    var deleting = false;


    function typingEffect() {

        var currentWord = words[wordIndex];

        if (!deleting) {

            $("#typing-word").text(
                currentWord.substring(0, letterIndex + 1)
            );

            letterIndex++;

            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typingEffect, 1400);

                return;
            }

        } else {

            $("#typing-word").text(
                currentWord.substring(0, letterIndex - 1)
            );

            letterIndex--;

            if (letterIndex === 0) {

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(
            typingEffect,
            deleting ? 45 : 90
        );

    }


    if ($("#typing-word").length) {
        typingEffect();
    }


    // ROOM SELECTION
    $(".book-btn").on("click", function () {

        var roomName = $(this)
            .closest(".room-card")
            .find("h3")
            .first()
            .text();

        $("#booking-message")
            .text(
                "You selected " + roomName +
                ". Please contact us to complete your reservation."
            )
            .hide()
            .fadeIn();

    });


    // CONTACT FORM DEMO
    $("#contact-form").on("submit", function (e) {

        e.preventDefault();

        $("#contact-message")
            .text(
                "Thank you for contacting JEN HOTEL! " +
                "Your message has been received in this demo."
            )
            .hide()
            .fadeIn();

        this.reset();

    });


    // BACK TO TOP
    $("#back-to-top").on("click", function (e) {

        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 700);

    });

});