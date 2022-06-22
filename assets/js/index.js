
var typed_strings = ['BackEnd developer.', 'BackEnd developer.', 'Cyber security researcher.', 'Amateur chef.', 'Innovation.']
const options = {
     strings: typed_strings,
     typeSpeed: 50,
     backSpeed: 30,
     showCursor: false,
     loop: true
};
const typed = new Typed('.typed', options);


$(".scroll-y-1").boxLoader({
    direction:"y",
    position: "10%",
    effect: "none",
    duration: "1s",
    windowarea: "50%"
});
$(".scroll-y-2").boxLoader({
    direction:"y",
    position: "20%",
    effect: "none",
    duration: "2s",
    windowarea: "50%"
});
$(".scroll-y-3").boxLoader({
    direction:"y",
    position: "30%",
    effect: "none",
    duration: "2s",
    windowarea: "50%"
});



$(".scroll-x-1").boxLoader({
    direction:"x",
    position: "10%",
    effect: "none",
    duration: "1s",
    windowarea: "50%"
});
$(".scroll-x-2").boxLoader({
    direction:"x",
    position: "15%",
    effect: "none",
    duration: "1s",
    windowarea: "50%"
});


$('#send_mail').on('click', function(){
        var greeting = $('.greeting').val() != '' ? $('.greeting').val() : 'Hi Elevit!, I come from yor website'
        window.location.href = "mailto:ini7.ia@gmail.com?Subject="+greeting
  });

  $('#send_wp').on('click', function(){
        var msg = $('.msg').val() != '' ? $('.msg').val() : 'Hi Elevit!, I come from yor website'
        let isMobile = window.matchMedia("(pointer:coarse)").matches;
        if (isMobile){
          window.open("https://wa.me/+573185708567?text="+msg+"&source=&data=", "_blank")
        }else{
          window.open("https://web.whatsapp.com/send?phone=573185708567&text="+msg, "_blank")
        }
  });


function sweet(item){
  var pro = $(item).attr("data-pro")
    Swal.fire({
    width: '60%',
    title: '<h1>'+$('.'+pro+' .information .name').text()+'</h1>',
    html: $('.'+pro+' .information .text1').val(),
    imageUrl: $('.'+pro+' img').attr("src"),
    imageWidth: 300,
    imageHeight: 350,
    showCloseButton: true,
    showConfirmButton: false,
  })
  $(".swal2-modal").css('background-color', 'rgb(14 14 14)');
  $(".swal2-modal").css('color', '#fff');
}


const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}
const scrollto = (el) => {
  let elementPos = select(el).offsetTop
  window.scrollTo({
    top: elementPos,
    behavior: 'smooth'
  })
}
let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 500) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
