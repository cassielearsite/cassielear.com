var pages = ["bio", "novantika", "resume", "listen", "photos", "links", "studio"];

$(document).ready(function() {
  pages.forEach(function(page){
    console.log(page);
    $("#" + page).load("_posts/" + page + ".html");
    $("#" + page + "Nav").click(function(){switchContent(page)});
  });
  switchContent();
	/*$("#bio").click(function(){switchContent("#bio")});
  $("#novantika").click(function(){switchContent("#novantika")});
  $("#resume").click(function(){switchContent("#resume")});
  $("#listen").click(function(){switchContent("#listen")});
  $("#photos").click(function(){switchContent("#photos")});
  $("#links").click(function() {switchContent("#links")});
  $("#studio").click(function() {switchContent("#studio")});*/
  
  
});

function switchContent(contentId) {
  console.log("switch to " + contentId);
  pages.forEach(function(page){
    $("#" + page).hide();
  })

  if (arguments.length > 0) {
    $("#" + contentId).show();
  };
};