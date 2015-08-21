/**
 * Created by eduardo on 8/20/2015.
 */
var phaser = require('phaser'),
    config = require('../config/eluna');

var game = new phaser.Game(config.width, config.height, phaser.AUTO, '',
        {
          preload: preload,
          crreate: create,
          update: update
        });


function preload() {
  "use strict";

}

function create() {
  "use strict";
}

function update() {
  "use strict";

}
module.exports = game
