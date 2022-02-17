import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public cdCheck(): void {
		console.count('APP');
	}
}
