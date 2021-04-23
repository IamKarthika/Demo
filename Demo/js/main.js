
jQuery(function(){
  
  jQuery('form[name="registration-form"]').validate({
     
    rules: {
      name: 'required',
      emailId: 'required',
      password: 'required',
    
    },
    messages: {
      name: 'This filed id required',
      emailId: 'Please enter a valid Email Address',
      password: 'Please provide a Password'
      
    }
    
  });
});
jQuery( document ).ready(function() {
    

jQuery('.logo-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
    autoplaySpeed: 1000,
  speed: 300,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    
  ]
});
jQuery('.slider').slick({
  dots: false,
  infinite: true,
  arrows:true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
});