var simpleUI = function ($) {

    var toggleCard = function (el) {
        var active = 'active';

        function expendCard($this) {
            $this.addClass(active);
            $('#' + $this.data().content).addClass(active);
        }

        function hideCard($this) {
            $this.removeClass(active);
            $('#' + $this.data().content).removeClass(active);
        }

        function isActive($this) {
            return $this.hasClass(active);
        }

        var $this = $(el);

        if (isActive($this)) {
            hideCard($this);
        } else {
            expendCard($this);
        }
    };

    var toggleSideMenu = function () {
        var show = 'show';
        var $sidemenu = $('#side-menu');
        var $mask = $('#mask');

        function hideMenu() {
            $sidemenu.removeClass(show);
            $mask.removeClass(show);
        }

        function showMenu() {
            $sidemenu.addClass(show);
            $mask.addClass(show);
        }

        function isActive() {
            return $sidemenu.hasClass(show);
        }

        if (isActive()) {
            hideMenu();
        } else {
            showMenu();
        }
    };

    var toggleTab = function(el) {
        var $this = $(el);
        var $thisContent = 
            $this.parent().next().children('#'+ $this.data('target'));
        var tab = $this.add($thisContent);

        if (!$this.hasClass('active')) {
            tab.siblings().removeClass('active');
            tab.addClass('active');
        }
    }
    

    return {
        toggleCard: toggleCard,
        toggleSideMenu: toggleSideMenu,
        toggleTab: toggleTab
    };
}(jQuery);