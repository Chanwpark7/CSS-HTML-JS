$("document").ready(function(){
    let text = $(".menu_Text").text();
    let num = 0;
    let itemNum = 0;
    
    const counters = $(".item");
    const counter = document.querySelectorAll(".item");

    const per = 30;
    const loop = true;
    console.log(counter);
    
    if($(window).scrollTop() == 0){
        if(window.innerWidth >= 1280){
            itemNum = 4;
        }else if(window.innerWidth >= 768){
            itemNum = 2;
        }else if(window.innerWidth <= 767.9){
            itemNum = 1;
        }
        
        for(let i = 0; i < itemNum; i++){
            console.log(counter[i]);
            counter[i].classList.add("active");
        }
    }
    
    
    $(window).scroll(function(){
        counters.each(function(){
            const rect = this.getBoundingClientRect();
            const winHeight = window.innerHeight;
            const contentHeight = rect.bottom - rect.top;
            if(rect.top <= winHeight - (contentHeight * per / 100)){
                $(this).addClass("active");
            }
            
            if(loop && (rect.bottom <= 0 || rect.top >= winHeight)){
                $(this).removeClass("active");
            }
        });
    });
    
    $(".list_menu").each(function(){
        if($(this).text().trim() === text){
            $(this).find("a").css({"color": "white",
                "background-color": "#b22222",
                "border-radius" : "15px",
                "border" : "none"});

            const offsetY = $(this).offset().left - ($(window).innerWidth() / 2) + 30;
            $(".inv_Wrap").animate({scrollLeft: offsetY}, 500);
        }
        num++;
    });

    $(".mobile_Inv_Menu").click(function(){
        $(this).toggleClass("active");
    });
});