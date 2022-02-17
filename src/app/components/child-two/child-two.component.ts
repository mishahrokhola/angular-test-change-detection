import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
	selector: 'child-two',
	templateUrl: './child-two.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildTwoComponent {
	constructor(private el: ElementRef, private cd: ChangeDetectorRef, private highlightService: HighlightService) {}

	public onClick(event: MouseEvent): void {
		console.count('child-two click');
		// this.cd.detectChanges();
		// fixute.detectChanges();
	}

	public cdCheck(): void {
		console.count('child-two change detection');
		this.highlightService.highlight(this.el);
	}
}
