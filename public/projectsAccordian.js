document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.project-bar');

  accordions.forEach(accordion => {
    const icon = accordion.querySelector('.icon');
    const title = accordion.querySelector('.title');
    const details = accordion.querySelector('.details');

    accordion.addEventListener('click', () => {
      // Close other accordions
      accordions.forEach(otherAccordion => {
        if (otherAccordion !== accordion) {
          const otherIcon = otherAccordion.querySelector('.icon');
          const otherTitle = otherAccordion.querySelector('.title');
          const otherDetails = otherAccordion.querySelector('.details');

          otherIcon.classList.remove('active');
          otherTitle.classList.remove('active');
          otherDetails.style.maxHeight = null;
          otherDetails.classList.remove('active');
        }
      });

      // Toggle current accordion
      if (icon.classList.contains('active')) {
        icon.classList.remove('active');
        title.classList.remove('active');
        details.style.maxHeight = null;
        details.classList.remove('active');
      } else {
        icon.classList.add('active');
        title.classList.add('active');
        details.style.maxHeight = details.scrollHeight + 'px'; // .scrollHeight returns an integer value only so we need to add 'px' as unit
        details.classList.add('active');
      }
    });
  });
});