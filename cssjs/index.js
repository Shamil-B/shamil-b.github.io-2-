function openMenu(){
    let ele = document.getElementsByClassName('nav-bar--minimized')[0];
    ele.style.right = '0';
}

function closeMenu(){
    let ele = document.getElementsByClassName('nav-bar--minimized')[0];

    ele.style.right = '-100%';
}

function toSignIn(){
    let ele1 = document.getElementsByClassName('sign-up')[0];
    ele1.style.display = 'none';
    let ele2 = document.getElementsByClassName('sign-in')[0];
    ele2.style.display = 'block';
}

function toSignUp(){
    let ele1 = document.getElementsByClassName('sign-in')[0];
    ele1.style.display = 'none';
    let ele2 = document.getElementsByClassName('sign-up')[0];
    ele2.style.display = 'block';
}

////////////////////////////////////////////////////////////////

function validateSignUp(){
    const fname = document.getElementById('first');
    const lname = document.getElementById('last');
    const email = document.getElementById('email');
    const pass = document.getElementById('password');


    if(allLetter(fname,1) && allLetter(lname,2) && ValidateEmail(email,1) && ValidPass(pass,1)){
        alert('Successfully signed-up');
        return true;
    } 

    else{
        return false;
    }

}

function validateSignIn(){
    const email = document.getElementById('email-l');
    const pass = document.getElementById('password-l');

    if(ValidateEmail(email,2) && ValidPass(pass,2)){
        alert('Successfully signed-in');
        return true;

    } 

    else{
        return false;
    }
}

////////////////////////////////////////////////////////////////



function allLetter(name,num,flag = 's'){

    var letters = /^[A-Za-z]+$/;



    if (flag==='s'){
        if(name.value.match(letters)){

            document.getElementById('error-first-u').innerHTML = '';
            document.getElementById('error-last-u').innerHTML = '';
            
            return true;
        
            }
        
        else{
    
            if (num === 1){
                document.getElementById('error-first-u').innerHTML = 'Name must have alphabet characters only';
            }
        
            else{
                document.getElementById('error-last-u').innerHTML = 'Name must have alphabet characters only';
            }
        
            name.focus();
            return false;
        }
    }




    else if(flag === 'p'){

        if(name.value.match(letters)){
            document.getElementById('error-comp-name').innerHTML = '';    
            document.getElementById('error-title').innerHTML = '';    
            document.getElementById('error-loc').innerHTML = '';    
            document.getElementById('error-email').innerHTML = '';    
            return true;
        }

        else{
            if (num === 1){
                document.getElementById('error-comp-name').innerHTML = 'Company Name must have alphabet characters only';
            }
        
            else if(num === 2){
                document.getElementById('error-title').innerHTML = 'Title must have alphabet characters only';
            }

            else if(num === 3){
                document.getElementById('error-loc').innerHTML = 'Location must have alphabet characters only';
            }
        
            name.focus();
            return false;
        }
    }




    else{
        if(name.value.match(letters)){
            document.getElementById('error-first').innerHTML = '';
            document.getElementById('error-last').innerHTML = '';  
            document.getElementById('error-comp-name').innerHTML = '';    
            return true;
        
        }

        else{
            if (num === 1){
                document.getElementById('error-first').innerHTML = 'Name must have alphabet characters only';
            }
        
            else if(num === 2){
                document.getElementById('error-last').innerHTML = 'Name must have alphabet characters only';
            }

            else{
                document.getElementById('error-comp-name').innerHTML = 'Name must have alphabet characters only';
            }
        
            name.focus();
            return false;
        }
    }
}

function ValidateEmail(email,num,flag = 's'){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(flag==='s'){
        if(email.value.match(mailformat)){
        document.getElementById('error-email-u').innerHTML = '';
        document.getElementById('error-email-i').innerHTML = '';

        return true;
        }

        else{

        if(num===1){
            document.getElementById('error-email-u').innerHTML = 'You have entered an invalid email address!';
        }

        else{
            document.getElementById('error-email-i').innerHTML = 'You have entered an invalid email address!';
        }

        email.focus();
        return false;
        }
    }

    else if(flag === 'p'){
        if(email.value.match(mailformat)){
            document.getElementById('error-email').innerHTML = '';    
            return true;
            }
    
        else{
            document.getElementById('error-email').innerHTML = 'You have entered an invalid email address!';    
            email.focus();
            return false;
            }
    }

    else{
        if(email.value.match(mailformat)){
            document.getElementById('error-comp-email').innerHTML = '';    
            return true;
            }
    
        else{
            document.getElementById('error-comp-email').innerHTML = 'You have entered an invalid email address!';    
            email.focus();
            return false;
            }
    }
}


function ValidPass(password,num){

    if (password.value.length > 7){
        document.getElementById('error-pass-u').innerHTML = '';
        document.getElementById('error-pass-i').innerHTML = '';

        return true;
    }

    else{
        if(num===1){
            document.getElementById('error-pass-u').innerHTML = 'Password length must be at least 8';
        }

        else{
            document.getElementById('error-pass-i').innerHTML = 'Password length must be at least 8';
    }

    password.focus();
    return false
    }
}

function validateDesc(desc){
    if (desc.value.length > 0){
        document.getElementById('error-desc').innerHTML = '';
        return true;
    }

    else{
        document.getElementById('error-desc').innerHTML = 'Description can not be empty';
        desc.focus();
        return false;
    }
}



function validateFeedback(){

    const fname = document.getElementById('first-name');
    const lname = document.getElementById('last-name');
    const cname = document.getElementById('company-name');
    const cemail = document.getElementById('company-email');
    const country = document.getElementById('country');
    const comment = document.getElementById('comment');

    if(allLetter(fname,1,'f') && allLetter(lname,2,'f') && allLetter(cname,3,'f') && ValidateEmail(cemail,0,'f')){
        
        if (comment.value.length > 0){
            alert('Feddback successfully sent');
            return true;
        }

        else{
            document.getElementById('error-comment').innerHTML = 'Comment can not be empty';
            return false;
        }

    } 

    else{
        return false;
    }
}


function validatePost(){
    const cname = document.getElementById('name');
    const title = document.getElementById('title');
    const desc = document.getElementById('desc');
    const loc = document.getElementById('loc');
    const cemail = document.getElementById('email');

    if(allLetter(cname,1,'p') && allLetter(title,2,'p') && validateDesc(desc) && allLetter(loc,3,'p') && ValidateEmail(cemail,0,'p')){
        
        alert('Job successfully saved.');
        return true;
    } 

    else{
        return false;
    }
}

