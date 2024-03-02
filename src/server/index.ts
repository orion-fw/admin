import './commands'
import { IPlugin } from '@orion-framework/core';

export default class AdminServerPlugin implements IPlugin{
  name = "AdminServerPlugin";

    load() {
      console.log(`${this.name} initialized.`);
      // Plugin-spezifische Initialisierung
    }
  
    unload() {
      console.log(`${this.name} entladen.`);
      // Cleanup-Logik
    }
  }