import React, { useState } from 'react';

export const handleChange = (
  setter,
  isNotNumber
) => e =>
  setter(
    !isNotNumber
      ? +e.currentTarget.value
      : e.currentTarget.value
  );

function BoxModel({
  borderTopWidth = 1,
  borderLeftWidth = 1,
  borderRightWidth = 1,
  borderBottomWidth = 1,
  marginTop = 10,
  marginLeft = 20,
  marginRight = 30,
  marginBottom = 40,
  paddingTop = 10,
  paddingLeft = 20,
  paddingRight = 30,
  paddingBottom = 40,
  children,
  writingMode,
  direction,
}) {
  const defaultChild = <div>Test</div>;
  return (
    <>
      <div
        className="BoxModel-container"
        style={{
          paddingTop: marginTop,
          paddingRight: marginRight,
          paddingBottom: marginBottom,
          paddingLeft: marginLeft,
        }}
      >
        <div
          className="BoxModel-border-padding-container"
          style={{
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            borderStyle: 'solid',
            borderColor: 'black',
            borderTopWidth,
            borderRightWidth,
            borderBottomWidth,
            borderLeftWidth,
          }}
        >
          <div className="BoxModel-content">
            {children ?? defaultChild}
          </div>
        </div>
      </div>
      <pre
        style={{
          direction: 'ltr',
          writingMode: 'horizontal-tb',
        }}
      >
        {`{
  direction: ${direction};
  writing-mode: ${writingMode};

  padding-top: ${paddingTop}px;
  padding-left: ${paddingLeft}px;
  padding-right: ${paddingRight}px;
  padding-bottom: ${paddingBottom}px;

  margin-top: ${marginTop}px;
  margin-left: ${marginLeft}px;
  margin-right: ${marginRight}px;
  margin-bottom: ${marginBottom}px;
}`}
      </pre>
    </>
  );
}

function LogicalPropsModel({
  borderBlockStartWidth = 1,
  borderBlockEndWidth = 1,
  borderInlineStartWidth = 1,
  borderInlineEndWidth = 1,
  marginBlockStart = 10,
  marginInlineStart = 20,
  marginInlineEnd = 30,
  marginBlockEnd = 40,
  paddingBlockStart = 10,
  paddingInlineStart = 20,
  paddingInlineEnd = 30,
  paddingBlockEnd = 40,
  children,
  writingMode,
  direction,
}) {
  const defaultChild = <div>Test</div>;
  return (
    <>
      <div
        className="BoxModel-container"
        style={{
          paddingBlockStart: marginBlockStart,
          paddingBlockEnd: marginBlockEnd,
          paddingInlineStart: marginInlineStart,
          paddingInlineEnd: marginInlineEnd,
        }}
      >
        <div
          className="BoxModel-border-padding-container"
          style={{
            paddingBlockStart,
            paddingBlockEnd,
            paddingInlineStart,
            paddingInlineEnd,
            borderColor: 'black',
            borderStyle: 'solid',
            borderBlockStartWidth: `${borderBlockStartWidth}px`,
            borderBlockEndWidth: `${borderBlockEndWidth}px`,
            borderInlineStartWidth: `${borderInlineStartWidth}px`,
            borderInlineEndWidth: `${borderInlineEndWidth}px`,
          }}
        >
          <div className="BoxModel-content">
            {children ?? defaultChild}
          </div>
        </div>
      </div>
      <pre
        style={{
          direction: 'ltr',
          writingMode: 'horizontal-tb',
        }}
      >
        {`{
  direction: ${direction};
  writing-mode: ${writingMode};

  padding-block-start: ${paddingBlockStart}px;
  padding-inline-start: ${paddingInlineStart}px;
  padding-inline-end: ${paddingInlineEnd}px;
  padding-block-end: ${paddingBlockEnd}px;
  
  margin-block-start: ${marginBlockStart}px;
  margin-inline-start: ${marginInlineStart}px;
  margin-inline-end: ${marginInlineEnd}px;
  margin-block-end: ${marginBlockEnd}px;
}`}
      </pre>
    </>
  );
}

