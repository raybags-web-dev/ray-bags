const contact_form_functionality = function (form_anchor) {
  // handle contact form submision handler
  const form = document.getElementById("contact_me_form");
  $(form_anchor).on("submit", function (e) {
    e.preventDefault();

    const _formData = new FormData(form);
    const name = _formData.get("name");

    $(".input-group").remove();
    $(".login-button").remove();

    $(".login-title").text(`Hi ${name}.`);

    const details = $("<p></p>")
      .attr({ class: "message-details" })
      .text("I'll get back to you as soon as possible");
    $("#contact_me_form").append(details);
  });
};
export { contact_form_functionality };
