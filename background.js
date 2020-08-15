// calling hide_ads function when page get loaded
window.onload = function() {
  
  setInterval(hide_ads, 1000);
}

function hide_ads() {
  
  // hiding ads provided by google
  $.each($('iframe[id*="google_ads_iframe"], iframe[id*="aswift_"], iframe[id^="ad_"]'), function() {
    
    $(this).slideUp();
    
  });
  
  // hiding youtube ads while watching the video
  $('[class*="video-ads"').slideUp();
}

