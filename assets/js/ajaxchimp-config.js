/* === Mail Chimp subscription form settings === */
$( document ).ready(function() {

    $('.mailchimp').ajaxChimp({
        callback: mailchimpCallback,
        //replace bellow url with your own mailchimp form post url inside the url: "---".
        url: "https://171.us19.list-manage.com/subscribe/post?u=92000e92fa3e77ff535730ee5&amp;id=dac66d54ce" 
    }); 
    function mailchimpCallback(resp) {
         if (resp.result === 'success') {
            $('.subscription-success').html('<i class="fa fa-check"></i>' + resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);
            
        } else if(resp.result === 'error') {
            $('.subscription-error').html('<i class="fa fa-times"></i>' + resp.msg).fadeIn(1000);
        }  
    }

});