window.addEventListener("load",function() {
  console.log("test");
});
function header() {
  $.ajax({
      url: "C:/Users/takamoto/Desktop/video/b/common/hearder/header.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}
console.log("test");
