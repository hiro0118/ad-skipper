{
  const clickButton = (className) => {
    const button = document.getElementsByClassName(className)[0];
    if (button) button.click();
  };

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {

      if (!mutation.addedNodes.length) return;

      mutation.addedNodes.forEach((addedNode) => {

        if (addedNode.className === 'ytp-ad-player-overlay') {
          clickButton('ytp-ad-skip-button-container');
          console.log("Ad skipped.")
        }

        if (addedNode.className === 'ytp-ad-overlay-slot') {
          clickButton('ytp-ad-overlay-close-button');
          console.log("Overlay ad closed.")
        }
      })
    });
  });

  const config = {
    childList: true,
    subtree: true,
  };

  const page = document.getElementsByTagName('ytd-app')[0];
  observer.observe(page, config);
  console.log("Ad observer started.")
};