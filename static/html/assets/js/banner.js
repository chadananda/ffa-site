document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('.banner');
  const closeButton = document.querySelector('.close');
  const bannerClosedTimestamp = localStorage.getItem('bannerClosedTimestamp');

  const showBanner = () => {
    banner.style.display = 'block';
    closeButton.addEventListener('click', hideBanner);
  };

  const hideBanner = () => {
    banner.style.display = 'none';
    localStorage.setItem('bannerClosedTimestamp', Date.now());
  };

  const isPast24Hours = (timestamp) => {
    // const twentyFourHours = 24 * 60 * 60 * 1000;
    const twentyFourHours = 4000;
    return Date.now() - timestamp >= twentyFourHours;
  };

  if (!bannerClosedTimestamp || isPast24Hours(bannerClosedTimestamp)) {
    showBanner();
  } else {
    banner.style.display = 'none';
    closeButton.removeEventListener('click', hideBanner);
  }
});
