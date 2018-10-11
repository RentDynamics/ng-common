/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { CoreApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { PhotosUploader } from './photos-uploader';
import { PhotosService } from './photos.service';
import { PhotosModule } from './photos.module';

describe('Service: PhotosUploader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        PhotosModule
      ],
      providers: [
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        { provide: 'environment', useValue: {} },
      ]
    });
  });

  it('should ...', inject([PhotosUploader], (service: PhotosUploader) => {
    expect(service).toBeTruthy();
  }));
});
