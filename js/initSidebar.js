$(document).ready(function() {
  var $sidebar = $('#sidebar');

  var navgocoOptions = {
    caretHtml: '',
    accordion: true,
    openClass: 'active',
    save: false,
    cookie: {
      name: 'navgoco',
      expires: false,
      path: '/'
    },
    slide: {
      duration: 150,
      easing: 'swing'
    }
  };

  // Initialize navgoco with config options
  $sidebar.navgoco($.extend(navgocoOptions, {
    onToggleAfter: function() {
      if ($(this.el).attr('id') == 'sidebar' &&
          $('#version-switcher').hasClass('open')) {
        closeVersionSwitcher();
      }
    }
  }));

  $sidebar.show();
});
