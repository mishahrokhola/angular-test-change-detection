import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
	selector: 'main-a',
	templateUrl: './main-a.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainAComponent {
	constructor(private el: ElementRef, private highlightService: HighlightService) {}

	public onClick(): void {
		console.count('child-two click');
	}

	public cdCheck(): void {
		console.count('main-a change detection');
		this.highlightService.highlight(this.el);
	}
}
