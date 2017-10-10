import 'p2';
import 'pixi';
import 'phaser';

import Boot from './states/boot';
import Preloader from './states/preloader';
import Title from './states/title';

export class App extends Phaser.Game {
    constructor(config: Phaser.IGameConfig) {
        super (config);

        this.state.add('boot', Boot);
        this.state.add('preloader', Preloader);
        this.state.add('title', Title);

        this.state.start('boot');
    }
}
