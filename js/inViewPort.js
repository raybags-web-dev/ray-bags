// in viewport General function

const inViewPort = (element) => {
  $(window).on("scroll", () => {
    if (element != undefined) {
      let top_of_element = $(element).offset().top;
      let bottom_of_element = $(element).offset().top;
      $(element).outerHeight();
      let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      let top_of_screen = $(window).scrollTop();

      if (
        bottom_of_screen > top_of_element &&
        top_of_screen < bottom_of_element
      ) {
        //   TO be implimented
      }
    }
  });
};

export { inViewPort };
