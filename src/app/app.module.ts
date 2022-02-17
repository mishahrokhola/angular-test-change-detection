import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainAComponent } from './components/main-a/main-a.component';
import { MainBComponent } from './components/main-b/main-b.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { ChildThreeComponent } from './components/child-three/child-three.component';
import { ChildFourComponent } from './components/child-four/child-four.component';
import { MainTreeComponent } from './components/main-tree/main-tree.component';

@NgModule({
	declarations: [
		AppComponent,
		MainAComponent,
		MainBComponent,
		ChildOneComponent,
		ChildTwoComponent,
		ChildThreeComponent,
		ChildFourComponent,
		MainTreeComponent,
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
