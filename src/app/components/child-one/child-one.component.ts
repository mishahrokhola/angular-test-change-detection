import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
	selector: 'child-one',
	templateUrl: './child-one.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneComponent {
	constructor(private el: ElementRef, private highlightService: HighlightService) {}

	public onClick(): void {
		console.count('child-one click');
	}

	public cdCheck(): void {
		console.count('child-one change detection');
		this.highlightService.highlight(this.el);
	}
}
