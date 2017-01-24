import { Component } from '@angular/core';
import { Company }    from './company';
import { Category }    from './category';
import { ComplaintStatus }    from './complaintStatus';

@Component({
  moduleId: module.id,
  selector: 'complaints-form',
  templateUrl: 'complaints-form.component.html'
})
export class ComplaintsFormComponent {
  selectedCompany:Company=new Company(1,'aaa');
  companies =[new Company(1,'aaa'),
              new Company(2,'bbb'),
              new Company(3,'aaa'),
              new Company(4,'bbb'),
              new Company(5,'aaa'),
              new Company(6,'bbb'),
              new Company(7,'ccc')
              ];



  selectedCategory:Category=new Category(4,'bbb');
  categories =[new Category(1,'aaa'),
              new Category(2,'bbb'),
              new Category(3,'aaa'),
              new Category(4,'bbb'),
              new Category(5,'aaa'),
              new Category(6,'bbb'),
              new Category(7,'ccc')
              ];

  selectedComplaintStatus:ComplaintStatus=new ComplaintStatus(7,'ccc');
  ComplaintStatus =[new ComplaintStatus(1,'aaa'),
              new ComplaintStatus(2,'bbb'),
              new ComplaintStatus(3,'aaa'),
              new ComplaintStatus(4,'bbb'),
              new ComplaintStatus(5,'aaa'),
              new ComplaintStatus(6,'bbb'),
              new ComplaintStatus(7,'ccc')
              ];

  //category = ['Cat1','Flexible','Hot', 'Changer'];

  //ComplaintStatus = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

  //public filterDateFrom: Date=new Date();


  //model = new Complaints(18,this.company[0],this.category[0],this.ComplaintStatus[0]);
  submitted = false;
  onSubmit() { this.submitted = true; }
  newComplaints() {
    //this.model = new Complaints(42,'','','');
  }
  
}

