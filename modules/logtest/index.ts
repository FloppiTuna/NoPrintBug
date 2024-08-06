import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Logtest.web.ts
// and on native platforms to Logtest.ts
import LogtestModule from './src/LogtestModule';

export function hello(): string {
  return LogtestModule.hello();
}

const emitter = new EventEmitter(LogtestModule ?? NativeModulesProxy.Logtest);

