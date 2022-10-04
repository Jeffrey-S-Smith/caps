'use strict';

const events = require('../eventEmitter.js');
const handleVendor = require('../vendor/handleVendor.js');

describe('testing event handlers', () => {

  test('Should dilate eyes when bright', () => {
    jest.spyOn(console, "log");
    jest.spyOn(events, "emit");

    events.on('brightness', handleVendor);
    events.emit('brightness', { brightness: 76 });
    expect(console.log).toHaveBeenCalledWith('Dilate pupils');
    expect(events.emit).toHaveBeenCalledWith('brain', 76);
  });
  