import { Observable } from "rxjs";
import { State } from "../../models/state";
import { Task } from "../../models/task";

export interface ByStatusTaskListInterface {

  getTasksByState(state: State): Observable<Task[]>
}
