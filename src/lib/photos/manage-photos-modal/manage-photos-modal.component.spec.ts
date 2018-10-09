/* tslint:disable:no-unused-variable */
import { ElementRef, Inject, ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { Observable } from 'rxjs';

import {
  async, inject
} from '@angular/core/testing';

import { CoreApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { ImgixService } from '../../imgix';
import { ManagePhotosModalComponent } from './manage-photos-modal.component';
import { PhotosModule } from '../photos.module';

let component: ManagePhotosModalComponent;
let fixture: ComponentFixture<ManagePhotosModalComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: ManagePhotosModal', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        PhotosModule
      ],
      // Provide a test-double instead
      providers: [
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        ImgixService,
        { provide: 'SessionService', useValue: {} },
        { provide: 'environment', useValue: {} },
      ]
    });

    fixture = TestBed.createComponent(ManagePhotosModalComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges()
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should return a formatted string from calling getImageUrl', () => {
    // Arrange
    let imgUrl = '/test/test.png';
    let height = 200;
    let width = 200;
    let spy = spyOn(component.imgixSvc, 'getImageUrl');
    // Act
    let formattedUrl = component.imgixSvc.getImageUrl(imgUrl, width, height);
    // Assert
    expect(spy).toHaveBeenCalled();
  });

  it('should return a specified string from calling getImageUrl', () => {
    // Arrange
    let imgUrl = '/test/test.png';
    let height = 200;
    let width = 200;
    // Act
    let formattedUrl = component.imgixSvc.getImageUrl(imgUrl, width, height);
    // Assert
    expect(formattedUrl).toEqual('https://rentdynamics.imgix.net' + imgUrl + '?w=' + width + '&h=' + height + '&fit=crop&crop=entropy&dpr=2');
  });

  xit('should call get on GetUnitImages', inject([CoreApiService], (coreApiService: CoreApiService) =>{
    // Arrange
    let spy = spyOn(coreApiService, 'get').and.callThrough();
    // Act
    //component.getUnitImages();
    // Assert
    expect(spy).toHaveBeenCalled();
  }));

  xit('should call delete on deleteImage', inject([CoreApiService], (coreApiService: CoreApiService) => {
    // Arrange
    let imgID = 1;
    let spy  = spyOn(coreApiService, 'delete').and.callThrough();
    // Act
    //component.deleteImage(imgID);
    // Assert
    expect(spy).toHaveBeenCalled();
  }))
});
