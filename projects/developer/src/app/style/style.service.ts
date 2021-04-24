import { Injectable } from '@angular/core';

export declare const require: any;

@Injectable()
export class StyleService {
  private linkMap: Map<any, Node> = new Map();
  private host: Node;

  constructor() {
    this.host = document.head;
  }

  setStyle(key: any, stylePath: string): void {
    if (!this.linkMap.get(key)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = stylePath;
      this.linkMap.set(key, link);
    }
  }

  removeStyle(key: any): void {
    const link = this.linkMap.get(key);
    if (link) {
      this.linkMap.delete(key);
    }
  }

  append(key: any): void {
    const link = this.linkMap.get(key);
    if (link) {
      this.host.appendChild(link);
    }
  }

  remove(key: any): void {
    const link = this.linkMap.get(key);
    if (link) {
      this.host.removeChild(link);
    }
  }

  private createStyleNode(content: { default: string }): Node {
    const styleElement = document.createElement('style');
    styleElement.textContent = content.default;
    return styleElement;
  }
}
