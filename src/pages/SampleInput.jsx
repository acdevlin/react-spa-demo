import '../stylesheets/Petite.css';
import '../stylesheets/SampleInput.css';

import React, { useState, useEffect } from 'react';

const SampleInput = () => {
  const [textInput, setTextInput] = useState('');
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

    const trimmedText = textInput.trim();

    if (!trimmedText) {
      setToastMessage('Please enter some text first.');
      return;
    }

    setToastMessage(`Submitted: ${trimmedText}`);
    setTextInput('');
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
          className="sample-text-input"
          type="text"
          placeholder="Enter something..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
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