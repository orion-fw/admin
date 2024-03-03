import { IPlugin } from '@orion-framework/core';
import './commands'
class AdminClientPlugin implements IPlugin{
  name = "AdminClientPlugin";

    load() {
      console.log(`${this.name} initialized.`);
      // Plugin-spezifische Initialisierung
    }
  
    unload() {
      console.log(`${this.name} entladen.`);
      // Cleanup-Logik
    }
  }

  export { AdminClientPlugin };
