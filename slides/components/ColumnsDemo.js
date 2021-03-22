import React, { useState } from 'react';
import { handleChange } from './CssLogicalPropsDemo';

export default function ColumnsDemo() {
  const [
    columns,
    setColumns,
  ] = useState(`200px 2`);
  return (
    <div
      className="split-container"
      style={{
        '--split-layout': `"split-left split-right"`,
        gridTemplateColumns:
          '250px 1fr',
      }}
    >
      <div className="split-left">
        <label>
          columns:{` `}
          <input
            value={columns}
            onChange={handleChange(
              setColumns,
              true
            )}
          />
        </label>

        <br />
        <pre
          style={{ fontSize: '0.8rem' }}
        >
          {`columns: [column-width] [column-count];`}
        </pre>
        {`column-width is the min width of a column`}
      </div>
      <div
        className="split-right"
        style={{
          padding: 30,
          columns,
        }}
      >
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Integer elit neque, imperdiet
          quis magna sit amet, faucibus
          mollis justo. Nam sed felis
          nec neque placerat vestibulum.
          Praesent a lectus eros.
          Suspendisse metus sapien,
          accumsan at turpis at, maximus
          dictum velit. Duis porta eget
          neque nec pulvinar. Duis
          ornare commodo semper.
          Pellentesque id euismod odio,
          non rhoncus dolor.
          Pellentesque habitant morbi
          tristique senectus et netus et
          malesuada fames ac turpis
          egestas. In dapibus ex non
          ornare bibendum. Maecenas
          fermentum gravida fringilla.
          Donec luctus, magna a faucibus
          tempus, nisi nulla maximus
          dui, quis porttitor nisl ex et
          ligula. Fusce lacinia libero
          tellus, in fermentum enim
          pulvinar sit amet. Donec
          dignissim metus sit amet odio
          dapibus, vitae tempor ex
          vulputate. Nulla at elit a
          nibh scelerisque blandit nec a
          elit. In non orci sed leo
          fringilla venenatis finibus
          quis enim. Phasellus non
          commodo arcu.
        </p>

        <p>
          Proin id turpis id nisi
          gravida varius et ut nisi.
          Fusce dignissim congue mi id
          aliquam. Duis eros arcu,
          pellentesque quis justo in,
          posuere lobortis elit. Aliquam
          erat volutpat. Aliquam erat
          volutpat. Aenean vitae
          convallis ante. Cras turpis
          urna, luctus a lobortis non,
          pellentesque ut nulla. Nunc
          fermentum, massa in lobortis
          pellentesque, purus orci
          auctor lacus, et ultrices
          lectus eros sed libero.
        </p>

        <p>
          Integer non est ut magna
          condimentum interdum a id
          massa. Proin tempor leo mi,
          quis luctus ex efficitur ac.
          Maecenas dolor eros, venenatis
          ac bibendum sed, pretium eget
          tortor. Donec maximus, dolor a
          ultrices imperdiet, nisi diam
          sollicitudin tortor, quis
          mattis libero ligula id neque.
          Mauris elit turpis, rhoncus ac
          ex nec, volutpat porttitor
          est. Suspendisse lacinia urna
          lacus, vel elementum tellus
          pharetra non. Pellentesque at
          orci magna. In vitae ex elit.
          Vestibulum at odio non est
          tempor suscipit ac eget purus.
        </p>
      </div>
    </div>
  );
}
