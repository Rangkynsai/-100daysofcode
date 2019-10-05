function email(mail1){
    let location = mail1.indexOf('@')
    if(location == -1)
        alert('Please enter an accurate email Id')
}
function passwordChecking(passInput){
    if(passInput.length >=10)
        alert('Password Should not be more than 10 character')
}
function confirmPassword(confirmPass){
    if(confirmPass == passInput)
        alert('Your apllication has submited')
    else
        alert('Please enter the same password')
}