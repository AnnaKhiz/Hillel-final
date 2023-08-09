export function runSwitcher() {
    $(function () {
        $('.switch-btn').click(function () {
            $(this).toggleClass('switch-on');
            if ($(this).hasClass('switch-on')) {
                $("#my_image").attr("src","./img/public-5.png");
                $("#my_image-2").attr("src","./img/public-4.png");
                $("#my_image-3").attr("src","./img/public-1.png");
                $("#my_image-4").attr("src","./img/public-2.png");
                $("#my_image-5").attr("src","./img/public-3.png");
                $("#label").text("Reimbursement of the child's tuition fees in kindergarten and school");
                $("#label-2").text("Language Law: How to Make Your Website Relevant");
                $("#label-3").text("Equity associate");
                $("#label-4").text("Penalty for the Good Corporation: what will happen to Google and others for violating the GDPR");
                $("#label-5").text("Millennial Testament");
                $(this).trigger('on.switch');
            } else {
                $(this).trigger('off.switch');
                $("#my_image").attr("src","./img/public-1.png");
                $("#my_image-2").attr("src","./img/public-2.png");
                $("#my_image-3").attr("src","./img/public-3.png");
                $("#my_image-4").attr("src","./img/public-4.png");
                $("#my_image-5").attr("src","./img/public-5.png");
                $("#label").text("Equity associate");
                $("#label-2").text("Penalty for the Good Corporation: what will happen to Google and others for violating the GDPR");
                $("#label-3").text("Millennial Testament");
                $("#label-4").text("Language Law: How to Make Your Website Relevant");
                $("#label-5").text("Reimbursement of the child's tuition fees in kindergarten and school");
            }
        });
        $('.switch-btn').on('on.switch', function () {
            $($(this).attr('data-id')).removeClass('bl-hide');
        });
        $('.switch-btn').on('off.switch', function () {
            $($(this).attr('data-id')).addClass('bl-hide');
        });
    });
}
