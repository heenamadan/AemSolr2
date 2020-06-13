$(document).ready(function () {



    $("#btnSubmit").click(function (event) {


        //validate input fields

        if ($("#gtmContainerId").val().length >) {

            //stop submit the form, we will post it manually.
            event.preventDefault();

            // Get form
            var form = $('#gtmForm')[0];

            // Create an FormData object 
            var data = new FormData(form);

            data.append("indexType", $("#gtmContainerId").val());
           

            // disabled the submit button
            $("#btnSubmit").prop("disabled", true);

            $(".loading").removeClass("loading--hide").addClass("loading--show");
            $(".result label").hide();

            $.ajax({
                type: "POST",
                url: "/bin/solr/push/pages",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                success: function (data) {

                    $(".result label").text(data);
                    $(".result label").show();
                    $(".loading").removeClass("loading--show").addClass("loading--hide");
                    $("#btnSubmit").prop("disabled", false);

                },
                error: function (e) {

                    $(".result label").text(e.responseText);
                    $(".result label").show();
                    $(".loading").removeClass("loading--show").addClass("loading--hide");
                    $("#btnSubmit").prop("disabled", false);

                }
            });
        }
        else
        {
            alert("Please, fill the mandatory fields");
            // Cancel the form submission
            event.preventDefault();
            return;
        }



    });

});