RegisterCommand('car', (source, args, raw) => {
    // TODO: make a vehicle! fun!
    console.log('triggered car command')
    emit('chat:addMessage', {
      args: [`I wish I could spawn this ${(args.length > 0 ? `${args[0]} or` : ``)} adder but my owner was too lazy. :(`]
    });
  }, false);