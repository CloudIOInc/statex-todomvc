/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import React, { memo } from 'react';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import ToggleAll from './ToggleAll';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

function App() {
  return (
    <div className="todoapp">
      <TodoHeader />
      <section className="main">
        <ToggleAll />
        <ul className="todo-list">
          <TodoList />
        </ul>
      </section>
      <TodoFooter />
    </div>
  );
}

export default memo(App);
