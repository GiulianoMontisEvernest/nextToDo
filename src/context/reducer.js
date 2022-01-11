import { v4 as uuid } from 'uuid';
import {
  ADD_LIST,
  REMOVE_LIST,
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  RESTORE_STATE,
} from './actions';

const appReducer = (appState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...appState,
        { listID: uuid(), listTitle: action.payload, tasks: [] },
      ];
    case REMOVE_LIST:
      return appState.filter((list) => list.listID !== action.payload);

    case ADD_TASK:
      return appState.map((list) => {
        if (list.listID === action.payload.listID)
          return {
            ...list,
            tasks: [
              ...list.tasks,
              {
                taskID: uuid(),
                taskTitle: action.payload.taskTitle,
                done: false,
              },
            ],
          };
        else return list;
      });
    case EDIT_TASK:
      return appState;
    /*
      return [
        ...appState,
        appState.map((list) => {
          if (list.id === action.payload.listID)
            return {
              ...list,
              tasks: [
                ...list.tasks.reduce((acc, task) => {
                  if (task.taskID === action.payload.taskID)
                    acc.push({ ...task, done: !task.done });
                  else acc.push({ ...task });
                  return acc;
                }, []),
              ],
            };
          else return list;
        }),
      ];
    */
    case REMOVE_TASK:
      return appState.map((list) => {
        if (list.listID === action.payload.listID)
          return {
            ...list,
            tasks: [
              ...list.tasks.filter(
                (task) => task.taskID !== action.payload.taskID
              ),
            ],
          };
        else return list;
      });
    case RESTORE_STATE:
      return action.payload;
    default:
      return appState;
  }
};

export default appReducer;
