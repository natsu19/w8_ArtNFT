let navMainToggle = document.querySelector(".navMainToggle")
    let navMain = document.querySelector(".navMain")
    let navMainToggleTitle = navMainToggle.getAttribute("title")

    let searchToggle = document.querySelector(".searchToggle")
  
    //點漢堡icon時
    navMainToggle.onclick = function(){
      //增加一個active的class
      navMain.classList.toggle("active");
  
      // //修改title的值為收合選單
      if( navMainToggleTitle === "選單" ){
        navMainToggle.setAttribute("title", "收合選單");
        navMainToggleTitle = navMainToggle.getAttribute("title") 
      }
      // //修改title的值為選單
      else if(navMainToggleTitle === "收合選單"){
        navMainToggle.setAttribute("title", "選單");
        navMainToggleTitle = navMainToggle.getAttribute("title")
      }
  
    }

  // swiper
  var swiperArtist = new Swiper('.swiperArtist', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    initialSlide: 1,
    spaceBetween: 0,
    slidesPerView: "auto",
    paginationClickable: true, //表示分頁能否點選
    coverflowEffect: {
      rotate: 0,
      depth: 200,
      scale: 0.7,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });



  // external js: masonry.pkgd.js

  $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true
  })
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
