import { Head as MdxHead } from 'mdx-deck';
import React from 'react';

const Head = ({ title }) => (
  <MdxHead>
    <title>{title}</title>
  </MdxHead>
);

export default Head;
