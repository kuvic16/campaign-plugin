$(document).ready(function() {
    //var _bpURL = "http://localhost:8010";
    var _bpURL = "http://35.187.159.92/campaign";

    var campaignStyle = 
        '.modal-close-img-ex {' +
            'background-image: url(' + _bpURL + '/img/close-circle.svg) !important;' +
            'background-repeat: no-repeat;' +
            'display: inline;' +
            'float: right;' +
        '}' +

        '.campaign-modal-close-btn {' +
            'position: absolute;' +
            'z-index: 1;' +
            'right: -10px;' +
            'top: -10px;' +
            'cursor: pointer;' +
            'margin-top: 0px;' +
            'height: 34px;' +
            'width: 34px;' +
        '}' +

        '.overlay {' +
            'visibility: hidden;' +
            'position: absolute;' +
            'top: 0;' +
            'right: 0;' +
            'bottom: 0;' +
            'left: 0;' +
            'display: flex;' +
            'align-items: center;' +
            'justify-content: center;' +
            'background: rgba(0, 0, 0, 0.4);' +
            'transition: opacity 0.3s;' +
            'opacity: 0;' +

            'position: fixed;' +
            'height: 100vh;' +
            'z-index: 9999;' +
            'width: 100vw;' +
        '}' +

        '.overlay:target {' +
            'visibility: visible;' +
            'opacity: 1;' +
        '}' +

        '.campaign-modal {' +
            'position: relative;' +
            'width: 500px;' +
            'max-width: 80%;' +
            'background: white;' +
            'border-radius: 4px;' +
            'padding: 5px;' +
            'box-shadow: 0 5px 11px rgba(36, 37, 38, 0.08);' +
        '}' +

        '.image-800 {' +
            'width: 800px !important;' +
        '}'
    ;

    // ad campaign style
    function addCampaignStyle(styleString) {
        var style = document.createElement('style');
        style.textContent = styleString;
        document.head.append(style);
    }
    addCampaignStyle(campaignStyle);

    var campaignHtml = 
        '<div id="campaign-overlay" class="overlay text-left">' +
            '<div class="campaign-modal">' +
                '<a href="#">' +
                    '<div id="cimg" class="modal-close-img-ex campaign-modal-close-btn"></div>' +
                '</a>' +
                '<img id="campaign-image-1" style="display: none;" width="100%" class="image campaign-image" src="' + _bpURL + '/img/campaign_1.jpg">' +
                '<img id="campaign-image-2" style="display: none;" width="100%" class="image campaign-image" src="' + _bpURL + '/img/campaign_2.jpg">' +
                '<img id="campaign-image-3" width="100%" class="image campaign-image" src="' + _bpURL + '/img/campaign_3.jpg">' +
            '</div>' +
        '</div>'
    ;
    function addCampaignHtml(htmlString) {
        document.body.innerHTML = htmlString + document.body.innerHTML;
    }
    addCampaignHtml(campaignHtml);

    // showing modal
    location.hash = "campaign-overlay";
    var campaign = window.localStorage.getItem('campaign');
    $(".campaign-image").hide();
    $(".campaign-modal").removeClass("image-800");

    var next_image_id = 3;
    if (campaign == null || campaign == 3) {
        $("#campaign-image-3").show().parent().addClass("image-800");
        next_image_id = 1;
    } else if (campaign == 1) {
        $("#campaign-image-1").show();
        next_image_id = 2;
    } else {
        $("#campaign-image-2").show();
        next_image_id = 3;
    }
    window.localStorage.setItem('campaign', next_image_id);

    $(document).mouseup(function (e) {
        var container = $(".campaign-modal");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            location.hash = "";
        }
    });
});