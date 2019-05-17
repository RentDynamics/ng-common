
[![Circle CI Badge][circleci-badge]][circleci-link]
[![codecov][codecov-image]][codecov-link]
[![Dependency Status][dependency-image]][dependency-link]
[![Dev Dependency Status][dev-dependency-image]][dev-dependency-link]
[![Peer Dependency Status][peer-dependency-image]][peer-dependency-link]
[![NPM Downloads][npm-downloads-image]][npm-downloads-link]
[![NPM Version][npm-version-image]][npm-version-link]
[![MIT License][npm-license-image]][npm-license-link]

## @rd/common [![Public or Private Repo][public-true-image]][public-true-link]

<!--[![Build Status](https://travis-ci.org/ng2select/bootstrap.svg?branch=master)](https://travis-ci.org/ng2select/bootstrap)-->

#### This module contains any javascript code that is not essential to every application but is commonly used across applications. (excluding form-related javascript)
It is reliant on the @rd/core module, jquery, and bootstrap currently. this module contains, but is not limited to, components/directives such as <rd-modal></rd-modal> and <rd-tabset></rd-tabset>, both of which are outlined below.

http://rd.github.io

## Installation

```
npm install @rd/common @rd/core jquery bootstrap toastr --save

```


## How to import

```TypeScript  

import { RdAngularCommonModule } from '@rd/common';

```

## Examples

## rd-expanding-list-view

```HTML

<rd-expanding-list-view class="collapse-card card-cross-sell" (toggle)="onToggle($event)" [open]="open">
  <div rd-expanding-list-view-header>
    <b>header content</b>
  </div>
  <div rd-expanding-list-view-body *ngIf="open">
    <b>body content</b>
  </div>
</rd-expanding-list-view>

```

## rd-modal
Defines the modal content and exposes the rd-modal instance to the parent component. Can be used alongside the
convenience [rd-modal-show-button], [rd-modal-hide-button], and the [rd-modal-toggle-button]. (convenience/safety directives)

### <rd-modal options="amenitiesModalOptions" /> modal-options bootstrap declaration (inclusion optional)

```TypeScript

/// <reference path="globals/bootstrap/index.d.ts" />

interface ModalOptions {
    backdrop?: boolean|string = true; /* default bootstrap-modal backdrop used by default */
    keyboard?: boolean = true; /* escape key closes modal by default */
    show?: boolean = false; /* modal hidden by default */
    remote?: string = null; /* deprecated in favor for angular2-component interaction */
}

```

### Basic view-based modal implementation (control modal from template)

```HTML

<!-- convenience/safe modal show/hide button directives -->
<a [rd-modal-show-button]="amenitiesModal" class="btn btn-default">show modal</a>
<a [rd-modal-hide-button]="amenitiesModal" class="btn btn-default">hide modal</a>
<a [rd-modal-toggle-button]="amenitiesModal" class="btn btn-default">toggle modal</a>
<!-- you may also simply invoke a public method yourself (see below) - although if the author ever changed/removed any of the ModalComponent's public methods, the latter implementation might break -->
<a (click)="amenitiesModal.show()" class="btn btn-default">show modal</a>

<!-- <rd-modal /> example implementation (typeof amenitiesModal: ModalComponent - exported to view for consumption) -->
<rd-modal #amenitiesModal> <!-- the exported component's public properties/methods are not available in the invoking components' typescript (using this template-based #exportAs method (see below)) -->
  <div rd-modal-header> <!-- [rd-modal-header] gets projected into the modal's header (if defined) -->
    <button type="button" class="close" [rd-modal-hide-button]="amenitiesModal"><span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title">New message</h4>
  </div>
  <div rd-modal-body> <!-- [rd-modal-body] gets projected into the modal's body (if defined) -->
    <form>
      <div class="form-group">
        <label for="recipient-name" class="control-label">Recipient:</label>
        <input type="text" [(ngModel)]="recipient" class="form-control">
      </div>
      <div class="form-group">
        <label for="message-text" class="control-label">Message:</label>
        <textarea [(ngModel)]="message" class="form-control"></textarea>
      </div>
    </form>
  </div>
  <div rd-modal-footer> <!-- [rd-modal-footer] gets projected into the modal's footer (if defined) -->
    <a class="pull-right" [rd-modal-hide-button]="amenitiesModal">hide modal</a>
    <button type="button" (click)="sendMessage()" [rd-modal-hide-button]="amenitiesModal" class="btn btn-primary">Send message</button>
  </div>
</rd-modal>


```

### Moderate typescript-based modal implementation (control modal from component)

```TypeScript

import { AfterViewInit, EventEmitter, Input, Inject, HostListener, Output, Component, OnInit, Optional, ViewChild } from '@angular/core';

import { MODAL_DIRECTIVES, ModalComponent } from '@rd/common';

@Component({
  moduleId: module.id,
  selector: 'rd-amenities-modal',
  templateUrl: 'amenities-modal.component.html',
  styleUrls: ['amenities-modal.component.css'],
  directives: [MODAL_DIRECTIVES]
})
export class AmenitiesModalComponent implements OnInit, AfterViewInit {
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.modal.show();
  }
}


```

## rd-tabset

```HTML

<rd-tabset #tabset>

  <rd-tab-nav></rd-tab-nav>

  <!-- Or define custom nav layout: <nav *ngFor="let tab of tabset.tabs"></nav> -->

  <rd-tab #tab1 [title]="'Title 1'" (init)="onTabInit($event)">
    <div *ngIf="tab1.active">
    Content 1
    </div>
  </rd-tab>

  <rd-tab #tab2 title="Title 2" (init)="onTabInit($event)">
    <div *ngIf="tab2.active">
    Content 2
    </div>
  </rd-tab>

  <rd-tab #tab3 [title]="'Title 3'" (init)="onTabInit($event)">
    <div *ngIf="tab3.active">
    Content 3
    </div>
  </rd-tab>

</rd-tabset>

```

## rd-upload (a.k.a. UPLOAD_DIRECTIVES)

```HTML

<rd-upload class="row" [url]="uploadFileUrl">

  <rd-upload-file-preview></rd-upload-file-preview>

    <div class="col-md-3">

        <h3>Select files</h3>

        <rd-upload-file-drop-zone></rd-upload-file-drop-zone>

        Multiple
        <rd-upload-file-select-button [multiple]="true"></rd-upload-file-select-button>

        <br/>

        Single
        <rd-upload-file-select-button></rd-upload-file-select-button>

        <br/>

        <rd-upload-file-progress-bar></rd-upload-file-progress-bar>
    </div>

    <div class="col-md-9" style="margin-bottom: 40px">

        <h3>Upload queue</h3>
        <p>Queue length: </p>

        <rd-upload-file-queue></rd-upload-file-queue>

    </div>


</rd-upload>


```

## rd-loading-indicator

```HTML

  <rd-loading-indicator *ngIf="isLoading" [height]="75" [width]="75"></rd-loading-indicator>

```

## rd-simple-sort, rd-simple-sort-field (a.k.a. SIMPLE_SORT_DIRECTIVES)

```HTML

  <!-- headers and sorting -->
  <div rd-simple-sort [activeSortField]="orderByField" (change)="orderBy($event)" class="row" style="font-weight: bold; padding: 10px 20px;">
    <div [rd-simple-sort-field]="'community__address__address_line_1'" class="col-sm-3" style="width: 28%">Unit</div>
    <div [rd-simple-sort-field]="'name'" class="col-sm-2" style="width: 19%">Floorplan</div>
    <div [rd-simple-sort-field]="'marketRent'" class="col-sm-2" style="width: 13%">Market Price</div>
    <div [rd-simple-sort-field]="'community__community_baskets__basket__name'" class="col-sm-2" style="width: 18%">District</div>
    <div [rd-simple-sort-field]="'minSquareFeet'" class="col-sm-2" style="width: 10%">Size</div>
    <div [rd-simple-sort-field]="'readyDate'" class="col-sm-2" style="width: 12%">Ready Date</div>
  </div>

```

## toastr provider

```TypeScript
import { Component, OnInit } from '@angular/core';

import { Toastr } from '@rd/common';

@Component({
  selector: 'rd-toastr-example'
})
export class ToastrExampleComponent implements OnInit {

  constructor(private toastr: Toastr){

  }

  ngOnInit(){
    this.toastrSvc.success({
          msg: 'Update Successful',
          options: 
          positionClass: "toast-top-center",
       }
    });
  }

}

```

<!-- <iframe src="http://embed.plnkr.co/GeHGKI/?show=preview" frameborder="0" width="100%" height="500"></iframe> -->

## Contributing

In order to release this package automatically, you must format the commit message properly so that when it is merged into master, it will semantically release the new changes based on commit msg type and previously tagged version

Don't forget to expose any new additions publicly, ensure everything is accessible via the public_api.ts

[Code review guidelines for this project](CODE_REVIEWS.md)

[Coding standards for this project](CODING_STANDARDS.md)

[Contribution guidelines for this project](CONTRIBUTING.md)


_powered by:_
https://rentdynamics.com +
https://angular.io


[npm-icon]: https://nodei.co/npm/@rd/common.svg?downloads=true
[npm-icon-link]: https://npmjs.org/package/@rd/common
[circleci-badge]: https://circleci.com/gh/RentDynamics/ng-common.svg?style=shield
[circleci-link]: https://circleci.com/gh/rentdynamics/ng-common/tree/master
[codecov-image]: https://codecov.io/gh/RentDynamics/ng-common/branch/master/graph/badge.svg
[codecov-link]: https://codecov.io/gh/RentDynamics/ng-common
[nsp-image]: https://nodesecurity.io/orgs/rent-dynamics/projects/e9631ec8-4507-4fff-bb0f-b28019b79f62/badge
[nsp-link]: https://nodesecurity.io/orgs/rent-dynamics/projects/e9631ec8-4507-4fff-bb0f-b28019b79f62
[dependency-image]: https://david-dm.org/RentDynamics/ng-common/status.svg
[dependency-link]: https://david-dm.org/RentDynamics/ng-common
[dev-dependency-image]: https://david-dm.org/RentDynamics/ng-common/dev-status.svg
[dev-dependency-link]: https://david-dm.org/RentDynamics/ng-common?type=dev
[peer-dependency-image]: https://david-dm.org/RentDynamics/ng-common/peer-status.svg
[peer-dependency-link]: https://david-dm.org/RentDynamics/ng-common?type=peer
[public-true-image]: https://img.shields.io/badge/public-true-yellow.svg
[public-true-link]: https://img.shields.io/badge/public-true-yellow.svg
[private-true-image]: https://img.shields.io/badge/private-true-green.svg
[private-true-link]: https://img.shields.io/badge/private-true-green.svg
[npm-version-image]: https://img.shields.io/npm/v/@rd/common.svg
[npm-version-link]: https://www.npmjs.com/package/@rd/common
[npm-downloads-image]: https://img.shields.io/npm/dm/@rd/common.svg
[npm-downloads-link]: http://npm-stat.com/charts.html?package=@rd/common&from=2018-03-01
[npm-license-image]: https://img.shields.io/npm/l/@rd/common.svg
[npm-license-link]: LICENSE
[license-link]: http://opensource.org/licenses/MIT
