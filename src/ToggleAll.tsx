/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import React, { memo } from 'react';
import { todoListStatsState, toggleAllAction } from './state';
import { useStateXValue, useStateXAction } from '@cloudio/statex';

function ToggleAll() {
  const { percentCompleted } = useStateXValue(todoListStatsState);
  const toggleAll = useStateXAction(toggleAllAction);

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
