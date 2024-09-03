import { DatePipe } from "@angular/common";
import { State } from "./state";

export class Task {

  id!:  number;
  title!: string;
  description! : string;
  date !: Date;
  state!: State

}


