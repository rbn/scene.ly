<style>
.marketplace-lander .coverimage-fade  { background:rgba(62, 40, 173, 0.4) !important; }

.marketplace-lander .marketplace-title-header h1 { color: #fff !important; }

div#host-disclaimer { color:#000; border: 3px solid #CCC;  padding: 8px; background-color:fff; padding-left:15px; width:80%;}

div#host-disclaimer > h2 {
  font-variant: small-caps;
  font-size:18px;
}

div#host-disclaimer p {
  font-size:14px;
}

div#host-disclaimer ul {
  font-size:12px;
}

.home-fluid-thumbnail-grid-author {display:none;}

div.quantity-description { display: none; }

.price-container > label:after { content: " per 30 minutes"; }

label[for="listing_title"]:after { content: " (please put your first name and role you think best describes you)"; }

label[for="listing_description"] { text-transform: lowercase; }
label[for="listing_description"]:before { content: "Brief Bio: "; }
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
  font: bold italic 30px/1.5 Helvetica, Verdana, sans-serif;
  margin-bottom: 10px;
}

ol.how-to-list li > p {
  font: 14px/1.5 Helvetica, sans-serif;
  padding-left: 60px;
  color: #555;
}
 
ol.how-to-list span.number {
  position: absolute;
}

ol.how-to-list span.leader {
  font-size:18px;
  font-weight:bold;
  padding-right:10px;
  color: #243147;
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

  // ------------ view profile page -------------
  
  // convert linkedin profile text to link
  var $linkedin_label = $('b:contains("LinkedIn")');
  var $linkedin_div = $linkedin_label.closest('div');
  $linkedin_label.remove();
  var linkedin_link = $linkedin_div.text();
  $linkedin_div.html('').append('<b>LinkedIn:</b><a href="' + linkedin_link + '" target="_blank">' + linkedin_link + '</a>');
  
  // create appear.in link (only on view by owner of list)
  if ( $('.text-part:contains("Edit listing")').length ) {
   var appear_link = $('.text-part:contains("Edit listing")').closest('a').attr('href');
    appear_link = appear_link ? appear_link.split('/')[3] : "";
    appear_link = appear_link ? appear_link.split('-')[0] : "";
    $('.listing-details-container > div.row').eq('-1').before('<div class="row">' + 
        '<div class="col-12"><b>Video link (<span style="color:red">Ensure to copy this link to your Calendly account!</span>)</b>: <a href="http://appear.in/' + appear_link + '" target="_blank" style="font-size:24px">http://appear.in/' + appear_link + '</a>' + 
        '</div></div>');    
  }   
   $('a.home-toolbar-button-group-button[title="List"]').hide();
   // -----------------------------------
   
   
   // --- edit and new forms ---
   
      // nothing yet

   // -------------------------
   
   
   // ------------ landing page - logged in -------------
   
   var $cover_image = $('<div class="coverimage">' + 
    '<figure class="marketplace-cover-small fluidratio"></figure>' + 
    '<div class="coverimage-fade">' + 
    '<figure class="marketplace-cover-small-fade fluidratio"></figure>' + 
    '</div>' + 
    '</div>');
   
   
  if ( location.pathname == "/" ) {
    $('section.marketplace-lander').html('').append('<div class="coverimage">' +
          '<figure class="marketplace-cover fluidratio">' +
          '<div class="lander-content marketplace-lander-content">' +
          '<h1 class="marketplace-lander-content-title">Practice for Professionals</h1>' +
          '<p class="marketplace-lander-content-description">Gain the confidence you need for your next job interview, pitch, or presentation</p>' +
          '</div>' +
          '</figure>' +
          '</div>');
  }
      
   if ( ! $('section.marketplace-lander').children().length ){   
    $('section.marketplace-lander').prepend($div_marketplace).prepend($cover_image);
   }     
   // -------------------------------------
   
  

  //------------transaction page--------------------

  // get listing url
  var listing_url = $('div.text-part:contains("fulfill the order")').find('a').last().attr('href');
  
    
  // add chat window to use for reservation
  $('a.confirm').first('div').each(function() {
    $(this).closest('div.status-links').prepend('<div class="inbox-horizontally-aligned-link"> ' +
    '<a target="_blank" id="appear-in-link" class="button" href="https://appear.in/">' + 
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
    var calendly_handle = $(data).find('b:contains("Calendly")').closest('div').text();  
    calendly_handle = calendly_handle ? calendly_handle.split(':')[1] : "";
    $calendly_link.attr('href', 'https://calendly.com/' + calendly_handle);
    
    var tx_appear_link = $('h2:first').find('a').attr('href');
    tx_appear_link = tx_appear_link ? tx_appear_link.split('/')[3] : "";
    $('#appear-in-link').attr('href', 'https://appear.in/' + tx_appear_link);
   
  });

  //--------------------------------
  
  
  // ---- new listing form ---
  $('div#new_listing_form').prepend('<div id="host-disclaimer"><h2 style="text-align:center">Terms and Conditions</h2>' + 
    '<p>By completing this Scene Coach listing you agree to:</p>' +
    '<ul><li>Honor scene.ly\'s <a href="https://practiceperfect.sharetribe.com/en/infos/how_to_use" target="_blank">Scene Coach Rules and Responsibilities</a></li>' + 
    '<li>Set up a <a href="https://calendly.com/" target="_blank">Calendly account (its free!)</a></li>' + 
    '<li>Use your <a href="https://www.paypal.com/" target="_blank">PayPal</a> account to accept payments (its free!)</li>' + 
    '<li>Enabled <a href="https://www.paypal.com/us/webapps/mpp/merchant" target="_blank">PayPal business services</a> on your account(its free!)</li>' + 
    '<li>Have a <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a> account (its free!)</li>' + 
    '</ul></div>');
    
   $('label.input[for="listing_description"]').text('Tell people why you are doing this and what makes you qualified.');
   
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
   $('div.left-navi > a[title="About"]').find('div.left-navi-link-text').text('About scene.ly');
   $('div.left-navi > a[title="How it works"]').find('div.left-navi-link-text').text('Become a coach');   
   $('div.left-navi > a[title="How it works"]').after('<a class="left-navi-link FAQ" href="#" title="FAQ">' + 
    '<div class="left-navi-link-icon ss-help"></div>' + 
    '<div class="left-navi-link-text">FAQ</div>' + 
    '</a>');

      
  // ----------------
  
  // --- mobile sidebar - top level nav ---
  
   $('.MenuItem_link[href="/en/infos/about"]').text('About scene.ly');  
   $('.MenuItem_link[href="/en/user_feedbacks/new"]').text("Become a coach").attr('href', '/en/infos/how_to_use'); 
  $ ('.MenuItem_link[href="/en/invitations/new"]').text('Contact').attr('href', '/en/user_feedbacks/new');
  
  // --------------------------------------
      
  // --- Sidebar Links on info page (when they collapse due to width compression/mobile (they turn to a dropdown)
  
   $('.left-navi-menu.toggle-menu').find('a[href="/en/infos/about"]').text('About scene.ly');  
   $('.left-navi-menu.toggle-menu').find('a[href="/en/infos/how_to_use"]').text('Become a coach');
   $('.left-navi-menu.toggle-menu').find('a[href="/en/infos/how_to_use"]')
    .after('<a href="#" class="FAQ" title="FAQ">FAQ</a>');
  
  // --------------------------
   
   // hide links base on pages - edit listing pages also has icon links and needs to be avoided
   $('#about_page_content').closest('.page-content').find('.icon-with-text-container').hide();   
   $('#how_to_use_page_content').closest('.page-content').find('.icon-with-text-container').hide();
  // -----------
  
  // ----- mobile links
  $('.OffScreenMenu_scrollpane').find('a[href="/infos/about"]').text('About scene.ly');
  $('.OffScreenMenu_scrollpane').find('a[href="/user_feedbacks/new"]').text("Become a coach").attr('href', '/en/infos/how_to_use');
  $('.OffScreenMenu_scrollpane').find('a[href="/invitations/new"]').text("Contact").attr('href', '/en/user_feedbacks/new');
  
  // -----------------
  
  // --- create FAQs based on anchor created in sidebar links ---
    $('a.FAQ').click(function() {
        $('div')
          .filter(function() {
              return this.id.match(/.*_page_content/);
          })
          .html('<div><h1>FAQs</h1>' + 
            '<h2>Q1</h2>' +   
            '<p>lorem ipsum sudo facto</p>' + 
            '<h2>Q2</h2>' + 
            '<p>lorem ipsum sudo facto</p>' + 
            '<h2>Q3</h2>' + 
            '<p>lorem ipsum sudo facto</p></div>');
            
            $('a.left-navi-link').removeClass('selected');
            $(this).addClass('selected');
    });
  
  // ------------------------------------------------------------

  // --- About scene.ly page ---
  
  $('#about_page_content').html('<div class="info-bullet-header"><img src="http://www.myiconfinder.com/uploads/iconsets/acc8b94ae5e7383b0e7898928121321c-microphone.png" />' +
  '<h2>All the world\'s a stage, let\'s practice together!</h2></div>' +   
  '<div class="info-bullet-content"><p>Practice not only makes perfect, it instills confidence and increases effectiveness.  But often in the professional world we take performance opportunities for granted.  That job interview for the next level, A presentation to senior leaders, a pitch to potential investors, or participation in a panel discussion.  Much like the arts these are moments when the spotlight is on you and an opportunity to dramatically increase your personal brand effectiveness.  Practing with family and friends can only go so far.  Through scene.ly\'s network of professionals with a broad range of experience, you can develop the muscle memory, capture feedback, and gain insights only interaction with other people can provide.</p>' + 
  '<div class="info-bullet-header"><img src="https://d1cq11ki2hqhd3.cloudfront.net/wp-content/uploads/2015/06/Icon-Affiliate-WoB-220px.png" />' +
  '<h2>Realizing untapped talent</h2></div>' + 
  '<div class="info-bullet-content"><p>By virtue of going to participating in the workforce, cooperating and collaborating with others, and having an impact on how organizations produce goods and services, you are in a unique position to help others who would benefit from your perspective.  Even just listening and understanding someone is a valuable service to many.  Executive coaches have long provided this type of training and coaching services for clients, but typically they are priced for and targeted to high-paid executives.  The power of the broader working community is in a better position to support and coach others in a way that democratizes that professional education for early and mid-level professionals.  scene.ly aimes to tap the knowledge that exists in our professional working world and bring those benefits to the community so that both suppliers and consumers can benefit</p></div>' + 
   '<div class="info-bullet-header"><img src="http://www.creativeone.com/wp-content/uploads/2014/11/iconPartner.png" />' +
  '<h2>Developing leaders in underserved communities</h2></div>' + 
  '<div class="info-bullet-content"><p>scene.ly believes that leaders are developed not born, and that encouragement, support, and feedback are critical to developing leadership abilities.  Many of the world\'s brightest minds do not receive this type of nurturing due to lack of access.  we are actively developing partnerships with organizations that work with those who may benefit from increased access to these types of resources.  Scene coaches are able to voluntarily offer their services at a discounted fee or pro-bono as part of this effort to reach underserved populations.</p></div>');
  
  // ---------------------------
  
  // --- Become a host page ---
  
  $('#how_to_use_page_content').html('<div class="info-bullet-header"><img src="https://static1.squarespace.com/static/55084d1ae4b0946a5dbcd770/t/551c718ce4b0e383d1747b72/1427925177583/Earn+Icon" />' + 
  '<h2>Earn money as a Scene Coach for working professionals</h2></div>' + 
  '<div class="info-bullet-content"><p>Follow the steps below to become a Scene Coach. Scene Coaches use their experience and domain knowledge to help others prepare for professional performances.  Similar to Airbnb, you will need to take a few steps to "get your place" ready so that buyers can find you, read information about your background, review pricing, book time on your calendar, and have a place to go when they schedule time with you.  By following the steps below you will fill out a listing on scene.ly that users of the site will be able to review.  scene.ly takes a small percentage of the fee and the remainder of the fee goes to you</p></div>' + 
  '<div class="info-bullet-header"><img src="http://www.myiconfinder.com/uploads/iconsets/256-256-b9fb29d265acef30b6e20d81bfb070eb-power.png" />' + 
  '<h2>Steps to becoming a Scene Coach</h2></div>' + 
  '<p>As scene.ly is relatively new to the online "scene," there are several steps you will need to take to wire up the required 3rd party platforms so that scene.ly can allow buyers to schedule your time automatically, pay you, and provide a dedicated online venue for your space..   Please review the "Scene Coach Rules and Responsibilities" and when you are ready follow the steps below to post a listing on the home page.</p>' +
  '<div  class="how-to-list"><ol class="how-to-list">' +   
  '<li><span class="number">1.</span><p><span class="leader">Create a listing</span>Click the button at the bottom of this page to start coaching. This will enable you to create a listing on scene.ly\'s home page.  There you will fill out information about your background, experience, and expertise so that potential buyers can find you</p></li>' +
  '<li><span class="number">2.</span><p><span class="leader">Connect your LinkedIn Profile</span> If you do not have a LinkedIn profile please create one on the LinkedIn site.  Copy the link of your profile page from LinkedIn and enter it into the scene.ly listing in the designated field</p></li>' +
  '<li><span class="number">3.</span><p><span class="leader">Connect your Calendly account</span>Don\'t have a calendly acccount?  It\'s easy to create one. Calendly is an excellent third-party web platform that allows people to reserve time on your calendar.  You specifiy what time periods you would like to reserve for scene.ly appointments, and buyers can automatically register during those time slots.  Calendly links to major calendar platform providers including Google, Outlook, Office 365 or iCloud</p></li>' +
  '<li><span class="number">4.</span><p><span class="leader">Set a price</span>It\'s up to you.  Your time is valuable, make sure you put a price that will make it worth your time while still making it valuable to your target audience.  scene.ly will contact you to see about your interest in providing specially reduced rates for our social reach-out program.  scene.ly asks you to price in 30 minute increments</p></li>' +
  '<li><span class="number">5.</span><p><span class="leader">Save your listing</span>Once you have filled out the information on the form, save it and review.  You will need to take one more step -- taking the video conferencing link scene.ly generated and add it to Calendly</p></li>' +
  '<li><span class="number">6.</span><p><span class="leader">Link your listing to your PayPal account</span>once your listing is saved, scene.ly will ask you to link to your PayPal account to accept payments.  Buyers will not be able to complete transactions until this is completeld.  When you do this you will need to enable PayPal business service to accept payments.  Business services can be enabled within PayPay at no additional cost, but this step is required to allow buyers to pay you through the platform.  <a href="https://www.paypal.com/us/webapps/mpp/product-selection" target="_blank">Learn more about PayPal business service for accepting payments</a></p></li>' +
  '<li><span class="number">7.</span><p><span class="leader">Add online video link to Calendly</span>One last step - now that you have created and saved your listing, scene.ly will generate a video conferencing link unique to your account.  You will use this to carry out your scenes virtually.  You will need to copy and paste that link (available and visible only to you on your listing page) and add it to your Calendly account. That way when someone does book a time through Calendly you will have preset the invitation to include the video link that they will need to use</p></li>' +
  '</ol></div>' +
  '<div class="info-bullet-header"><img src="https://s3.amazonaws.com/optimisemedia/wp-content/uploads/2015/04/Icon-Regulation-WoP-220px.png" /><h2>Scene Coach Rules and Responsibilities (please review)</h2></div>' +
  '<div class="info-bullet-content"><p>Critical to your success to as a scene coach is your ability to make others feel comfortable, safe, and willing to be vulnerable.  Respect and active listening are the bedrock of these short engagements and we ask you to embrace those.  We suggest you ask what brought the person who requested your availability why they did so, and to share an experience briefly from your past when you experienced a similar challenge and similar feelings.  The goal of scene.ly is to give people a chance to ask the questions they think might be considered "dumb" or "stupid" (they are not) and to take risks they might not otherwise take.  Please keep this ethic in mind as a scene.ly coach.</p></div>' + 
  '<div class="info-bullet-header"><img src="http://tomdrummond.com/wp-content/uploads/2016/01/go-icon.png" /><h2 style="padding-bottom:60px;">Ready? Click the link below to start coaching!</h2></div>' + 
  '<div class="info-bullet-header"><div id="sign_up"></div></div>');
   
   var $button = $('a.AddNewListingButton').first().detach().appendTo('#sign_up').show().css('width', '150px');;
  
   $('#sign_up').find('span').first().show();
   $('#sign_up').find('span').first().next().css('color', '#fff').css('padding', '0 10px 0 10px');
   
   $button.css('background-color', 'black !important');  
  
  // --------------------------
  
});
</script>