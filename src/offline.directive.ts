/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Directive, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {OfflineNotificationService} from './offline-notification.service';

/**
 * OfflineDirective displays view when offline.
 */
@Directive({ selector: '[aoOffline]' })
export class OfflineDirective implements OnDestroy {

  private offlineSubscription: Subscription;

  constructor(private _viewContainer: ViewContainerRef, templateRef: TemplateRef<any>,
              offlineService: OfflineNotificationService) {
    this.offlineSubscription = offlineService.offline.subscribe(offline => {
      _viewContainer.clear();

      if (offline) {
        this._viewContainer.createEmbeddedView(templateRef);
      }

    });
  }

  ngOnDestroy(): void {
    if (this.offlineSubscription) {
      this.offlineSubscription.unsubscribe();
    }
  }
}
