<style>
.marketplace-lander .coverimage-fade  { background:rgba(62, 40, 173, 0.4) !important; }

.marketplace-lander .marketplace-title-header h1 { color: #fff !important; }

div#host-disclaimer { color:#000; border: 3px solid blue;  padding: 8px; }

.home-fluid-thumbnail-grid-author {display:none;}

div.quantity-description { display: none; }

.price-container > label:after { content: " per 30 minutes"; }

label[for="listing_title"]:after { content: " (please put your first name and role you think best describes you)"; }

label[for="listing_description"] { text-transform: lowercase; }
label[for="listing_description"]:before { content: "Brief Bio and "; }
label[for="listing_description"]:after { content: " of how you can help a potential buyer "; }

</style>

<script src="https://apis.google.com/js/platform.js" async defer></script>
<script
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
   
   $('a.home-toolbar-button-group-button[title="List"]').hide();
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
      '<h1>Find a scene coach to practice with today<br /><em>Hire peers to start deliberately practicing for your next performance<em></h1>' +
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
  $('div#new_listing_form').prepend('<div id="host-disclaimer"><h2 style="text-align:center">A note about becoming a scene coach</h2>' + 
    '<ul><li>You need to have registered for a <a href="https://calendly.com/" target="_blank">calendly</a> account and have it kept up to date for buyers to schedule time with you</li>' + 
    '<li>You must have a linked in account</li>' + 
    '<li>By completing this hosting form you agree to the terms and conditions of becoming a host.  Please review here (make link)</li></ul></div>');
    
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
  
  // --- hide/move the "become a coach" button
  $('#topbar-container').find('a.AddNewListingButton').hide();
  
  // -----------------------------------------
  
  // -------- footer ------------------
  $('div.branding-content').html('learn more about scene.ly');
  // ----------------------------------
  
  // --- Top Links
   $('a[data-pid="About 0"]').closest('div').css('width', function() {    
    return parseInt($(this).css('width')) + 50;
   });
   $('a[data-pid="About 0"]').text("About scene.ly");
   $('a[data-pid="Contact us 1"]').text("Become a coach").attr('href', '/en/infos/how_to_use');
  $('a[data-pid="Invite new members 2"]').text("Contact").attr('href', '/en/user_feedbacks/new');
  // ---------
  
  // --- Sidebar Links on "About"
   $('a[title="How it works"]').find('div.left-navi-link-text').text('Become a coach');
   $('.icon-with-text-container').hide();
  // -----------

  
  // --- Become a host page ---
  
  $('#about_page_content').html('<h2>You can provide a service to others based on your professional experience!</h2>' + 
  '<p>here are the reasons why you should coach</p>' + 
  '<p>here is what the responsibility entails</p>' + 
  '<p>here is what you need to get started</p>');
   
   var $button = $('a.AddNewListingButton').first().detach().appendTo('#about_page_content').show().css('width', '150px');;
  
   $('#about_page_content').find('span').first().show();
   $('#about_page_content').find('span').first().next().css('color', '#fff').css('padding', '0 10px 0 10px');
   
   $button.css('background-color', 'black !important');  
  
  // --------------------------
  
});
</script>