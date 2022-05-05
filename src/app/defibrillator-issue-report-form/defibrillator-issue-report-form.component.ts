import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {PageHeader} from "../models/page-header.model";
import {NgForm} from "@angular/forms";
import {DeffibrillatorIssueService} from "../services/deffibrillator-issue.service";
import {DefibrilattorIssue} from "../models/defibrilattor-issue.model";

@Component({
  selector: 'app-defibrillator-issue-report-form',
  templateUrl: './defibrillator-issue-report-form.component.html',
  styleUrls: ['./defibrillator-issue-report-form.component.scss']
})
export class DefibrillatorIssueReportFormComponent implements OnInit {

  defibrillatorId!: number;
  selectedImage!: File;
  uploadedImageName!: string;
  reportSended: boolean = false;

  pageHeader: PageHeader = {
    title : "Declarer Un Problème",
    subtitle: "Prenez uen photo et décrivez nous le problème avec clark"
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private defibrillatorIssueService: DeffibrillatorIssueService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          console.log(params);
          this.defibrillatorId = params['id'];
      }
      );
  }


  //on image choice get the image name and upload this image to the server
  onFileChanged(event: any) {
    this.selectedImage = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('image', this.selectedImage);
    this.http.post('http://192.168.86.37:5040/api/uploads/image', uploadData).subscribe((response :any) => {
      this.uploadedImageName = response.imgName; // handle event here
    });

  }

  sendIssue(form: NgForm){ //send the issue to api
    //instance an issue object
    const issue: DefibrilattorIssue = new DefibrilattorIssue( this.uploadedImageName, form.value.text, this.defibrillatorId)

    console.log(form.value)
    return this.defibrillatorIssueService.addIssue(issue).subscribe((response: any) => {
      this.pageHeader = {
        title : "Merci",
        subtitle: "Nous avons bien reçu votre signalement"
      };
      this.reportSended = true;
    });
  }
}
