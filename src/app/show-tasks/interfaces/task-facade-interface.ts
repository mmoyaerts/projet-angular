import { Observable } from "rxjs";
import { Task } from "../../models/task";
import { State } from "../../models/state";

export interface TaskFacadeInterface {

  getTasks(): Observable<Task[]>;

  addTask(task: Task): Observable<Task>

  updateTask(task: Task): Observable<Task | undefined>

  deleteTask(id: number): Observable<boolean>

  getTasksByState(state: State): Observable<Task[]>

}
