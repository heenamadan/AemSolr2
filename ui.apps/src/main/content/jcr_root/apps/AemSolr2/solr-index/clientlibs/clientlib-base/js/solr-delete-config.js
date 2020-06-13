console.log("heena");
$(document).ready(function () {



    $("#myDeleteForm").click(function (event) {


            $(".result label").hide();

            $.ajax({
                type: "POST",
                url: "/bin/solr/delete/all/indexes",

                contentType: false,
                cache: false,
                success: function (data) {

                    $(".result label").text(data);
                    $(".result label").show();
                    $(".loading").removeClass("loading--show").addClass("loading--hide");
                    $("#btnDSubmit").prop("disabled", false);

                },
                error: function (e) {

                    $(".result label").text(e.responseText);
                    $(".result label").show();
                    $(".loading").removeClass("loading--show").addClass("loading--hide");
                    $("#btnDSubmit").prop("disabled", false);

                }
            });
        //}




    });

});