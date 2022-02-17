import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, OnInit } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import { TestService } from '../../services/test.service';

@Component({
	selector: 'main-b',
	templateUrl: './main-b.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainBComponent implements OnInit, DoCheck {
	public count = 0;

	constructor(
		private el: ElementRef,
		public test: TestService,
		private cd: ChangeDetectorRef,
		private highlightService: HighlightService
	) {}

	public ngOnInit(): void {
		// this.cd.detach();
		// this.test.interval$.subscribe(() => console.log('Observable fire'));
		// setTimeout(() => {
		// 	console.log('setTimeout after 1000');
		// 	this.cd.detectChanges();
		// }, 1000);
		setInterval(() => {
			this.count++;
			// console.log('setTimeout after 1000', this.count);
			this.cd.detectChanges();
		}, 1000);
		// queueMicrotask(() => {
		// 	console.log('queueMicrotask');
		// });
	}

	public ngDoCheck() {
		// console.log('ngDoCheck');
	}

	public onClick(): void {
		// this.cd.reattach();
		console.count('child-two click');
	}

	public cdCheck(): void {
		console.count('main-b change detection');
		this.highlightService.highlight(this.el);
	}
}
