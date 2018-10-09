import { Injectable } from '@angular/core';

@Injectable()
export class ImageUrlUtilityService {
  getImageFullUrl(imageUrl: string) {
    if (imageUrl) {
      if (imageUrl.startsWith('http')) {
        return imageUrl;
      } else if (imageUrl.startsWith('/')) {
        return `https://rentdynamics.imgix.net${imageUrl}?w=320&fit=clip&dpr=1`;
      }
      return `https://rentdynamics.imgix.net/${imageUrl}?w=320&fit=clip&dpr=1`;
    }
    return null;
  }
}
