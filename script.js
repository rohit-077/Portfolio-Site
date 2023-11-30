document.addEventListener("DOMContentLoaded", function () {
  //   var typed = new Typed("#element", {
  //     strings: ["Software Developer", "Web Developer."],
  //     typeSpeed: 50,
  //   });

  // Function to handle the resume download
  function downloadResume() {
    // Provide the path to your resume file
    var resumePath = "/Rohit_resume_3.pdf";

    // Create a link element
    var link = document.createElement("a");
    link.href = resumePath;

    // Set the download attribute with the desired file name
    link.download = "Sai_Rohit_Resume.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  }

  // Add a click event listener to the resume button
  document
    .querySelector(".resume button.btn")
    .addEventListener("click", downloadResume);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollToDown() {
    document.querySelector("#about").scrollIntoView({
        behavior: 'smooth'
    });
}

// function submitForm(event) {
//     // Prevent the default form submission
//     event.preventDefault();

//     // Reset the form
//     document.getElementById("contactForm").reset();

//     // Manually submit the form
//     document.getElementById("contactForm").submit();

//     setTimeout(function() {
//       document.getElementById("contactForm").reset();
//   }, 500);
// }

function submitForm() {
  // Get form data
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  // Send form data to Formspree using fetch
  fetch("https://formspree.io/f/mleyyajz", {
      method: "POST",
      body: formData,
      headers: {
          Accept: "application/json",
      },
  })
  .then(response => response.json())
  .then(() => {
      // Reset the form after a successful submission
      form.reset();
  })
  .catch(error => console.error("Error submitting form:", error));
}