const video_component = function (link = "") {
  const close_button = $("<i />").attr({
    class: "fas fa-times",
    id: "video_closeBTN",
  });
  const not_supported = $("<p></p>").text(
    "Your browser does not support embedded videos"
  );
  const video = $("<video />")
    .attr({
      class: "video-frame",
      src: link,
      controls: "controls",
      type: "video/mp4",
      autoplay: true,
      muted: true,
    })
    .append($(not_supported));

  const videoDIV = $("<div></div>")
    .attr({ class: "video-wrapper" })
    .append($(video), $(close_button));

  return $(videoDIV);
};

export { video_component };
