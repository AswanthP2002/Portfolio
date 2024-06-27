function validateForm (){
    let nameOfUser = document.getElementById("name").value;
    let emaiOfUser = document.getElementById("mail").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let nameErrorMessage = document.getElementById("name-error");
    let mailErrorMessage = document.getElementById("email-error");
    let subjectErrorMessage  = document.getElementById("subject-error");
    let messageErrorMessage = document.getElementById("message-error");

    nameErrorMessage.textContent = "";
    mailErrorMessage.textContent = "";
    subjectErrorMessage.textContent = "";
    messageErrorMessage.textContent = ";"


    let isValid = true;

    if(nameOfUser == ""){
        nameErrorMessage.textContent ="Name must be filled!";
        isValid = false;
    }

    /*if(emaiOfUser == ""){
        mailErrorMessage.textContent = "Email is required";
        isValid = false;
    } */

    if(emaiOfUser == "" || !emaiOfUser.includes("@")){
        mailErrorMessage.textContent = "Please enter a valid email address";
        isValid = false;
    }
    
    if(subject == ""){
        subjectErrorMessage.textContent = "Subject must be filled";
        isValid = false
    }

    if(message == ""){
        messageErrorMessage.textContent = "Message is required";
        isValid = false;
    }

    if(isValid == true){
        sendEmail();
    }
    return isValid;

}

function sendEmail(){
    console.log("function invoked");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nimmishreya51@gmail.com",
        Password : "BAB1B3035765E90D903F94294E80F4BA6307",
        To : 'nimmishreya51@gmail.com',
        From : "nimmishreya51@gmail.com",
        Subject : "This is the subject",
        Body : "Name : "+ document.getElementById("name").value + "<br>" +
               "Email : "+ document.getElementById("mail").value + "<br>" +
               "Subject : "+ document.getElementById("subject").value + "<br" +
               "Message : " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully")
    );
}