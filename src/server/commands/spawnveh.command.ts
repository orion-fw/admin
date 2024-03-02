import {registerCommand} from '@orion-framework/core';

registerCommand('spawnveh', (source, args, raw) => {
  if(!args[0]){
    console.error('ERROR! You should use /spawnveh <vehicleName> <color>');
    return;
  }

  const model: string = args[0].toString()
  const playerPosition: number[] = GetEntityCoords(GetPlayerPed(source));

        const createdVehicle: number = CreateVehicle(
          model,
          playerPosition[0],
          playerPosition[1],
          playerPosition[2],
          0,
          true,
          true
        );
        TaskWarpPedIntoVehicle(GetPlayerPed(source), createdVehicle, -1);
        SetVehicleCustomPrimaryColour(createdVehicle, 0, 0, 0);
        SetVehicleCustomSecondaryColour(createdVehicle, 0, 0, 0);
}, {
  description: 'Spawn a vehicle at your position',
  arguments: [
    {
      name: 'vehicleName',
      help: 'The name of the vehicle model'
    },
    {
      name: 'color',
      help: 'The color of the spawned vehicle'
    }
  ]
}, false)
