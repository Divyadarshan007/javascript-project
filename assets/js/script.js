let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");

let formEl = document.getElementById("form");

$("#sub").on("click", function (e) {
   
    e.preventDefault();

    if (fname.value.trim() == "") {
        
        swal({
            title: "First name is required !",
            icon: "error",
          });
        return;
    }
    if (lname.value.trim() == "") {
        swal({
            title: "Last name is required !",
            icon: "error",
          });
        return;
    }

    if (mail.value.trim() == "") {
        swal({
            title: "Email is required !",
            icon: "error",
          });
        return;
    }

    if (pass.value.trim() == "" || cpass.value.trim() == "") {
        console.log(pass.value.trim().length);
        swal({
            title: "Password / Confirm Password is required !",
            icon: "error",
        });
        return;
    } else if (pass.value.trim().length < 8) {  
        swal({
            title: "Password must be at least 8 characters !",
            icon: "error",
        });
        return;
    } else if (cpass.value.trim() !== pass.value.trim()) {  
        swal({
            title: "Password do not match !",
            icon: "error",
        });
        return;
    }
    
    swal("")
    swal({
        title: "Form Submitted Successfully !",
        icon: "success",
      })
    .then(() => {
      formEl.submit();
    });
});