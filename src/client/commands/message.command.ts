import {registerCommand} from '@orion-framework/core';

registerCommand('ah', (source, args, raw) => {
  console.log('triggering ah', source, args, raw)
  
}, {}, false)