  <style>
  .marketplace-lander .coverimage-fade  { background:rgba(62, 40, 173, 0.4) !important; }
  
  .no-cover-photo.page-content {display: none; }

  .marketplace-lander .marketplace-title-header h1 { color: #fff !important;} 

  .marketplace-lander p {
      font-size: 1.625em;
      line-height: 1.38462em;
      font-weight: 100;
      margin: 0.75em auto;
      max-width: 22.5em;
  } 

  .marketplace-lander .marketplace-lander-content-title {
      margin-bottom: 0;
      margin-top: 0;
      font-size: 4.25em;
      line-height: 1.05882em;
      font-weight: 100;
      line-height: 0.9375em;
  }

  div#host-disclaimer { color:#000; border: 3px solid #CCC;  padding: 8px; background-color:fff; padding-left:15px; width:100%;}

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

  .home-toolbar { display:none; }
  
  .home-fluid-thumbnail-grid-author {display:none;}

  div.quantity-description { display: none; }

  .price-container > label:after { content: " per 30 minutes"; }

  label[for="listing_title"]:after { content: " (please put your first name and role you think best describes you)"; }

  label[for="listing_description"]:before { content: "Brief Bio: "; }
  label[for="listing_description"]:after { content: " of how you can help a peer or colleague prepare "; }

  label[for="listing_image"]:before { content: "Profile "; }
  label[for="listing_image"]:after { content: "(recommended to be a headshot photo of you) "; }

  label[for="listing_origin"]:before { content: "Your "; }
  label[for="listing_origin"]:after { content: " (so people know where you are based out of.  You will still hold your video scene virtually)"; }

  .fileinput-button:nth-of-type(1n+2) { display:none; }

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

  .reasons-cover {
    padding-top: 35px;
    padding-bottom: 15px;
}
.reason {
    float: left;
    width: 17%;
    margin: 0 1.5%;
    height: auto;
    text-align: center;
    line-height: 26px
}
.reason strong {
    display: block;
    margin-bottom: 8px
}


.icon-hexagon-clock {
    width: 55px;
    height: 55px;
    top: -4px;
    position: relative
}

h2.centered {
    padding-bottom: 50px;
    max-width: 700px;
    width: 95%;
    text-align: center;
    margin: 0 auto 40px;
    font-size:2em;
}
h2.centered.tablet,
h2.centered.mobile {
    display: none
}

h6.reasons,
h6.stories-title {
    text-align: center;
    margin: 0 auto 50px;
    padding-bottom: 30px
}

h6 {
    font-family: "Gilroy-Medium", "Helvetica", "Arial", sans-serif;
    font-weight: normal;
    font-style: normal;
    letter-spacing: 0.03em;
    color: #323232;
    font-size: 13px;
    letter-spacing: 8px;
    text-transform: uppercase;
    border-bottom: 1px solid #CCC
}

.main-cover reasons-cover {
  padding:40px;
}
.icon-hexagon-bg {
    height: auto;
    margin-bottom: 5px;
    background: url("https://www.sharetribe.com/images/svg/hexagon.36556566.svg") no-repeat center center
}

.icon-nonhex-bg {
    height: auto;
    margin-bottom: 5px;
}

.icon-arrow-bg {
    height: auto;
    margin-bottom: 0px;
}

.icon-hexagon {
    width: 55px;
    height: 170px;
    top: -4px;
    position: relative
}

.icon-hexagon-find {
    max-width: 100%;
    height: auto;
    width: auto\9; /* ie8 */
    position: relative;
    /* filter:grayscale(100%); */
    clip: rect(0px,0px,150px,0px);
}

.main-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    padding-bottom: 200px;
}


.main-wrapper-five {
    width:100%
    margin: 0 auto;
    position: relative;
    padding-bottom: 200px;
}



.reasons-cover {
    padding-top: 80px;
    padding-bottom: 100px;
}

