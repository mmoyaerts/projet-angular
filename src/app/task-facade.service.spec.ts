import { TestBed } from '@angular/core/testing';

import { TaskFacadeService } from './show-tasks/task-facade.service';

describe('TaskFacadeService', () => {
  let service: TaskFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
