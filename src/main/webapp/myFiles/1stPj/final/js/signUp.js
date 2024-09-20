

let checkAgreeAll = document.getElementById("checkAgreeAll");
let allChecked = false;
let checkAgree = document.getElementsByClassName("checkAgree");


checkAgreeAll.addEventListener("click", () => {
    if (checkAgreeAll.checked == true) {
        allChecked = true;
        for (let i = 0; i < checkAgree.length; i++) {
            checkAgree[i].checked = true;
        }
    } else {
        allChecked = false;
        for (let i = 0; i < checkAgree.length; i++) {
            checkAgree[i].checked = false;
        }
    }
});

// 약관 전체 동의
for (let i = 0; i < checkAgree.length; i++) {
    checkAgree[i].addEventListener("click", () => {
        if (checkAgree[0].checked == true && checkAgree[1].checked == true && checkAgree[2].checked == true) {
            checkAgreeAll.checked = true;
        } else {
            checkAgreeAll.checked = false;
        }
    });
};

// 전화번호 입력
let validphonenumber = false;
let phonenumber = document.getElementById("signUp_PN");
let numberp = document.getElementById("number_p");
let isNumber = false;


phonenumber.addEventListener("input", (e) => {
    chNumber(e.data);

    if (checkNumber(phonenumber.value)) {
        numberp.textContent = "숫자를 입력하세요";
        phonenumber.value = phonenumber.value.substring(0, phonenumber.value.length - 1);
        return;
    }

    if (isNumber == true) {
        if (phonenumber.value.length == 4) {
            phonenumber.value = phonenumber.value.substring(0, 3) + "-" + e.data;
        }
    }

    if (isNumber == true) {
        if (phonenumber.value.length == 9) {
            phonenumber.value = phonenumber.value.substring(0, 8) + "-" + e.data;
        }
    }

    if (phonenumber.value.length > 13) {
        numberp.textContent = "잘못된 값 입니다.";
    }

    if (phonenumber.value.length <= 13) {
        numberp.textContent = "";
    }

    if (/^01([0|1|6|7|8|9]?)-?([0-9]{4})-?([0-9]{4})$/.test(phonenumber.value)) {
        validphonenumber = true;
    }

    if (phonenumber.value.length > 1 && phonenumber.value.substring(0, 2) != "01") {
        numberp.textContent = "01로 시작해주세요";
    } 

    if (e.inputType == "deleteContentBackward" && phonenumber.value.substring(phonenumber.value.length - 1, phonenumber.value.length) == "-") {
        phonenumber.value = phonenumber.value.substring(0, phonenumber.value.length - 1);
    }
});


function checkNumber(x) {
    let y = x.split('-');
    let z = "";
    for (let i in y) {
        z += y[i];
    }
    if (Number.isNaN(Number(z))) {
        return true;
    }
}

function chNumber(x) {
    if (parseInt(x) >= 0 && parseInt(x) <= 9) {
        return isNumber = true;
    }
    return isNumber = false;
}

// 이메일 입력
let email_p = document.getElementById('email_p');
let emailBtn = document.getElementById('emailTail');
let signUpemail = document.getElementById("signUp_EMAIL");
let validEmail = false;
signUpemail.addEventListener("input", () => {
    if (emailBtn.value == emailBtn.options[3].value) {
        if ((/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/i.test(signUpemail.value))) {
            email_p.textContent = "맞는 이메일입니다";
            validEmail = true;
        } else {
            validEmail = false;
        }
    }

    if (emailBtn.value == emailBtn.options[3].value) {
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/i.test(signUpemail.value)) {
            email_p.textContent = "";
        }
        if (validEmail == false) {
            email_p.textContent = "@와 .을 입력하시오";
            if (signUpemail.value.indexOf("@") != -1) {
                email_p.textContent = ".을 입력하세요"
            }
            if (signUpemail.value.indexOf(".") != -1) {
                email_p.textContent = "";
            }
        }
    }
});


//  비밀번호 입력
let pw_p = document.getElementById("pw_p");
let signUpInput_PWD = document.getElementById("signUp_PWD");
let pw_p_up = document.getElementById("pw_p_up");
let pw_p_lo = document.getElementById("pw_p_lo");
let pw_p_num = document.getElementById("pw_p_num");
let pw_p_sub = document.getElementById("pw_p_sub");
let upper = /[A-Z]/g;
let lower = /[a-z]/g;
let star = /[!@#$%^*+=-]/g;
let num = /[0-9]/g;
signUpInput_PWD.addEventListener("focus", () => {
    pw_p.textContent = "대문자, 소문자, 특수기호, 숫자를 입력하세요(8~15자)";

    signUpInput_PWD.addEventListener("input", () => {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/.test(signUpInput_PWD.value)) {
            pw_p.textContent = "올바른 비밀번호 입니다";
        }
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/.test(signUpInput_PWD.value))) {
            pw_p.textContent = "대문자, 소문자, 특수기호, 숫자를 입력하세요(8~15자)";
        }
        if (signUpInput_PWD.value.search(upper) == -1) {
            pw_p_up.textContent = "대문자를 입력하세요";
        } else {
            pw_p_up.style.display = 'none';
        }

        if (signUpInput_PWD.value.search(lower) == -1) {
            pw_p_lo.textContent = "소문자를 입력하세요";
        } else {
            pw_p_lo.style.display = 'none';
        }

        if (signUpInput_PWD.value.search(star) == -1) {
            pw_p_sub.textContent = "특수기호를 입력하세요";
        } else {
            pw_p_sub.style.display = 'none';
        }

        if (signUpInput_PWD.value.search(num) == -1) {
            pw_p_num.textContent = "숫자를 입력하세요";
        } else {
            pw_p_num.style.display = 'none';
        }

        if (signUpInput_PWD.value == ""){
            pw_p.style.display = 'none';
            pw_p_up.style.display = 'none';
            pw_p_lo.style.display = 'none';
            pw_p_sub.style.display = 'none';
            pw_p_num.style.display = 'none';
        }
})

})


