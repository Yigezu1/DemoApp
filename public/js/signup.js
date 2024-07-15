$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var lnameInput = $("input#lname-input");
  var fnameInput = $("input#fname-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      lname: lnameInput.val().trim(),
      fname: fnameInput.val().trim()
    };

    if (!userData.email || !userData.password ||!userData.fname || !userData.lname) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.lname, userData.fname);
    emailInput.val("");
    passwordInput.val("");
    lnameInput.val("");
    fnameInput.val("")
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, lname, fname) {
    $.post("/api/signup", {
      email: email,
      password: password,
      lname: lname,
      fname: fname
    })
      .then(function(data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
