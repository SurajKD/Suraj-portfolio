
(function ($) {

    var width = $(window).width();
    var height = $(window).height();
    var header_offset_top = 15;
    if (width <= 540) {
        header_offset_top = 136;
    }
    var container = $(".container");
    var card_items = $(".card-inner");
    var animation_in = container.data("animation-in");
    var animation_out = container.data("animation-out");
    var menu_items = $(".top-menu li");
    if ($(".top-menu-onepage").length) {
        $(".top-menu").on("click", "a", function () {
            var width = $(window).width();
            var id = $(this).attr("href");
            if (id == "") id = "#home";
            var card_item = $("#card-" + id.replace("#", ""));
            var h = parseFloat(card_item.offset().top);
            var menu_item = $(this).closest("li");
            if (id != "#home") {
                window.location.hash = id;
            } else {
                history.replaceState(null, null, " ");
            }
            if (width >= 1121) {
                if (!menu_item.hasClass("current-menu-item")) {
                    menu_items.removeClass("current-menu-item");
                    container.find(card_items).removeClass("animated " + animation_in);
                    if ($(container).hasClass("opened")) {
                        container.find(card_items).addClass("animated " + animation_out);
                    }
                    menu_item.addClass("current-menu-item");
                    container.addClass("opened");
                    container.find(card_item).removeClass("animated " + animation_out);
                    container.find(card_item).addClass("animated " + animation_in);
                    $(card_items).addClass("hidden");
                    $(card_item).removeClass("hidden");
                    $(card_item).addClass("active");
                    $(".grid-items").isotope("reloadItems").isotope();
                    // skillsDotted_resize();
                }
            }
            if (width < 1121) {
                $("body,html").animate({ scrollTop: h - header_offset_top }, 800);
            }
            return false;
        });
    }
    $(window).on("resize", function () {
        var width = $(window).width();
        var height = $(window).height();
        if (width < 1121) {
            $(".card-inner").removeClass("hidden");
            $(".card-inner").removeClass("fadeOutLeft");
            $(".card-inner").removeClass("rotateOutUpLeft");
            $(".card-inner").removeClass("rollOut");
            $(".card-inner").removeClass("jackOutTheBox");
            $(".card-inner").removeClass("fadeOut");
            $(".card-inner").removeClass("fadeOutUp");
            $(".card-inner").removeClass("animated");
        } else {
            if ($(".top-menu li.current-menu-item a").length) {
                var current_id = $(".top-menu li.current-menu-item a").attr("href");
                $("#card-" + current_id.replace("#", "")).addClass("current-menu-item");
            }
        }
        // setTimeout(skillsDotted_resize, 750);
    });

    var url_hash = location.hash;
    var sectionElem = $("#card-" + url_hash.replace("#", ""));
    if (sectionElem.length && $(".top-menu-onepage").length) {
        menu_items.removeClass("current-menu-item");
        $('.top-menu li a[href="' + url_hash + '"]')
            .parent("li")
            .addClass("current-menu-item");
        if (width >= 1121) {
            container.find(card_items).removeClass("animated " + animation_in);
            if ($(container).hasClass("opened")) {
                container.find(card_items).addClass("animated " + animation_out);
            }
            container.addClass("opened");
            sectionElem.removeClass("animated " + animation_out);
            sectionElem.addClass("animated " + animation_in);
            $(card_items).addClass("hidden");
            sectionElem.removeClass("hidden");
            sectionElem.addClass("active");
        } else {
            $("body,html").animate({ scrollTop: parseFloat(sectionElem.offset().top) - header_offset_top }, 500);
        }
    }
    $(".lnks").on("click", '.lnk[href*="#"]', function () {
        var lnk_url = $(this).attr("href");
        var lnk_idx = lnk_url.indexOf("#");
        var lnk_hash = lnk_idx != -1 ? lnk_url.substring(lnk_idx + 1) : "";
        if ($('.top-menu a[href="#' + lnk_hash + '"]').length) {
            $('.top-menu a[href="#' + lnk_hash + '"]').trigger("click");
        }
    });
    $(".main-menu li.page_item_has_children").each(function () {
        $(this).find("> a").after('<span class="children_toggle"></span>');
    });
    $(".main-menu").on("click", ".children_toggle", function () {
        var main_menu_item = $(this).closest(".page_item_has_children");
        if (main_menu_item.hasClass("open")) {
            main_menu_item.removeClass("open");
            main_menu_item.find("> ul").slideUp(250);
        } else {
            main_menu_item.addClass("open");
            main_menu_item.find("> ul").slideDown(250);
        }
    });
    if (width < 1121 && $(".top-menu-onepage").length) {
        $(window).on("scroll", function () {
            var scrollPos = $(window).scrollTop();
            $(".top-menu ul li a").each(function () {
                var currLink = $(this);
                var currHref = currLink.attr("href");
                if (currHref == "") currHref = "#home";
                if (currHref.charAt(0) == "#") {
                    var refElement = $("#card-" + currHref.replace("#", ""));
                    if (refElement.offset().top - header_offset_top - 2 <= scrollPos) {
                        $(".top-menu ul li").removeClass("current-menu-item");
                        currLink.closest("li").addClass("current-menu-item");
                    }
                }
            });
        });
    }
    if (width <= 560) {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 46) {
                $(".header").addClass("fixed");
            } else {
                $(".header").removeClass("fixed");
            }
        });
    }
    $("header, .profile").on("click", ".menu-btn", function () {
        $(".s_overlay").fadeIn();
        $(".content-sidebar").addClass("active");
        $("body,html").addClass("sidebar-open");
        return false;
    });
    $(".content-sidebar, .container").on("click", ".close, .s_overlay", function () {
        $(".s_overlay").fadeOut();
        $(".content-sidebar").removeClass("active");
        $("body,html").removeClass("sidebar-open");
    });
    $(".widget-title").wrapInner('<span class="widget-title-span"></span>');
    $(".lnk-view-menu").on("click", function () {
        var btn_text1 = $(this).find(".text").text();
        var btn_text2 = $(this).find(".text").data("text-open");
        if ($(".profile").hasClass("default-menu-open")) {
            $(".profile").removeClass("default-menu-open");
            $(this).find(".text").data("text-open", btn_text1);
            $(this).find(".text").text(btn_text2);
        } else {
            $(".profile").addClass("default-menu-open");
            $(this).find(".text").data("text-open", btn_text1);
            $(this).find(".text").text(btn_text2);
        }
        return false;
    });
})(jQuery);
