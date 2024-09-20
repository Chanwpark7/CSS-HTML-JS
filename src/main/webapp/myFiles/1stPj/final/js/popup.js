(function(){
    const pop = document.querySelector('#pop');
    const close = document.querySelector('#close');
    const shortcode_date = '2020-03-15T24:00:00'  // 끝나는 날짜를 설정

    // 쿠키 가져오기
    const getCookie = function (cname) {
        const name = cname + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            const c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
        }
        return "";
    };

    // 24시간 기준 쿠키 설정하기  
    const setCookie = function (cname, cvalue, exdays) {
        const todayDate = new Date();
        todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
        const expires = "expires=" + todayDate.toUTCString(); // UTC기준의 시간에 exdays인자로 받은 값에 의해서 cookie가 설정 됩니다.
        document.cookie = cname + "=" + cvalue + "; " + expires;
    };

    const couponClose = function(){
        if(document.querySelector('input[name="chkbox"]').checked === true){
            setCookie("close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
        }
        pop.style.display = 'none';
    };

    const cookiedata = document.cookie;
    if(cookiedata.indexOf("close=Y")<0){
        pop.style.display = 'block';
    }else{
        pop.style.display = 'none';
    }

    close.addEventListener('click', function(){
        couponClose();
    });


    
})();