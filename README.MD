# ngx-offline

## Installation

To install this library, run:

```bash
$ npm install ngx-offline --save
```

## Module Import and usage

Import in your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OfflineModule } from 'ngx-offline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    OfflineModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the module is imported, you can initialize the offline service in your Angular application:

```typescript
import {Component, ViewContainerRef} from '@angular/core';
import {OfflineNotificationService, OfflineService} from 'ngx-offline';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  offline$: Observable<boolean>;

  constructor(private viewContainerRef: ViewContainerRef, private offlineService: OfflineService, private offlineNotificationService: OfflineNotificationService) {
    // Initialize offline service
    this.offlineService.init(this.viewContainerRef);

    // Use observable(true/false) to identify if you are offline/online in other services, components...
    this.offline$ = this.offlineNotificationService.offline;
  }
}
```

or use the directives:

```xml
<h1 *aoOffline>
  You are offline
</h1>
<h1 *aoOnline>
  You are online
</h1>
```



## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

Apache-2.0 © [Mark van Veen](mailto:bobbietables@gmail.com)
