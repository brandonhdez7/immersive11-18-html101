// jquery is a javascript library
// jquery allows you to change stuff
// jquery directly manipulates the dom
// react and others use "virtualDom" which is efficient

// $ means im writting in js but not just js im writting in jquery
// console.log($)

// targetting stuff
// document.getElementsByTagName('div');
// document.querySelector('.container');
// document.getElementsByClassName('.container')
$('.container')
$('#row')

// how to get p tag in the #row div 
document.getElementById('row').children[0];
$('#row p')
// jquery targets with css rules
// jquery adds listeners as methods ...ie click = .click()
$('#hide').click(function(){
    console.log("some clicked on hide")
    $('#thing').hide();    
})

// or
// document.getElementById('hide).addEventListener('click',function(){
//     console.log("some clicked on hide")
// })

$('#show').click(function(){
    console.log("some clicked on show")
    $('#thing').show();
})

$('#toggle').click(function(){
    console.log("some clicked on toggle")
    $('#thing').toggle();
})

$('#html').click(function(){
    console.log("some clicked on change html")
    $('#thing').html("<p> New html here</p>");
})

$('#text').click(function(){
    console.log("some clicked on change text")
    $('#thing').text("<p>Change the text</p>");
})


$('#css').click(function(){
    console.log("some clicked on change css")
    $('#thing').css({
        "background-color": "green",
        "border-radius": "50%",
        "font-size": "100px"
    });
})

// .css takes a JS Object...
// key is a string for any css property
// value is want you to apply

// or
// document.getElementById('thing').style.backgroundColor = "green"
// document.getElementById('thing').style.borderRadius = "50%"
// document.getElementById('thing').style.fontSize = "100px"

$('#add-class').click(function(){
    console.log("some clicked on add class")
    $('#thing').addClass("btn-danger");
})

$('#toggle-class').click(function(){
    console.log("some clicked on toggle class text")
    $('#thing').toggleClass("btn-danger");
})

$('#prepend').click(function(){
    console.log("some clicked on prepend text")
    $('#thing').prepend("some prepend text");
})

$('#append').click(function(){
    console.log("some clicked on append")
    $('#thing').append("some append text");
})

$('#fade-out').click(function(){
    console.log("some clicked on slide")
    $('#thing').fadeToggle(1500);
})
// fadeToggle works the same as toggle, but it adds
// an aniamted fade

$('#slide').click(function(){
    $('#thing').slideToggle(1500)
})

$('#animate').click(function(){
    $('#thing').animate({
        'background-color': 'red',
        'height': '200px',
        'margin-left': '100px',
    },3000)
})

$('#goodbye').click(function(){
    $('#thing').animate({
        'margin-left': '10000px',
    },500)
})

$('#hello').click(function(){
    $('#thing').animate({
        'margin-left': '0px',
    },500)
})

$('#clone').click(function(){
    console.log("some clicked on clone")
    $('#thing').prepend("");
})