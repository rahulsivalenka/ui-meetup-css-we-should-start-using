import React, { useState } from 'react';
import { handleChange } from './CssLogicalPropsDemo';

const Grid = ({
  item,
  gridArea,
  gridTemplateAreas,
  container,
  label,
  children,
  bg = 'papayawhip',
  gap,
  gridTemplateRows,
  gridTemplateColumns,
  height,
  labelContent,
  padding,
}) => {
  console.log({ gridTemplateAreas });
  return (
    <div
      className="Grid-root"
      style={{
        minHeight: height && 50,
        gridGap: gap,
        position: 'relative',
        height: height ?? '100%',
        width: '100%',
        background: bg,
        padding: padding ?? 8,
        boxSizing: 'border-box',
        display: container
          ? `grid`
          : `block`,
        gridTemplateAreas:
          container &&
          `"${gridTemplateAreas
            .split('\n')
            .join(`" "`)}"`,
        gridArea: item && gridArea,
        '--grid-label': `"${
          label ??
          `${
            item
              ? `grid-area:${gridArea}`
              : container
              ? `display: grid`
              : 'Box'
          }`
        }"`,
        gridTemplateColumns:
          container &&
          gridTemplateColumns,
        gridTemplateRows:
          container && gridTemplateRows,
      }}
    >
      {labelContent ?? children}
    </div>
  );
};

export default function CssGridDemo() {
  const [
    area,
    setArea,
  ] = useState(`side header
side center
side footer`);
  const [gap, setGap] = useState(0);
  const [rows, setRows] = useState(
    `auto 1fr auto`
  );
  const [
    columns,
    setColumns,
  ] = useState(`200px auto`);

  return (
    <div
      className="split-container"
      style={{
        '--split-layout': `"split-left split-right"`,
        gridTemplateColumns: '1fr 2fr',
      }}
    >
      <div className="split-left">
        The below properties are applied
        on the Grid Container (display:
        grid)
        <br />
        <label>
          grid-template-areas:{` `}
          <textarea
            rows={6}
            value={area}
            onChange={handleChange(
              setArea,
              true
            )}
          />
        </label>
        <br />
        <label>
          grid-gap:{` `}
          <input
            type="number"
            value={gap}
            onChange={handleChange(
              setGap
            )}
          />
        </label>
        <br />
        <label>
          grid-template-columns:{` `}
          <input
            value={columns}
            onChange={handleChange(
              setColumns,
              true
            )}
          />
        </label>
        <br />
        <label>
          grid-template-rows:{` `}
          <input
            value={rows}
            onChange={handleChange(
              setRows,
              true
            )}
          />
        </label>
      </div>
      <div className="split-right">
        <Grid
          label="Grid Container (display: grid)"
          height={500}
          padding={30}
          container
          bg="Teal"
          gridTemplateAreas={area}
          gap={gap}
          gridTemplateColumns={columns}
          gridTemplateRows={rows}
        >
          <Grid
            item
            gridArea="side"
            bg="IndianRed"
            labelContent="Side"
          />
          <Grid
            item
            gridArea="header"
            bg="SteelBlue"
            labelContent="Header"
          />
          <Grid
            item
            gridArea="center"
            bg="DarkGoldenRod"
            labelContent="Center"
          />
          <Grid
            item
            gridArea="footer"
            bg="Sienna"
            labelContent="Footer"
          />
        </Grid>
      </div>
    </div>
  );
}
