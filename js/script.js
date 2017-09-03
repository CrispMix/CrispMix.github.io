$(document).ready(function(){
    setupGenerics();
    setNavbarActive();
});

function setupGenerics(){
    var navbarHTML = '<div class="container-fluid"><div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbardiv" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="index.html">CrispMix</a> </div>' +
                        '<div class="collapse navbar-collapse" id="navbardiv">' +
                            '<ul class="nav navbar-nav">' + 
                                '<li class="" id="navbar_hem"><a href="index.html">Hem</a></li>' +
                                '<li class="" id="navbar_priser"><a href="priser.html">Priser</a></li>' +
                                '<li class="" id="navbar_hurdetgartill"><a href="hurdetgartill.html">Hur det går till</a></li>' +
                                '<li class="" id="navbar_kontakt"><a href="kontakt.html">Kontakt</a></li>' +
                            '</ul>' +
                        '</div>'

    document.getElementById("navbar").innerHTML = navbarHTML;

    var headerImg = document.getElementById("header-img");
    headerImg.src = "C:/Users/Andreas/Desktop/CrispMix Backdrop/mixconsole_cropped.jpeg";
    headerImg.alt = "CrispMix header picture";
    headerImg.class="img-fluid";
}

function setNavbarActive(){
    clearNavbarActive();

    var navbarid = document.getElementById("navbarid").value;
    var navbarelement = document.getElementById(navbarid);
    navbarelement.className = "active";
}

function clearNavbarActive(){
    $( ".nav > li" ).each(function( index ) {
            this.className = "";
    });
}