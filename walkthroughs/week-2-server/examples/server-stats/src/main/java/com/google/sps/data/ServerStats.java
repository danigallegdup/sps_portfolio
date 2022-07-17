// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.data;

/** Class containing server statistics. */
public final class ServerStats {

  private final String startTime;
  private final String currentTime;
  private final String maxMemory;
  private final String usedMemory;

  public ServerStats(String startTime, String  currentTime, String  maxMemory, String  usedMemory) {
    this.startTime = startTime;
    this.currentTime = currentTime;
    this.maxMemory = maxMemory;
    this.usedMemory = usedMemory;
  }

  public String  getStartTime() {
    return startTime;
  }

  public String  getCurrentTime() {
    return currentTime;
  }

  public String getMaxMemory() {
    return maxMemory;
  }

  public String  getUsedMemory() {
    return usedMemory;
  }
}
