(function ($) {

Drupal.behaviors.flagHiddenTagsFieldset = {
  attach: function (context) {
    $('fieldset.flag-hidden-tags-form', context)
      .drupalSetSummary(function (context) {
        if ($('#edit-hidden-tags input', context).is(':checked')) {
          return Drupal.t('Hidden');
        } else {
          return Drupal.t('Not hidden');
        }
    });
  }
};

})(jQuery);

