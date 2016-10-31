var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]'
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

function setDetails(imgurl, imgtitle)
{
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailImage.setAttribute('src', imgurl);
  detailTitle.textContent = imgtitle;
}
//setDetails('img/otter2.jpg', 'go fuck yourself');
function imgurlFromThumb (thumbnail)
{
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}
function imgtitleFromThumb (thumbnail)
{
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}
function setDetailsFromThumb(thumbnail)
{
  'use strict';
  setDetails(imgurlFromThumb(thumbnail), imgtitleFromThumb(thumbnail));
}
function addThumbClickHandler(thumb)
{
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}
function getThumbArray()
{
  'use strict';
  var thumball = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbarray = [].slice.call(thumball);
  return thumbarray;
}
function hideDetails()
{
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}
function showDetails()
{
  'use strict';
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}
function addKeyPressHandler()
{
  'use strict';
  document.body.addEventListener('keyup', function(event){
    event.preventDefault();
    console.log(event.keyCode);
    if(event.keyCode === ESC_KEY)
    {
      hideDetails();
    }
  })
}
function initializeEvents()
{
  'use strict';
  var thumbarray = getThumbArray();
  thumbarray.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initializeEvents();
