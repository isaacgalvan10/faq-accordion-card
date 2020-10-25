const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', function () {
    accordionItemHeader.classList.toggle('active');

    const accordionItemBody = accordionItemHeader.nextElementSibling;
    console.log(accordionItemBody);

    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
      accordionItemBody.style.overflow = 'visible';
    } else {
      accordionItemBody.style.maxHeight = 0;
      accordionItemBody.style.overflow = 'hidden';
    }
  })
});