// https://stickode.tistory.com/1138
// 메뉴 아이템 데이터 배열
$(document).ready(function () {
  const menu = [
    // 각 메뉴 아이템은 id, title, category, price, img, desc 속성을 가집니다.
    
    // 스테이크
    {
      id: 1,
      en_title: "SIRLOIN STEAK",
      ko_title: "등심 스테이크",
      category: "스테이크",
      price: '97,000',
      img: "./img/menu/steak/sirloin.jpeg",
      desc: `진한 육향과 적당한 마블링이 어우러진 등심 스테이크. 쫄깃한 식감과 풍부한 맛이 일품입니다.`,
    },
    {
      id: 2,
      en_title: "FILETMIGNON STEAK",
      ko_title: "안심 스테이크",
      category: "스테이크",
      price: '95,000',
      img: "./img/menu/steak/filetmignon.jpeg",
      desc: `최고급 소고기의 부드러운 안심살. 육즙 가득한 풍미와 부드러움을 자랑하는 특별한 스테이크입니다.`,
    },
    {
      id: 3,
      en_title: "CHUCK STEAK",
      ko_title: "부채살 스테이크",
      category: "스테이크",
      price: '78,000',
      img: "./img/menu/steak/chuck.jpeg",
      desc: `고소하고 쫄깃한 식감이 특징인 부채살 스테이크. 풍부한 육즙과 깊은 맛이 조화를 이루는 매력적인 선택입니다.`,
    },
    {
      id: 4,
      en_title: "HAMBURG STEAK",
      ko_title: "햄버그 스테이크",
      category: "스테이크",
      price: '45,000',
      img: "./img/menu/steak/hamburg.jpeg",
      desc: `진한 육즙과 부드러운 식감이 일품인 함박스테이크. 고소한 소스와 함께 제공되어 깊고 풍부한 맛을 자랑합니다.`,
    },
    {
      id: 5,
      en_title: "TOMAHAWK STEAK",
      ko_title: "토마호크 스테이크",
      category: "스테이크",
      price: '120,000',
      img: "./img/menu/steak/tomahwak.jpeg",
      desc: `육질이 탁월한 갈비뼈를 붙인 채로 구워내는 토마호크 스테이크. 두툼한 두께와 풍부한 풍미로 특별한 식사 경험을 선사합니다.`,
    },
    {
      id: 6,
      en_title: "T BORN STEAK",
      ko_title: "티본 스테이크",
      category: "스테이크",
      price: '140,000',
      img: "./img/menu/steak/tborn.jpeg",
      desc: `안심과 등심이 함께 포함된 T본 스테이크. 두 가지 육질을 동시에 즐길 수 있는 특급 메뉴입니다.`,
    },
    {
      id: 7,
      en_title: "BACK RIP STEAK",
      ko_title: "백립 스테이크",
      category: "스테이크",
      price: '100,000',
      img: "./img/menu/steak/backribs.jpeg",
      desc: `풍부한 마블링과 부드러운 식감이 일품인 백립 스테이크. 고소한 육즙이 가득한 프리미엄 소고기입니다.`,
    },
    // 파스타
    {
      id: 8,
      en_title: "MEEBALL PASTA",
      ko_title: "미트볼 파스타",
      category: "파스타",
      price: '40,000',
      img: "./img/menu/pasta/meetball.jpeg",
      desc: `육즙 가득한 미트볼이 풍부한 토마토 소스와 조화롭게 어우러진 요리. 입안에서 사르르 녹는 맛을 즐겨보세요!`,
    },
    {
      id: 9,
      en_title: "ANA RABIATA PASTA",
      ko_title: "아라비아따 파스타",
      category: "파스타",
      price: '42,000',
      img: "./img/menu/pasta/anarabiata.jpeg",
      desc: `매콤한 아라비아따 소스가 조화로운 파스타. 깊고 진한 맛이 입맛을 사로잡습니다!`,
    },
    {
      id: 10,
      en_title: "CREAM PASTA",
      ko_title: "크림 파스타",
      category: "파스타",
      price: '45,000',
      img: "./img/menu/pasta/cream.jpeg",
      desc: `부드러운 크림 소스와 풍성한 파스타가 어우러진 클래식한 맛. 한입에 고소하고 부드러운 행복을 느껴보세요!`,
    },
    {
      id: 11,
      en_title: "VONGLOE PASTA",
      ko_title: "봉골레 파스타",
      category: "파스타",
      price: '45,000',
      img: "./img/menu/pasta/vongole.jpeg",
      desc: `신선한 조개와 화이트 와인 소스가 어우러진 봉골레 파스타. 바다의 깊은 맛을 느껴보세요!`,
    },
    // 피자
    {
      id: 12,
      en_title: "PEPPERNOI PIZZA",
      ko_title: "페퍼로니 피자",
      category: "피자",
      price: '34,000',
      img: "./img/menu/pizza/pepperoni.jpeg",
      desc: `짭짤한 페퍼로니와 풍부한 치즈가 조화를 이루는 클래식 피자. 한 조각의 완벽한 만족감을 선사합니다!`,
    },
    {
      id: 13,
      en_title: "POTATO PIZZA",
      ko_title: "포테이토 피자",
      category: "피자",
      price: '38,000',
      img: "./img/menu/pizza/potato.jpeg",
      desc: `부드러운 감자와 고소한 치즈가 가득한 포테이토 피자. 따뜻하고 풍미 가득한 맛을 즐겨보세요!`,
    },
    {
      id: 14,
      en_title: "CIAGO PIZZA",
      ko_title: "시카고 피자",
      category: "피자",
      price: '40,000',
      img: "./img/menu/pizza/ciago.jpeg",
      desc: `뉴욕 스타일의 풍성한 재료와 깊은 맛이 조화를 이루는 시카고 피자. 한 입에 가득한 풍미를 경험해보세요!`,
    },
    {
      id: 15,
      en_title: "BULGOGI PIZZA",
      ko_title: "불고기 피자",
      category: "피자",
      price: '40,000',
      img: "./img/menu/pizza/bulgogi.jpeg",
      desc: `전통적인 우리나라의달콤하고 매콤한 불고기가 듬뿍 얹힌 피자. 고소한 치즈와 함께 어우러진 풍미 가득한 맛을 즐겨보세요!`,
    },
    {
      id: 16,
      en_title: "MARGHERITA PIZZA",
      ko_title: "마르게리따 피자",
      category: "피자",
      price: '40,000',
      img: "./img/menu/pizza/margherita.jpeg",
      desc: ``,
    },
    {
      id: 17,
      en_title: "BACON PIZZA",
      ko_title: "베이컨 피자",
      category: "피자",
      price: '40,000',
      img: "./img/menu/pizza/bacon.jpeg",
      desc: `바삭한 베이컨과 풍부한 치즈가 어우러진 피자. 짭짤하고 고소한 맛이 한 입에 가득합니다!`,
    },
    // 사이드
    {
      id: 18,
      en_title: "FIRED CHICKEN",
      ko_title: "치킨",
      category: "사이드",
      price: '30,000',
      img: "./img/menu/side/chicken.jpeg",
      desc: `바삭하게 튀겨낸 후라이드 치킨, 겉은 크리스피하고 속은 촉촉하게, 한 입에 풍미 가득한 만족을 느껴보세요!`,
    },
    {
      id: 19,
      en_title: "BUFFALO WING",
      ko_title: "버팔로윙",
      category: "사이드",
      price: '30,000',
      img: "./img/menu/side/buffalowing.jpeg",
      desc: `매콤하고 부드러운 맛이 어우러진 버팔로윙. 매운맛과 풍미가 조화롭게 펼쳐집니다!`,
    },
    {
      id: 21,
      en_title: "MAC & CHEESE",
      ko_title: "맥 & 치즈",
      category: "사이드",
      price: '20,000',
      img: "./img/menu/side/mac&cheese.jpeg",
      desc: `크리미한 치즈 소스와 쫄깃한 마카로니가 완벽하게 어우러진 맥앤치즈. 한 입에 풍성한 치즈의 맛을 느껴보세요!`,
    },
    {
      id: 20,
      en_title: "FRENCH FRIES",
      ko_title: "감자튀김",
      category: "사이드",
      price: '10,000',
      img: "./img/menu/side/frenchfries.jpeg",
      desc: `겉은 바삭하고 속은 부드러운 감자튀김. 간편하게 즐기는 맛있는 간식, 언제든지 함께하세요!

`,
    },
    {
      id: 21,
      en_title: "BURRATA",
      ko_title: "부라타 샐러드",
      category: "사이드",
      price: '10,000',
      img: "./img/menu/side/burrata.jpeg",
      desc: `신선한 채소와 부드러운 부라타 치즈가 조화를 이루는 샐러드. 풍부한 맛과 신선함이 가득합니다!`,
    },
    {
      id: 22,
      en_title: "MASHROOM SOUP",
      ko_title: "양송이 스프",
      category: "사이드",
      price: '8,000',
      img: "./img/menu/side/soup_mashroom.jpeg",
      desc: `진한 양송이 향이 가득한 부드러운 수프. 따뜻하고 깊은 맛으로 마음까지 채워드립니다!`,
    },
    {
      id: 23,
      en_title: "CORN SOUP",
      ko_title: "옥수수 스프",
      category: "사이드",
      price: '8,000',
      img: "./img/menu/side/soup_corn.jpeg",
      desc: `달콤하고 고소한 옥수수로 만든 부드러운 수프. 풍미 가득한 한 그릇으로 따뜻한 위안을 느껴보세요!`,
    },
    // 음료
    {
      id: 24,
      en_title: "ORANGE ADE",
      ko_title: "오렌지 에이드",
      category: "음료",
      price: '6,000',
      img: "./img/menu/drink/ade_orange.jpeg",
      desc: ``,
    },
    {
      id: 25,
      en_title: "STRAWBERRY ADE",
      ko_title: "딸기 에이드",
      category: "음료",
      price: '6,000',
      img: "./img/menu/drink/ade_strawberry.jpeg",
      desc: ``,
    },
    {
      id: 26,
      en_title: "GRAPEFRUIT ADE",
      ko_title: "자몽 에이드",
      category: "음료",
      price: '6,000',
      img: "./img/menu/drink/ade_grapefruit.jpeg",
      desc: ``,
    },
    {
      id: 27,
      en_title: "MANGO ADE",
      ko_title: "망고 에이드",
      category: "음료",
      price: '6,000',
      img: "./img/menu/drink/ade_mango.jpeg",
      desc: ``,
    },
    {
      id: 28,
      en_title: "COKE",
      ko_title: "코카콜라",
      category: "음료",
      price: '3,500',
      img: "./img/menu/drink/cokebasic.jpg",
      desc: ``,
    },
    {
      id: 28,
      en_title: "COKE ZERO",
      ko_title: "코카콜라 제로",
      category: "음료",
      price: '3,500',
      img: "./img/menu/drink/cokezero.jpg",
      desc: ``,
    },
    {
      id: 29,
      en_title: "COKE ZERO ZERO",
      ko_title: "코카콜라 제로제로",
      category: "음료",
      price: '3,500',
      img: "./img/menu/drink/cokezerozero.jpg",
      desc: ``,
    },
    {
      id: 30,
      en_title: "SPRITE",
      ko_title: "스프라이트",
      category: "음료",
      price: '3,500',
      img: "./img/menu/drink/soda.jpg",
      desc: ``,
    },
    {
      id: 31,
      en_title: "FANTA ORANGDE",
      ko_title: "환타 오렌지",
      category: "음료",
      price: '3,500',
      img: "./img/menu/drink/fantaorange.jpg",
      desc: ``,
    },
    {
      id: 32,
      en_title: "FANTA FINEAPPLE",
      ko_title: "환타 파인앤플",
      category: "음료",
      price: '3,500',
      img: "./img/menu/drink/fantafine.jpg",
      desc: ``,
    },
    // 술
    {
      id: 33,
      en_title: "WINE",
      ko_title: "와인",
      category: "주류",
      price: '3,500',
      img: "./img/menu/alcohol/alcohol_wine.jpeg",
      desc: ``,
    },
    {
      id: 34,
      en_title: "DRAFT BEER",
      ko_title: "생맥주",
      category: "주류",
      price: '3,500',
      img: "./img/menu/alcohol/alcohol_draftbeer.jpeg",
      desc: ``,
    },
    {
      id: 35,
      en_title: "SOJO",
      ko_title: "소주",
      category: "주류",
      price: '3,500',
      img: "./img/menu/alcohol/alcohol_SOJO.jpeg",
      desc: ``,
    },
  
  ];
  
  const sectionCenter = document.querySelector(".container");
  
  function diplayMenuItems(menuItems) {
    
    //let menuText = document.getElementsByClassName("menu_Text")[0];
    
    // for (let cyc in menuItems) {
    //   if (menuItems[cyc].category == menuText.textContent) {
    //     let temp = document.createElement("div");
    //     temp.className = "item";
    //     temp.innerHTML = `
    //                      <img src="${menuItems[cyc].img}" alt="${menuItems[cyc].title}">
    //                          <p id="steak_text">${menuItems[cyc].en_title}</p>
    //                          <p id="ko_steak_text">${menuItems[cyc].ko_title}</p>
    //                          <div class="caption">
    //                              <div class="box_Wrap">
    //                                  <div class="box">
    //                                      <h4>${menuItems[cyc].en_title}</h4>
    //                                      <h3>${menuItems[cyc].ko_title}</h3>
    //                                      <p>  
    //                                        ${menuItems[cyc].desc}
    //                                      </p>
    //                                      <p class="won">${menuItems[cyc].price}</p>
    //                                  </div>
    //                              </div>
    //                          </div>
    //                        `;
    //     sectionCenter.appendChild(temp);
    //   }

    //   console.log("!!!");
    // }

      let displayMenu = menuItems.map(function (item) {
        if (item.category == $(".menu_Text").text()) {
          return `<div class="item">
                    <img src="${item.img}" alt="${item.title}">
                    <p id="steak_text">${item.en_title}</p>
                    <p id="ko_steak_text">${item.ko_title}</p>
                    <div class="caption">
                      <div class="box_Wrap">
                        <div class="box">
                          <h4>${item.en_title}</h4>
                          <h3>${item.ko_title}</h3>
                          <p>  
                            ${item.desc}
                          </p>
                          <p class="won">${item.price} 원</p>
                        </div>
                      </div>
                    </div>
                  </div>`;
        }
      });
      displayMenu = displayMenu.join("");  // HTML 문자열들을 하나의 문자열로 연결
  
      sectionCenter.innerHTML = displayMenu; // 연결된 HTML 문자열을 섹션의 내용으로 설정
   // }

    
  }
  diplayMenuItems(menu);
  
});