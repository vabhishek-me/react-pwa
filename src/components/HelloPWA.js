/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

const HelloPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const installApp = () => {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null);
      });
  };

  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hello PWA!</h1>
          <h2 className="subtitle">Welcome to React PWA.</h2>
          <button type="button" onClick={installApp} className="button is-white">Install App</button>
        </div>
      </div>
    </section>
  );
};

export default HelloPWA;
