
  $(document).ready(function(){
    $('.countries-cards-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<i class="glyphicon glyphicon-menu-right"></i>',
        prevArrow: '<i class="glyphicon glyphicon-menu-left"></i>',  
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
      });
      $('.countries-cards').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<i class="glyphicon glyphicon-menu-right"></i>',
        prevArrow: '<i class="glyphicon glyphicon-menu-left"></i>',  
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
        ]
      });
  });