'use strict';

const events = require('../eventEmitter.js');
const handleDriver = require('../driver/handleDriver.js');

describe('testing event handlers', () => {

  test('Should dilate eyes when bright', () => {
    jest.spyOn(console, "log");
    jest.spyOn(events, "emit");

    events.on('pickup', handleDriver);
    events.emit('brightness', { brightness: 76 });
    expect(console.log).toHaveBeenCalledWith('Dilate pupils');
    expect(events.emit).toHaveBeenCalledWith('brain', 76);
  });
  