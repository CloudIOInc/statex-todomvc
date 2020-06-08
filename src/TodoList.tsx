/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import React, { memo } from 'react';
import { useStateXValue } from '@cloudio/statex';
import { todoFilteredIdAndIndex } from './state';
import TodoItem from './TodoItem';

function TodoList() {
  const filteredIdAndIndex = useStateXValue(todoFilteredIdAndIndex, {
    shouldComponentUpdate: (ids, oldIds) => {
      return JSON.stringify(ids) !== JSON.stringify(oldIds);
    },
  });

  return (
    <>
      {filteredIdAndIndex.map((entry) => (
        <TodoItem index={entry.index} key={entry.id} />
      ))}
    </>
  );
}

export default memo(TodoList);
