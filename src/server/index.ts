import './commands'
import { IPlugin } from '@orion-framework/core';

class AdminServerPlugin implements IPlugin{
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

  export { AdminServerPlugin}