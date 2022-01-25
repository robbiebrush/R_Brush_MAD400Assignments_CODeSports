import { Content } from "./content-interface"

export class ContentList {
    private _list: Content[];

    constructor() {
        this._list = [];
    }

    public get list() {
        return this._list;
    }

    public addContent(content: Content) {
        this._list.push(content);
    }

    public contentCount(): number {
        return this._list.length;
    }

    public contentOutput(index: number): string {
        let content: Content = this._list[index];
        return "ID: " + content.id + " Title: " + content.title + " Description: " + content.description + " Creator: " + content.creator + " Type: " + content.type + " Tags: " + content.tags + " Image: <img src=\"" + content.imgURL + "\">";
    }
}