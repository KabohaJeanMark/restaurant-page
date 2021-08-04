const contactPage = (mainContent) => {
  mainContent.innerHTML = '';

  const contactContainer = document.createElement('div');
  contactContainer.className = 'jumbotron';

  const contactHeading = document.createElement('h2');
  contactHeading.textContent = 'Contact Us';

  const location = document.createElement('div');
  location.classList.add('p-2', 'm-2');
  const locationHeading = document.createElement('h3');
  locationHeading.textContent = 'Location';
  const locationText = document.createElement('p');
  locationText.textContent = 'Haji Musa Kasule rd, Wandegeya, Kampala opposite Public service';

  const numbers = document.createElement('div');
  numbers.classList.add('p-2', 'm-2');
  const numbersHeading = document.createElement('h3');
  numbersHeading.textContent = 'Contact Numbers';
  const contactNums = document.createElement('p');
  contactNums.textContent = '+256787000000, +256080025202, +256900560000';

  const contactHours = document.createElement('div');
  contactHours.classList.add('p-2', 'm-2');
  const timeHeading = document.createElement('h3');
  timeHeading.textContent = 'Contact Hours';
  const weekdays = document.createElement('p');
  weekdays.textContent = 'Monday - Thursday, 10am - 7pm';
  const weekends = document.createElement('p');
  weekends.textContent = 'Friday - Saturday, 11am - 10pm';
  const sundays = document.createElement('p');
  sundays.textContent = 'Sunday 12pm - 3pm';

  location.appendChild(locationHeading);
  location.appendChild(locationText);

  numbers.appendChild(numbersHeading);
  numbers.appendChild(contactNums);

  contactHours.appendChild(timeHeading);
  contactHours.appendChild(weekdays);
  contactHours.appendChild(weekends);
  contactHours.appendChild(sundays);

  contactContainer.appendChild(contactHeading);
  contactContainer.appendChild(location);
  contactContainer.appendChild(numbers);
  contactContainer.appendChild(contactHours);

  mainContent.appendChild(contactContainer);

  return mainContent;
};

export default contactPage;