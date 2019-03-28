var stateIsLogin = true;

$("#changeLoginStateBtn").click(function() {
  if (stateIsLogin) {
    $("#firstText").text("عضو سایت نیستی؟");
    $("#secondText").text("با کلیک بر روی فلش زیر میتونی رایگان ثبت نام کنی!");
    $("#changeLoginStateBtn span").removeClass("fa-chevron-left");
    $("#changeLoginStateBtn span").addClass("fa-chevron-right");
    stateIsLogin = false;
  } else {
    $("#firstText").text("قبلا عضو شدی؟");
    $("#secondText").text("برای ورود به سایت بر روی فلش زیر کلیک کن!");
    $("#changeLoginStateBtn span").removeClass("fa-chevron-right");
    $("#changeLoginStateBtn span").addClass("fa-chevron-left");
    stateIsLogin = true;
  }
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
