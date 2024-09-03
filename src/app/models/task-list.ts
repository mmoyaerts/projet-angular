import { State } from "./state"

export class TaskList {
  taskList =
  [
    {id: 1, title: "Task 1", description: "First task description", state: State.A_FAIRE},
    {id: 2, title: "Task 2", description: "Second task description", state: State.EN_COURS},
    {id: 3, title: "Task 3", description: "Third task description", state: State.TERMINEE}
  ]

  /**
   * getTasks
   */
  public getTasks() {
    return this.taskList;
  }

}
