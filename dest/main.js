let logo = document.querySelector("header .mainHeader #burgerMenuIcon");
let openHeader = document.querySelector("header .mainHeader");
let btnCheck = $(".button-check");
function toggleNavigation() {
    $("header .mainHeader").toggleClass("open");
    $("header .mainHeader .blacklayer").toggleClass("open");
    $("header .mainHeader .label").toggleClass("open");
    $("header .mainHeader #sidebar .navigation").toggleClass("open");
    $("header .mainHeader #sidebar .signin-check").toggleClass("open");
    $("header .mainHeader #sidebar .buttonnav").toggleClass("open");
}
$(logo).on("click", function () {
    toggleNavigation();
});
$("header .mainHeader .blacklayer").on("click", function () {
    toggleNavigation();
});

$(document).ready(function () {
    const currentActive = $(".active");
    const indexActive = $("header .mainHeader .navigation ul li").index(
        currentActive
    );
    $("header .mainHeader .navigation ul li").each(function (
        li_index,
        li_element
    ) {
        $(li_element)
            .mouseover(function () {
                $(this).siblings().removeClass("active");
            })
            .mouseleave(function () {
                $("header .mainHeader .navigation ul li")
                    .eq(indexActive)
                    .addClass("active");
            });
    });

    //active notitable
    $("header .detailHeader .right-wrap ul li .alarmnoti").on(
        "click",
        function (e) {
            e.preventDefault();
            setTimeout(function () {
                $(
                    "header .detailHeader .right-wrap ul li .alarmnoti"
                ).toggleClass("active");
                $("header .notitable").toggleClass("active");
            }, 300);
        }
    );
    $("main").click(function () {
        $("header .detailHeader .right-wrap ul li .alarmnoti").removeClass(
            "active"
        );
        setTimeout(function () {
            $("header .notitable").removeClass("active");
        }, 300);
    });
    function showNoti() {
        setTimeout(function () {
            $(".noti").show();
        }, 500);
    }
    function fadeOutNoti() {
        setTimeout(function () {
            $(".noti").fadeOut("fast");
        }, 1500);
    }
    function hideNoti() {
        setTimeout(function () {
            $(".noti").hide();
        }, 300);
    }
    if ($(".home-page").length != 0) {
    } else if ($(".market-page").length != 0) {
        let suggestions = [];
        let a = document.querySelectorAll(
            ".mainProduct .mainProduct__list .mainProduct__list-item .title"
        );
        a.forEach((element) => {
            suggestions.push(element.textContent);
        });
        const searchWrapper = document.querySelector(".search-input");
        const inputBox = searchWrapper.querySelector("input");
        const suggBox = searchWrapper.querySelector(".autocom-box");
        const icon = searchWrapper.querySelector(".icon");
        let linkTag = searchWrapper.querySelector("a");
        let webLink;

        // if user press any key and release
        inputBox.onkeyup = (e) => {
            let userData = e.target.value; //user enetered data
            let emptyArray = [];
            if (userData) {
                emptyArray = suggestions.filter((data) => {
                    //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                    return data
                        .toLocaleLowerCase()
                        .startsWith(userData.toLocaleLowerCase());
                });
                emptyArray = emptyArray.map((data) => {
                    // passing return data inside li tag
                    return (data = "<li>" + data + "</li>");
                });
                searchWrapper.classList.add("active"); //show autocomplete box
                showSuggestions(emptyArray);
                let allList = suggBox.querySelectorAll("li");
                for (let i = 0; i < allList.length; i++) {
                    //adding onclick attribute in all li tag
                    allList[i].setAttribute("onclick", "select(this)");
                }
            } else {
                searchWrapper.classList.remove("active"); //hide autocomplete box
            }
        };

        function select(element) {
            let selectData = element.textContent;
            inputBox.value = selectData;
            icon.onclick = () => {
                webLink = "https://www.google.com/search?q=" + selectData;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            };
            searchWrapper.classList.remove("active");
        }

        function showSuggestions(list) {
            let listData;
            if (!list.length) {
                userValue = inputBox.value;
                listData = "<li>" + userValue + "</li>";
            } else {
                listData = list.join("");
            }
            suggBox.innerHTML = listData;
        }
    } else if ($(".postdetail-page").length != 0) {
        $(".button-threedots").on("click", function (e) {
            e.preventDefault();
            $(".navi-post").toggleClass("active");
        });
        $("button.edit").on("click", function (e) {
            e.preventDefault();
            $(".navi-post").toggleClass("active");
            $(".detail__right form").addClass("edit");
        });
        $(btnCheck).on("click", function () {
            $(btnCheck).removeClass("fillColor");
            $(btnCheck).children().removeClass("scaleNormal");
            $(this).toggleClass("fillColor");
            $(this).children().toggleClass("scaleNormal");
        });
        $(".checkregist .button-del").on("click", function () {
            $(btnCheck).removeClass("fillColor");
            $(btnCheck).children().removeClass("scaleNormal");
        });
        $(".cmt-box .cmt-content").each(function (index, element) {
            if ($(element).height() < 40) {
                $(element)
                    .closest(".cmt-box")
                    .find(".read-more")
                    .addClass("disable");
            } else {
                /**Showmore btn */
                var $el, $ps, $up, totalHeight;
                $(".cmt-box .button").click(function () {
                    totalHeight = 0;

                    $el = $(this);
                    $p = $el.parent();
                    $up = $p.parent();
                    $ps = $up.find("p:not('.read-more')");

                    $ps.each(function () {
                        totalHeight += $(this).outerHeight();
                    });

                    $up.css({
                        // Set height to prevent instant jumpdown when max height is removed
                        height: $up.height(),
                        "max-height": 9999,
                    }).animate({
                        height: totalHeight,
                    });

                    // fade out read-more
                    $p.fadeOut();

                    // prevent jump-down
                    return false;
                });
            }
        });
        let option = document.querySelector(
            ".detail__right .detail__right-options .val"
        );
        const dataOption = "trao đổi";
        if (dataOption === option.textContent.toLocaleLowerCase()) {
            document
                .querySelector(".detail__left .detail__left-button")
                .classList.add("trade");
        } else {
        }
    } else if ($(".register-exchange-page").length != 0) {
        $(btnCheck).on("click", function () {
            $(btnCheck).removeClass("fillColor");
            $(btnCheck).children().removeClass("scaleNormal");
            $(this).toggleClass("fillColor");
            $(this).children().toggleClass("scaleNormal");
        });
        let btnDel = $(".button.delproduct");
        $(btnDel).on("click", function () {
            $(btnCheck).removeClass("fillColor");
            $(btnCheck).children().removeClass("scaleNormal");
        });
        $(".noti").hide();
        $(".button.addproduct").on("click", function (e) {
            e.preventDefault();
            showNoti();
            fadeOutNoti();
        });
        $(".noti .close-icon").on("click", function () {
            hideNoti();
        });
    } else if ($(".signin-page").length != 0) {
        const loginForm = document.querySelector(".signin-form");
        const showPasswordIcon =
            loginForm && loginForm.querySelector(".show-password");
        const inputPassword =
            loginForm && loginForm.querySelector('input[type="password"');
        showPasswordIcon.addEventListener("click", function () {
            const inputPasswordType = inputPassword.getAttribute("type");
            inputPasswordType === "password"
                ? inputPassword.setAttribute("type", "text")
                : inputPassword.setAttribute("type", "password");
        });
    } else if ($(".userAccount-inventory-page").length != 0) {
        /**Inventory */
        $(btnCheck).on("click", function () {
            $(this).toggleClass("fillColor");
            $(this).children().toggleClass("scaleNormal");
        });
        $(
            ".tableContent__wrap-content--qlkd .inventory__wrap-bottom tbody td .buttonsubmit.del "
        ).on("click", function () {
            $(".warning").removeClass("success");
            $(".warning").addClass("success");
        });
        $(".noti").hide();
        $(".warning .option-wrap .button-primary.accept").on(
            "click",
            function (e) {
                e.preventDefault();
                $(".warning").removeClass("success");
                showNoti();
                fadeOutNoti();
            }
        );
        $(".warning .option-wrap .button-primary.cancel").on(
            "click",
            function (e) {
                e.preventDefault();
                $(".warning").removeClass("success");
            }
        );
        $(".noti .close-icon").on("click", function () {
            hideNoti();
        });
    } else if ($(".addProduct-page").length != 0) {
        $(".noti").hide();
        $(
            ".tableContent__wrap-content--qlkd .addProduct .data__item .btn-submit"
        ).on("click", function (e) {
            e.preventDefault();
            showNoti();
            fadeOutNoti();
        });
        $(".noti .close-icon").on("click", function () {
            hideNoti();
        });
        $(
            ".tableContent__wrap-content--qlkd .addProduct .data__item .btn-submit.bđ"
        ).on("click", function (e) {
            e.preventDefault();
            showNoti();
            fadeOutNoti();
        });
        $(".noti .close-icon").on("click", function () {
            hide();
        });
    } else if ($(".userProfile-page").length != 0) {
        /**Turn a number into star rating*/
        var starWidth = 15;
        $.fn.stars = function () {
            return $(this).each(function () {
                $(this).html(
                    $("<span />").width(
                        Math.max(0, Math.min(5, parseFloat($(this).html()))) *
                            starWidth
                    )
                );
            });
        };
        $(
            ".userProfile-page .mainProfile .mainProfile__left .mainProfile__left-wrap span.stars"
        ).stars();
        $(
            ".userProfile-page .mainProfile .mainProfile__right-list-review span.stars"
        ).stars();
        /** SHOW MORE TEXT*/
        if ($(".desc-box .short-desc").height() < 55) {
            $(".desc-box .read-more").addClass("disable");
        } else {
            /**Showmore btn */
            var $el, $ps, $up, totalHeight;

            $(".desc-box .button").click(function () {
                totalHeight = 0;

                $el = $(this);
                $p = $el.parent();
                $up = $p.parent();
                $ps = $up.find("p:not('.read-more')");

                $ps.each(function () {
                    totalHeight += $(this).outerHeight();
                });

                $up.css({
                    // Set height to prevent instant jumpdown when max height is removed
                    height: $up.height(),
                    "max-height": 9999,
                }).animate({
                    height: totalHeight,
                });

                // fade out read-more
                $p.fadeOut();

                // prevent jump-down
                return false;
            });
        }
        $(".cmt-box .cmt-content").each(function (index, element) {
            if ($(element).height() < 40) {
                $(element)
                    .closest(".cmt-box")
                    .find(".read-more")
                    .addClass("disable");
            } else {
                /**Showmore btn */
                var $el, $ps, $up, totalHeight;
                $(".cmt-box .button").click(function () {
                    totalHeight = 0;

                    $el = $(this);
                    $p = $el.parent();
                    $up = $p.parent();
                    $ps = $up.find("p:not('.read-more')");

                    $ps.each(function () {
                        totalHeight += $(this).outerHeight();
                    });

                    $up.css({
                        // Set height to prevent instant jumpdown when max height is removed
                        height: $up.height(),
                        "max-height": 9999,
                    }).animate({
                        height: totalHeight,
                    });

                    // fade out read-more
                    $p.fadeOut();

                    // prevent jump-down
                    return false;
                });
            }
        });
        /** TAB ACTIVE */
        let panel = $(".panel");
        $(document).on("click", ".tag-list .button-primary", function (e) {
            e.preventDefault();
            $(".tag-list .button-primary").removeClass("active");
            panel.removeClass("active");
            panel.eq($(this).index()).addClass("active");
            $(this).addClass("active");
        });
    } else if ($(".userAccount-history-page").length != 0) {
        $(".comment-wrap .button-primary.comment").on("click", function (e) {
            e.preventDefault();
            $(".comment-wrap .comment-box").removeClass("active");
            $(this).parent().find(".comment-box").addClass("active");
        });
        $(".noti").hide();
        $(".comment-wrap .comment-box .button-primary.sendComment").on(
            "click",
            function (e) {
                e.preventDefault();
                $(this).parent().removeClass("active");
                showNoti();
                fadeOutNoti();
            }
        );
        $(".noti .close-icon").on("click", function () {
            hideNoti();
        });
    } else if ($(".userAccount-edit-page").length != 0) {
        $(".noti").hide();
        $(".tableContent__wrap-content--tttk .data__item .btn-submit").on(
            "click",
            function (e) {
                e.preventDefault();
                showNoti();
                fadeOutNoti();
            }
        );
        $(".noti .close-icon").on("click", function () {
            hideNoti();
        });
    } else if ($(".userAccount-notification-page").length != 0) {
        $(".noti").hide();
        $(".tableContent__wrap-content--tbct .buttonsubmit.del").on(
            "click",
            function () {
                showNoti();
                fadeOutNoti();
            }
        );
        $(".noti .close-icon").on("click", function () {
            hideNoti();
        });
    }
});

