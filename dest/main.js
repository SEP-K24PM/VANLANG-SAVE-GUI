let logo = document.querySelector(
  "header .mainHeader #burgerMenuIcon #menu_checkbox"
);
let openHeader = document.querySelector("header .mainHeader");
let btnCheck = $(".button-check");
function removeNavigation() {
  $("header .mainHeader").removeClass("open");
  $("header .mainHeader .blacklayer").removeClass("open");
  $("header .mainHeader .label").removeClass("open");
  $("header .mainHeader #sidebar .navigation").removeClass("open");
  $("header .mainHeader #sidebar .signin-check").removeClass("open");
  $("header .mainHeader #sidebar .buttonnav").removeClass("open");
}
function addNavigation() {
  $("header .mainHeader").addClass("open");
  $("header .mainHeader .blacklayer").addClass("open");
  $("header .mainHeader .label").addClass("open");
  $("header .mainHeader #sidebar .navigation").addClass("open");
  $("header .mainHeader #sidebar .signin-check").addClass("open");
  $("header .mainHeader #sidebar .buttonnav").addClass("open");
}
$(logo).on("click", function () {
  if (this.checked != false) {
    addNavigation();
  } else {
    removeNavigation();
  }
});
$("header .mainHeader .blacklayer").on("click", function () {
  removeNavigation();
  $(logo).prop("checked", false);
});

$(document).ready(function () {
  const currentActive = $(".active");
  const indexActive = $("header .mainHeader .navigation ul li").index(
    currentActive
  );
  // $("header .mainHeader .navigation ul li").each(function (
  //   li_index,
  //   li_element
  // ) {
  //   $(li_element)
  //     .mouseover(function () {
  //       $(this).siblings().removeClass("active");
  //     })
  //     .mouseleave(function () {
  //       $("header .mainHeader .navigation ul li")
  //         .eq(indexActive)
  //         .addClass("active");
  //     });
  // });

  //active notitable
  $("header .detailHeader .right-wrap ul li .alarmnoti").on(
    "click",
    function (e) {
      e.preventDefault();
      setTimeout(function () {
        $("header .detailHeader .right-wrap ul li .alarmnoti").toggleClass(
          "active"
        );
        $("header .notitable").toggleClass("active");
      }, 300);
      //** Remove button another*/
      $("header .detailHeader .right-wrap ul li .account").removeClass(
        "active"
      );
      setTimeout(function () {
        $("header .nav-dropdown").removeClass("active");
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
    //** */
    $("header .detailHeader .right-wrap ul li .account").removeClass("active");
    setTimeout(function () {
      $("header .nav-dropdown").removeClass("active");
    }, 300);
  });
  //active nav-dropdown
  $("header .detailHeader .right-wrap ul li .account").on(
    "click",
    function (e) {
      e.preventDefault();
      setTimeout(function () {
        $("header .detailHeader .right-wrap ul li .account").toggleClass(
          "active"
        );
        $("header .nav-dropdown").toggleClass("active");
      }, 300);
      //** Remove button another*/
      $("header .detailHeader .right-wrap ul li .alarmnoti").removeClass(
        "active"
      );
      setTimeout(function () {
        $("header .notitable").removeClass("active");
      }, 300);
    }
  );
  if ($(".home-page").length != 0) {
  } else if ($(".market-page").length != 0) {
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
    $(".cmt-box .cmt-content").each(function (index, element) {
      if ($(element).height() < 40) {
        $(element).closest(".cmt-box").find(".read-more").addClass("disable");
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

          $up
            .css({
              // Set height to prevent instant jumpdown when max height is removed
              height: $up.height(),
              "max-height": 9999,
            })
            .animate({
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
    $(".detail__right .navi-post .report").on("click", function (e) {
      e.preventDefault();
      $(".black-layer").addClass("open");
      $(".report-form").addClass("open");
    });
    $(".report-form .button-close").on("click", function () {
      $(".black-layer").removeClass("open");
      $(".report-form").removeClass("open");
    });
    $(".detail__right .navi-post .del").on("click", function (e) {
      e.preventDefault();
      $(".black-layer").addClass("open");
      $(".warning-delete-post-form").addClass("open");
    });
    $(".warning-delete-post-form .opt-wrap .button.delpostn").on(
      "click",
      function () {
        $(".black-layer").removeClass("open");
        $(".warning-delete-post-form").removeClass("open");
      }
    );
  } else if ($(".register-exchange-page").length != 0) {
    $(btnCheck).each(function (check_index, check_element) {
      $(check_element).on("click", function () {
        $(btnCheck).prop("checked", false);
        $(this).prop("checked", true);
        console.log(`${$(this)[0].checked} , ${check_index + 1}`);
      });
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
  } else if ($(".addProduct-page").length != 0) {
  } else if ($(".userProfile-page").length != 0) {
    /**Turn a number into star rating*/
    var starWidth = 15;
    $.fn.stars = function () {
      return $(this).each(function () {
        $(this).html(
          $("<span />").width(
            Math.max(0, Math.min(5, parseFloat($(this).html()))) * starWidth
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

        $up
          .css({
            // Set height to prevent instant jumpdown when max height is removed
            height: $up.height(),
            "max-height": 9999,
          })
          .animate({
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
        $(element).closest(".cmt-box").find(".read-more").addClass("disable");
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

          $up
            .css({
              // Set height to prevent instant jumpdown when max height is removed
              height: $up.height(),
              "max-height": 9999,
            })
            .animate({
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
  } else if ($(".userAccount-rating-page").length != 0) {
    $(".productRating__ratingbox-case .star").on("click", function () {
      $(this)
        .parents("form")
        .find(".button-primary.sendComment")
        .addClass("active");
    });
  } else if ($(".userAccount-edit-page").length != 0) {
  } else if ($(".userAccount-notification-page").length != 0) {
  }
});

let btnPaging = $(".paging-btn span");
$(btnPaging).on("click", function () {
  $(btnPaging).removeClass("active");
  $(this).toggleClass("active");
});

$(".searchWrap .search-input input").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $(".inventory .inventory__wrap-bottom table tbody tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});
