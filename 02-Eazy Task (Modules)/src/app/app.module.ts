import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TasksModule } from './tasks/tasks.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [BrowserModule, TasksModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
