import { Component, ElementRef, OnInit, OnDestroy, Input, Output, Optional, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck } from '@angular/core';

import { isObject } from '@rd/core';
import { UploadComponent } from '../../upload.component';

@Component({
    selector: 'rd-upload-file-preview, [rd-upload-file-preview]',
    template: `<canvas></canvas>`,
    styleUrls: ['./upload-file-preview.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadFilePreviewComponent implements OnInit, DoCheck, OnDestroy {
    @Input() height: number = 50;
    @Input() width: number = 50;
    @Input() uploaderQueueItem: any = null;

    private elem: HTMLElement;
    public support = !!(FileReader && CanvasRenderingContext2D);

    constructor(@Optional() public uploadComponent: UploadComponent, private changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef) {
        this.elem = elementRef.nativeElement;
    }

    ngOnInit() {
        let self = this;
        if (!self.support) return;

        let uploaderQueueItem: any = this.uploaderQueueItem || self.uploadComponent.uploader.queue[0];
        let params: any = { file: uploaderQueueItem._file, height: self.height, width: self.width };

        if (!self.isFile(params.file)) return;
        if (!self.isImage(params.file)) return;

        let canvas: any = $(self.elem).find('canvas');
        let reader = new FileReader();

        reader.onload = onLoadFile;
        reader.readAsDataURL(params.file);

        /* todo: verify the following does what i want it to */
        this.changeDetectorRef.markForCheck();

        function onLoadFile(event) {
            var img = new Image();
            img.onload = onLoadImage;
            img.src = event.target.result;
        }

        function onLoadImage() {
            var width = params.width || this.width / this.height * params.height;
            var height = params.height || this.height / this.width * params.width;
            canvas.attr({ width: width, height: height });
            canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
        }
    }

    isFile(item) {
        return isObject(item) && item instanceof File;
    }

    isImage(file) {
        var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    }

    ngDoCheck() {

    }

    ngOnDestroy() {

    }
}
