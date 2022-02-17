import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
	selector: 'child-three',
	templateUrl: './child-three.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildThreeComponent {
	@Input() public count = 0;

	constructor(private el: ElementRef, private highlightService: HighlightService) {}

	public onClick(): void {
		console.count('child-two click');
	}

	public cdCheck(): void {
		console.count('child-three change detection');
		this.highlightService.highlight(this.el);
	}
}
