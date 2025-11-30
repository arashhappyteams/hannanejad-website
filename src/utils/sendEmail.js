export function sendEmail(e, serviceId, templateId, publicKey, navigateTo = "/") {
  e.preventDefault();

  emailjs.sendForm(serviceId, templateId, e.target, publicKey)
    .then(() => {
      alert("Your message has been sent successfully!");

      // Auto redirect after 1.5 seconds
      setTimeout(() => {
        window.location.href = navigateTo;   // e.g. "/hannanejad-website/"
      }, 1500);

      e.target.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("There was an error sending your message. Please try again.");
    });
}
