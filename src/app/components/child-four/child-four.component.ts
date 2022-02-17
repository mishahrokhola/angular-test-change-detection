import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
	selector: 'child-four',
	templateUrl: './child-four.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildFourComponent {
	constructor(private el: ElementRef, private cd: ChangeDetectorRef, private highlightService: HighlightService) {}

	public ngOnInit(): void {
		// this.test.interval$.subscribe(() => console.log('Observable fire'));
		// setInterval(() => {
		// 	console.log('setTimeout after 1000');
		// 	this.cd.markForCheck();
		// }, 1000);
		// setInterval(() => console.log('setInterval each 1000'), 1000);
		// queueMicrotask(() => {
		// 	console.log('queueMicrotask');
		// });
	}

	public onClick(): void {
		// this.cd.markForCheck();
		console.count('child-four click');
	}

	public cdCheck(): void {
		console.count('child-four change detection');
		this.highlightService.highlight(this.el);
	}
}
