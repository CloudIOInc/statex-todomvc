/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

export interface Todo {
  id: number;
  text: string;
  isComplete?: boolean;
}

export type Filter = 'Show All' | 'Show Completed' | 'Show Uncompleted';

export interface Stats {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
}
