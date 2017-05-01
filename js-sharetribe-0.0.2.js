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

.bullet { font-weight: bold }
.bullet-description { font-style:italic; }

div.title-container { padding: 20px; }

.marketplace-banner-span-1 { color: white; font-weight: bold; font-size:36px; font-family: "Arial Black" }
.marketplace-banner-span-2 { color: white; font-weight: bold; font-size:24px; font-family: "Arial" }

.info-bullet-header img {
  float: left;
  width: 80px;
  height: 80px;
  display: inline;
  padding-right:10px;
  padding-bottom:10px;
}

.info-bullet-header h2 {
  position: relative;
  top:10px;
}

.info-bullet-content p {
}

div.how-to-list {
  width: 100%;
  margin: 10px  
}

ol.how-to-list {
  margin-left:20px;
  color: #243147;
  list-style-type: none;
}

ol.how-to-list li {
  position: relative;
  font: bold italic 45px/1.5 Helvetica, Verdana, sans-serif;
  margin-bottom: 20px;
}

ol.how-to-list li > p {
  font: 12px/1.5 Helvetica, sans-serif;
  padding-left: 60px;
  color: #555;
}
 
ol.how-to-list span.number {
  position: absolute;
}

ol.how-to-list span.leader {
  font-size:24px;
  font-weight:bold;
}
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
      '<span class="marketplace-banner-span-1">Practice for Professionals</span><br /><span class="marketplace-banner-span-2">Hire your peers to help you prepare for your next performance<em></span>' +
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
    '<ul><li>You need to have registered for and updated a <a href="https://calendly.com/" target="_blank">calendly</a> account to help buyers arrange for a time to speak with you</li>' + 
    '<li>You must have a <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a> account</li>' + 
    '<li>By completing this hosting form you agree to scene.ly\s <a href="https://practiceperfect.sharetribe.com/en/infos/how_to_use" target="_blank">Scene Coach Rules and Responsibilities</a></li></ul></div>');
    
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
  
  // --- Sidebar Links on "About" and "How it works"
   $('a[title="About"]').find('div.left-navi-link-text').text('About scene.ly');
   $('a[title="How it works"]').find('div.left-navi-link-text').text('Become a coach');
   
   // hide links base on pages - edit listing pages also has icon links and needs to be avoided
   $('#about_page_content').closest('.page-content').find('.icon-with-text-container').hide();   
   $('#how_to_use_page_content').closest('.page-content').find('.icon-with-text-container').hide();
  // -----------

  // --- About scene.ly page ---
  
  $('#about_page_content').html('<div class="info-bullet-header"><img src="http://www.myiconfinder.com/uploads/iconsets/acc8b94ae5e7383b0e7898928121321c-microphone.png" />' +
  '<h2>All the world\'s a stage, let\'s practice together!</h2></div>' +   
  '<div class="info-bullet-content"><p>Practice not only makes perfect, it instills confidence and increases effectiveness.  But often in the professional world we take performance opportunities for granted.  The job interview for the next level.  A presentation to senior leaders.  A panel discussion.  Much like the arts these are moments when the spotlight is on you and an opportunity to dramatically increase your personal brand effectiveness.  Practing with family and friends can only go so far, and you are not always sure you can count on their ability to bypass their politeness and give you the honest truth.  Through scene.ly\'s network of professionals with a broad range of experience, you can develop the muscle memory, capture feedback, and develop insights only interaction with other people can provide.</p>' + 
  '<div class="info-bullet-header"><img src="https://d1cq11ki2hqhd3.cloudfront.net/wp-content/uploads/2015/06/Icon-Affiliate-WoB-220px.png" />' +
  '<h2>Realizing untapped talent</h2></div>' + 
  '<div class="info-bullet-content"><p>By virtue of going to work, cooperating and collaborating with others, and having an impact on how organizations produce goods and services, you are in a unique position to help others who seek to do what you do or want to run ideas past and gain feedback from others.  Executive coaching is often reserved for and priced exclusively for high-paid executives.  The power of the working community is in a better position to support and coach others in a way that democratizes that professional education for early and mid-level professionals.  scene.ly aimes to tap the knowledge that exists in our professional working world and bring those benefits to the community so that both suppliers and consumers can benefit</p></div>' + 
   '<div class="info-bullet-header"><img src="http://www.creativeone.com/wp-content/uploads/2014/11/iconPartner.png" />' +
  '<h2>Developing leaders in underserved communities</h2></div>' + 
  '<div class="info-bullet-content"><p>We believe that leaders are developed and are well-served from encouragement, support, and feedback from peers and role-models.  Many of the world\'s brightest minds do not receive this type of nurturing due to lack of resources and access.  scene.ly is actively developing partnerships with organizations that work with those who may benefit from increased access to these types of resources.  All scene coaches are able to offer their services at a discounted fee or pro-bono in cases when scene.ly is able to broker and forge relationships with underserved communities.</p></div>');
  
  // ---------------------------
  
  // --- Become a host page ---
  
  $('#how_to_use_page_content').html('<div class="info-bullet-header"><img src="https://static1.squarespace.com/static/55084d1ae4b0946a5dbcd770/t/551c718ce4b0e383d1747b72/1427925177583/Earn+Icon" />' + 
  '<h2>Earn money as a scene coach for working professionals</h2></div>' + 
  '<div class="info-bullet-content"><p>If all the world\'s a stage, we should be rehearsing more.  It comes natural to the arts, but for working professionals a job interview, public speaking engagement, or idea pitch is a moment where the spotlight is on.  Intentional practice can dramatically increase impact and effectiveness but many of us don\'t do enough of it.  Practing with family and friends can only go so far, and you are not always sure you can count on their ability to bypass their politeness and give you the honest truth.  Through scene.ly\'s vetted network of professionals with a broad range of experience, you can develop the muscle memory, capture feedback, and develop insights only interaction with other people can provide.</p></div>' + 
  '<div class="info-bullet-header"><img src="http://www.myiconfinder.com/uploads/iconsets/256-256-b9fb29d265acef30b6e20d81bfb070eb-power.png" />' + 
  '<h2>Steps to becoming a Scene Coach</h2></div>' + 
  '<p>The steps to becoming a Scene Coach are straightforward but the responsibility as a provider of this service is significant.  Please review the "Scene Coach Rules and Responsibilities" and if you agree, follow the steps below to post a listing on the home page:</p>' +
  '<div  class="how-to-list"><ol class="how-to-list">' + 
  '<li><span class="number">1.</span><p><span class="leader">Create a listing on scene.ly</span>At the bottom of the page you will find a link to create a listing on scene.ly\'s home page.  There you will fill out information about your background, experience, and expertise so that others can find you.</p></li>' +
  '<li><span class="number">2.</span><p><span class="leader">Connect your LinkedIn Profile</span> If you do not have a LinkedIn profile please create one on the LinkedIn site.  Copy the link of your profile page from LinkedIn and enter it into the scene.ly listing in the designated field</p></li>' +
  '<li><span class="number">3.</span><p><span class="leader">Set up your appear.in room for online video conferencing</span>appear.in info info info info info info info info info info info info info info info info info info info info info info info info info </p></li>' +
  '<li><span class="number">4.</span><p><span class="leader">Set up your Calendly account</span> If you do not have a Calendly account you will need to create one.  Calendly is a third-party web platform that allows people to reserve time on your calendar.  It links to major calendar platform providers including Google, Outlook, Office 365 or iCloud  </p></li>' +
  '<li><span class="number">5.</span><p><span class="leader">set a price</span> lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto lorem ipsum sudo facto </p></li>' +
  '</ol></div>' +
  '<div class="info-bullet-header"><img src="https://s3.amazonaws.com/optimisemedia/wp-content/uploads/2015/04/Icon-Regulation-WoP-220px.png" /><h2>Scene Coach Rules and Responsibilities (please review)</h2></div>' +
  '<div class="info-bullet-content"><p>Critical to your success to as a scene coach is your ability to make others feel comfortable, safe, and willing to be vulnerable.  Respect and active listening are the bedrock of these short engagements and we ask you to embrace those.  We suggest you ask what brought the person who requested your availability why they did so, and to share an experience briefly from your past when you experienced a similar challenge and similar feelings.  The goal of scene.ly is to give people a chance to ask the questions they think might be considered "dumb" or "stupid" (they are not) and to take risks they might not otherwise take.  Please keep this ethic in mind as a scene.ly ambassador.</p></div>' + 
  '<div id="sign_up"><h2>Click the link below to start coaching!</h2></div>');
   
   var $button = $('a.AddNewListingButton').first().detach().appendTo('#sign_up').show().css('width', '150px');;
  
   $('#sign_up').find('span').first().show();
   $('#sign_up').find('span').first().next().css('color', '#fff').css('padding', '0 10px 0 10px');
   
   $button.css('background-color', 'black !important');  
  
  // --------------------------
  
});
</script>