$(document).ready(function(){
    let x, y;
    let isMove = false;
    let moveTimeout = false;

    const ele = $(".talk_Wrap");

    //마우스로 이동하기
    function mouseDownHandler(e){
        x = e.clientX;
        y = e.clientY;
        $(document).on("mousemove", mouseMoveHandler);
        $(document).on("mouseup", mouseUpHandler);
    }

    function mouseMoveHandler(e){
        isMove = true;
        let dx = e.clientX - x;
        let dy = e.clientY - y;
        let right = $(window).innerWidth() - ele.position().left - ele.innerWidth();
        let bottom = $(window).innerHeight() - ele.position().top - ele.innerHeight();
        //ele.css("left", `${ele.position().left + dx}px`);
        //ele.css("top", `${ele.position().top + dy}px`);
        ele.css("right", `${right - dx}px`);
        ele.css("bottom", `${bottom - dy}px`);

        x = e.clientX;
        y = e.clientY;

        $(document).on("contextmenu", function(event) { return false; });	// 마우스 우클릭 방지
        $(document).on("selectstart", function(event) { return false; });	// 마우스 클릭 후 드래그 방지
        $(document).on("dragstart", function(event) { return false; });	//마우스 드래그 방지

    }

    function mouseUpHandler(e){
        if(!moveTimeout){
            moveTimeout = setTimeout(()=>{isMove = false;},100);
        }else{
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(()=>{isMove = false;},100);
        }
        $(document).off("mousemove", mouseMoveHandler);
        $(document).off("mouseup", mouseUpHandler);
    }

    //터치로 이동하기
    function touchStartHandler(e){
        x = e.originalEvent.touches[0].clientX;
        y = e.originalEvent.touches[0].clientY;

        $(document).on("touchmove", touchMoveHandler);
        $(document).on("touchend", touchEndHandler);
    }

    function touchMoveHandler(e){
        isMove = true;
        let dx = e.originalEvent.touches[0].clientX - x;
        let dy = e.originalEvent.touches[0].clientY - y;

        let right = $(window).innerWidth() - ele.position().left - ele.innerWidth();
        let bottom = $(window).innerHeight() - ele.position().top - ele.innerHeight();
        //ele.css("left", `${ele.position().left + dx}px`);
        //ele.css("top", `${ele.position().top + dy}px`);
        ele.css("right", `${right - dx}px`);
        ele.css("bottom", `${bottom - dy}px`);

        x = e.originalEvent.touches[0].clientX;
        y = e.originalEvent.touches[0].clientY;

    }
    
    function touchEndHandler(e){
        $(document).off("touchmove", touchMoveHandler);
        $(document).off("touchend", touchEndHandler);
    }

    $(".talk_Icon").on("mousedown", mouseDownHandler);
    $(".talk_Icon").on("touchstart", touchStartHandler);

    $(".talk_Icon").click(function(){
        if(isMove){
            return;
        }
        $(".talk_Window_Wrap").toggleClass("talk_Hidden");
        $(".talk_Window_Wrap").toggleClass("talk_Opa");
        if($(".talk_Window_Wrap").hasClass("talk_Hidden")){
            $(".talk_Wrap").css({"width" : "100px", "height" : "100px"});
            $(".talk_Icon").css("background-image", "url(img/talk/talk_on_red.png)");
        }else{
            $(".talk_Wrap").css({"width" : "100%", "height" : "600px"});
            $(".talk_Icon").css("background-image", "url(img/talk/talk_off_red.png)");
        }
    });
    
    $(".talk_Quest_Input").on("focus", function(){
        $(".talk_Quest_Input_Wrap").addClass("talk_Active");
    });
    $(".talk_Quest_Input").on("blur", function(){
        $(".talk_Quest_Input_Wrap").removeClass("talk_Active");
    });

});