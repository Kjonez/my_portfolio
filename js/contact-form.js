/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    $("#submit_btn").click(function(){

        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_message = $('textarea[name=message]').val();
        var url = "./mail_handler.php"; // the script where you handle the form input.

        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }

        if (user_message == "") {
            $('textarea[name=message]').css('border-color', '#e41919');
            proceed = false;
        }

        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userMessage': user_message
            };

            //Ajax post data to server
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).closest('form').serialize(), // serializes the form's elements.
                success: function (data) {
                    $('.formSubmit').closest('form').find('input[type=text], textarea').val('');
                    var messageAlert = 'alert-success';
                    var messageText = 'Success, information was sent';
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable animated bounceIn"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                    }
                },
                error: function(response){
                    var messageAlert = 'alert-danger';
                    var messageText = 'Failure, information was not sent';
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable animated bounceIn"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                    }
                }
            });
        }

        return false;
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });

});
