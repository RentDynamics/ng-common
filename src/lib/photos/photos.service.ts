
import {toArray, map, mergeMap, tap} from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { CoreApiService, CoreApiSelector } from '@rd/core';

import { ImgixService } from '../imgix/imgix.service';
import { Observable } from 'rxjs';

@Injectable()
export class PhotosService {

  totalCount: number;

  get uploadFileUrl() {
    if (!this.environment){
      throw Error('environment is not defined!!!');
    }
    if (this.environment.production) {
      return '//api.rentdynamics.com/files';
    } else {
      return '//api-dev.rentdynamics.com/files';
    }
  }

  constructor(private coreApiSvc: CoreApiService,
    @Inject('environment') private environment: any,
    private imgixSvc: ImgixService) { }

  getSelector(fileRelationType: Object, fileCategoryId?: number) {
    return new CoreApiSelector({
      endpoint: '/files',
      filters: {
        fileRelationType: fileRelationType,
        fileCategoryId: fileCategoryId
      },
      page: 1,
      pageSize: 100
    });
  }

  get(fileRelationType: Object, fileCategoryId?: number): Observable<any> {
    return this.coreApiSvc.get(this.getSelector(fileRelationType, fileCategoryId).stringify()).pipe(
      tap((result: { count: number, data: any[] }) => this.totalCount = result.count),
      mergeMap((result: { count: number, data: any[] }) => result.data),
      map((result: any) => result),
      toArray(),)
  }

}
