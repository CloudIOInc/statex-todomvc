/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import React, { memo } from 'react';
import cx from 'clsx';
import { useStateXValue, useStateX } from '@cloudio/statex';
import { todoListStatsState, todoFilterAtom } from './state';
import ClearCompleted from './ClearCompleted';

function TodoFooter() {
  const { percentCompleted, totalUncompletedNum } = useStateXValue(
    todoListStatsState,
  );
  const [filter, setFilter] = useStateX(todoFilterAtom);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{totalUncompletedNum}</strong>
        {` item left - ${Math.round(percentCompleted * 100)}% complete`}
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setFilter('Show All')}
            className={cx({ selected: filter === 'Show All' })}>
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            onClick={() => setFilter('Show Uncompleted')}
            className={cx({ selected: filter === 'Show Uncompleted' })}>
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            onClick={() => setFilter('Show Completed')}
            className={cx({ selected: filter === 'Show Completed' })}>
            Completed
          </a>
        </li>
      </ul>
      <ClearCompleted />
    </footer>
  );
}

export default memo(TodoFooter);
