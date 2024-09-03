import { Observable } from "rxjs";
import { Task } from "../../models/task";

export interface CRUDTaskServiceInterface {

  addTask(task: Task): Observable<Task>;

  getTasks(): Observable<Task[]>;

  updateTask(updatedTask: Task): Observable<Task | undefined>;

  deleteTask(id: number): Observable<boolean>


}
