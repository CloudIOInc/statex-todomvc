/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import React, { memo } from 'react';
import { todoList, todoListStatsState } from './state';
import { useStateXCallback, useStateXValue } from '@cloudio/statex';
import { Todo } from './types';

function ToggleAll() {
  const { percentCompleted } = useStateXValue(todoListStatsState);

  const toggleAll = useStateXCallback(({ get, set }) => {
    let todos = get(todoList);
    const hasActive = todos.find((todo) => !todo.isComplete);
    let updatedTodos: Todo[];
    if (hasActive) {
      updatedTodos = todos.map((todo) => {
        return todo.isComplete ? todo : { ...todo, isComplete: true };
      });
    } else {
      updatedTodos = todos.map((todo) => {
        return !todo.isComplete ? todo : { ...todo, isComplete: false };
      });
    }
    set(todoList, updatedTodos);
  }, []);

  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
        checked={percentCompleted !== 1}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}

export default memo(ToggleAll);
