function MenuState(_0x22f7x2) {
    this['name'] = _0x22f7x2;
    var _0x22f7x3 = new Scene(canvas['width'], canvas['height']),
        _0x22f7x4 = _0x22f7x3['getContext']();
    var _0x22f7x5 = [],
        _0x22f7x6 = 0,
        _0x22f7x7 = 0;
    var _0x22f7x8 = 100;
    _0x22f7x5['push'](new MenuButton('One Player Game', 20, _0x22f7x8 + 60, function() {
        state['get']('game')['init'](ONE_PLAYER);
        state['change']('game');
    }));
    _0x22f7x5['push'](new MenuButton('Two Player Game', 20, _0x22f7x8 + 120, function() {
        state['get']('game')['init'](TWO_PLAYER);
        state['change']('game');
    }));
    _0x22f7x5['push'](new MenuButton('About Developer', 20, _0x22f7x8 + 180, function() {
        window['open']('http://www.kaushikbanerjee.epizy.com/')
    }));
    this['update'] = function() {
        _0x22f7x7++;
        _0x22f7x6 = 0.2 * Math['cos'](_0x22f7x7 * 0.02);
    };
    this['render'] = function(_0x22f7x9) {
        _0x22f7x4['clearRect'](0, 0, canvas['width'], canvas['height']);
        _0x22f7x4['save']();
        _0x22f7x4['translate'](190, 60);
        _0x22f7x4['rotate'](_0x22f7x6);
        _0x22f7x4['font'] = '40px Helvetica';
        _0x22f7x4['fillStyle'] = '#000000';
        var _0x22f7xa = 'Kata Kuti(Tic Tac Toe)';
        _0x22f7x4['fillText'](_0x22f7xa, -_0x22f7x4['measureText'](_0x22f7xa)['width'] / 2, 18);
        _0x22f7x4['restore']();
        for (var _0x22f7xb = _0x22f7x5['length']; _0x22f7xb--;) {
            _0x22f7x5[_0x22f7xb]['draw'](_0x22f7x4)
        };
        if (_0x22f7x9) {
            _0x22f7x3['draw'](_0x22f7x9)
        } else {
            return _0x22f7x3['getCanvas']()
        };
    };
}
var ONE_PLAYER = 1,
    TWO_PLAYER = 2;

