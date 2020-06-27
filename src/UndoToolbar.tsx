/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import React, { memo } from 'react';
import { useStateXUndo } from '@cloudio/statex';

function UndoToolbar() {
  const { canRedo, canUndo, redo, undo } = useStateXUndo(
    ['todo', 'list'],
    '#',
    true,
  );

  return (
    <footer className="footer">
      <ul className="filters">
        <li>
          <a
            href="#/undo"
            onClick={canUndo ? undo : undefined}
            style={{ color: !canUndo ? '#ddd' : 'inherit' }}>
            Undo
          </a>
        </li>
        <li>
          <a
            href="#/redo"
            style={{ color: !canRedo ? '#ddd' : 'inherit' }}
            onClick={canRedo ? redo : undefined}>
            Redo
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default memo(UndoToolbar);
