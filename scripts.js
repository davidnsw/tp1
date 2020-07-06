$(document).ready(function() {
    $('div#lang-links a').click(function() {
        var prev = { pl: 'en', en: 'zh' };
        var lang = $(this).data('lang');

        $(':lang(' + prev[lang] + ')').hide();
        $(':lang(' + lang + ')').show();
    });
});
