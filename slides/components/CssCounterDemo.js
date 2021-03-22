import React, { useState } from 'react';

export default function CssCounterDemo() {
  const [funky, setFunky] = useState(
    false
  );
  return (
    <div
      className="split-container"
      style={{
        '--split-layout':
          '"split-left split-right"',
        gridAutoColumns: 'auto 1fr',
      }}
    >
      <div className="split-left">
        <label class="switch">
          <input
            class="switch-input"
            type="checkbox"
            checked={funky}
            onChange={e =>
              setFunky(
                e.currentTarget.checked
              )
            }
          />
          <span
            class="switch-label"
            data-on="Funky"
            data-off="Boring"
          ></span>
          <span class="switch-handle"></span>
        </label>

        <br />
        {funky && (
          <pre>{`ol > li {
  counter-increment: funkyLi;
  list-style: none;
  ...
}

ol > li:before {
  content: counter(funkyLi);
  ...
}`}</pre>
        )}
      </div>
      <div className="split-right">
        <ol
          className={
            funky ? `numbered-list` : ``
          }
        >
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <li key={i}>Item {i}</li>
            ))}
        </ol>
      </div>
    </div>
  );
}