export default function CSSLogicalPropsDemo() {
  const [
    writingMode,
    setWritingMode,
  ] = useState('horizontal-tb');
  const [
    direction,
    setDirection,
  ] = useState('ltr');

  const [
    paddingBlockStart,
    setPaddingBlockStart,
  ] = useState(10); // top in ltr
  const [
    paddingInlineStart,
    setPaddingInlineStart,
  ] = useState(20); // left in ltr
  const [
    paddingInlineEnd,
    setPaddingInlineEnd,
  ] = useState(30); // right in ltr
  const [
    paddingBlockEnd,
    setPaddingBlockEnd,
  ] = useState(40); // bottom in ltr

  const [
    marginBlockStart,
    setMarginBlockStart,
  ] = useState(10); // top in ltr
  const [
    marginInlineStart,
    setMarginInlineStart,
  ] = useState(20); // left in ltr
  const [
    marginInlineEnd,
    setMarginInlineEnd,
  ] = useState(30); // right in ltr
  const [
    marginBlockEnd,
    setMarginBlockEnd,
  ] = useState(40); // bottom in ltr

  return (
    <div className="split-container">
      <div className="split-left">
        <label>
          Direction:{` `}
          <select
            value={direction}
            onChange={handleChange(
              setDirection,
              true
            )}
          >
            {/* Ref: https://blogs.igalia.com/mrego/2018/08/08/css-logical-properties-and-values-in-chromium/ */}
            <option value="ltr">
              Left to Right
            </option>
            <option value="rtl">
              Right to Left
            </option>
          </select>
        </label>
        <br />
        <label>
          Writing Mode:{` `}
          <select
            value={writingMode}
            onChange={handleChange(
              setWritingMode,
              true
            )}
          >
            {/* Ref: https://www.smashingmagazine.com/2019/08/writing-modes-layout/ */}
            <option value="horizontal-tb">
              horizontal-tb
            </option>
            <option value="vertical-lr">
              vertical-lr
            </option>
            <option value="vertical-rl">
              vertical-rl
            </option>
            <option value="sideways-rl">
              sideways-rl
            </option>
            <option value="sideways-lr">
              sideways-lr
            </option>
          </select>
        </label>
        <hr />
        <br />

        <label>
          padding-block-start:{` `}
          <input
            value={paddingBlockStart}
            type="number"
            onChange={handleChange(
              setPaddingBlockStart
            )}
          />
        </label>
        <br />
        <label>
          padding-inline-start:{` `}
          <input
            value={paddingInlineStart}
            type="number"
            onChange={handleChange(
              setPaddingInlineStart
            )}
          />
        </label>
        <br />
        <label>
          padding-inline-end:{` `}
          <input
            value={paddingInlineEnd}
            type="number"
            onChange={handleChange(
              setPaddingInlineEnd
            )}
          />
        </label>
        <br />
        <label>
          padding-block-end:{` `}
          <input
            value={paddingBlockEnd}
            type="number"
            onChange={handleChange(
              setPaddingBlockEnd
            )}
          />
        </label>
        <hr />
        <br />

        <label>
          margin-block-start:{` `}
          <input
            value={marginBlockStart}
            type="number"
            onChange={handleChange(
              setMarginBlockStart
            )}
          />
        </label>
        <br />
        <label>
          margin-inline-start:{` `}
          <input
            value={marginInlineStart}
            type="number"
            onChange={handleChange(
              setMarginInlineStart
            )}
          />
        </label>
        <br />
        <label>
          margin-inline-end:{` `}
          <input
            value={marginInlineEnd}
            type="number"
            onChange={handleChange(
              setMarginInlineEnd
            )}
          />
        </label>
        <br />
        <label>
          margin-block-end:{` `}
          <input
            value={marginBlockEnd}
            type="number"
            onChange={handleChange(
              setMarginBlockEnd
            )}
          />
        </label>
        <br />
      </div>
      <div
        className="split-center"
        style={{
          direction,
          writingMode,
        }}
      >
        Box Model
        <BoxModel
          direction={direction}
          writingMode={writingMode}
          marginTop={marginBlockStart}
          marginBottom={marginBlockEnd}
          marginLeft={marginInlineStart}
          marginRight={marginInlineEnd}
          paddingTop={paddingBlockStart}
          paddingBottom={
            paddingBlockEnd
          }
          paddingLeft={
            paddingInlineStart
          }
          paddingRight={
            paddingInlineEnd
          }
        />
      </div>
      <div
        className="split-right"
        style={{
          direction,
          writingMode,
        }}
      >
        Logical Properties
        <LogicalPropsModel
          direction={direction}
          writingMode={writingMode}
          marginBlockStart={
            marginBlockStart
          }
          marginBlockEnd={
            marginBlockEnd
          }
          marginInlineStart={
            marginInlineStart
          }
          marginInlineEnd={
            marginInlineEnd
          }
          paddingBlockStart={
            paddingBlockStart
          }
          paddingBlockEnd={
            paddingBlockEnd
          }
          paddingInlineStart={
            paddingInlineStart
          }
          paddingInlineEnd={
            paddingInlineEnd
          }
        />
      </div>
    </div>
  );
}
