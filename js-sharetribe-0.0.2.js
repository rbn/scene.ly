<script src="https://apis.google.com/js/platform.js" async defer></script>
<div class="g-hangout-container" style="display:none">
<div class="g-hangout" data-render="createhangout"></div><script
  src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
  integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g="
  crossorigin="anonymous" ></script>
 </div>

<script>
jQuery(function() { 

  $('b:contains("LinkedIn")').closest('div').each(function() {
     var text = $(this).text().replace('LinkedIn Profile:', '');
     $(this).empty();
     $(this).append('LinkedIn Profile: <a href="' + text + '" >' + text + '</a>')
  });


});
</script>