.page-content { margin-top:25px; }

  </style>

  <script src="https://apis.google.com/js/platform.js" async defer></script>
  <script
    src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g="
    crossorigin="anonymous" ></script>
   </div>

  <script>

  /* scene.ly namespace and javascript object */
  var SCN = {};

  SCN.root = ( location.pathname == "/" );
  
  SCN.authenticated = function() {
    return !$('a[href="/en/signup"]').is(':visible');
  }
  
  SCN.get_qs_param = function getURLParameter(name) {
                          return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
                        };
                        
  SCN.get_FAQ_html = function() {
    return '<div><h1>FAQs</h1>' + 
              '<h2>What is a "scene"?</h2>' +   
              '<p>lorem ipsum sudo facto</p>' + 
              '<h2>What is a "scene coach"?</h2>' + 
              '<p>answer answer answer </p>' + 
              '<h2>Can anyone become a coach?</h2>' + 
              '<p>lorem ipsum sudo facto</p>' +
              '<h2>Where are scenes held?</h2>' + 
              '<p>lorem ipsum sudo facto</p>' +
              '<h2>What is the process if I want to book a coach?</h2>' + 
              '<p>lorem ipsum sudo facto</p>' +
              '<h2>How do I schedule time with a coach?</h2>' + 
              '<p>lorem ipsum sudo facto</p>' +
              '<h1>Questions about becoming a Coach' + 
              '<h2>How should I set my price?</h2>' + 
              '<p>lorem ipsum sudo facto</p>' +
              '<h2>I have a certification, can I list it?</h2>' + 
              '<p>lorem ipsum sudo facto</p>' +
              '<h2>Does scene.ly offer a certification?</h2>' + 
              '<p>lorem ipsum sudo facto</p>' +
              '</div>';
  };

                        
  SCN.get_tips_html = function() {
    return '<div><h1>Coaching Tips</h1>' + 
              '<h2>How can I let buyers schedule time with me automatically?</h2>' +   
              '<p>lorem ipsum sudo facto</p>' + 
              '<h2>How do I host a video chat after a buyer reserves my time?</h2>' + 
              '<p>answer answer answer </p>' + 
              '<h2>What steps do I need to take once a buyer finalizes the transaction?</h2>' + 
              '<p>lorem ipsum sudo facto</p>' +
              '</div>';
  };
  /* -------------------------------- */


  jQuery(function() { 

   
    // --- Home Page Customizations ---
    
    
    if ( SCN.root && !SCN.authenticated() ) {
              
        $('section.marketplace-lander').after('<div id="how_it_works" class="main-cover reasons-cover">' +
          '<div class="main-wrapper reasons-wrapper">' +
           '<h6 class="reasons">How it works</h6>' +
           '<h2 class="centered">Find a coach, set a time, make a scene</h2>' + 
           '<div class="reason">' +
           '  <div class="icon-nonhex-bg">' +
           '    <img class="icon-hexagon-find" src="https://image.freepik.com/free-vector/people-search_23-2147502905.jpg" alt="">' +
           '    </div> <p>' +
           '      <strong>Browse listings</strong>Find a coach from our network that you want to rehearse with</p>' +
           '  </div>' +
             '<div class="reason">' +
           '  <div class="icon-arrow-bg">' +
           '    <img class="svg icon-hexagon" src="https://d1j8zk9fzkkk7a.cloudfront.net/assets/gray_arrow_up-fd6fc04e05435409e67879a9cc1abd055ea67f587424ccc75d7c61d7aecbc0d7.svg">' +
           '    </div> <p>' +
           '      <strong></strong></p>' +
           '  </div>' +
          '<div class="reason">' +
           '  <div class="icon-nonhex-bg">' +
           '    <img class="icon-hexagon-find" src="https://image.freepik.com/free-vector/schedule-background-design_1300-254.jpg" alt="">' +
           '    </div> <p>' +
           '      <strong>Schedule a scene</strong>Purchase time and schedule with your scene coach</p>' +
           '  </div>' +
             '<div class="reason">' +
           '  <div class="icon-arrow-bg">' +
           '    <img class="svg icon-hexagon" src="https://d1j8zk9fzkkk7a.cloudfront.net/assets/gray_arrow_up-fd6fc04e05435409e67879a9cc1abd055ea67f587424ccc75d7c61d7aecbc0d7.svg">' +
           '    </div> <p>' +
           '      <strong></strong></p>' +
           '  </div>' +
           '<div class="reason">' +
           '  <div class="icon-nonhex-bg">' +
           '    <img class="icon-hexagon-find" src="https://image.freepik.com/free-vector/people-with-speech-bubbles_23-2147504958.jpg" alt="">' +
           '    </div> <p>' +
           '      <strong>Rehearse online</strong>scene.ly creates a dedicated virtual room for you to rehearse in</p>' +
           '  </div>' +
           '        <div class="clear"/>' +
           '      </div>');
           
         $('#how_it_works').after('<div id="five-reasons" class="main-cover-five reasons-cover">' +
          '<div class="main-wrapper-five reasons-wrapper-five">' +
           '<h6 class="reasons" style="max-width:1100px">5 reasons to use scene.ly</h6>' +
           '<h2 class="centered">“For the things we have to learn before we can do them, we learn by doing them.” <span style="font-style:italic;font-size:.7em;">-Aristotle</span></h2>' + 
           '<div class="reason">' +
           '  <div class="icon-hexagon-bg">' +
           '   <img class="svg icon-hexagon" src="https://www.sharetribe.com/images/icons/timer.048700d4.svg" alt=""> ' +
           '    </div> <p>' +
           '      <strong>Develop muscle memory</strong>that only comes with repeated practice</p>' +
           '  </div>' +
            '<div class="reason">' +
           '  <div class="icon-hexagon-bg">' +
           '   <img class="svg icon-hexagon" src="https://www.sharetribe.com/images/icons/timer.048700d4.svg" aalt=""> ' +
           '    </div> <p>' +
           '      <strong>Take risks</strong>by connecting with someone somewhere not where you are!</p>' +
           '  </div>' +
            '<div class="reason">' +
           '  <div class="icon-hexagon-bg">' +
           '   <img class="svg icon-hexagon" src="https://www.sharetribe.com/images/icons/timer.048700d4.svg" alt=""> ' +
           '    </div> <p>' +
           '      <strong>Get an honest assessment</strong>Afraid your friends won\'t tell it to you straight?  Our coaches will!</p>' +
           '  </div>' +
            '<div class="reason">' +
           '  <div class="icon-hexagon-bg">' +
           '   <img class="svg icon-hexagon" src="https://www.sharetribe.com/images/icons/timer.048700d4.svg" alt=""> ' +
           '    </div> <p>' +
           '      <strong>Personalized Feedback</strong>scenes are devoted entirely to you</p>' +
           '  </div>' +
            '<div class="reason">' +
           '  <div class="icon-hexagon-bg">' +
           '   <img class="svg icon-hexagon" src="https://www.sharetribe.com/images/icons/timer.048700d4.svg" alt=""> ' +
           '    </div> <p>' +
           '      <strong>Develop ongoing relationships</strong>to gain trusted advisors and mentorship</p>' +
           '  </div>' +
           '        <div class="clear"/>' +
           '      </div>');

    }
   
    // --------------------------------

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
     
     
    if ( SCN.root ) {
      $('section.marketplace-lander').html('').append('<div class="coverimage">' +
            '<figure class="marketplace-cover fluidratio">' +
            '<div class="lander-content marketplace-lander-content">' +
            '<h1 class="marketplace-lander-content-title">Practice for Professionals</h1>' +
            '<p class="marketplace-lander-content-description">Hire peers, colleagues, and mentors to practice for your next interview, pitch, or presentation</p>' +
            '</div>' +
            '</figure>' +
            '</div>');
            
      $('.no-cover-photo.page-content').show();
      $('.page-content').find('.wrapper').prepend('<h6 class="reasons" style="max-width:1100px">Get started</h6>' +
           '<h2 class="centered">Start browsing listings below to find a coach today!<span style="font-style:italic;font-size:.7em;"></span></h2>');
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
      '<p>By completing this Scene Coach listing you agree to honor scene.ly\'s <a href="https://practiceperfect.sharetribe.com/en/infos/how_to_use" target="_blank">Scene Coach Rules and Responsibilities</p></div>');
      
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
      return parseInt($(this).css('width')) + 200;
     });
     $('a[data-pid="About 0"]').text("About scene.ly");
     $('a[data-pid="Contact us 1"]').text("Become a coach").attr('href', '/en/infos/how_to_use');
     $('a[data-pid="Invite new members 2"]').text("Contact").attr('href', '/en/user_feedbacks/new');
     $('a[data-pid="Invite new members 2"]').after('<a class="MenuPriority__priorityLink__moBbL FAQ" href="/infos/about?FAQ=1">FAQ</a>');
    // ---------
    
    // --- Sidebar Links on "About" and "How it works"
     $('div.left-navi > a[title="About"]').find('div.left-navi-link-text').text('About scene.ly');
     $('div.left-navi > a[title="How it works"]').find('div.left-navi-link-text').text('Become a coach');   
     $('div.left-navi > a[title="How it works"]').after('<a class="left-navi-link FAQ" href="/infos/about?FAQ=1" title="FAQ">' + 
      '<div class="left-navi-link-icon ss-help"></div>' + 
      '<div class="left-navi-link-text">FAQ</div>' + 
      '</a>');
     $('div.left-navi > a[title="FAQ"]').after('<a class="left-navi-link" href="/infos/about?tips=1" title="Coaching Tips">' + 
      '<div class="left-navi-link-icon ss-bullseye"></div>' + 
      '<div class="left-navi-link-text">Coaching Tips</div>' + 
      '</a>');
        
    // ----------------
    
    // --- collapsed top nav - falls to the side when you shrink the browser (might be mobile too) ---  
     $('.MenuItem_link[href="/en/infos/about"]').text('About scene.ly');  
     $('.MenuItem_link[href="/en/user_feedbacks/new"]').text("Become a coach").attr('href', '/en/infos/how_to_use'); 
     $('.MenuItem_link[href="/en/invitations/new"]').text('Contact').attr('href', '/en/user_feedbacks/new');
    
    // --------------------------------------
        
    // --- Sidebar Links on info page (when they collapse due to width compression/mobile (they turn to a dropdown)
    
     $('.left-navi-menu.toggle-menu').find('a[href="/en/infos/about"]').text('About scene.ly');  
     $('.left-navi-menu.toggle-menu').find('a[href="/en/infos/how_to_use"]').text('Become a coach');
     $('.left-navi-menu.toggle-menu').find('a[href="/en/infos/how_to_use"]')
      .after('<a href="/infos/about?FAQ=1" class="FAQ" title="FAQ">FAQ</a>');
    
    // --------------------------
     
     // hide links base on pages - edit listing pages also has icon links and needs to be avoided
     $('#about_page_content').closest('.page-content').find('.icon-with-text-container').hide();   
     $('#how_to_use_page_content').closest('.page-content').find('.icon-with-text-container').hide();
    // -----------
    
    // ----- mobile links
    $('.OffScreenMenu_scrollpane').find('a[href="/infos/about"]').text('About scene.ly');
    $('.OffScreenMenu_scrollpane').find('a[href="/user_feedbacks/new"]').text("Become a coach").attr('href', '/en/infos/how_to_use');
    $('.OffScreenMenu_scrollpane').find('a[href="/invitations/new"]').text("Contact").attr('href', '/en/user_feedbacks/new')
      .closest('div').after('<div class=" FAQ MenuItem MenuItem__menuitem__3_-l_  MenuMobile__menuSectionMenuItem__2yMLC"><a class="MenuItem_link MenuItem__menuitemLink__2Eedg MenuMobile__menuSectionMenuItemLink__GfyW6" href="/infos/about?FAQ=1" style="color:#4a90e2;" data-reactid="27">FAQ</a></div>');
    
    // -----------------
    

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
    '<div class="info-bullet-content"><p>Follow the steps below to become a Scene Coach. Scene Coaches use their experience and domain knowledge to help others prepare for professional performances.  You will need to take a few steps to get your profile and required tools ready so that buyers can find you, read information about your background, review pricing, book time on your calendar, and have a place to go when they schedule time with you.  By following the steps below you will fill out a listing on scene.ly that users of the site will be able to review.  scene.ly takes a small percentage of the fee and the remainder of the fee goes to you</p></div>' + 
    '<div class="info-bullet-header"><img src="http://www.myiconfinder.com/uploads/iconsets/256-256-b9fb29d265acef30b6e20d81bfb070eb-power.png" />' + 
    '<h2>Steps to becoming a Scene Coach</h2></div>' + 
    '<p>As scene.ly is relatively new to the online "scene," there are several steps you will need to take to wire up the required 3rd party platforms so that scene.ly can allow buyers to schedule your time automatically, pay you, and provide a dedicated online venue for your space..   Please review the "Scene Coach Rules and Responsibilities" and when you are ready follow the steps below to create a listing.</p>' +
    '<div  class="how-to-list"><ol class="how-to-list">' +   
    '<li><span class="number">1.</span><p><span class="leader">Create a listing</span>Click the "Start Coaching" button at the bottom of this page. This will enable you to create a listing on scene.ly\'s home page.  There you will fill out information about your background, experience, expertise, and pricing so that potential buyers can find you.</p></li>' +  
    '<li><span class="number">2.</span><p><span class="leader">Set up your PayPal account to accept payments</span>Once your listing is saved, scene.ly will ask you to link to your PayPal account to accept payments.  Buyers will not be able to complete transactions until this is completeld.  When you do this you will need to enable PayPal business service to accept payments.  Business services can be enabled within PayPay at no additional cost, but this step is required to allow buyers to pay you through the platform.  <a href="https://www.paypal.com/us/webapps/mpp/product-selection" target="_blank">Learn more about PayPal business service for accepting payments</a></p></li>' +
    '<li><span class="number">3.</span><p><span class="leader">Review the "Coaching Tips"</span>There are optional steps you can take to make the coaching experience easier for buyers.  Setting up a Calendly account will let buyers automatically schedule time on your calendar based on windows of time you specify for scene.ly appointments.  Understanding how scene.ly\'s virtual venues work.  Information about this and more is available in the <a href="/infos/about?tips=1">coaching tips section.</a></p></li>' +
    '</ol></div>' +
    '<div class="info-bullet-header"><img src="https://s3.amazonaws.com/optimisemedia/wp-content/uploads/2015/04/Icon-Regulation-WoP-220px.png" /><h2>Scene Coach Rules and Responsibilities</h2></div>' +
    '<div class="info-bullet-content"><p>Critical to your success to as a scene coach is your ability to make others feel comfortable, safe, and willing to be vulnerable.  Respect and active listening are the bedrock of these short engagements and we ask you to embrace those.  We suggest you ask what brought the person who requested your availability why they did so, and to share an experience briefly from your past when you experienced a similar challenge and similar feelings.  The goal of scene.ly is to give people a chance to ask the questions they think might be considered "dumb" or "stupid" (they are not) and to take risks they might not otherwise take.  Please keep this ethic in mind as a scene.ly coach.  When a buyer reserves time with you, you are responsible for scheduling a time and being present for the appointment.  You are obligated to communicate any changes to the agreed upon appointment at least 24 hours in advance.</p></div>' + 
    '<div class="info-bullet-header"><img src="http://tomdrummond.com/wp-content/uploads/2016/01/go-icon.png" /><h2 style="padding-bottom:60px;">Ready? Click the link below to start coaching!</h2></div>' + 
    '<div class="info-bullet-header"><div id="sign_up"></div></div>');
     
     var $button = $('a.AddNewListingButton').first().detach().appendTo('#sign_up').show().css('width', '150px');;
    
     $('#sign_up').find('span').first().show();
     $('#sign_up').find('span').first().next().css('color', '#fff').css('padding', '0 10px 0 10px');
     
     $button.css('background-color', 'black !important');  
    
    // --------------------------
    
      // --- create FAQs -----
      // --- based on anchor created in sidebar links - hijack about page and check for querystring ---
      // --- this needs to run last to handle query string param after other content is loaded, or needs to be refactored to handle if/then logic based on qs
      var show_FAQ = SCN.get_qs_param('FAQ');
      
      if ( show_FAQ ) {  
        $('div')
          .filter(function() {
              return this.id.match(/.*_page_content/);
          })
          .html( SCN.get_FAQ_html() );
            
          $('a.left-navi-link').removeClass('selected');
          $('a.FAQ').addClass('selected');    
      }
    
    // ------------------------------------------------------------
    
    // --- coaching tips
      var show_tips = SCN.get_qs_param('tips');
      
      if ( show_tips ) {  
        $('div')
          .filter(function() {
              return this.id.match(/.*_page_content/);
          })
          .html( SCN.get_tips_html() );
            
          $('a.left-navi-link').removeClass('selected');
          $('a.tips').addClass('selected');    
      }
    
    // ------------------
    
  });
  </script>