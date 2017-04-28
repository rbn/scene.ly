<style>
.marketplace-lander .coverimage-fade  { background:rgba(62, 40, 173, 0.4) !important; }

.marketplace-lander .marketplace-title-header h1 { color: #fff !important; }

div#host-disclaimer { background:rgba(62, 40, 173, 0.4) !important; padding: 18px; color:white; }

.home-fluid-thumbnail-grid-author {display:none;}

div.quantity-description { display: none; }

.price-container > label:after { content: " per 30 minutes"; }
</style>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<div class="g-hangout-container" style="display:none">
<div class="g-hangout" data-render="createhangout"></div><script
  src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
  integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g="
  crossorigin="anonymous" ></script>
 </div>

<script>
jQuery(function() { 

  // ------------ profile page -------------
  
  // convert linkedin profile text to link
  $('b:contains("LinkedIn")').closest('div').each(function() {
     var text = $(this).text().replace('LinkedIn Profile:', '');
     $(this).empty();
     $(this).append('LinkedIn Profile: <a href="' + text + '" target="_blank">' + text + '</a>')
  });
  
   // -------------------------------------
   
   // -------- listing page --------------
   
   $('div.listing-author').closest('div.row-with-divider').hide();
   // -----------------------------------
   
   // ------------ landing page - logged in -------------
   
   var $cover_image = $('<div class="coverimage">' + 
    '<figure class="marketplace-cover-small fluidratio"></figure>' + 
    '<div class="coverimage-fade">' + 
    '<figure class="marketplace-cover-small-fade fluidratio"></figure>' + 
    '</div>' + 
    '</div>');
   
   var $div_marketplace = $('<div class="title-container">' + 
      '<div class="title-header-wrapper">' +
      '<div class="marketplace-title-header">' +
      '<h1>Find a scene coach to practice your mock interview</h1>' +
      '</div>' +
      '</div>' +
      '</div>');
      
   if ( ! $('section.marketplace-lander').children().length ){   
    $('section.marketplace-lander').prepend($div_marketplace).prepend($cover_image);
   }
   
   
   // -------------------------------------
   
  

  //------------transaction page--------------------
   
  // get transaction id - this is a SaaS hack - need to change
  var tid = $('a.confirm').attr('href')
  tid = tid ? tid.split('/')[4] : "";

  // get listing url
  var listing_url = $('div.text-part:contains("fulfill the order")').find('a').last().attr('href');
  
    
  // add chat window to use for reservation
  $('a.confirm').first('div').each(function() {
    $(this).closest('div.status-links').prepend('<div class="inbox-horizontally-aligned-link"> ' +
    '<a target="_blank" class="button" href="https://appear.in/' + tid + '">' + 
    '<div class="content"> ' +
    '<div class="icon-with-text ss-clockwise"></div>' + 
    '<div class="text-with-icon">' + 
    'Click here to chat at your scheduled time' + 
    '</div>' + 
    '</div></a></div><br />');
  });
  
  // add link to calendly
   $calendly_link = $('<a target="_blank" class="reject" href="https://calendly.com/">' + 
    '<div class="content"> ' +
    '<div class="icon-with-text ss-clockwise"></div>' + 
    '<div class="text-with-icon">' + 
    '<b>Action Required:</b> Schedule a time to rehearse' + 
    '</div>' + 
    '</div></a>');
    
   var $calendly_div = $('<div class="inbox-horizontally-aligned-link">');
   $calendly_div.append($calendly_link);
   
   $('a.confirm').first('div').each(function() {
    $(this).closest('div.status-links').prepend( $calendly_div );
   });
  
  // get calendly handle
  
  $.get( listing_url , function( data ) {
    var calendly_handle = $(data).find('b:contains("Calendly")').closest('div').text(); //.split(':')[1];   
    calendly_handle = calendly_handle ? calendly_handle.split(':')[1] : "";
    $calendly_link.attr('href', 'https://calendly.com/' + calendly_handle);
  });

  //--------------------------------
  
  
  // ---- new listing form ---
  $('div#new_listing_form').prepend('<div id="host-disclaimer"><h1 style="color:white !important">A note about becoming a scene coach</h1>' + 
    '<ul><li>you must have a calendly account for scheduling appointments</li>' + 
    '<li>you must have a linked in account</li>' + 
    '<li>you must agree to the terms and conditions of becoming a host.  please review here(make link)</li></ul></div>');
    
   $('label.input[for="listing_description"]').text('Brief bio. Tell people why you are doing this and what makes you qualified.');
  
  // -------------------------


  // ---- swap out hour for 30 mins -----
  $('article.page-content span').text(function (i, old) {
     return old
         .replace('hour', '30 mins');
  });
  
  $('div.quantity-description').text(function (i, old) {
     return old
         .replace('hour', '30 mins');
  });
  
  $('label.quantity-label').text(function (i, old) {
     return old
         .replace('hours', '30 min blocks');
  });
  // -----------------------------------
  
  
});
</script>