let btnPaging = $(".paging-btn span");
$(btnPaging).on("click", function () {
    $(btnPaging).removeClass("active");
    $(this).toggleClass("active");
});

let $detailProduct = $(
    ".postdetail-page .postDetail .container .detail__left .detail__left-slider"
);
$detailProduct.flickity({
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    on: {
        change: function (index) {
            let number = $(
                ".postdetail-page .postDetail .container .detail__left .detail__left-valimg span"
            );
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(1));
        },
    },
});
$(
    ".postdetail-page .postDetail .container .detail__left .detail__left-button .btn.prev"
).on("click", function () {
    $detailProduct.flickity("previous");
});

$(
    ".postdetail-page .postDetail .container .detail__left .detail__left-button .btn.next"
).on("click", function () {
    $detailProduct.flickity("next");
});
let $anotherProduct = $(
    ".postdetail-page .anotherProduct .container .mainProduct__list"
);

$anotherProduct.flickity({
    cellAlign: "left",
    contain: true,
    //wrapAround: true,
    //draggable: false,
    prevNextButtons: false,
    pageDots: false,
});
$(".postdetail-page .anotherProduct .container .product__button .btn.prev").on(
    "click",
    function () {
        $anotherProduct.flickity("previous");
    }
);

$(".postdetail-page .anotherProduct .container .product__button .btn.next").on(
    "click",
    function () {
        $anotherProduct.flickity("next");
    }
);

$(".searchWrap .search-input input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".inventory .inventory__wrap-bottom table tbody tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});
