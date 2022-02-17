import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import { TestService } from '../../services/test.service';

@Component({
	selector: 'main-tree',
	templateUrl: './main-tree.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTreeComponent implements OnInit {
	constructor(
		private el: ElementRef,
		private ref: ChangeDetectorRef,
		public test: TestService,
		private highlightService: HighlightService
	) {}

	public ngOnInit(): void {
		// this.test.interval$.subscribe(() => console.log('Observable fire'));
		// setTimeout(() => console.log('setTimeout after 1000'), 1000);
		// setInterval(() => {
		// 	this.ref.detectChanges();
		// }, 1000);

		// queueMicrotask(() => {
		// 	console.log('queueMicrotask');
		// });
	}

	public cdCheck(): void {
		console.count('main-tree change detection');
		this.highlightService.highlight(this.el);
	}
}
