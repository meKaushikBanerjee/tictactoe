function StateManager() {
    var _0x74e7x2 = {},
        _0x74e7x3 = null,
        _0x74e7x4 = null,
        _0x74e7x5 = 0,
        _0x74e7x6 = false;
    this['active_name'] = null;
    this['add'] = function() {
        for (var _0x74e7x7 = arguments['length']; _0x74e7x7--;) {
            var _0x74e7x8 = arguments[_0x74e7x7];
            _0x74e7x2[_0x74e7x8['name']] = _0x74e7x8;
        }
    };
    this['set'] = function(_0x74e7x9) {
        _0x74e7x4 = _0x74e7x2[_0x74e7x9];
        this['active_name'] = _0x74e7x9;
    };
    this['get'] = function(_0x74e7x9) {
        return _0x74e7x2[_0x74e7x9]
    };
    this['change'] = function(_0x74e7x9, _0x74e7xa) {
        _0x74e7x5 = 0;
        _0x74e7x6 = _0x74e7xa || false;
        _0x74e7x3 = _0x74e7x9;
        this['active_name'] = _0x74e7x9;
    };
    this['tick'] = function(_0x74e7xb) {
        if (_0x74e7x3) {
            if (_0x74e7x5 <= 1) {
                _0x74e7x5 += 0.02;
                _0x74e7x4['update']();
                _0x74e7x2[_0x74e7x3]['update']();
                var _0x74e7xc = _0x74e7x4['render'](),
                    _0x74e7xd = _0x74e7x2[_0x74e7x3]['render'](),
                    _0x74e7xe = _0x74e7xc['width'],
                    _0x74e7xf = _0x74e7xc['height'],
                    _0x74e7x10 = _0x74e7xd['width'],
                    _0x74e7x11 = _0x74e7xd['height'],
                    _0x74e7x12 = 2,
                    _0x74e7x13, _0x74e7x14 = _0x74e7x5;
                _0x74e7x13 = _0x74e7x14 < 0.5 ? 2 * _0x74e7x14 * _0x74e7x14 : -2 * (_0x74e7x14 * (_0x74e7x14 - 2)) - 1;
                if (_0x74e7x6) {
                    _0x74e7x13 = 1 - _0x74e7x13;
                    var _0x74e7x14 = _0x74e7xd;
                    _0x74e7xd = _0x74e7xc;
                    _0x74e7xc = _0x74e7x14;
                };
                for (var _0x74e7x7 = 0; _0x74e7x7 < _0x74e7xe; _0x74e7x7 += _0x74e7x12) {
                    _0x74e7xb['drawImage'](_0x74e7xc, _0x74e7x7, 0, _0x74e7x12, _0x74e7xf, _0x74e7x7 - _0x74e7x13 * _0x74e7x7, (_0x74e7xe - _0x74e7x7) * _0x74e7x13 * 0.2, _0x74e7x12, _0x74e7xf - (_0x74e7xe - _0x74e7x7) * _0x74e7x13 * 0.4)
                };
                _0x74e7x13 = 1 - _0x74e7x13;
                for (var _0x74e7x7 = 0; _0x74e7x7 < _0x74e7x10; _0x74e7x7 += _0x74e7x12) {
                    _0x74e7xb['drawImage'](_0x74e7xd, _0x74e7x7, 0, _0x74e7x12, _0x74e7x11, _0x74e7x7 - (_0x74e7x7 - _0x74e7x10) * _0x74e7x13, _0x74e7x7 * _0x74e7x13 * 0.2, _0x74e7x12, _0x74e7xf - _0x74e7x7 * _0x74e7x13 * 0.4)
                };
            } else {
                _0x74e7x4 = _0x74e7x2[_0x74e7x3];
                _0x74e7x3 = false;
                _0x74e7x4['update']();
                _0x74e7x4['render'](_0x74e7xb);
            }
        } else {
            _0x74e7x4['update']();
            _0x74e7x4['render'](_0x74e7xb);
        }
    };
}

