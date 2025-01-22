$(document).ready(function(){
    $("#fetchDogs").click(function(){
        $.ajax({
            url: "https://dog.ceo/api/breed/hound/images",
            success: function(response){
                if(response.status === "success"){
                    let imagesContainer = $("#dogImagesContainer");
                    imagesContainer.empty();

                   for(let i = 0; i < response.message.length; i++){
                    imagesContainer.append(`<img src="` + response.message[i] + `" alt="Dog Image">`);
                }

                }else{
                    alert("Error fetching images!");
                }
            },
            error: function(){
                alert("Error fetching data!")
            }
        })
    })
})