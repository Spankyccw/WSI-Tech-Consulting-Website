document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your consultation ticket has been submitted. We will review your request during office hours [17].");
    this.reset();
});