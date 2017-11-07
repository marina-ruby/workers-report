import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

/*components*/
import { FormCreateComponent } from './components/form-create/form-create.component';
import { ListUpdatesComponent } from './components/list-updates/list-updates.component';

/*pages*/
import { TabsNavigateComponent } from './pages/tabs-navigate/tabs-navigate.component';

/*services*/
import { UpdatesDataService } from './services/updates-data.service';
import { CurrentUserService } from './services/current-user.service';
import { UsersService } from './services/users.service';
import { CanDeactivateGuardService } from './services/create-form-deactivate.guard.service';
import { CurrentUserGuard } from './services/current-user.guard';

@NgModule({
  declarations: [
    AppComponent,
    ListUpdatesComponent,
    FormCreateComponent,
    TabsNavigateComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UpdatesDataService, CurrentUserService, UsersService,
    CanDeactivateGuardService, CurrentUserGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}
