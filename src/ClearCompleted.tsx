/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import React, { memo } from 'react';
import {
  useStateXValue,
  useStateXCallback,
  useStateXValueSetter,
} from '@cloudio/statex';
import { todoListStatsState, todoList, todoFilterAtom } from './state';

function ClearCompleted() {
  const { totalCompletedNum } = useStateXValue(todoListStatsState);
  const setFilter = useStateXValueSetter(todoFilterAtom);

  const clearCompleted = useStateXCallback(({ get, set }) => {
    let todos = get(todoList);
    const activeTodos = todos.filter((todo) => !todo.isComplete);
    set(todoList, activeTodos);
    setFilter('Show All');
  }, []);

  if (!totalCompletedNum) {
    return null;
  }

  return (
    <button className="clear-completed" onClick={clearCompleted}>
      Clear completed
    </button>
  );
}

export default memo(ClearCompleted);
