var simpleUI=function(a){var n=function(n){function s(n){n.addClass(o),a("#"+n.data().content).addClass(o)}function e(n){n.removeClass(o),a("#"+n.data().content).removeClass(o)}function t(a){return a.hasClass(o)}var o="active",r=a(n);t(r)?e(r):s(r)},s=function(){function n(){o.removeClass(t),r.removeClass(t)}function s(){o.addClass(t),r.addClass(t)}function e(){return o.hasClass(t)}var t="show",o=a("#side-menu"),r=a("#mask");e()?n():s()};return{toggleCard:n,toggleSideMenu:s}}(jQuery);