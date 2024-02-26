
// Function to display the dialog message box
function displayRedirectMessage() {
    // Create a div element for the message box
    var messageBox = document.createElement("div");
    messageBox.setAttribute("id", "redirectMessage");
    messageBox.style.position = "fixed";
    messageBox.style.top = "50%";
    messageBox.style.left = "50%";
    messageBox.style.transform = "translate(-50%, -50%)"; // Center horizontally and vertically
    messageBox.style.width = "300px"; // Set width
    messageBox.style.padding = "20px";
    messageBox.style.backgroundColor = "#f0f0f0";
    messageBox.style.border = "1px solid #ccc";
    messageBox.style.borderRadius = "5px";
    messageBox.style.zIndex = "9999";
    messageBox.innerHTML = "These pages are no longer in use. You will be automatically redirected to updated pages in 5 seconds.";
    
    // Append the message box to the body of the document
    document.body.appendChild(messageBox);
    
    // Automatically redirect after 5 seconds
    setTimeout(function() {
        window.location.href = "https://hivelab.biochemistry.gwu.edu/";
    }, 5000); // 5 seconds (in milliseconds)
}

// Call the displayRedirectMessage function when the page loads
window.onload = displayRedirectMessage;