function Tile(_0x74e7x16, _0x74e7x17) {
    var _0x74e7x16 = _0x74e7x16,
        _0x74e7x17 = _0x74e7x17;
    var _0x74e7x18 = Tile['BLANK'];
    var _0x74e7x5 = 0;
    if (_0x74e7x18 == null) {
        (function() {
            var _0x74e7x19 = document['createElement']('canvas');
            _0x74e7x19['width'] = _0x74e7x19['height'] = 100;
            var _0x74e7x1a = _0x74e7x19['getContext']('2d');
            _0x74e7x1a['fillStyle'] = '#ff4d4d';
            _0x74e7x1a['lineWidth'] = 4;
            _0x74e7x1a['strokeStyle'] = 'white';
            _0x74e7x1a['lineCap'] = 'round';
            _0x74e7x1a['fillRect'](0, 0, 100, 100);
            Tile['BLANK'] = new Image();
            Tile['BLANK']['src'] = _0x74e7x19['toDataURL']();
            _0x74e7x1a['fillRect'](0, 0, 100, 100);
            _0x74e7x1a['beginPath']();
            _0x74e7x1a['arc'](50, 50, 30, 0, 2 * Math['PI']);
            _0x74e7x1a['stroke']();
            Tile['NOUGHT'] = new Image();
            Tile['NOUGHT']['src'] = _0x74e7x19['toDataURL']();
            _0x74e7x1a['fillRect'](0, 0, 100, 100);
            _0x74e7x1a['beginPath']();
            _0x74e7x1a['moveTo'](20, 20);
            _0x74e7x1a['lineTo'](80, 80);
            _0x74e7x1a['moveTo'](80, 20);
            _0x74e7x1a['lineTo'](20, 80);
            _0x74e7x1a['stroke']();
            Tile['CROSS'] = new Image();
            Tile['CROSS']['src'] = _0x74e7x19['toDataURL']();
        })();
        _0x74e7x18 = Tile['BLANK'];
    };
    this['active'] = function() {
        return _0x74e7x5 > 0
    };
    this['equals'] = function(_0x74e7x1b) {
        return _0x74e7x18 === _0x74e7x1b
    };
    this['hasData'] = function() {
        return _0x74e7x18 !== Tile['BLANK']
    };
    this['set'] = function(_0x74e7x3) {
        _0x74e7x18 = _0x74e7x3
    };
    this['flip'] = function(_0x74e7x3) {
        _0x74e7x18 = _0x74e7x3;
        _0x74e7x5 = 1;
    };
    this['update'] = function() {
        if (_0x74e7x5 > 0) {
            _0x74e7x5 -= 0.02
        }
    };
    this['draw'] = function(_0x74e7xb) {
        if (_0x74e7x5 <= 0) {
            _0x74e7xb['drawImage'](_0x74e7x18, _0x74e7x16, _0x74e7x17);
            return;
        };
        var _0x74e7x12 = 2;
        var _0x74e7x14 = _0x74e7x5 > 0.5 ? Tile['BLANK'] : _0x74e7x18;
        var _0x74e7x13 = -Math['abs'](2 * _0x74e7x5 - 1) + 1;
        _0x74e7x13 *= _0x74e7x13;
        for (var _0x74e7x7 = 0; _0x74e7x7 < 100; _0x74e7x7 += _0x74e7x12) {
            var _0x74e7x1c = 50 - (_0x74e7x5 > 0.5 ? 100 - _0x74e7x7 : _0x74e7x7);
            _0x74e7xb['drawImage'](_0x74e7x14, _0x74e7x7, 0, _0x74e7x12, 100, _0x74e7x16 + _0x74e7x7 - _0x74e7x13 * _0x74e7x7 + 50 * _0x74e7x13, _0x74e7x17 - _0x74e7x1c * _0x74e7x13 * 0.2, _0x74e7x12, 100 + _0x74e7x1c * _0x74e7x13 * 0.4);
        };
    };
}

