import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-defibrillator-issue-report-form',
  templateUrl: './defibrillator-issue-report-form.component.html',
  styleUrls: ['./defibrillator-issue-report-form.component.scss']
})
export class DefibrillatorIssueReportFormComponent implements OnInit {

  defibrillatorId!: number;
  selectedImage!: File;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          console.log(params);
          this.defibrillatorId = params['id'];
      }
      );
  }

  onFileChanged(event: any) {
    this.selectedImage = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('image', this.selectedImage);
    this.http.post('http://192.168.86.37:5040/api/uploads/image', uploadData).subscribe(event => {
      console.log(event); // handle event here
    });

  }
}
