/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Just thought you should kno that by far, this has been one of the more difficult projects for me
 * I think you should go easy when grading this :( */

/*document*/
$("document").ready(function (){
    /* Everything within the "somestuff" div class will be pink */
    $(".somestuff").css("background-color", "light-pink");
    /* The last P text will be red */
    $("p:last-child").css("color", "red");
    
    $('#superHumans').accordion({header: "h3"});
    
    $("#alertButton").bind("click", alertButtonClick);
            
    $("h1").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
   
    $("h1").bind("click", mouseClick);
    
    $('#replaceWText').bind('click', replaceWText);
    /* If you click "Add" it will add a paragraph, becuase I have my ID as randPara */
    $('#randPara').bind('click', addAPara);
    /* If you click "Remove" the added paragraph will be removed becuase of the ID removePara  */
    $('#removePara').bind('click', removeAPara);
    
    $('#show').css('visibility', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    $('show').bind('click', showThePage);
    /*  Animation stuff going on*/
    $("button").click(function(){
    $("div").animate({left:'250px'});
  });

});

/*functions*/
function hideThePage(){
    $("div").hide("slide", {}, 2500);
}

function showThePage(){
    $("div").show("fold", {}, 2500);
}

function removeAPara(){
    $('#randPara p:last').remove();
}
/* When you click "Add" the p "CooOooOool" will be added */
function addAPara(){
    $('#randPara').append('<p>CooOooOool</p>');
}

function replaceWText(){
    $('#replaceWText').text('Bye!');
}

function alertButtonClick(){
    alert("You clicked my button")
}

function mouseOverMe(){
    $("h1").html("CooOoooOl");
}
function  mouseOutMe(){
    $("h1").html("whatever forever");
}

function mouseClick(){
    $("p").html("you clicked..");
}