function AIPlayer(_0x74e7x1e) {
    var _0x74e7x1e = _0x74e7x1e,
        _0x74e7x1f, _0x74e7x20;
    this['setSeed'] = function(_0x74e7x21) {
        _0x74e7x1f = _0x74e7x21;
        _0x74e7x20 = _0x74e7x21 === Tile['NOUGHT'] ? Tile['CROSS'] : Tile['NOUGHT'];
    };
    this['getSeed'] = function() {
        return _0x74e7x1f
    };
    this['move'] = function() {
        return _0x74e7x22(2, _0x74e7x1f)[1]
    };

    function _0x74e7x22(_0x74e7x23, _0x74e7x24) {
        var _0x74e7x25 = _0x74e7x2a();
        var _0x74e7x26 = (_0x74e7x24 === _0x74e7x1f) ? -1e100 : 1e100,
            _0x74e7x27, _0x74e7x28 = -1;
        if (_0x74e7x25['length'] === 0 || _0x74e7x23 === 0) {
            _0x74e7x26 = _0x74e7x2c()
        } else {
            for (var _0x74e7x7 = _0x74e7x25['length']; _0x74e7x7--;) {
                var _0x74e7x29 = _0x74e7x25[_0x74e7x7];
                _0x74e7x1e[_0x74e7x29]['set'](_0x74e7x24);
                if (_0x74e7x24 === _0x74e7x1f) {
                    _0x74e7x27 = _0x74e7x22(_0x74e7x23 - 1, _0x74e7x20)[0];
                    if (_0x74e7x27 > _0x74e7x26) {
                        _0x74e7x26 = _0x74e7x27;
                        _0x74e7x28 = _0x74e7x29;
                    };
                } else {
                    _0x74e7x27 = _0x74e7x22(_0x74e7x23 - 1, _0x74e7x1f)[0];
                    if (_0x74e7x27 < _0x74e7x26) {
                        _0x74e7x26 = _0x74e7x27;
                        _0x74e7x28 = _0x74e7x29;
                    };
                };
                _0x74e7x1e[_0x74e7x29]['set'](Tile.BLANK);
            }
        };
        return [_0x74e7x26, _0x74e7x28];
    }

    function _0x74e7x2a() {
        var _0x74e7x2b = [];
        if (_0x74e7x35(_0x74e7x1f) || _0x74e7x35(_0x74e7x20)) {
            return _0x74e7x2b
        };
        for (var _0x74e7x7 = _0x74e7x1e['length']; _0x74e7x7--;) {
            if (!_0x74e7x1e[_0x74e7x7]['hasData']()) {
                _0x74e7x2b['push'](_0x74e7x7)
            }
        };
        return _0x74e7x2b;
    }

    function _0x74e7x2c() {
        var _0x74e7x2d = 0;
        _0x74e7x2d += _0x74e7x2e(0, 1, 2);
        _0x74e7x2d += _0x74e7x2e(3, 4, 5);
        _0x74e7x2d += _0x74e7x2e(6, 7, 8);
        _0x74e7x2d += _0x74e7x2e(0, 3, 6);
        _0x74e7x2d += _0x74e7x2e(1, 4, 7);
        _0x74e7x2d += _0x74e7x2e(2, 5, 8);
        _0x74e7x2d += _0x74e7x2e(0, 4, 8);
        _0x74e7x2d += _0x74e7x2e(2, 4, 6);
        return _0x74e7x2d;
    }

    function _0x74e7x2e(_0x74e7x2f, _0x74e7x30, _0x74e7x31) {
        var _0x74e7x2d = 0;
        if (_0x74e7x1e[_0x74e7x2f]['equals'](_0x74e7x1f)) {
            _0x74e7x2d = 1
        } else {
            if (_0x74e7x1e[_0x74e7x2f]['equals'](_0x74e7x20)) {
                _0x74e7x2d = -1
            }
        };
        if (_0x74e7x1e[_0x74e7x30]['equals'](_0x74e7x1f)) {
            if (_0x74e7x2d === 1) {
                _0x74e7x2d = 10
            } else {
                if (_0x74e7x2d === -1) {
                    return 0
                } else {
                    _0x74e7x2d = 1
                }
            }
        } else {
            if (_0x74e7x1e[_0x74e7x30]['equals'](_0x74e7x20)) {
                if (_0x74e7x2d === -1) {
                    _0x74e7x2d = -10
                } else {
                    if (_0x74e7x2d === 1) {
                        return 0
                    } else {
                        _0x74e7x2d = -1
                    }
                }
            }
        };
        if (_0x74e7x1e[_0x74e7x31]['equals'](_0x74e7x1f)) {
            if (_0x74e7x2d > 0) {
                _0x74e7x2d *= 10
            } else {
                if (_0x74e7x2d < 0) {
                    return 0
                } else {
                    _0x74e7x2d = 1
                }
            }
        } else {
            if (_0x74e7x1e[_0x74e7x31]['equals'](_0x74e7x20)) {
                if (_0x74e7x2d < 0) {
                    _0x74e7x2d *= 10
                } else {
                    if (_0x74e7x2d > 0) {
                        return 0
                    } else {
                        _0x74e7x2d = -1
                    }
                }
            }
        };
        return _0x74e7x2d;
    }
    var _0x74e7x32 = (function() {
        var _0x74e7x33 = ['111000000', '000111000', '000000111', '100100100', '010010010', '001001001', '100010001', '001010100'],
            _0x74e7x34 = new Array(_0x74e7x33['length']);
        for (var _0x74e7x7 = _0x74e7x33['length']; _0x74e7x7--;) {
            _0x74e7x34[_0x74e7x7] = parseInt(_0x74e7x33[_0x74e7x7], 2)
        };
        return _0x74e7x34;
    })();
    var _0x74e7x35 = this['hasWon'] = function(_0x74e7x24) {
        var _0x74e7x13 = 0;
        for (var _0x74e7x7 = _0x74e7x1e['length']; _0x74e7x7--;) {
            if (_0x74e7x1e[_0x74e7x7]['equals'](_0x74e7x24)) {
                _0x74e7x13 |= (1 << _0x74e7x7)
            }
        };
        for (var _0x74e7x7 = _0x74e7x32['length']; _0x74e7x7--;) {
            var _0x74e7x33 = _0x74e7x32[_0x74e7x7];
            if ((_0x74e7x13 & _0x74e7x33) === _0x74e7x33) {
                return true
            };
        };
        return false;
    };
    this['hasWinner'] = function() {
        if (_0x74e7x35(_0x74e7x1f)) {
            return _0x74e7x1f
        };
        if (_0x74e7x35(_0x74e7x20)) {
            return _0x74e7x20
        };
        return false;
    };
}

