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

import {Component, Renderer2} from '@angular/core';
import {OfflineNotificationService} from './offline-notification.service';

/**
 * Component used to trigger notifications via renderer.
 */
@Component({
  template: ''
})
export class OfflineComponent {

  constructor(private renderer: Renderer2, private notificationService: OfflineNotificationService) {
    renderer.listen('window', 'online', () => notificationService.notifyOnline());
    renderer.listen('window', 'offline', () => notificationService.notifyOffline());

    // Is there a better way to access navigator?
    if (navigator.onLine) {
      notificationService.notifyOnline();
    } else {
      notificationService.notifyOffline();
    }
  }
}
