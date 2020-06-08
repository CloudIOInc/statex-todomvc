/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateXProvider } from '@cloudio/statex';

ReactDOM.render(
  <React.StrictMode>
    <StateXProvider>
      <App />
    </StateXProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
