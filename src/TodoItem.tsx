/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import React, { useState, memo } from 'react';
import cx from 'classnames';
import { useStateX, useStateXValueRemover } from '@cloudio/statex';

function TodoItem({ index }: { index: number }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useStateX(['todo', 'list', ':index', 'text'], '', {
    params: { index },
  });
  const [isComplete, setIsComplete] = useStateX(
    ['todo', 'list', ':index', 'isComplete'],
    false,
    { params: { index } },
  );
  const deleteItem = useStateXValueRemover(['todo', 'list', ':index'], {
    params: { index },
  });

  return (
    <li
      className={cx({
        completed: isComplete,
        editing: editing,
      })}>
      {!editing ? (
        <div className="view">
          <input
            checked={isComplete}
            className="toggle"
            onChange={(e) => setIsComplete(e.target.checked)}
            type="checkbox"
          />
          <label onDoubleClick={() => setEditing(true)}>{text}</label>
          <button className="destroy" onClick={deleteItem} />
        </div>
      ) : (
        <input
          autoFocus
          className="edit"
          onBlur={() => setEditing(false)}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      )}
    </li>
  );
}

export default memo(TodoItem);
