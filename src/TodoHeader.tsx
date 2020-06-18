/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import React, { memo, useState } from 'react';
import { useStateXAction } from '@cloudio/statex';
import { createTodoAction } from './state';

function TodoHeader() {
  const [inputValue, setInputValue] = useState('');
  const createTodo = useStateXAction(createTodoAction);

  function handleNewTodoKeyDown(event: React.KeyboardEvent) {
    if (event.keyCode !== 13) {
      return;
    }

    createTodo(inputValue);
    setInputValue('');
  }

  return (
    <header className="header">
      <h1 style={{ userSelect: 'none' }}>todos</h1>
      <input
        value={inputValue}
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={handleNewTodoKeyDown}
        autoFocus={true}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </header>
  );
}

export default memo(TodoHeader);