function GameState(_0x22f7x2) {
    this['name'] = _0x22f7x2;
    var _0x22f7x3 = new Scene(canvas['width'], canvas['height']),
        _0x22f7x4 = _0x22f7x3['getContext']();
    var _0x22f7xf, _0x22f7x10, _0x22f7x11, _0x22f7x12, _0x22f7x13, _0x22f7x14, _0x22f7x15, _0x22f7x16, _0x22f7x17;
    canvas['addEventListener']('mousedown', function(_0x22f7x18) {
        if (_0x22f7x16 && state['active_name'] === 'game') {
            state['change']('menu', true);
            return;
        };
        if (!_0x22f7x12 || _0x22f7x15 || state['active_name'] !== 'game' || !_0x22f7x17) {
            return
        };
        var _0x22f7x19 = mouse['x'];
        var _0x22f7x1a = mouse['y'];
        if (_0x22f7x19 % 120 >= 20 && _0x22f7x1a % 120 >= 20) {
            var _0x22f7x1b = Math['floor'](_0x22f7x19 / 120);
            _0x22f7x1b += Math['floor'](_0x22f7x1a / 120) * 3;
            if (_0x22f7xf[_0x22f7x1b]['hasData']()) {
                return
            };
            _0x22f7xf[_0x22f7x1b]['flip'](_0x22f7x10);
            if (_0x22f7x14 & ONE_PLAYER) {
                _0x22f7x12 = false
            } else {
                _0x22f7x10 = _0x22f7x10 === Tile['NOUGHT'] ? Tile['CROSS'] : Tile['NOUGHT']
            };
        };
    }, false);
    this['init'] = function(_0x22f7x1c, _0x22f7x1d) {
        _0x22f7x14 = _0x22f7x1c || ONE_PLAYER;
        _0x22f7xf = [];
        for (var _0x22f7xb = 0; _0x22f7xb < 9; _0x22f7xb++) {
            var _0x22f7x1e = (_0x22f7xb % 3) * 120 + 20;
            var _0x22f7x1f = Math['floor'](_0x22f7xb / 3) * 120 + 20;
            _0x22f7xf['push'](new Tile(_0x22f7x1e, _0x22f7x1f));
        };
        _0x22f7x10 = _0x22f7x1d || Tile['NOUGHT'];
        _0x22f7x12 = _0x22f7x10 === Tile['NOUGHT'];
        _0x22f7x13 = false;
        _0x22f7x15 = false;
        _0x22f7x16 = false;
        _0x22f7x17 = false;
        _0x22f7x11 = new AIPlayer(_0x22f7xf);
        _0x22f7x11['setSeed'](_0x22f7x10 === Tile['NOUGHT'] ? Tile['CROSS'] : Tile['NOUGHT']);
        if (_0x22f7x14 & TWO_PLAYER) {
            _0x22f7x10 = Tile['NOUGHT'];
            _0x22f7x12 = true;
        };
    };
    this['update'] = function() {
        if (_0x22f7x16) {
            return
        };
        var _0x22f7x20 = false;
        for (var _0x22f7xb = _0x22f7xf['length']; _0x22f7xb--;) {
            _0x22f7xf[_0x22f7xb]['update']();
            _0x22f7x20 = _0x22f7x20 || _0x22f7xf[_0x22f7xb]['active']();
        };
        if (!_0x22f7x20) {
            if (!_0x22f7x13 && !_0x22f7x12) {
                var _0x22f7x21 = _0x22f7x11['move']();
                if (_0x22f7x21 === -1) {
                    _0x22f7x15 = true
                } else {
                    _0x22f7xf[_0x22f7x21]['flip'](_0x22f7x11['getSeed']())
                };
                _0x22f7x12 = true;
            };
            if (_0x22f7x15 && !_0x22f7x13) {
                if (_0x22f7x15 === true) {
                    _0x22f7x16 = 'The game was a draw!'
                } else {
                    if (_0x22f7x15 === Tile['NOUGHT']) {
                        _0x22f7x16 = 'The Nought player won!'
                    } else {
                        _0x22f7x16 = 'The Cross player won!'
                    }
                }
            };
            _0x22f7x13 = true;
        } else {
            if (_0x22f7x13) {
                _0x22f7x15 = _0x22f7x11['hasWinner']()
            };
            _0x22f7x13 = false;
        };
        _0x22f7x17 = true;
    };
    this['render'] = function(_0x22f7x9) {
        _0x22f7x4['clearRect'](0, 0, canvas['width'], canvas['height']);
        for (var _0x22f7xb = _0x22f7xf['length']; _0x22f7xb--;) {
            _0x22f7xf[_0x22f7xb]['draw'](_0x22f7x4)
        };
        if (_0x22f7x16) {
            var _0x22f7x22 = 10,
                _0x22f7x23 = 2,
                _0x22f7x24 = 300,
                _0x22f7x25 = 80;
            _0x22f7x24 -= _0x22f7x23;
            _0x22f7x25 -= _0x22f7x23;
            _0x22f7x4['save']();
            _0x22f7x4['translate']((canvas['width'] - _0x22f7x24 + _0x22f7x23) / 2, (canvas['height'] - _0x22f7x25 + _0x22f7x23) / 2);
            _0x22f7x4['fillStyle'] = 'white';
            _0x22f7x4['strokeStyle'] = '#ff4d4d';
            _0x22f7x4['lineWidth'] = _0x22f7x23;
            _0x22f7x4['font'] = '20px Helvetica';
            _0x22f7x4['beginPath']();
            _0x22f7x4['arc'](_0x22f7x22, _0x22f7x22, _0x22f7x22, Math.PI, 1.5 * Math['PI']);
            _0x22f7x4['arc'](_0x22f7x24 - _0x22f7x22, _0x22f7x22, _0x22f7x22, 1.5 * Math['PI'], 0);
            _0x22f7x4['arc'](_0x22f7x24 - _0x22f7x22, _0x22f7x25 - _0x22f7x22, _0x22f7x22, 0, 0.5 * Math['PI']);
            _0x22f7x4['arc'](_0x22f7x22, _0x22f7x25 - _0x22f7x22, _0x22f7x22, 0.5 * Math['PI'], Math.PI);
            _0x22f7x4['closePath']();
            _0x22f7x4['fill']();
            _0x22f7x4['stroke']();
            _0x22f7x4['fillStyle'] = '#ffb3b3';
            var _0x22f7xa = _0x22f7x16;
            _0x22f7x4['fillText'](_0x22f7xa, _0x22f7x24 / 2 - _0x22f7x4['measureText'](_0x22f7xa)['width'] / 2, 45);
            _0x22f7x4['restore']();
        };
        if (_0x22f7x9) {
            _0x22f7x3['draw'](_0x22f7x9)
        } else {
            return _0x22f7x3['getCanvas']()
        };
    };
}

