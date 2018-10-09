import { Injectable } from '@angular/core';

@Injectable()
export class ImgixService {

  constructor() { }

  getImageUrl(imgUrl: string, width?: number, height?: number) {
    return 'https://rentdynamics.imgix.net' + imgUrl + (width ? '?w=' + width : '') +
      (height ? '&h=' + height : '') + '&fit=crop&crop=entropy&dpr=2';
  }

  getImageUrlNaturalDimension(imgUrl: string) {
    return 'https://rentdynamics.imgix.net' + imgUrl + '?w=550' + '&fit=clip&dpr=2';
  }

  getImageUrlCustom(imgUrl: string, query: string) {
    return 'https://rentdynamics.imgix.net' + imgUrl + query;
  }

  getImageUrlCustomWithGif(imgUrl: string, query: string) {
    if (imgUrl.indexOf('.gif') >= 0) {
      return 'http://media.rentdynamics.com' + imgUrl;
    } else {
      return 'https://rentdynamics.imgix.net' + imgUrl + query;
    }
  }

  stripHostFromImageUrl(imgUrl: string){
    return imgUrl.replace(/.+?\/?\/?media.rentdynamics.com\/?/g, '');
  }

}
// https://media.rentdynamics.com/
