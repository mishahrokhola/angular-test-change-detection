import { ElementRef, Injectable, NgZone } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class HighlightService {
	constructor(private ngZone: NgZone) {}

	public highlight(el: ElementRef, className = 'checked') {
		this.ngZone.runOutsideAngular(() => {
			const a = el.nativeElement.querySelector('a');
			a.classList.add(className);
			setTimeout(() => a.classList.remove(className), 500);
		});
	}
}
