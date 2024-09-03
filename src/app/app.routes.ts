import { Routes } from '@angular/router';
import { TaskComponent } from './show-tasks/task/task.component';
import { MainTaskComponent } from './show-tasks/main-task/main-task.component';

export const routes: Routes = [{path:'', redirectTo:'display', pathMatch:'full'},
  {path:'display', loadChildren: () => import("./show-tasks/show-tasks.module").then(m => m.ShowTasksModule)},
  {path: 'add', loadChildren: () => import("./add-task-form/add-task-form.module").then(m => m.AddTaskFormModule)},
  {path: 'delete', loadChildren: () => import("./delete-task-form/delete-task-form.module").then(m => m.DeleteTaskFormModule)},

];
