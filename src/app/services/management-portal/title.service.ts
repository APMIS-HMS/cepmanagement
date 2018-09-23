import { BaseService } from '../global/base-service';
import { Title } from '../../models/title';
import { Subject } from 'rxjs/Subject';
import { Injectable,Injector } from '@angular/core';
import { CONSTANTS } from '../global/global.service';
import { HttpClient } from '@angular/common/http';
import { SocketService, RestService } from '../../feathers/feathers.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { DataShareService } from '../../shared/datashare.service';
import { Subscription } from 'rxjs';
import { CustomServiceName } from '../../models/generic';
import { CustomService } from '../global/custom-service';
import { ExceptionRefinerService } from '../global/exception-refiner';

@Injectable()
export class TitleService {

  public _socket;
  public _rest;
  observer: Observer<any>;
  titlesEx;
  serviceSubscription: Subscription; 

  constructor(private dataShare: DataShareService, protected socketService: SocketService,
  protected restService: RestService, protected customService: CustomService,
  protected injector: Injector, protected exception: ExceptionRefinerService) { 
  //   super(dataShare, socketService, restService, customService, injector, exception);

  // }
  }

}

