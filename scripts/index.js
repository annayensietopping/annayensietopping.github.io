// scroll top 0 is the top of the page, when is scrolled down greater than 180 it fades, if it returns to less than 180 it fades in
$('.screen-right').scroll(function(event){
  if ($('.screen-right').scrollTop() > 180) {
    $('nav').fadeOut();
  } else {
    $('nav').fadeIn();
  }
});

// class is turned on and off when nav icon is clicked, adds class to the built in nav in html that triggers it to be visible
$('.nav-icon').click(function(){
  $('body').toggleClass('active-mobile-nav');
});

$('#contact, #contact-form .fa-times').click(function(event){
  event.preventDefault();
  $('body').toggleClass('active-contact-form');
});


// image switcher
$("#industry").change(updateHTML);
// function keyword...name of function..parens for params/args and code block {}
let industryChoice = "";
function updateHTML() {
  let industryChoiceValue = $("#industry").val();
  // $("#industry-choices").addClass(industryChoiceValue);
  // $("#industry-choices").removeClass(industryChoice);

  $(".image > img.visible").removeClass("visible");
  $(".image > img." + industryChoiceValue).addClass("visible");
// text switcher
  $("#info-text > .visible").removeClass("visible");
  $("#info-text > ." + industryChoiceValue).addClass("visible");
  $("div.contact").addClass("hidden")
// select
  industryChoice = industryChoiceValue;
  console.log(industryChoiceValue, industryChoice);
  let industryChoiceName = $("select option:selected").text();
  if (industryChoiceName === "--Select--") {
    $("#output").text("");
    $("div.contact").removeClass("hidden");
    $(".image > img.Select").addClass("visible");
  } else {
    $("#output").text(industryChoiceName);
  }
}

/// API

// $.get('https://pixabay.com/api/?key=12297045-6548e6b3c3a340077cc219084&q=newyork&image_type=photo&pretty=true')
// .then(res => {rickAndMortyData(res)})

// function rickAndMortyData(data){

//   console.log(data.hits[0].largeImageURL)
//    $('.image .Select')
//    .attr('src' , data.hits[Math.floor(Math.random() * 20) + 1  ].largeImageURL)
// }

$.get(
  "https://api.unsplash.com/photos/random?client_id=e28892e82256b02ca943a7a7bdb463bfdd5f059fd53ba7b67ea815fcde037557&query=nyc"
).then(res => {
  console.log(res)
  data(res);
});

function data(data) {
  $(".image .Select").attr("src", data.urls.regular);
}