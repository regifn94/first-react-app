import React from "react";

const PengenalanJSX = () => {
    return <div>Hello World</div>
};

const PengenalanTanpaJSX = () => {
      return React.createElement(
        'h1',
        null,
        'Hello World Tanpa JSX!'
      )
};

export {PengenalanJSX, PengenalanTanpaJSX};