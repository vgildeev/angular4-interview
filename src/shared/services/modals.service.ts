import {
  Injectable,
  Injector,
  ComponentFactory,
  ComponentFactoryResolver,
  ApplicationRef,
} from '@angular/core';

import { ModalComponent } from 'app/modal/modal.component'

@Injectable()
export class ModalsService {
  private modalFactory;
  private modalRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef,
  ) {
    this.modalFactory = resolver.resolveComponentFactory(ModalComponent);
  }

  open(content) {
    const containerEl = document.querySelector('body');

    const viewRef = content.createEmbeddedView();
    this.applicationRef.attachView(viewRef);

    this.modalRef = this.modalFactory.create(this.injector, [viewRef.rootNodes]);
    this.applicationRef.attachView(this.modalRef.hostView);
    containerEl.appendChild(this.modalRef.location.nativeElement);
  }

  close() {
    if (this.modalRef) {
      const windowNativeEl = this.modalRef.location.nativeElement;
      windowNativeEl.parentNode.removeChild(windowNativeEl);
      this.modalRef.destroy();
      this.modalRef = null;
    }
  }
}
