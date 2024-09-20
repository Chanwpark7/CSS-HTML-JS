/**
 * 
 */


$("document").ready(function(){
    let burger = $(".menu_trigger");
    const lo = $(".list_Open");

    //토글 버튼 transform과 토글 창 열기
    burger.each(function(index){
        let $this = $(this);

        $this.on("click", function(e){
            e.preventDefault();
            $(this).toggleClass("active-" + (index+1));
            $(".nav_Bg").toggleClass("visible");
            lo.removeClass("active");
            lo.removeClass("rotate");
        });
    })
    
    //토글 외부 클릭시 토글 종료
    $(".nav_Bg").click(function(){
        burger.each(function(index){
            let $this = $(this);
            $(this).toggleClass("active-" + (index+1));
            $(".nav_Bg").toggleClass("visible");
            lo.removeClass("active");
            lo.removeClass("rotate");
        })
    })

    //토글 목록 클릭 시 List 열기
    $(".list_Open").click(function(){
        if($(this).hasClass("active") === true){
            $(this).toggleClass("active");
            $(this).toggleClass("rotate");
            return;
        }
        lo.removeClass("active");
        lo.removeClass("rotate");
        $(this).toggleClass("active");
        $(this).toggleClass("rotate");
    })

    //화면이 768px 이상으로 커지면 토글 제거.
    $(window).resize(function(){
        if($(window).width() >= 768){
            burger.each(function(index){
                let $this = $(this);
                $(this).removeClass("active-" + (index+1));
                $(".nav_Bg").removeClass("visible");
                lo.removeClass("active");
                lo.removeClass("rotate");
            })
        }
    })



    
});