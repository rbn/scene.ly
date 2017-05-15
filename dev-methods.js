 SCN.customize_home_DEV = function() {
    
    SCN.post_dev_banner();
    
    if ( SCN.root && !SCN.authenticated() && !SCN.show_profiles ) {

        $('article.page-content').find('.wrapper').prepend(SCN.get_why_use_html_DEV());
        $('#why_use').after( SCN.get_what_is_html_DEV() );  
        $('#what_is').after( SCN.get_how_it_works_html() );         
         $('#how_it_works').after( SCN.get_five_reasons_html() );
    }          
    
    if ( SCN.root ) {
      
      // hide topbar on root
      $('#topbar-container').hide();
      
      if ( ! SCN.show_profiles ) {
        $('section.marketplace-lander').html('').append('<div class="coverimage">' +
              '<figure class="marketplace-cover fluidratio">' +
              '<div class="lander-content marketplace-lander-content">' +
              '<h1 class="marketplace-lander-content-title">Practice makes Perfect</h1>' +
              '<p id="call-to-action" class="marketplace-lander-content-description">Even in the workplace! Prepare for your next interview, pitch, or public speaking engagement by practicing with peers</p>' + 
              '</div>' +
              '</figure>' +
              '</div>');
              
        // hide listings and swap in the styled scenes html
        $('.home-toolbar').before( SCN.get_styled_scene_types() );
        $('.home-toolbar').hide().next().hide();
      }
      else {
        $('section.marketplace-lander').html('').append('<div class="coverimage">' + 
            '<figure class="marketplace-cover-small fluidratio"></figure>' + 
            '            <div class="coverimage-fade">' + 
            '            <figure class="marketplace-cover-small-fade fluidratio"></figure>' + 
            '            </div>' + 
            '            </div>' + 
            '            <div class="title-container">' + 
            '            <div class="title-header-wrapper">' + 
            '            <div class="marketplace-title-header">' + 
            '            <h1>Find a coach</h1>' + 
            '            </div>' + 
            '            </div>' + 
            '            </div>');

      }
        
    if ( ! SCN.authenticated() ) {
      $('p#call-to-action').append('<div id="find-coach" style="padding-top:15px;"><a id="find-coach" class="MenuMobile__offScreenHeaderNewListingButton__3ssaA AddNewListingButton AddNewListingButton__button__2H8yh" href="#" title="Make a scene" data-reactid="12" style="width: 200px;"><span class="AddNewListingButton__backgroundContainer__4Nn3Z AddNewListingButton_background" style="background-color: rgb(0, 204, 122); display: inline;" data-reactid="13"></span><span class="AddNewListingButton__mobile__2JhHF AddNewListingButton_mobile" style="color: rgb(255, 255, 255); padding: 0px 10px;font-size:.8em;font-weight:200;" data-reactid="14">Make a scene</span><span class="AddNewListingButton__desktop__17Luf AddNewListingButton_desktop" data-reactid="15">Make a scene</span></a></div>');
      
      $('#find-coach').on('click', function() {
        SCN.scroll_to_anchor('scene-types');
      });
    }

    $('.no-cover-photo.page-content').show();
    // $('.page-content').find('.row').first().prepend('<a name="get-started"><h6 class="reasons" style="max-width:1100px">Get started</h6></a>' +
     //    '<h2 class="centered">Start browsing listings below to find a coach today!<span style="font-style:italic;font-size:.7em;"></span></h2>');
    }
  }
  