$(document).ready(function(){
    
    $('.purity-dropdown .nav-link').click(function(e) {
       e.preventDefault();
       $('.purity-packages-dropdown').slideToggle();
    });
    
    $('.shop-dropdown .nav-link').click(function(e) {
       e.preventDefault();
       $('.shop-products-dropdown').slideToggle();
    });


    $(".show-search").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-search fa-close');
        $(".search-form").toggleClass("open-search");
    });
});