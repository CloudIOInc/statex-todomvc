/**
 * Copyright (c) CloudIO, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  https://cloudioinc.github.io/statex/
 */

import { atom, selector, action } from '@cloudio/statex';
import { Todo, Filter, Stats } from './types';

const initialTodos: Todo[] = [
  { id: 100, text: 'Learn Javascript', isComplete: true },
  { id: 101, text: 'Learn React', isComplete: true },
  { id: 102, text: "Use CloudIO's StateX" },
  { id: 103, text: 'Launch Product' },
];

let id = 103;
function getId() {
  return ++id;
}

const todoList = atom({
  path: ['todo', 'list'],
  defaultValue: initialTodos,
});

const createTodoAction = action(({ set }, text: string) => {
  set(todoList, (oldTodoList) => [
    {
      id: getId(),
      text: text.trim() || 'Empty Todo!',
    },
    ...oldTodoList,
  ]);
});

const toggleAllAction = action(({ get, set }, event: React.ChangeEvent) => {
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
});

const todoFilterAtom = atom<Filter>({
  path: ['todo', 'filter'],
  defaultValue: 'Show All',
});

const todoFilteredIdAndIndex = selector({
  path: ['todo', 'filteredIdAndIndex'],
  defaultValue: [],
  get: ({ get }) => {
    const filter = get(todoFilterAtom);
    const all = get(todoList);
    let list = all;
    switch (filter) {
      case 'Show Completed':
        list = list.filter((item) => item.isComplete);
        break;
      case 'Show Uncompleted':
        list = list.filter((item) => !item.isComplete);
        break;
    }
    return list.map((todo) => ({ id: todo.id, index: all.indexOf(todo) }));
  },
});

const todoListStatsState = selector<Stats>({
  path: ['todo', 'stats'],
  defaultValue: {
    totalNum: 0,
    totalCompletedNum: 0,
    totalUncompletedNum: 0,
    percentCompleted: 0,
  },
  get: ({ get }) => {
    const list = get(todoList);
    const totalNum = list.length;
    const totalCompletedNum = list.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
  shouldComponentUpdate: (value, oldValue) => {
    return (
      !oldValue ||
      value.totalNum !== oldValue.totalNum ||
      value.totalCompletedNum !== oldValue.totalCompletedNum ||
      value.totalUncompletedNum !== oldValue.totalUncompletedNum ||
      value.percentCompleted !== oldValue.percentCompleted
    );
  },
});

export {
  createTodoAction,
  getId,
  todoFilterAtom,
  todoFilteredIdAndIndex,
  todoList,
  todoListStatsState,
  toggleAllAction,
};
