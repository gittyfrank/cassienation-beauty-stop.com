// Popup messages
//-----------------------------------------------------------------
jQuery(document).ready(function() {
    "use strict";

    NAILSBAR_STORAGE['message_callback'] = null;
    NAILSBAR_STORAGE['message_timeout'] = 5000;

    jQuery('body').on('click', '#nailsbar_modal_bg,.nailsbar_message .nailsbar_message_close', function(e) {
        "use strict";
        nailsbar_message_destroy();
        if (NAILSBAR_STORAGE['message_callback']) {
            NAILSBAR_STORAGE['message_callback'](0);
            NAILSBAR_STORAGE['message_callback'] = null;
        }
        e.preventDefault();
        return false;
    });
});


// Warning
function nailsbar_message_warning(msg) {
    "use strict";
    var hdr = arguments[1] ? arguments[1] : '';
    var icon = arguments[2] ? arguments[2] : 'cancel';
    var delay = arguments[3] ? arguments[3] : NAILSBAR_STORAGE['message_timeout'];
    return nailsbar_message({
        msg: msg,
        hdr: hdr,
        icon: icon,
        type: 'warning',
        delay: delay,
        buttons: [],
        callback: null
    });
}

// Success
function nailsbar_message_success(msg) {
    "use strict";
    var hdr = arguments[1] ? arguments[1] : '';
    var icon = arguments[2] ? arguments[2] : 'check';
    var delay = arguments[3] ? arguments[3] : NAILSBAR_STORAGE['message_timeout'];
    return nailsbar_message({
        msg: msg,
        hdr: hdr,
        icon: icon,
        type: 'success',
        delay: delay,
        buttons: [],
        callback: null
    });
}

// Info
function nailsbar_message_info(msg) {
    "use strict";
    var hdr = arguments[1] ? arguments[1] : '';
    var icon = arguments[2] ? arguments[2] : 'info';
    var delay = arguments[3] ? arguments[3] : NAILSBAR_STORAGE['message_timeout'];
    return nailsbar_message({
        msg: msg,
        hdr: hdr,
        icon: icon,
        type: 'info',
        delay: delay,
        buttons: [],
        callback: null
    });
}

// Regular
function nailsbar_message_regular(msg) {
    "use strict";
    var hdr = arguments[1] ? arguments[1] : '';
    var icon = arguments[2] ? arguments[2] : 'quote';
    var delay = arguments[3] ? arguments[3] : NAILSBAR_STORAGE['message_timeout'];
    return nailsbar_message({
        msg: msg,
        hdr: hdr,
        icon: icon,
        type: 'regular',
        delay: delay,
        buttons: [],
        callback: null
    });
}

// Confirm dialog
function nailsbar_message_confirm(msg) {
    "use strict";
    var hdr = arguments[1] ? arguments[1] : '';
    var callback = arguments[2] ? arguments[2] : null;
    return nailsbar_message({
        msg: msg,
        hdr: hdr,
        icon: 'help',
        type: 'regular',
        delay: 0,
        buttons: ['Yes', 'No'],
        callback: callback
    });
}

// Modal dialog
function nailsbar_message_dialog(content) {
    "use strict";
    var hdr = arguments[1] ? arguments[1] : '';
    var init = arguments[2] ? arguments[2] : null;
    var callback = arguments[3] ? arguments[3] : null;
    return nailsbar_message({
        msg: content,
        hdr: hdr,
        icon: '',
        type: 'regular',
        delay: 0,
        buttons: ['Apply', 'Cancel'],
        init: init,
        callback: callback
    });
}

// General message window
function nailsbar_message(opt) {
    "use strict";
    var msg = opt.msg != undefined ? opt.msg : '';
    var hdr = opt.hdr != undefined ? opt.hdr : '';
    var icon = opt.icon != undefined ? opt.icon : '';
    var type = opt.type != undefined ? opt.type : 'regular';
    var delay = opt.delay != undefined ? opt.delay : NAILSBAR_STORAGE['message_timeout'];
    var buttons = opt.buttons != undefined ? opt.buttons : [];
    var init = opt.init != undefined ? opt.init : null;
    var callback = opt.callback != undefined ? opt.callback : null;
    // Modal bg
    jQuery('#nailsbar_modal_bg').remove();
    jQuery('body').append('<div id="nailsbar_modal_bg"></div>');
    jQuery('#nailsbar_modal_bg').fadeIn();
    // Popup window
    jQuery('.nailsbar_message').remove();
    var html = '<div class="nailsbar_message nailsbar_message_' + type + (buttons.length > 0 ? ' nailsbar_message_dialog' : '') + '">' +
        '<span class="nailsbar_message_close iconadmin-cancel icon-cancel"></span>' +
        (icon ? '<span class="nailsbar_message_icon iconadmin-' + icon + ' icon-' + icon + '"></span>' : '') +
        (hdr ? '<h2 class="nailsbar_message_header">' + hdr + '</h2>' : '');
    html += '<div class="nailsbar_message_body">' + msg + '</div>';
    if (buttons.length > 0) {
        html += '<div class="nailsbar_message_buttons">';
        for (var i = 0; i < buttons.length; i++) {
            html += '<span class="nailsbar_message_button">' + buttons[i] + '</span>';
        }
        html += '</div>';
    }
    html += '</div>';
    // Add popup to body
    jQuery('body').append(html);
    var popup = jQuery('body .nailsbar_message').eq(0);
    // Prepare callback on buttons click
    if (callback != null) {
        NAILSBAR_STORAGE['message_callback'] = callback;
        jQuery('.nailsbar_message_button').on('click', function(e) {
            "use strict";
            var btn = jQuery(this).index();
            callback(btn + 1, popup);
            NAILSBAR_STORAGE['message_callback'] = null;
            nailsbar_message_destroy();
        });
    }
    // Call init function
    if (init != null) init(popup);
    // Show (animate) popup
    var top = jQuery(window).scrollTop();
    jQuery('body .nailsbar_message').animate({
        top: top + Math.round((jQuery(window).height() - jQuery('.nailsbar_message').height()) / 2),
        opacity: 1
    }, {
        complete: function() {
            // Call init function
            //if (init != null) init(popup);
        }
    });
    // Delayed destroy (if need)
    if (delay > 0) {
        setTimeout(function() {
            nailsbar_message_destroy();
        }, delay);
    }
    return popup;
}

// Destroy message window
function nailsbar_message_destroy() {
    "use strict";
    var top = jQuery(window).scrollTop();
    jQuery('#nailsbar_modal_bg').fadeOut();
    jQuery('.nailsbar_message').animate({
        top: top - jQuery('.nailsbar_message').height(),
        opacity: 0
    });
    setTimeout(function() {
        jQuery('#nailsbar_modal_bg').remove();
        jQuery('.nailsbar_message').remove();
    }, 500);
}