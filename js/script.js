$(document).ready(function(){
    $(".col-lg-4").slice(0,3).show()
    $(".btn").on("click", function(){
        $(".col-lg-4:hidden").slice(0,3).slideDown()
        if($(".col-lg-4:hidden").length==0){
            $(".btn").fadeIn('slow')
        }
    })
})