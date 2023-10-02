let nameerror=document.getElementById('nameerror');
let emailerror=document.getElementById('emailerror');
let passerror=document.getElementById('passerror');
let error=document.getElementById('error');

function validname(){
    let name=document.getElementById('name').value;
    if (name.length ==0){
        nameerror.innerHTML='* name is required *';
        return false;
    }
if(!name.match(/^[A-Za-z]\s{1}[A-Za-z]$/)){
    nameerror.innerHTML='* write full name *';
    return false;
    }else{
    nameerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
    }
};

function validemail(){
    let email=document.getElementById('email').value;
    if (email.length ==0){
        emailerror.innerHTML='* email is required *';
        return false;
    }
if(!email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)){
    emailerror.innerHTML='* invalid email *';
    return false;
    }else{
    emailerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
    }
};


      
        
    
function validpass(){
    
    var pass = document.getElementById('pass').value;
    if (!pass.match(/[a-z]/)){
        passerror.innerHTML='* should contain letters *';
        return false;
    }
    if ( !pass.match(/[$@$!%*#?&]/)){
        passerror.innerHTML='* should contain 1 symbol *';
        return false;
    }
    if (!pass.match(/[0-9]/) ){
        passerror.innerHTML='* should contain 1 number *';
        return false;
    }
   else{
    passerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
    }
};


function check(){
    let check = document.querySelector('.check');
let em = document.getElementById('em');
    if (check.checked == false ){
        em.animate([{opacity:0},{opacity:1}],{duration:300,iterations:3});
        return false;
    }else{
        
        return true;
    }
};

function validate(){
    if( !validpass() || !validemail()|| !validname() || !check() ){
        error.style.display='block';
        error.innerHTML='* please fix the error *';
        setTimeout( ()=>{error.style.display='none';},3000);
        return false;
    }
    
}