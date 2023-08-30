function validateForm () {
    const name = document.forms['message-form']['full-name'].value;
    const birthdate = document.forms['message-form']['birth-date'].value;
    const gender = document.forms['message-form']['gender'].value;
    const messages = document.forms['message-form']['messages'].value;

    if (name == '' || birthdate == '' || gender == '' || messages == '') {
        alert("tidak boleh kosong");
        return false
    }

    setSenderUI(name, birthdate, gender, messages);

    return false
}

function setSenderUI(name, birthdate, gender, messages) {
    document.getElementById('sender-full-name').innerHTML = name;
    document.getElementById('sender-birth-date').innerHTML = birthdate;
    document.getElementById('sender-gender').innerHTML = gender;
    document.getElementById('sender-messages').innerHTML = messages;
    document.getElementById('sender-time').innerHTML = Date()
}


    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs((slideIndex += n));
    }

    function showDivs(n){
        var i;
        var x = document.getElementsByClassName('slide')
        if (n > x.length) slideIndex = 1
        if (n < 1) slideIndex = x.length
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }

        x[slideIndex-1].style.display = 'block';
    }

    setInterval(() => {
        plusDivs(1);
    }, 3000)
