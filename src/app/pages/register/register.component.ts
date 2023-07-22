import { Component, OnInit } from '@angular/core';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { ApiService } from 'src/app/services/api.service';
import { ErrorsService } from 'src/app/services/errors.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private api: ApiService,
    private locastorageservice: LocalStorageServiceService,
    private errorsService: ErrorsService,
    private alertService: AlertServiceService
    ) { }
    countries:any[]= [];
    phone:any;
    country:any;
  ngOnInit(): void {
    this.getCountries()
  }

  ngAfterContentInit() {

  }

  getCountries(){
    this.api.apiGetRequest(`country/all`).subscribe({
      next: (resp: any) => {
        if (resp.ok) {
          this.countries = resp.countries;
        }else{
          this.errorsService.catchErrorCodes(resp.code)
        }
      },
      error: (e: any) => {
        this.alertService.alertMessage('Error de servidor', 'Error');
        console.log(e);
      },
    });
  }
}
