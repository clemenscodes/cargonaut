import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[cargonautDropZone]',
})
export class DropZoneDirective {
    @Output() dropped = new EventEmitter<FileList>();
    @Output() hovered = new EventEmitter<boolean>();
    constructor() {}
    @HostListener('drop', ['$event'])
    onDrop($event: any) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    }
    @HostListener('dragover', ['$event'])
    onDragOver($event: any) {
        $event.preventDefault();
        this.hovered.emit(true);
    }
}
