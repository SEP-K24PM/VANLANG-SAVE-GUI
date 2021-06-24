let logo = document.querySelector("header .mainHeader #burgerMenuIcon");
let openHeader = document.querySelector("header .mainHeader");
let btnCheck = $(".button-check");
function toggleNavigation() {
    $("header .mainHeader").toggleClass("open");
    $("header .mainHeader .blacklayer").toggleClass("open");
    $("header .mainHeader .label").toggleClass("open");
    $("header .mainHeader #sidebar .navigation").toggleClass("open");
    $("header .mainHeader #sidebar .signin-check").toggleClass("open");
}
$(logo).on("click", function () {
    toggleNavigation();
});
$("header .mainHeader .blacklayer").on("click", function () {
    toggleNavigation();
});

$(document).ready(function () {
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
    } else if ($(".detailproduct-page").length != 0) {
        // let options = document.querySelector(
        //     ".detailproduct-page .detailProduct .container .detail__right-options .val"
        // ).textContent;
        // const dataDisable = "trao đổi";
        // if (options.toLowerCase() === dataDisable) {
        //     checkOption = true;
        // }
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
    } else if ($(".inventory-page").length != 0) {
        /**Inventory */
        $(btnCheck).on("click", function () {
            $(this).toggleClass("fillColor");
            $(this).children().toggleClass("scaleNormal");
        });
    } else if ($(".addProduct-page").length != 0) {
        $(".addProduct .data .btn-add").on("click", function () {
            $(".noti").addClass("success");
        });
        $(".noti .close-icon").on("click", function () {
            $(".noti").removeClass("success");
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
            panel.hide();
            // $(".tag-list .button-primary").removeClass("active");
            // panel.eq($(this).index()).addClass("active");
            // $(this).addClass("active");
            $(".tag-list .button-primary").removeClass("active");
            panel.eq($(this).index()).show();
            $(this).addClass("active");
        });
    }
});

let btnPaging = $(".paging-btn span");
$(btnPaging).on("click", function () {
    $(btnPaging).removeClass("active");
    $(this).toggleClass("active");
});

let $detailProduct = $(
    ".detailproduct-page .detailProduct .container .detail__left .detail__left-slider"
);
$detailProduct.flickity({
    cellAlign: "left",
    contain: true,
    //wrapAround: true,
    //draggable: false,
    prevNextButtons: false,
    pageDots: false,
    on: {
        change: function (index) {
            let number = $(
                ".detailproduct-page .detailProduct .container .detail__left .detail__left-valimg span"
            );
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(1));
        },
    },
});
$(
    ".detailproduct-page .detailProduct .container .detail__left .detail__left-button .btn.prev"
).on("click", function () {
    $detailProduct.flickity("previous");
});

$(
    ".detailproduct-page .detailProduct .container .detail__left .detail__left-button .btn.next"
).on("click", function () {
    $detailProduct.flickity("next");
});
let $anotherProduct = $(
    ".detailproduct-page .anotherProduct .container .mainProduct__list"
);

$anotherProduct.flickity({
    cellAlign: "left",
    contain: true,
    //wrapAround: true,
    //draggable: false,
    prevNextButtons: false,
    pageDots: false,
});
$(
    ".detailproduct-page .anotherProduct .container .product__button .btn.prev"
).on("click", function () {
    $anotherProduct.flickity("previous");
});

$(
    ".detailproduct-page .anotherProduct .container .product__button .btn.next"
).on("click", function () {
    $anotherProduct.flickity("next");
});

$(".searchWrap .search-input input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".tableIven .inventory .inventory__wrap-bottom table tbody tr").filter(
        function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        }
    );
});