// 비밀번호 일치여부
let check_PWD_P = document.getElementById("checkpw_p");
let check_PWD = document.getElementById("signUp_Check_PWD");
check_PWD.addEventListener("input", () => {
    if (check_PWD.value == signUpInput_PWD.value) {
        check_PWD_P.textContent = "일치하는 비밀번호입니다.";
    } else {
        check_PWD_P.textContent = "다시 입력하세요";
    }
})


// ID 중복확인
let signUpInput_ID = document.getElementById("signUp_ID");
let idBTN = document.getElementById("idcheck");
let idBTN_P = document.getElementById("validId");
idBTN.addEventListener("click", () => {
    console.log(idBTN_P.textContent);
    idBTN_P.textContent = "사용가능한 아이디입니다.";
})


// 생년월일 
let birth = document.getElementById("signUp_BIRTH");
birth.addEventListener("focus", () => {
    birth.type = "date";
})




const NAME_Placeholder = "이름";
const ID_Placeholder = "아이디";
const PWD_Placeholder = "비밀번호";
const PN_Placeholder = "전화번호";
const EM_Placeholder = "이메일";
const PWDcheck_Placeholder = "비밀번호확인";
const BD_Placeholder = "생년월일";



let signUpname = document.getElementById("signUp_name");
let signUpInput_Form = document.getElementsByClassName("signUpInfo_Form")[0];


let signUp_Btn = document.getElementsByClassName("signUp_Btn")[0];
let Warn = document.getElementById("Warning");
let isWarned = false;

window.addEventListener("load", () => {
    signUpInput_Event();
    signUpBtn_Event();
})


// Placeholder
function signUpInput_Event() {
    signUpInput_ID.addEventListener("focus", () => {
        signUpInput_ID.placeholder = "";
    });
    signUpInput_ID.addEventListener("blur", () => {
        signUpInput_ID.placeholder = ID_Placeholder;
    }, false);

    signUpInput_PWD.addEventListener("focus", () => {
        signUpInput_PWD.placeholder = "";
    });
    signUpInput_PWD.addEventListener("blur", () => {
        signUpInput_PWD.placeholder = PWD_Placeholder;
        if (isWarned) {
            Warn.style.visibility = "hidden";
            isWarned = false;
        }
    }, false);

    phonenumber.addEventListener("focus", () => {
        phonenumber.placeholder = "";
    })
    phonenumber.addEventListener("blur", () => {
        phonenumber.placeholder = PN_Placeholder;
    })

    signUpname.addEventListener("focus", () => {
        signUpname.placeholder = "";
    })
    signUpname.addEventListener("blur", () => {
        signUpname.placeholder = NAME_Placeholder;
    })
    signUpemail.addEventListener("focus", () => {
        signUpemail.placeholder = "";
    })
    signUpemail.addEventListener("blur", () => {
        signUpemail.placeholder = EM_Placeholder;
    })
    check_PWD.addEventListener("focus", () => {
        check_PWD.placeholder = "";
    })
    check_PWD.addEventListener("blur", () => {
        check_PWD.placeholder = PWDcheck_Placeholder;
    })


//CapsLock 
    signUpInput_PWD.addEventListener("keydown", (e) => {
        console.log(e.getModifierState("CapsLock"));
        if (e.getModifierState("CapsLock") && !isWarned) {
            Warn.style.visibility = "visible";
            Warn.style.color = "red";
            isWarned = true;
            Warn.textContent = "CapsLock이 켜졌습니다";
        } else if (!e.getModifierState("CapsLock") && isWarned) {
            Warn.style.visibility = "hidden";
            isWarned = false;
            Warn.textContent = "";
        }
    });
}

signUp_Btn.addEventListener("click", () => {
    confirm("제출하시겠습니까 ?");
})


function signUpBtn_Event() {
    signUp_Btn.addEventListener("click", () => {
        if (signUpInput_PWD.type == "password") {
            signUpInput_PWD.type == "text";
        } else {
            signUpInput_PWD.type == "password";
        }
    })
}


//약관동의 후 , 회원가입 form 나오게 
let signUp_Section = document.getElementsByClassName("signUp_Section");
let complete_Section = document.getElementsByClassName("complete_Section");
let agree_Section = document.getElementsByClassName("agree_Section");
for(let j = 0; j < checkAgree.length; j++){
    signUp_Section[0].style.display = "none";
    complete_Section[0].style.display = "none";
    checkAgree[j].addEventListener("click",()=>{
        if(checkAgree[0].checked == true && checkAgree[1].checked == true){
            signUp_Section[0].style.display = "block";
            complete_Section[0].style.display = "flex";
        }
        else{
            signUp_Section[0].style.display = "none";
            complete_Section[0].style.display = "none";
        }
    })
    checkAgreeAll.addEventListener("click",()=>{
        signUp_Section[0].style.display = "block";
        complete_Section[0].style.display = "flex";
    })
}