function AboutState(_0x22f7x2) {
    this['name'] = _0x22f7x2;
    var _0x22f7x3 = new Scene(canvas['width'], canvas['height']),
        _0x22f7x4 = _0x22f7x3['getContext']();
    var _0x22f7x27 = 'Tic-tac-toe is a game for two players, X and O, who take turns marking the spaces in a 3\xD73 grid. The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal row wins the game.';
    var _0x22f7x17 = false;
    canvas['addEventListener']('mousedown', function(_0x22f7x18) {
        if (_0x22f7x17 && state['active_name'] === 'about') {
            state['change']('menu')
        };
        _0x22f7x17 = false;
    }, false);
    (function() {
        _0x22f7x4['font'] = '20px Helvetica';
        _0x22f7x4['fillStyle'] = '#ffb3b3';
        _0x22f7x4['translate'](20, 20);
        var _0x22f7x22 = 10,
            _0x22f7x24 = 340,
            _0x22f7x25 = 340,
            _0x22f7x28 = Math['PI'];
        _0x22f7x4['beginPath']();
        _0x22f7x4['arc'](_0x22f7x22, _0x22f7x22, _0x22f7x22, _0x22f7x28, 1.5 * _0x22f7x28);
        _0x22f7x4['arc'](_0x22f7x24 - _0x22f7x22, _0x22f7x22, _0x22f7x22, 1.5 * _0x22f7x28, 0);
        _0x22f7x4['arc'](_0x22f7x24 - _0x22f7x22, _0x22f7x25 - _0x22f7x22, _0x22f7x22, 0, 0.5 * _0x22f7x28);
        _0x22f7x4['arc'](_0x22f7x22, _0x22f7x25 - _0x22f7x22, _0x22f7x22, 0.5 * _0x22f7x28, _0x22f7x28);
        _0x22f7x4['fill']();
        _0x22f7x4['fillStyle'] = 'white';
        var _0x22f7x29 = _0x22f7x27['split'](' '),
            _0x22f7x2a = '',
            _0x22f7x1e = 20,
            _0x22f7x1f = 75,
            _0x22f7x2b = 300,
            _0x22f7x2c = 25;
        for (var _0x22f7x2d = 0; _0x22f7x2d < _0x22f7x29['length']; _0x22f7x2d++) {
            var _0x22f7x2e = _0x22f7x2a + _0x22f7x29[_0x22f7x2d] + ' ';
            var _0x22f7x2f = _0x22f7x4['measureText'](_0x22f7x2e);
            var _0x22f7x30 = _0x22f7x2f['width'];
            if (_0x22f7x30 > _0x22f7x2b && _0x22f7x2d > 0) {
                _0x22f7x4['fillText'](_0x22f7x2a, _0x22f7x1e, _0x22f7x1f);
                _0x22f7x2a = _0x22f7x29[_0x22f7x2d] + ' ';
                _0x22f7x1f += _0x22f7x2c;
            } else {
                _0x22f7x2a = _0x22f7x2e
            };
        };
        _0x22f7x4['fillText'](_0x22f7x2a, _0x22f7x1e, _0x22f7x1f);
    })();
    this['update'] = function() {
        _0x22f7x17 = true
    };
    this['render'] = function(_0x22f7x9) {
        if (_0x22f7x9) {
            _0x22f7x3['draw'](_0x22f7x9)
        } else {
            return _0x22f7x3['getCanvas']()
        }
    };
}