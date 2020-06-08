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
import {
  useStateXForTextInput,
  useStateXForCheckbox,
  useStateXValueRemover,
} from '@cloudio/statex';

function TodoItem({ index }: { index: number }) {
  const [editing, setEditing] = useState(false);
  const text = useStateXForTextInput(['todo', 'list', ':index', 'text'], '', {
    params: { index },
  });
  const isComplete = useStateXForCheckbox(
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
        completed: isComplete.checked,
        editing: editing,
      })}>
      {!editing ? (
        <div className="view">
          <input className="toggle" {...isComplete} />
          <label onDoubleClick={(e) => setEditing(true)}>{text.value}</label>
          <button className="destroy" onClick={deleteItem} />
        </div>
      ) : (
        <input
          autoFocus
          className="edit"
          onBlur={(e) => setEditing(false)}
          {...text}
        />
      )}
    </li>
  );
}

export default memo(TodoItem);
