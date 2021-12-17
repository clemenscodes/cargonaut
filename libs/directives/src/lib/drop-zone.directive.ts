import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: "[cargonautDropZone]",
})
export class DropZoneDirective {
    @Output() dropped = new EventEmitter<FileList>();
    @Output() hovered = new EventEmitter<boolean>();
    @HostListener("drop", ["$event"])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDrop($event: any) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    }
    @HostListener("dragover", ["$event"])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDragOver($event: any) {
        $event.preventDefault();
        this.hovered.emit(true);
    }
}
