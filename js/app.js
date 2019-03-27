var stateIsLogin = true;

$("#changeLoginStateBtn").click(function() {
  if (stateIsLogin) {
    $("#firstText").text("عضو سایت نیستی؟");
    $("#secondText").text("با کلیک بر روی فلش زیر میتونی رایگان ثبت نام کنی!");
    $("#changeLoginStateBtn span").removeClass("fa-chevron-left")
    $("#changeLoginStateBtn span").addClass("fa-chevron-right")
    stateIsLogin = false;
  } else {
    $("#firstText").text("قبلا عضو شدی؟");
    $("#secondText").text("برای ورود به سایت بر روی فلش زیر کلیک کن!");
    $("#changeLoginStateBtn span").removeClass("fa-chevron-right")
    $("#changeLoginStateBtn span").addClass("fa-chevron-left")
    stateIsLogin = true;
  }
});
