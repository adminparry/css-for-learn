

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sentDate)s by %(user)s": "%(user)s \u4e8e %(sentDate)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "\u81ea\u8be5\u8349\u7a3f\u4fdd\u5b58\u4ee5\u6765\uff0c\u6b64\u6587\u7ae0\u5df2\u6709\u4e00\u4e2a\u65b0\u7248\u672c\u88ab\u53d1\u5e03\u3002\u60a8\u53ef\u4ee5\u6062\u590d\u8be5\u8349\u7a3f\u4ee5\u67e5\u770b\u5185\u5bb9\uff0c\u4f46\u4e0d\u80fd\u5c06\u5176\u53d1\u5e03\u3002", 
    "Article Title Lookup / Link Text": "\u6587\u7ae0\u6807\u9898\u67e5\u8be2 / \u94fe\u63a5\u6587\u672c", 
    "Aspect ratio": "\u957f\u5bbd\u6bd4", 
    "Attachments": "\u9644\u4ef6", 
    "Autosave enabled.": "\u81ea\u52a8\u4fdd\u5b58\u5df2\u542f\u7528\u3002", 
    "CSS": "CSS", 
    "Changes saved.": "\u66f4\u6539\u5df2\u4fdd\u5b58\u3002", 
    "Close": "\u5173\u95ed", 
    "Close notification": "\u5173\u95ed\u901a\u77e5", 
    "Close submenu": "\u5173\u95ed\u5b50\u83dc\u5355", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "\u6bd4\u8f83\u6b64\u65e5\u671f\u4e0e\u6700\u65b0\u4fee\u8ba2\u65e5\u671f\uff0c\u4ee5\u786e\u4fdd\u60a8\u4e0d\u4f1a\u8986\u76d6\u4e4b\u540e\u7684\u66f4\u6539\u3002", 
    "Create a Redirect": "\u521b\u5efa\u4e00\u4e2a\u91cd\u5b9a\u5411", 
    "Default": "\u9ed8\u8ba4", 
    "Details": "\u8be6\u7ec6\u4fe1\u606f", 
    "Discard draft.": "\u653e\u5f03\u8349\u7a3f\u3002", 
    "Document": "\u6587\u6863", 
    "Draft autosaved:": "\u8349\u7a3f\u5df2\u81ea\u52a8\u4fdd\u5b58\uff1a", 
    "Draft discarded.": "\u8349\u7a3f\u5df2\u653e\u5f03\u3002", 
    "Draft discarded:": "\u8349\u7a3f\u5df2\u653e\u5f03\uff1a", 
    "Draft published:": "\u8349\u7a3f\u5df2\u53d1\u5e03\uff1a", 
    "Draft restored.": "\u8349\u7a3f\u5df2\u6062\u590d\u3002", 
    "Edit Page": "\u7f16\u8f91\u9875\u9762", 
    "Embed YouTube Video": "\u5d4c\u5165 YouTube \u89c6\u9891", 
    "Error loading content, please refresh the page": "\u8f7d\u5165\u5185\u5bb9\u65f6\u51fa\u9519, \u8bf7\u5237\u65b0\u9875\u9762", 
    "Error submitting as %(type)s": "\u63d0\u4ea4\u4e3a %(type)s \u65f6\u51fa\u9519", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "\u8bf7\u7a0d\u7b49\uff0c\u6b63\u5728\u66f4\u65b0\u8fc7\u6ee4\u5668\u2026", 
    "History": "\u5386\u53f2\u8bb0\u5f55", 
    "Insert Code Sample Template": "\u63d2\u5165\u4ee3\u7801\u793a\u4f8b\u6a21\u677f", 
    "Insert Code Sample iFrame": "\u63d2\u5165\u4ee3\u7801\u793a\u4f8b iFrame", 
    "JavaScript": "JavaScript", 
    "Launch": "\u542f\u52a8", 
    "Locate a YouTube Video": "\u5b9a\u4f4d\u4e00\u4e2a YouTube \u89c6\u9891", 
    "MDN Redirect": "MDN \u91cd\u5b9a\u5411", 
    "More about the beta.": "\u5173\u4e8e\u6d4b\u8bd5\u7684\u66f4\u591a\u4fe1\u606f\u3002", 
    "Never": "\u4e0d\u518d\u663e\u793a", 
    "New compatibility tables are in beta ": "\u65b0\u7684\u517c\u5bb9\u6027\u8868\u683c\u6b63\u5728\u6d4b\u8bd5\u4e2d ", 
    "New interest...": "\u65b0\u7684\u5174\u8da3...", 
    "New tag...": "\u65b0\u5efa\u6807\u7b7e...", 
    "No": "\u4e0d\u5fc5", 
    "No Highlight": "\u6ca1\u6709\u9ad8\u4eae", 
    "No attachments available": "\u6ca1\u6709\u53ef\u7528\u7684\u9644\u4ef6", 
    "No selection": "\u6ca1\u6709\u9009\u62e9", 
    "Open": "\u6253\u5f00", 
    "Open implementation notes": "\u6253\u5f00\u5b9e\u73b0\u7b14\u8bb0", 
    "Open in %(site)s": "\u5728 %(site)s \u4e2d\u6253\u5f00", 
    "Paste YouTube Video URL": "\u7c98\u8d34 YouTube \u89c6\u9891\u7f51\u5740", 
    "Published version": "\u5df2\u53d1\u5e03\u7248\u672c", 
    "Publishing changes\u2026": "\u6b63\u5728\u53d1\u5e03\u66f4\u6539\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "\u53d1\u5e03\u5931\u8d25\u3002\u8bf7\u5c06\u60a8\u6240\u505a\u7684\u4fee\u6539\u590d\u5236\u5e76\u7c98\u8d34\u5230\u4e00\u4e2a\u5b89\u5168\u7684\u5730\u65b9\uff0c\u7136\u540e\u5c1d\u8bd5\u7528\u201c\u53d1\u5e03\u201d\u6309\u94ae\u63d0\u4ea4\u8868\u5355\u3002", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "\u53d1\u5e03\u5931\u8d25\u3002\u60a8\u5f53\u524d\u672a\u767b\u5f55\u3002\u8bf7\u4f7f\u7528\u65b0\u7684\u6807\u7b7e\u9875\u767b\u5f55\u5e76\u518d\u6b21\u5c1d\u8bd5\u53d1\u5e03\u3002", 
    "Report an error.": "\u62a5\u544a\u9519\u8bef\u3002", 
    "Reported. Thanks!": "\u5df2\u62a5\u544a\u3002\u8c22\u8c22\u60a8\uff01", 
    "Restore draft.": "\u6062\u590d\u8349\u7a3f\u5185\u5bb9\u3002", 
    "Result": "\u7ed3\u679c", 
    "Return to compatibility table.": "\u8fd4\u56de\u517c\u5bb9\u6027\u8868\u683c\u3002", 
    "Revert": "\u8fd8\u539f", 
    "Revision history.": "\u7248\u672c\u5386\u53f2\u3002", 
    "Sample CSS Content": "\u793a\u4f8b\u7684 CSS \u5185\u5bb9", 
    "Sample Finder": "\u793a\u4f8b\u67e5\u627e\u5668", 
    "Sample HTML Content": "\u793a\u4f8b\u7684 HTML \u5185\u5bb9", 
    "Sample JavaScript Content": "\u793a\u4f8b\u7684 JavaScript \u5185\u5bb9", 
    "Search Stack Overflow": "\u641c\u7d22 Stack Overflow", 
    "Sections in Document": "\u6587\u6863\u4e2d\u7684\u7ae0\u8282", 
    "Select a section": "\u9009\u62e9\u4e00\u4e2a\u7ae0\u8282", 
    "Select an attachment": "\u9009\u62e9\u4e00\u4e2a\u9644\u4ef6", 
    "Selected: ": "\u5df2\u9009\u62e9\uff1a", 
    "Show old table.": "\u663e\u793a\u65e7\u5f0f\u8868\u683c\u3002", 
    "Submitted as %(submissionType)s": "\u5df2\u63d0\u4ea4\u4e3a %(submissionType)s", 
    "Submitting...": "\u6b63\u5728\u63d0\u4ea4...", 
    "Syntax Highlighter": "\u8bed\u6cd5\u9ad8\u4eae\u5668", 
    "Take the survey": "\u53c2\u4e0e\u8c03\u67e5", 
    "The URL you've entered doesn't appear to be valid": "\u60a8\u8f93\u5165\u7684\u7f51\u5740\u770b\u4e0a\u53bb\u65e0\u6548", 
    "URL": "URL", 
    "Updated filters.": "\u8fc7\u6ee4\u5668\u5df2\u66f4\u65b0\u3002", 
    "View Page": "\u67e5\u770b\u9875\u9762", 
    "View draft.": "\u67e5\u770b\u8349\u7a3f\u3002", 
    "Viewing old draft. This draft cannot be published.": "\u67e5\u770b\u65e7\u7684\u8349\u7a3f\u3002\u6b64\u8349\u7a3f\u4e0d\u80fd\u53d1\u5e03\u3002", 
    "What should the sample title be?": "\u793a\u4f8b\u6807\u9898\u5e94\u8be5\u662f\uff1f", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "\u60a8\u80fd\u53c2\u4e0e\u6211\u4eec\u7684\u8c03\u67e5\u5417\uff1f\u53ea\u662f4\u4e2a\u95ee\u9898\u3002\u5728\u60a8\u5b8c\u6210\u5728\u672c\u7ad9\u4e0a\u9700\u8981\u505a\u7684\u4e8b\u60c5\u540e\uff0c<a %(url)s>\u6253\u5f00\u8c03\u67e5</a>\u6765\u586b\u5199\u95ee\u5377\u3002\u8c22\u8c22\uff01", 
    "Yes": "\u662f\u7684", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "\u60a8\u76ee\u524d\u67e5\u9605\u7684\u662f\u672c\u7f51\u7ad9\u7684 %(localeName)s \u7248\u3002\u662f\u5426\u8981\u59cb\u7ec8\u67e5\u770b\u672c\u7f51\u7ad9\u7684 %(localeName)s \u5462\uff1f", 
    "You have a draft from: %(time)s.": "\u60a8\u6709\u4e00\u4e2a\u8349\u7a3f\uff0c\u4fdd\u5b58\u4e8e\uff1a%(time)s\u3002", 
    "You must input a valid YouTube video URL.": "\u60a8\u5fc5\u987b\u8f93\u5165\u4e00\u4e2a\u6709\u6548\u7684 YouTube \u89c6\u9891\u7f51\u5740\u3002", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 MathML\u3002\u5df2\u4f7f\u7528\u540e\u5907\u7684 CSS \u4ee3\u66ff\u3002", 
    "an unknown date": "\u672a\u77e5\u65e5\u671f"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "N j, Y, P", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y"
    ], 
    "DATE_FORMAT": "N j, Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "F j", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "m/d/Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "P", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

