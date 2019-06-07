function LoadPatrons() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/griffenx/PatreonWidget/master/patrons.xml",
    dataType: "xml",
    success: xmlParser
  });
}

function xmlParser(xml) {
  var main = $("#main");
  $(xml).find("tier").each(function() {
    main.append("<h2>" + $(this).find("name").text() + "</h2>");
    var tierName = $(this).find("name").text().split(" ")[0].toLowerCase();
    main.append("<ul class=\"patronList\" id=\"" + tierName + "\"></ul>");
    var tierList = $("#" + tierName);
    $(this).find("patron").each(function() {
      tierList.append("<li>" + $(this).text() + "</li>");
    });
    if (tierList.html().length == 0) tierList.append("<li>None yet! Be the first? :3c</li>");
  });
}

LoadPatrons();