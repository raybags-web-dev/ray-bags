// "use strict";
// // =====page mentenence code =====//
const pageUnavailable = () => {
  const body = $("body");
  const div = $("<div></div").attr("class", "mentenance-page-wrapper");

  const main_heading = $("<h1></h1")
    .text("Projects")
    .attr({ class: "mentenance-heading" });
  const heading = $("<h2></h2")
    .text("Page under maintenance")
    .attr({ class: "mentenance-sub-heading" });
  const paragraph = $("<p></p")
    .text("The page will be ready soon. Please visit the page later")
    .attr({ class: "mentenance-details" });
  const link = $("<a>").text("products page").attr({
    href: "https://projects-page.netlify.app/",
    target: "_blank",
    class: "go-to-products",
  });

  div.append(main_heading, heading, paragraph, link);
  body.append(div);
};
// =====page mentenence code=====//

export { pageUnavailable };
