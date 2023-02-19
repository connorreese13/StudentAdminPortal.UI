import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor(private studentService: StudentService){}
  ngOnInit(): void {
    this.studentService.getStudent()
    .subscribe(
      (successResponse)=>{
        console.log(successResponse);

      },
      (errorResponse)=>{
        console.log(errorResponse);

      }
    )
  }
}
