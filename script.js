let emailCollectorForm = document.getElementById("Email-Collector");
emailCollectorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let ourFormDate = new FormData(event.target);

  let userFirstName = ourFormDate.get("firstName");
  let userEmailAddress = ourFormDate.get("emailAddress");
  let updatedHtmlContent = `<h2>Congratulations, ${userFirstName}!</h2>

     <p>You're on your way to becoming a BBQ Master!</p>
        
     <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}`;

  let updatedContentConatiner = document.getElementById("Main-Content");
  updatedContentConatiner.innerHTML = updatedHtmlContent;
});
