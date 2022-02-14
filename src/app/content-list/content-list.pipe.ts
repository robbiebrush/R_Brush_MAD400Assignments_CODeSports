import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({ name: 'contentTypePipe' })
export class ContentTypePipe implements PipeTransform {
    transform(contentsArray: Content[], contentType?: string): Content[] {
        var typeContentsArray: Content[] = [];

        for (let content of contentsArray) {
            if (content.type == contentType) {
                typeContentsArray.push(content);
            }
        }
        return typeContentsArray;
    }
}

