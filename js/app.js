$("#loginCard").hide();

$("#changeToLoginBtn").click(function() {
  $("#singupCard").hide();
  $("#loginCard").show();
});

$("#changeToSignupBtn").click(function() {
  $("#loginCard").hide();
  $("#singupCard").show();
});

$("#navBtn1").click(function() {
  $("#subNav > li").remove();
  $("#subNav").append(
    `<li class="list-inline-item px-3">دوره‌ آموزش‌های ضروری Principle منتشر شد</li>`
  );
  $("#subNav").append(
    `<li class="list-inline-item px-3">مکتب‌خانه اول آبان ۱۳۹۶ رسما شروع به فعالیت می‌کند</li>`
  );
  $("#subNav").append(
    `<li class="list-inline-item px-3">مکتب‌خانه در شبکه‌های اجتماعی</li>`
  );
});

$("#navBtn2").click(function() {
  $("#subNav > li").remove();
  $("#subNav").append(`<li class="list-inline-item px-3">وب نویسی</li>`);
  $("#subNav").append(`<li class="list-inline-item px-3">گرافیک</li>`);
  $("#subNav").append(
    `<li class="list-inline-item px-3">آهنگ‌ سازی و تدوین صدا</li>`
  );
  $("#subNav").append(`<li class="list-inline-item px-3">سه بعدی و ویدیو</li>`);
  $("#subNav").append(`<li class="list-inline-item px-3">برنامه نویسی</li>`);
});

$("#navBtn4").click(function() {
  $("#subNav > li").remove();
  $("#subNav").append(`<li class="list-inline-item px-3">قالب سایت</li>`);
  $("#subNav").append(`<li class="list-inline-item px-3">گرافیک</li>`);
  $("#subNav").append(
    `<li class="list-inline-item px-3">آهنگ‌ سازی و تدوین صدا</li>`
  );
  $("#subNav").append(`<li class="list-inline-item px-3">سه بعدی و ویدیو</li>`);
  $("#subNav").append(`<li class="list-inline-item px-3">برنامه نویسی</li>`);
});

$("#inputPass").keyup(function() {
  $("#inputPass").addClass("invalid-input")
});
