var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]'
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'

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
  });
}
function getThumbArray()
{
  'use strict';
  var thumball = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbarray = [].slice.call(thumball);
  return thumbarray;
}

function initializeEvents()
{
  'use strict';
  var thumbarray = getThumbArray();
  thumbarray.forEach(addThumbClickHandler);
}

initializeEvents();
