import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfflineComponent} from './offline.component';
import {OfflineDirective} from './offline.directive';
import {OnlineDirective} from './online.directive';
import {OfflineService} from './offline.service';
import {OfflineNotificationService} from './offline-notification.service';

export * from './offline.component';
export * from './offline.directive';
export * from './online.directive';
export * from './offline.service';
export * from './offline-notification.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        OfflineComponent,
        OfflineDirective,
        OnlineDirective
    ],
    exports: [
        OfflineComponent,
        OfflineDirective,
        OnlineDirective
    ],
    entryComponents: [
        OfflineComponent
    ]
})
export class OfflineModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: OfflineModule,
            providers: [OfflineService, OfflineNotificationService]
        };
    }
}
