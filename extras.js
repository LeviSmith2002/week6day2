$('.look1').append(`<div class="boxes clicked"> </div> 
<div class="boxes clicked"> </div>
<div class="boxes clicked"> </div>
<div class="boxes clicked"> </div>`);
$('.look2').append(`<div class="boxes clicked"> </div> 
<div class="boxes clicked"> </div>
<div class="boxes clicked"> </div>
<div class="boxes clicked"> </div>`);
$('.look3').append(`<div class="boxes clicked"> </div> 
<div class="boxes clicked"> </div>
<div class="boxes clicked"> </div>
<div class="boxes clicked"> </div>`);
$('.look4').append(`<div class="boxes clicked"> </div> 
    <div class="boxes clicked"> </div>
    <div class="boxes clicked"> </div>
    <div class="boxes clicked"> </div>`);


$('.look1').on('click', '.boxes', function(){
    $(this).toggleClass('clicked');
});
$('.look2').on('click', '.boxes', function(){
    $(this).toggleClass('clicked');
});
$('.look3').on('click', '.boxes', function(){
    $(this).toggleClass('clicked');
});
$('.look4').on('click', '.boxes', function(){
    $(this).toggleClass('clicked');
});