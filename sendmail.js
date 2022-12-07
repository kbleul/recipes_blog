

const saveEmail = async (email) => {

    $("#email").val("")
    $("#loading_img").show()

    const response = await fetch("https://affliate.cyclic.app/addme", {
    method: 'POST', 
    headers: {  'Content-Type': 'application/json'  },
    body: JSON.stringify({email}) 
  });

  $("#loading_img").hide()
  $("#warning").text("Thank You").fadeIn()

    setTimeout(3000, $("#warning").fadeOut() )
}


function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
}


function validate() {
    let email = $("#email").val();

    if(validateEmail(email)) {
        $("#warning").hide() 
        saveEmail(email)
    } 
    else {  $("#warning").text("Please Enter a Valid Email Address").show()   }

    return false;
}
