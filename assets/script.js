// This sections, document, refers to the HTML document
// This section, addEventListener, is a method used to listen to the HTML document
// This section, DOMContentLoaded, refers to what is being listened for and tells the event listener that the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // This section is creating the variable inviteContainer
    //It then looks for the element,bc_invite_container, in the HTML document by using,document.getElementById("bc_invite_container"); 
    var inviteContainer = document.getElementById("bc_invite_container");
    // This section creates the variable, closeButton
    // It looks for the element bc_close_button, in the HTML document by using document.getElementById("bc_close_button")
    var closeButton = document.getElementById("bc_close_button");

    // An event listener is then set to the 'click' of the closeButton element
    closeButton.addEventListener("click", function () {
        // When the closeButton is clicked a fade out event to the classlist is triggered on the inviteContainer which is associated with the the HTML div, bc_invite_container
        inviteContainer.classList.add("fade-out");

        // This section then sets a timeout of half a second, 500 milliseconds
        // When this timeout is reached, the 'hidden' attribute is set inviteContainer's CSS classlist         
        setTimeout(function () {
            inviteContainer.classList.add("hidden");
        }, 500);
    });
});