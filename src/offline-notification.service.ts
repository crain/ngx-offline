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

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class OfflineNotificationService {

  private _offline: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
  }

  public notifyOffline(): void {
    this._offline.next(true);
  }

  public notifyOnline(): void {
    this._offline.next(false);
  }

  public get offline(): Observable<boolean> {
    return this._offline.asObservable();
  }

}