function MenuButton(_0x74e7x37, _0x74e7x16, _0x74e7x17, _0x74e7x38) {
    var _0x74e7x37 = _0x74e7x37,
        _0x74e7x16 = _0x74e7x16,
        _0x74e7x17 = _0x74e7x17,
        _0x74e7x39 = _0x74e7x38;
    var _0x74e7x3a, _0x74e7x3b, _0x74e7x3c = {};
    canvas['addEventListener']('mousedown', function(_0x74e7x3d) {
        if (state['active_name'] !== 'menu') {
            return
        };
        if (_0x74e7x3c['hasPoint'](mouse['x'], mouse['y'])) {
            if (_0x74e7x39) {
                _0x74e7x39()
            }
        };
    }, false);
    (function() {
        var _0x74e7x19 = document['createElement']('canvas'),
            _0x74e7x3e = _0x74e7x19['width'] = 340,
            _0x74e7x3f = _0x74e7x19['height'] = 50,
            _0x74e7x40 = 2,
            _0x74e7x2d = 10;
        _0x74e7x3c['x'] = _0x74e7x16;
        _0x74e7x3c['y'] = _0x74e7x17;
        _0x74e7x3c['width'] = _0x74e7x19['width'];
        _0x74e7x3c['height'] = _0x74e7x19['height'];
        _0x74e7x3e -= _0x74e7x40;
        _0x74e7x3f -= _0x74e7x40;
        var _0x74e7x1a = _0x74e7x19['getContext']('2d');
        _0x74e7x1a['fillStyle'] = 'white';
        _0x74e7x1a['strokeStyle'] = '#ff4d4d';
        _0x74e7x1a['lineWidth'] = _0x74e7x40;
        _0x74e7x1a['font'] = '20px Helvetica';
        _0x74e7x1a['translate'](_0x74e7x40 / 2, _0x74e7x40 / 2);
        _0x74e7x1a['beginPath']();
        _0x74e7x1a['arc'](_0x74e7x2d, _0x74e7x2d, _0x74e7x2d, Math.PI, 1.5 * Math['PI']);
        _0x74e7x1a['arc'](_0x74e7x3e - _0x74e7x2d, _0x74e7x2d, _0x74e7x2d, 1.5 * Math['PI'], 0);
        _0x74e7x1a['arc'](_0x74e7x3e - _0x74e7x2d, _0x74e7x3f - _0x74e7x2d, _0x74e7x2d, 0, 0.5 * Math['PI']);
        _0x74e7x1a['arc'](_0x74e7x2d, _0x74e7x3f - _0x74e7x2d, _0x74e7x2d, 0.5 * Math['PI'], Math.PI);
        _0x74e7x1a['closePath']();
        _0x74e7x1a['fill']();
        _0x74e7x1a['stroke']();
        _0x74e7x1a['fillStyle'] = _0x74e7x1a['strokeStyle'];
        var _0x74e7x41 = _0x74e7x37;
        _0x74e7x1a['fillText'](_0x74e7x41, (_0x74e7x3e - _0x74e7x1a['measureText'](_0x74e7x41)['width']) / 2, 30);
        _0x74e7x3b = new Image();
        _0x74e7x3b['src'] = _0x74e7x19['toDataURL']();
        _0x74e7x1a['fill']();
        _0x74e7x1a['stroke']();
        _0x74e7x1a['fillStyle'] = 'white';
        _0x74e7x1a['fillText'](_0x74e7x41, (_0x74e7x3e - _0x74e7x1a['measureText'](_0x74e7x41)['width']) / 2, 30);
        _0x74e7x3a = new Image();
        _0x74e7x3a['src'] = _0x74e7x19['toDataURL']();
    })();
    _0x74e7x3c['hasPoint'] = function(_0x74e7x16, _0x74e7x17) {
        var _0x74e7x42 = this['x'] < _0x74e7x16 && _0x74e7x16 < this['x'] + this['width'],
            _0x74e7x43 = this['y'] < _0x74e7x17 && _0x74e7x17 < this['y'] + this['height'];
        return _0x74e7x42 && _0x74e7x43;
    };
    this['draw'] = function(_0x74e7xb) {
        var _0x74e7x18 = _0x74e7x3c['hasPoint'](mouse['x'], mouse['y']) && state['active_name'] === 'menu' ? _0x74e7x3a : _0x74e7x3b;
        _0x74e7xb['drawImage'](_0x74e7x18, _0x74e7x16, _0x74e7x17);
    };
}

function Scene(_0x74e7x45, _0x74e7x46) {
    var _0x74e7x45 = _0x74e7x45,
        _0x74e7x46 = _0x74e7x46;
    var _0x74e7x47 = document['createElement']('canvas');
    _0x74e7x47['width'] = _0x74e7x45;
    _0x74e7x47['height'] = _0x74e7x46;
    var _0x74e7xb = _0x74e7x47['getContext']('2d');
    this['getContext'] = function() {
        return _0x74e7xb
    };
    this['getCanvas'] = function() {
        return _0x74e7x47
    };
    this['draw'] = function(_0x74e7x1a) {
        _0x74e7x1a['drawImage'](_0x74e7x47, 0, 0)
    };
}