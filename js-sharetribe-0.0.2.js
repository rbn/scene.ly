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
   
   
   
   // ------------ landing page - logged in -------------
   
   $('div.wrapper').prepend('<div><h1>Hire peers and mentors to help you rehearse for your next job interview, big presentation, or any time the spotlight is on you.</h1></div>');
   
   
   // -------------------------------------
   
  

  //------------transaction page--------------------
   
  // get transaction id - this is a SaaS hack - need to change
  var tid = $('a.confirm').attr('href')
  tid = tid.split('/')[4];

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
    console.log(calendly_handle);
    $calendly_link.attr('href', 'https://calendly.com/' + calendly_handle);
});


  //--------------------------------




});
</script>