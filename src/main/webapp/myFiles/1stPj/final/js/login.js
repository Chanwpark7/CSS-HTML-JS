const ID_Placeholder = "아이디";
const PWD_Placeholder = "비밀번호";
const capsWarning_Text = "CapsLock이 켜져있음"

let loginInput_Form = null;
let loginInput_ID = null;
let loginInput_PWD = null;
let capsWarn = null;
let isWarned = false;

let login_Btn = null




onload = ()=>{
    console.log("onload..");
    init_Var();
    init_Event();
}
function init_Var() {
    loginInput_Form = document.getElementsByClassName("loginInfo_Form")[0];
    loginInput_ID = document.getElementById("login_ID");
    loginInput_PWD = document.getElementById("login_PWD");
    login_Btn = document.getElementsByClassName("loginIn_Btn")[0];
}
function init_Event() {
    loginInput_Event();
    loginBtn_Event();
}

function loginInput_Event() {
    loginInput_ID.addEventListener("focus",()=>{
        console.log("focus on loginInput");
        loginInput_ID.placeholder = "";
    });
    loginInput_ID.addEventListener("blur",()=>{
        console.log("blur on loginInput");
        loginInput_ID.placeholder = ID_Placeholder;
    },false);
    
    loginInput_PWD.addEventListener("focus",(e)=>{
        console.log("focus on loginInput");
        loginInput_PWD.placeholder = "";
    });
    loginInput_PWD.addEventListener("blur",()=>{
        console.log("blur on loginInput");
        loginInput_PWD.placeholder = PWD_Placeholder;
        if (isWarned) {
            loginInput_Form.removeChild(capsWarn);
            isWarned = false;
        }
    },false);


    loginInput_PWD.addEventListener("keydown",(e)=>{
        console.log("keyDown");
        if (e.getModifierState("CapsLock") && !isWarned) {
            capsWarn = loginInput_Form.appendChild(document.createElement("p"));
            capsWarn.style.color = "red";
            capsWarn.style.textAlign = "center";
            capsWarn.textContent = capsWarning_Text;
            isWarned = true;
        }else if (!e.getModifierState("CapsLock") && isWarned) {
            loginInput_Form.removeChild(capsWarn);
            isWarned = false;
        }
    });
}

function loginBtn_Event() {
    login_Btn.addEventListener("click",()=>{
        if (loginInput_PWD.type == "password") {
            loginInput_PWD.type = "text";
        } else {
            loginInput_PWD.type = "password";
        }
      
        // 아이디 & 비번 입력x시
        if(loginInput_ID.value == "" ){
            alert("아이디를 입력하세요");
        }else if(loginInput_PWD.value == ""){
            alert("비밀번호를 입력하세요");
        }else{
            alert("로그인 하시겠습니까 ?");
        }
    })
}


// 한글로 입력되었을 경우, 밑줄나오게.
loginInput_ID.addEventListener("input",()=>{
    if(loginInput_ID.value != Number){
        loginInput_ID.style.textDecoration  = "underline";
    } else{
        textDecoration .style.textDecoration = "none";
    }
})


