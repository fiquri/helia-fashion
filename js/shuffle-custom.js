var helia = (function( $ ) {
  'use strict';

  var $grid = $('#grid'),
      $filterOptions = $('.hl-filter__tags'),
      $sizer = $grid.find('.shuffle__sizer'),

  init = function() {


    // None of these need to be executed synchronously
    setTimeout(function() {
      // listen();
      setupFilters();
      setupSearching();
    }, 100);

    // You can subscribe to custom events.
    // shrink, shrunk, filter, filtered, sorted, load, done
    $grid.on('loading.shuffle done.shuffle shrink.shuffle shrunk.shuffle filter.shuffle filtered.shuffle sorted.shuffle layout.shuffle', function(evt, shuffle) {
      // Make sure the browser has a console
      if ( window.console && window.console.log && typeof window.console.log === 'function' ) {
        console.log( 'Shuffle:', evt.type );
      }
    });

    // instantiate the plugin
    $grid.shuffle({
      itemSelector: '.picture-item',
      sizer: $sizer
    });
    

    // $grid.shuffle('destroy');
  },

  // Set up button clicks
  setupFilters = function() {
    var $tags = $filterOptions.children();
    $tags.on('click', function(e) {
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');

      // Hide current label, show current label in title
      if ( !isActive ) {
        $('.hl-filter__tags a').removeClass('active');
      }

      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
      e.preventDefault();
    });

    $tags = null;
  },

  setupSearching = function() {
    // Advanced filtering
    $('.hl-filter__search').on('keyup change', function() {
      var val = this.value.toLowerCase();
      $grid.shuffle('shuffle', function($el, shuffle) {

        // Only search elements in the current group
        if (shuffle.group !== 'all' && $.inArray(shuffle.group, $el.data('groups')) === -1) {
          return false;
        }

        var text = $.trim( $el.find('.picture-item__title').text() ).toLowerCase();
        return text.indexOf(val) !== -1;
      });
    });
  }

  return {
    init: init
  };
}( jQuery ));



$(document).ready(function() {
  helia.init();
});
