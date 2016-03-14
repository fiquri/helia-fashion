$(function(){
  'use strict';
  
  var $page = $('#mainSmooth'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        scroll: true,
        onStart: {
          duration: 250, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
          }
        },
        onAfter: function($container, $newContent) {
            $.readyFn.execute();
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');
});