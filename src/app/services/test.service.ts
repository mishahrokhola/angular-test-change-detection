import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TestService {
	public readonly interval$ = interval(1000);
}
