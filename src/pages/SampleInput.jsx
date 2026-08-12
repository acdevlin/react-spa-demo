import '../stylesheets/Petite.css';
import '../stylesheets/SampleInput.css';

import React, { useState, useEffect } from 'react';

const SampleInput = () => {
  const [titleText, setTitleText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (!toastMessage) return undefined;

    const timer = setTimeout(() => {
      setToastMessage('');
    }, 2500);

    return () => clearTimeout(timer);
  }, [toastMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = titleText.trim()
    const trimmedBody = bodyText.trim();

    if (!trimmedTitle) {
      setToastMessage('Please enter a title.');
      return;
    }

    if (!trimmedBody) {
      setToastMessage('Please enter body text.');
      return;
    }

    setToastMessage(`Submitted a new post.\n\nTitle: ${trimmedTitle}\nBody: ${trimmedBody}`);
    setBodyText('');
    setTitleText('');
  };

  return (
    <>
      <header className="theme-light text-center-desktop text-center-mobile">
        <div className="container-text">
          <h1>Sample Input Page</h1>
        </div>
      </header>

      <section className="w-820px sample-input-section">
        <input
          className="title-text-input"
          placeholder="Enter Title..."
          value={titleText}
          type="text"
          onChange={(e) => setTitleText(e.target.value)}
        />
        <textarea
          className="body-text-input"
          placeholder='Enter body...'
          value={bodyText}
          onChange={(e) => setBodyText(e.target.value)}
        />

        <button
          className="sample-button"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {toastMessage && (
          <div
            className="sample-toast"
            aria-live="polite"
            onClick={() => setToastMessage('')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setToastMessage('');
              }
            }}
          >
            <span className="sample-toast-message">{toastMessage}</span>
          </div>
        )}
      </section>
    </>
  );
};

export default SampleInput;