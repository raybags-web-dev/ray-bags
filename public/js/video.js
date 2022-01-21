const video_component = function (ind = 0) {
  let iterator;

  const evaluatedLink = function () {
    let array_of_links = [
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B2b8RSzfgivu3v9nb/coming-soon-message-illuminated-with-light-projector-realistic-business-new-product-internet-promotion-splash-screen-with-moving-spotlight-available-in-4k-uhd-fullhd-and-hd-3d-video-animation-footage___09b9327d8778b57644e4d54a9db837a9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B2b8RSzfgivu3v9nb/coming-soon-message-illuminated-with-light-projector-realistic-business-new-product-internet-promotion-splash-screen-with-moving-spotlight-available-in-4k-uhd-fullhd-and-hd-3d-video-animation-footage___09b9327d8778b57644e4d54a9db837a9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B2b8RSzfgivu3v9nb/coming-soon-message-illuminated-with-light-projector-realistic-business-new-product-internet-promotion-splash-screen-with-moving-spotlight-available-in-4k-uhd-fullhd-and-hd-3d-video-animation-footage___09b9327d8778b57644e4d54a9db837a9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B2b8RSzfgivu3v9nb/coming-soon-message-illuminated-with-light-projector-realistic-business-new-product-internet-promotion-splash-screen-with-moving-spotlight-available-in-4k-uhd-fullhd-and-hd-3d-video-animation-footage___09b9327d8778b57644e4d54a9db837a9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/H8WuRINimqur8ud/coming-soon-intro-intro_hucrgxrs__58c30b2de1fc066e51f211ea1874f0b9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B2b8RSzfgivu3v9nb/coming-soon-message-illuminated-with-light-projector-realistic-business-new-product-internet-promotion-splash-screen-with-moving-spotlight-available-in-4k-uhd-fullhd-and-hd-3d-video-animation-footage___09b9327d8778b57644e4d54a9db837a9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/H8WuRINimqur8ud/coming-soon-intro-intro_hucrgxrs__58c30b2de1fc066e51f211ea1874f0b9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B2b8RSzfgivu3v9nb/coming-soon-message-illuminated-with-light-projector-realistic-business-new-product-internet-promotion-splash-screen-with-moving-spotlight-available-in-4k-uhd-fullhd-and-hd-3d-video-animation-footage___09b9327d8778b57644e4d54a9db837a9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/H8WuRINimqur8ud/coming-soon-intro-intro_hucrgxrs__58c30b2de1fc066e51f211ea1874f0b9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B2b8RSzfgivu3v9nb/coming-soon-message-illuminated-with-light-projector-realistic-business-new-product-internet-promotion-splash-screen-with-moving-spotlight-available-in-4k-uhd-fullhd-and-hd-3d-video-animation-footage___09b9327d8778b57644e4d54a9db837a9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B2b8RSzfgivu3v9nb/coming-soon-message-illuminated-with-light-projector-realistic-business-new-product-internet-promotion-splash-screen-with-moving-spotlight-available-in-4k-uhd-fullhd-and-hd-3d-video-animation-footage___09b9327d8778b57644e4d54a9db837a9__P360.mp4",
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/H8WuRINimqur8ud/coming-soon-intro-intro_hucrgxrs__58c30b2de1fc066e51f211ea1874f0b9__P360.mp4",
    ];

    $(array_of_links).each((index, link) => {
      if (index == ind) iterator = link;
    });
  };

  evaluatedLink();

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
      src: `${iterator}`,
      controls: "controls",
      type: "video/mp4",
      autoplay: true,
      loop: true,
      muted: true,
    })
    .append($(not_supported));

  const videoDIV = $("<div></div>")
    .attr({ class: "video-wrapper" })
    .append($(video), $(close_button));

  return $(videoDIV);
};

export { video_component };
