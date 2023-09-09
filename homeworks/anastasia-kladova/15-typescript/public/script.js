/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BasicCalculator {
    add(num1, num2) {
        return { value: num1 + num2, errorMessage: '' };
    }
    subtract(num1, num2) {
        return { value: num1 - num2, errorMessage: '' };
    }
    multiply(num1, num2) {
        return { value: num1 * num2, errorMessage: '' };
    }
    divide(num1, num2) {
        return { value: num1 / num2, errorMessage: '' };
    }
    power(base, exponent) {
        return exponent < 1
            ? { value: null, errorMessage: 'Exponent must be a positive integer' }
            : { value: Math.pow(base, exponent), errorMessage: '' };
    }
    sqrt(num) {
        return num < 1
            ? {
                value: null,
                errorMessage: 'Cannot calculate square root of negative number',
            }
            : { value: Math.sqrt(num), errorMessage: '' };
    }
}
const exampleCalculator = new BasicCalculator();
console.log(exampleCalculator.add(1, 1));
console.log(exampleCalculator.subtract(2, 1));
console.log(exampleCalculator.multiply(2, 2));
console.log(exampleCalculator.divide(4, 2));
console.log(exampleCalculator.power(2, 2));
console.log(exampleCalculator.power(2, -2));
console.log(exampleCalculator.sqrt(9));
console.log(exampleCalculator.sqrt(-1));



/***/ }),

/***/ "./node_modules/webpack-plugin-serve/client.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/client.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/

/**
 * @note This file exists merely as an easy reference for folks adding it to their configuration entries
 */

(() => {
  /* eslint-disable global-require */
  const { run } = __webpack_require__(/*! ./lib/client/client */ "./node_modules/webpack-plugin-serve/lib/client/client.js");
  let hash = '<unknown>';
  let options;
  try {
    options = {"compress":null,"headers":null,"historyFallback":false,"hmr":true,"host":null,"liveReload":false,"log":{"level":"info","prefix":{"template":"{{level}}"},"name":"webpack-plugin-serve"},"open":false,"port":55555,"progress":true,"publicPath":null,"ramdisk":false,"secure":false,"static":["C:\\Users\\imp89\\react-laba-international-2\\homeworks\\anastasia-kladova\\15-typescript"],"status":true,"address":"[::]:55555","compilerName":null,"wpsId":"51c4907"};
  } catch (e) {
    const { log } = __webpack_require__(/*! ./lib/client/log */ "./node_modules/webpack-plugin-serve/lib/client/log.js");
    log.error(
      'The entry for webpack-plugin-serve was included in your build, but it does not appear that the plugin was. Please check your configuration.'
    );
  }

  try {
    // eslint-disable-next-line camelcase
    hash = __webpack_require__.h();
  } catch (e) {} // eslint-disable-line no-empty

  run(hash, options);
})();


/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const { error, refresh, warn } = __webpack_require__(/*! ./log */ "./node_modules/webpack-plugin-serve/lib/client/log.js")();

// ignore 1008 (HTTP 400 equivalent) and 1011 (HTTP 500 equivalent)
const ignoreCodes = [1008, 1011];
const maxAttempts = 10;

class ClientSocket {
  constructor(options, ...args) {
    this.args = args;
    this.attempts = 0;
    this.eventHandlers = [];
    this.options = options;
    this.retrying = false;

    this.connect();
  }

  addEventListener(...args) {
    this.eventHandlers.push(args);
    this.socket.addEventListener(...args);
  }

  close() {
    this.socket.close();
  }

  connect() {
    if (this.socket) {
      delete this.socket;
    }

    this.connecting = true;

    this.socket = new WebSocket(...this.args);

    if (this.options.retry) {
      this.socket.addEventListener('close', (event) => {
        if (ignoreCodes.includes(event.code)) {
          return;
        }

        if (!this.retrying) {
          warn(`The WebSocket was closed and will attempt to reconnect`);
        }

        this.reconnect();
      });
    } else {
      this.socket.onclose = () => warn(`The client WebSocket was closed. ${refresh}`);
    }

    this.socket.addEventListener('open', () => {
      this.attempts = 0;
      this.retrying = false;
    });

    if (this.eventHandlers.length) {
      for (const [name, fn] of this.eventHandlers) {
        this.socket.addEventListener(name, fn);
      }
    }
  }

  reconnect() {
    this.attempts += 1;
    this.retrying = true;

    if (this.attempts > maxAttempts) {
      error(`The WebSocket could not be reconnected. ${refresh}`);
      this.retrying = false;
      return;
    }

    const timeout = 1000 * this.attempts ** 2;

    setTimeout(() => this.connect(this.args), timeout);
  }

  removeEventListener(...args) {
    const [, handler] = args;
    this.eventHandlers = this.eventHandlers.filter(([, fn]) => fn === handler);
    this.socket.removeEventListener(...args);
  }
}

module.exports = { ClientSocket };


/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/client.js":
/*!****************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/client.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
/* eslint-disable global-require */
const run = (buildHash, options) => {
  const { address, client = {}, hmr, progress, secure, status } = options;

  options.firstInstance = !window.webpackPluginServe; // eslint-disable-line no-param-reassign

  window.webpackPluginServe = window.webpackPluginServe || {
    compilers: {}
  };
  window.webpackPluginServe.silent = !!client.silent;

  const { ClientSocket } = __webpack_require__(/*! ./ClientSocket */ "./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js");
  const { replace } = __webpack_require__(/*! ./hmr */ "./node_modules/webpack-plugin-serve/lib/client/hmr.js");
  const { error, info, warn } = __webpack_require__(/*! ./log */ "./node_modules/webpack-plugin-serve/lib/client/log.js")();

  const protocol = secure ? 'wss' : 'ws';
  const socket = new ClientSocket(client, `${client.protocol || protocol}://${client.address || address}/wps`);

  const { compilerName } = options;

  window.webpackPluginServe.compilers[compilerName] = {};

  // prevents ECONNRESET errors on the server
  window.addEventListener('beforeunload', () => socket.close());

  socket.addEventListener('message', (message) => {
    const { action, data = {} } = JSON.parse(message.data);
    const { errors, hash = '<?>', warnings } = data || {};
    const shortHash = hash.slice(0, 7);
    const identifier = options.compilerName ? `(Compiler: ${options.compilerName}) ` : '';
    const compiler = window.webpackPluginServe.compilers[compilerName];
    const { wpsId } = data;

    switch (action) {
      case 'build':
        compiler.done = false;
        break;
      case 'connected':
        info(`WebSocket connected ${identifier}`);
        break;
      case 'done':
        compiler.done = true;
        break;
      case 'problems':
        if (data.errors.length) {
          error(`${identifier}Build ${shortHash} produced errors:\n`, errors);
        }
        if (data.warnings.length) {
          warn(`${identifier}Build ${shortHash} produced warnings:\n`, warnings);
        }
        break;
      case 'reload':
        window.location.reload();
        break;
      case 'replace':
        // actions with a wpsId in tow indicate actions that should only be executed when the wpsId sent
        // matches the wpsId set in options. this is how we can identify multiple compilers in the
        // client.
        if (wpsId && wpsId === options.wpsId) {
          replace(buildHash, hash, hmr === 'refresh-on-failure');
        }
        break;
      default:
    }
  });

  if (options.firstInstance) {
    if (progress === 'minimal') {
      const { init } = __webpack_require__(/*! ./overlays/progress-minimal */ "./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js");
      init(options, socket);
    } else if (progress) {
      const { init } = __webpack_require__(/*! ./overlays/progress */ "./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js");
      init(options, socket);
    }

    if (status) {
      const { init } = __webpack_require__(/*! ./overlays/status */ "./node_modules/webpack-plugin-serve/lib/client/overlays/status.js");
      init(options, socket);
    }

    if (true) {
      info('Hot Module Replacement is active');

      if (options.liveReload) {
        info('Live Reload taking precedence over Hot Module Replacement');
      }
    } else {}

    if (false) {}
  }
};

module.exports = { run };


/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/hmr.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/hmr.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const { error, info, refresh, warn } = __webpack_require__(/*! ./log */ "./node_modules/webpack-plugin-serve/lib/client/log.js")();

let latest = true;

const hmr = (onFailure) => {
  return {
    onUnaccepted(data) {
      onFailure();
      warn('Change in unaccepted module(s):\n', data);
      warn(data);
    },
    onDeclined(data) {
      onFailure();
      warn('Change in declined module(s):\n', data);
    },
    onErrored(data) {
      onFailure();
      error('Error in module(s):\n', data);
    }
  };
};

const replace = async (buildHash, hash, refreshOnFailure) => {
  const { apply, check, status } = module.hot;

  if (hash) {
    // eslint-disable-next-line no-undef
    latest = hash.includes(buildHash);
  }

  if (!latest) {
    const hmrStatus = status();

    if (hmrStatus === 'abort' || hmrStatus === 'fail') {
      warn(`An HMR update was triggered, but ${hmrStatus}ed. ${refresh}`);
      return;
    }

    let modules;

    try {
      modules = await check(false);
    } catch (e) {
      // noop. this typically happens when a MultiCompiler has more than one compiler that includes
      // this script, and an update happens with a hash that isn't part of the compiler/module this
      // instance was loaded for.
      return;
    }

    if (!modules) {
      warn(`No modules found for replacement. ${refresh}`);
      return;
    }

    modules = await apply(
      hmr(
        refreshOnFailure
          ? () => {
              if (refreshOnFailure) {
                // eslint-disable-next-line no-undef
                location.reload();
              }
            }
          : () => {}
      )
    );

    if (modules) {
      latest = true;
      info(`Build ${hash.slice(0, 7)} replaced:\n`, modules);
    }
  }
};

module.exports = { replace };


/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/log.js ***!
  \*************************************************************/
/***/ ((module) => {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const { error, info, warn } = console;
const log = {
  error: error.bind(console, '⬡ wps:'),
  info: info.bind(console, '⬡ wps:'),
  refresh: 'Please refresh the page',
  warn: warn.bind(console, '⬡ wps:')
};
const noop = () => {};
const silent = {
  error: noop,
  info: noop,
  warn: noop
};

module.exports = () => (window.webpackPluginServe.silent ? silent : log);


/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
  Copyright © 2018 Andrew Powell, Matheus Gonçalves da Silva

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const { addCss, addHtml } = __webpack_require__(/*! ./util */ "./node_modules/webpack-plugin-serve/lib/client/overlays/util.js");

const ns = 'wps-progress-minimal';
const html = `
<div id="${ns}" class="${ns}-hidden">
  <div id="${ns}-bar"></div>
</div>
`;
const css = `
#${ns} {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 100vw;
  z-index: 2147483645;
}

#${ns}-bar {
  width: 0%;
  height: 4px;
  background-color: rgb(186, 223, 172);
}

@keyframes ${ns}-fade {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

.${ns}-disappear {
  animation: ${ns}-fade .3s;
  animation-fill-mode: forwards;
  animation-delay: .5s;
}

.${ns}-hidden {
  display: none;
}
`;

let hideOnPageVisible = false;

const update = (percent) => {
  const bar = document.querySelector(`#${ns}-bar`);
  bar.style.width = `${percent}%`;
};

const reset = (wrapper) => {
  wrapper.classList.add(`${ns}-disappear`);
};

const init = (options, socket) => {
  if (options.firstInstance) {
    document.addEventListener('DOMContentLoaded', () => {
      addCss(css);
      addHtml(html);

      const wrapper = document.querySelector(`#${ns}`);
      wrapper.addEventListener('animationend', () => {
        update(0);
        wrapper.classList.add(`${ns}-hidden`);
      });
    });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && hideOnPageVisible) {
        const wrapper = document.querySelector(`#${ns}`);
        reset(wrapper);
        hideOnPageVisible = false;
      }
    });
  }

  socket.addEventListener('message', (message) => {
    const { action, data } = JSON.parse(message.data);

    if (action !== 'progress') {
      return;
    }

    const percent = Math.floor(data.percent * 100);
    const wrapper = document.querySelector(`#${ns}`);

    if (wrapper) {
      wrapper.classList.remove(`${ns}-hidden`, `${ns}-disappear`);
    }

    if (data.percent === 1) {
      if (document.hidden) {
        hideOnPageVisible = true;
      } else {
        reset(wrapper);
      }
    } else {
      hideOnPageVisible = false;
    }

    update(percent);
  });
};

module.exports = {
  init
};


/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
  Copyright © 2018 Andrew Powell, Matheus Gonçalves da Silva

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const { addCss, addHtml } = __webpack_require__(/*! ./util */ "./node_modules/webpack-plugin-serve/lib/client/overlays/util.js");

const ns = 'wps-progress';
const css = `
#${ns}{
  width: 200px;
  height: 200px;
  position: fixed;
  right: 5%;
  top: 5%;
  transition: opacity .25s ease-in-out;
  z-index: 2147483645;
}

#${ns}-bg {
  fill: #282d35;
}

#${ns}-fill {
  fill: rgba(0, 0, 0, 0);
  stroke: rgb(186, 223, 172);
  stroke-dasharray: 219.99078369140625;
  stroke-dashoffset: -219.99078369140625;
  stroke-width: 10;
  transform: rotate(90deg)translate(0px, -80px);
}

#${ns}-percent {
  font-family: 'Open Sans';
  font-size: 18px;
  fill: #ffffff;
}

#${ns}-percent-value {
  dominant-baseline: middle;
  text-anchor: middle;
}

#${ns}-percent-super {
  fill: #bdc3c7;
  font-size: .45em;
  baseline-shift: 10%;
}

.${ns}-noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}

@keyframes ${ns}-fade {
	0% {
		opacity: 1;
		transform: scale(1);
		-webkit-transform: scale(1);
	}
	100% {
		opacity: 0;
		transform: scale(0);
		-webkit-transform: scale(0);
	}
}

.${ns}-disappear {
  animation: ${ns}-fade .3s;
  animation-fill-mode:forwards;
  animation-delay: .5s;
}

.${ns}-hidden {
  display: none;
}

/* Put google web font at the end, or you'll see FOUC in Firefox */
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
`;

const html = `
<svg id="${ns}" class="${ns}-noselect ${ns}-hidden" x="0px" y="0px" viewBox="0 0 80 80">
  <circle id="${ns}-bg" cx="50%" cy="50%" r="35"></circle>
  <path id="${ns}-fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
  <text id="${ns}-percent" x="50%" y="51%"><tspan id="${ns}-percent-value">0</tspan><tspan id="${ns}-percent-super">%</tspan></text>
</svg>
`;

let hideOnPageVisible = false;

const update = (percent) => {
  const max = -219.99078369140625;
  const value = document.querySelector(`#${ns}-percent-value`);
  const track = document.querySelector(`#${ns}-fill`);
  const offset = ((100 - percent) / 100) * max;

  track.setAttribute('style', `stroke-dashoffset: ${offset}`);
  value.innerHTML = percent.toString();
};

const reset = (svg) => {
  svg.classList.add(`${ns}-disappear`);
};

const init = (options, socket) => {
  if (options.firstInstance) {
    document.addEventListener('DOMContentLoaded', () => {
      addCss(css);
      addHtml(html);

      // Reset progress to zero after disappear animation
      const svg = document.querySelector(`#${ns}`);
      svg.addEventListener('animationend', () => {
        update(0);
        svg.classList.add(`${ns}-hidden`);
      });
    });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && hideOnPageVisible) {
        const svg = document.querySelector(`#${ns}`);
        reset(svg);
        hideOnPageVisible = false;
      }
    });
  }

  socket.addEventListener('message', (message) => {
    const { action, data } = JSON.parse(message.data);

    if (action !== 'progress') {
      return;
    }

    const percent = Math.floor(data.percent * 100);
    const svg = document.querySelector(`#${ns}`);

    if (!svg) {
      return;
    }

    // we can safely call this even if it doesn't have the class
    svg.classList.remove(`${ns}-disappear`, `${ns}-hidden`);

    if (data.percent === 1) {
      if (document.hidden) {
        hideOnPageVisible = true;
      } else {
        reset(svg);
      }
    } else {
      hideOnPageVisible = false;
    }

    update(percent);
  });
};

module.exports = { init };


/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/status.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/status.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const { addCss, addHtml, socketMessage } = __webpack_require__(/*! ./util */ "./node_modules/webpack-plugin-serve/lib/client/overlays/util.js");

const ns = 'wps-status';
const css = `
#${ns} {
  background: #282d35;
  border-radius: 0.6em;
  display: flex;
  flex-direction: column;
	font-family: 'Open Sans', Helvetica, Arial, sans-serif;
	font-size: 10px;
  height: 90%;
  min-height: 20em;
  left: 50%;
  opacity: 1;
  overflow: hidden;
  padding-bottom: 3em;
  position: absolute;
  top: 2rem;
  transform: translateX(-50%);
  transition: opacity .25s ease-in-out;
  width: 95%;
  z-index: 2147483645;
}

@keyframes ${ns}-hidden-display {
	0% {
		opacity: 1;
	}
	99% {
		display: inline-flex;
		opacity: 0;
	}
	100% {
		display: none;
		opacity: 0;
	}
}

#${ns}.${ns}-hidden {
  animation: ${ns}-hidden-display .3s;
  animation-fill-mode:forwards;
  display: none;
}

#${ns}.${ns}-min {
  animation: minimize 10s;
  bottom: 2em;
  cursor: pointer;
  height: 6em;
  left: auto;
  min-height: 6em;
  padding-bottom: 0;
  position: absolute;
  right: 2em;
  top: auto;
  transform: none;
  width: 6em;
}

#${ns}.${ns}-min #${ns}-beacon {
  display: block;
}

#${ns}-title {
  color: #fff;
  font-size: 1.2em;
  font-weight: normal;
  margin: 0;
  padding: 0.6em 0;
  text-align: center;
  width: 100%;
}

#${ns}.${ns}-min #${ns}-title {
  display: none;
}

#${ns}-title-errors {
  color: #ff5f58;
  font-style: normal;
  padding-left: 1em;
}

#${ns}-title-warnings {
  color: #ffbd2e;
  font-style: normal;
  padding-left: 1em;
}

#${ns}-problems {
  overflow-y: auto;
  padding: 1em 2em;
}

#${ns}-problems pre {
  color: #ddd;
  background: #282d35;
  display: block;
  font-size: 1.3em;
	font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  white-space: pre-wrap;
}

#${ns}-problems pre em {
  background: #ff5f58;
  border-radius: 0.3em;
  color: #641e16;
  font-style: normal;
  line-height: 3em;
  margin-right: 0.4em;
  padding: 0.1em 0.4em;
  text-transform: uppercase;
}

pre#${ns}-warnings em {
  background: #ffbd2e;
  color: #3e2723;
}

pre#${ns}-success {
  display: none;
  text-align: center;
}

pre#${ns}-success em {
  background: #7fb900;
  color: #004d40;
}

#${ns}-problems.${ns}-success #${ns}-success {
  display: block;
}

#${ns}.${ns}-min #${ns}-problems {
  display: none;
}

#${ns}-nav {
  opacity: 0.5;
  padding: 1.2em;
  position: absolute;
}

#${ns}.${ns}-min #${ns}-nav {
  display: none;
}

#${ns}-nav:hover {
  opacity: 1;
}

#${ns}-nav div {
  background: #ff5f58;
  border-radius: 1.2em;
  cursor: pointer;
  display: inline-block;
  height: 1.2em;
  position: relative;
  width: 1.2em;
}

div#${ns}-min {
  background: #ffbd2e;
  margin-left: 0.8em;
}

#${ns}-beacon {
  border-radius: 3em;
  display: none;
  font-size: 10px;
  height: 3em;
  margin: 1.6em auto;
  position: relative;
  width: 3em;
}

#${ns}-beacon:before, #${ns}-beacon:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(127,185,0, 0.2);
  border-radius: 3em;
  opacity: 0;
}

#${ns}-beacon:before {
  animation: ${ns}-pulse 3s infinite linear;
  transform: scale(1);
}

#${ns}-beacon:after {
  animation: ${ns}-pulse 3s 2s infinite linear;
}


@keyframes ${ns}-pulse {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  33% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}

#${ns}-beacon mark {
  background: rgba(127, 185, 0, 1);
  border-radius: 100% 100%;
  height: 1em;
  left: 1em;
  position: absolute;
  top: 1em;
  width: 1em;
}

#${ns}-beacon.${ns}-error mark {
  background: #ff5f58;
}

#${ns}-beacon.${ns}-error:before, #${ns}-beacon.error:after {
  background: rgba(255, 95, 88, 0.2);
}

#${ns}-beacon.${ns}-warning mark {
  background: #ffbd2e;
}

#${ns}-beacon.${ns}-warning:before, #${ns}-beacon.warning:after {
  background: rgba(255, 189, 46, 0.2);
}

/* Put google web font at the end, or you'll see FOUC in Firefox */
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
`;

const html = `
<aside id="${ns}" class="${ns}-hidden" title="build status">
  <figure id="${ns}-beacon">
    <mark/>
  </figure>
  <nav id="${ns}-nav">
    <div id="${ns}-close" title="close"></div>
    <div id="${ns}-min" title="minmize"></div>
  </nav>
  <h1 id="${ns}-title">
    build status
    <em id="${ns}-title-errors"></em>
    <em id="${ns}-title-warnings"></em>
  </h1>
  <article id="${ns}-problems">
    <pre id="${ns}-success"><em>Build Successful</em></pre>
    <pre id="${ns}-errors"></pre>
    <pre id="${ns}-warnings"></pre>
  </article>
</aside>
`;

const init = (options, socket) => {
  const hidden = `${ns}-hidden`;
  let hasProblems = false;
  let aside;
  let beacon;
  let problems;
  let preErrors;
  let preWarnings;
  let titleErrors;
  let titleWarnings;

  const reset = () => {
    preErrors.innerHTML = '';
    preWarnings.innerHTML = '';
    problems.classList.remove(`${ns}-success`);
    beacon.className = '';
    titleErrors.innerText = '';
    titleWarnings.innerText = '';
  };

  const addErrors = (errors) => {
    if (errors.length) {
      problems.classList.remove(`${ns}-success`);
      beacon.classList.add(`${ns}-error`);

      for (const error of errors) {
        const markup = `<div><em>Error</em> in ${error}</div>`;
        addHtml(markup, preErrors);
      }

      titleErrors.innerText = `${errors.length} Error(s)`;
    } else {
      titleErrors.innerText = '';
    }
    aside.classList.remove(hidden);
  };

  const addWarnings = (warnings) => {
    if (warnings.length) {
      problems.classList.remove(`${ns}-success`);

      if (!beacon.classList.contains(`${ns}-error`)) {
        beacon.classList.add(`${ns}-warning`);
      }

      for (const warning of warnings) {
        const markup = `<div><em>Warning</em> in ${warning}</div>`;
        addHtml(markup, preWarnings);
      }

      titleWarnings.innerText = `${warnings.length} Warning(s)`;
    } else {
      titleWarnings.innerText = '';
    }

    aside.classList.remove(hidden);
  };

  if (options.firstInstance) {
    document.addEventListener('DOMContentLoaded', () => {
      addCss(css);
      [aside] = addHtml(html);
      beacon = document.querySelector(`#${ns}-beacon`);
      problems = document.querySelector(`#${ns}-problems`);
      preErrors = document.querySelector(`#${ns}-errors`);
      preWarnings = document.querySelector(`#${ns}-warnings`);
      titleErrors = document.querySelector(`#${ns}-title-errors`);
      titleWarnings = document.querySelector(`#${ns}-title-warnings`);

      const close = document.querySelector(`#${ns}-close`);
      const min = document.querySelector(`#${ns}-min`);

      aside.addEventListener('click', () => {
        aside.classList.remove(`${ns}-min`);
      });

      close.addEventListener('click', () => {
        aside.classList.add(`${ns}-hidden`);
      });

      min.addEventListener('click', (e) => {
        aside.classList.add(`${ns}-min`);
        e.stopImmediatePropagation();
      });
    });
  }

  socketMessage(socket, (action, data) => {
    if (!aside) {
      return;
    }

    const { compilers } = window.webpackPluginServe;

    switch (action) {
      case 'build':
        // clear errors and warnings when a new build begins
        reset();
        break;
      case 'problems':
        addErrors(data.errors);
        addWarnings(data.warnings);
        aside.classList.remove(hidden);
        hasProblems = data.errors.length || data.warnings.length;
        break;
      case 'replace':
        // if there's a compiler that isn't done yet, hold off and let it run the show
        for (const compilerName of Object.keys(compilers)) {
          if (!compilers[compilerName]) {
            return;
          }
        }

        if (hasProblems && !preErrors.children.length && !preWarnings.children.length) {
          reset();
          hasProblems = false;
          problems.classList.add(`${ns}-success`);
          aside.classList.remove(hidden);

          setTimeout(() => aside.classList.add(hidden), 3e3);
        }
        break;
      default:
    }
  });
};

module.exports = { init };


/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/util.js":
/*!***********************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/util.js ***!
  \***********************************************************************/
/***/ ((module) => {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const addHtml = (html, parent) => {
  const div = document.createElement('div');
  const nodes = [];

  div.innerHTML = html.trim();

  while (div.firstChild) {
    nodes.push((parent || document.body).appendChild(div.firstChild));
  }

  return nodes;
};

const addCss = (css) => {
  const style = document.createElement('style');

  style.type = 'text/css';

  if (css.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  // append the stylesheet for the svg
  document.head.appendChild(style);
};

const socketMessage = (socket, handler) => {
  socket.addEventListener('message', (message) => {
    const { action, data = {} } = JSON.parse(message.data);
    handler(action, data);
  });
};

module.exports = { addCss, addHtml, socketMessage };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "51c4907-" + chunkId + "-wps-hmr.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main-51c4907-wps-hmr.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ad20e3de70de17c2c979")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "15-typescript:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate_15_typescript"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/script.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/webpack-plugin-serve/client.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRyxHQUFHLEdBQUcsUUFBUSxHQUFHO0FBQ3ZCO0FBQ0E7O0FBRUEsR0FBRyxHQUFHO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBRztBQUN2QjtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLEdBQUc7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLEdBQUc7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxHQUFHO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLE1BQU0sR0FBRztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLEdBQUc7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsR0FBRyxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUc7QUFDcEM7QUFDQTs7QUFFQSxHQUFHLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBRztBQUN2QjtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRyxHQUFHLEdBQUcsUUFBUSxHQUFHO0FBQ3ZCO0FBQ0E7O0FBRUEsR0FBRyxHQUFHO0FBQ047QUFDQTs7QUFFQSxHQUFHLEdBQUc7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sR0FBRztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLEdBQUc7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRyxtQkFBbUIsR0FBRztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLHNDQUFzQztXQUN0QztXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBOztXQUVBOzs7OztVRTlmQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTUtdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vMTUtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLXBsdWdpbi1zZXJ2ZS9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vMTUtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLXBsdWdpbi1zZXJ2ZS9saWIvY2xpZW50L0NsaWVudFNvY2tldC5qcyIsIndlYnBhY2s6Ly8xNS10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3dlYnBhY2stcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvY2xpZW50LmpzIiwid2VicGFjazovLzE1LXR5cGVzY3JpcHQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1wbHVnaW4tc2VydmUvbGliL2NsaWVudC9obXIuanMiLCJ3ZWJwYWNrOi8vMTUtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLXBsdWdpbi1zZXJ2ZS9saWIvY2xpZW50L2xvZy5qcyIsIndlYnBhY2s6Ly8xNS10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3dlYnBhY2stcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvb3ZlcmxheXMvcHJvZ3Jlc3MtbWluaW1hbC5qcyIsIndlYnBhY2s6Ly8xNS10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3dlYnBhY2stcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvb3ZlcmxheXMvcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vMTUtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLXBsdWdpbi1zZXJ2ZS9saWIvY2xpZW50L292ZXJsYXlzL3N0YXR1cy5qcyIsIndlYnBhY2s6Ly8xNS10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3dlYnBhY2stcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvb3ZlcmxheXMvdXRpbC5qcyIsIndlYnBhY2s6Ly8xNS10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzE1LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly8xNS10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovLzE1LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovLzE1LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8xNS10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMTUtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vMTUtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzE1LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vMTUtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8xNS10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLzE1LXR5cGVzY3JpcHQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8xNS10eXBlc2NyaXB0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8xNS10eXBlc2NyaXB0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lDYWxjdWxhdG9yfSBmcm9tICcuL3R5cGVzL3R5cGVzJztcclxuXHJcbmNsYXNzIEJhc2ljQ2FsY3VsYXRvciBpbXBsZW1lbnRzIElDYWxjdWxhdG9yIHtcclxuICBhZGQobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB7dmFsdWU6IG51bTEgKyBudW0yLCBlcnJvck1lc3NhZ2U6ICcnfTtcclxuICB9XHJcbiAgc3VidHJhY3QobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB7dmFsdWU6IG51bTEgLSBudW0yLCBlcnJvck1lc3NhZ2U6ICcnfTtcclxuICB9XHJcbiAgbXVsdGlwbHkobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB7dmFsdWU6IG51bTEgKiBudW0yLCBlcnJvck1lc3NhZ2U6ICcnfTtcclxuICB9XHJcbiAgZGl2aWRlKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4ge3ZhbHVlOiBudW0xIC8gbnVtMiwgZXJyb3JNZXNzYWdlOiAnJ307XHJcbiAgfVxyXG4gIHBvd2VyKGJhc2U6IG51bWJlciwgZXhwb25lbnQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGV4cG9uZW50IDwgMVxyXG4gICAgICA/IHt2YWx1ZTogbnVsbCwgZXJyb3JNZXNzYWdlOiAnRXhwb25lbnQgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXInfVxyXG4gICAgICA6IHt2YWx1ZTogTWF0aC5wb3coYmFzZSwgZXhwb25lbnQpLCBlcnJvck1lc3NhZ2U6ICcnfTtcclxuICB9XHJcbiAgc3FydChudW06IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG51bSA8IDFcclxuICAgICAgPyB7XHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0Nhbm5vdCBjYWxjdWxhdGUgc3F1YXJlIHJvb3Qgb2YgbmVnYXRpdmUgbnVtYmVyJyxcclxuICAgICAgICB9XHJcbiAgICAgIDoge3ZhbHVlOiBNYXRoLnNxcnQobnVtKSwgZXJyb3JNZXNzYWdlOiAnJ307XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBleGFtcGxlQ2FsY3VsYXRvciA9IG5ldyBCYXNpY0NhbGN1bGF0b3IoKTtcclxuXHJcbmNvbnNvbGUubG9nKGV4YW1wbGVDYWxjdWxhdG9yLmFkZCgxLCAxKSk7XHJcbmNvbnNvbGUubG9nKGV4YW1wbGVDYWxjdWxhdG9yLnN1YnRyYWN0KDIsIDEpKTtcclxuY29uc29sZS5sb2coZXhhbXBsZUNhbGN1bGF0b3IubXVsdGlwbHkoMiwgMikpO1xyXG5jb25zb2xlLmxvZyhleGFtcGxlQ2FsY3VsYXRvci5kaXZpZGUoNCwgMikpO1xyXG5jb25zb2xlLmxvZyhleGFtcGxlQ2FsY3VsYXRvci5wb3dlcigyLCAyKSk7XHJcbmNvbnNvbGUubG9nKGV4YW1wbGVDYWxjdWxhdG9yLnBvd2VyKDIsIC0yKSk7XHJcbmNvbnNvbGUubG9nKGV4YW1wbGVDYWxjdWxhdG9yLnNxcnQoOSkpO1xyXG5jb25zb2xlLmxvZyhleGFtcGxlQ2FsY3VsYXRvci5zcXJ0KC0xKSk7XHJcbiIsIi8qXG4gIENvcHlyaWdodCDCqSAyMDE4IEFuZHJldyBQb3dlbGxcblxuICBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoaXMgU291cmNlIENvZGUgRm9ybS5cbiovXG5cbi8qKlxuICogQG5vdGUgVGhpcyBmaWxlIGV4aXN0cyBtZXJlbHkgYXMgYW4gZWFzeSByZWZlcmVuY2UgZm9yIGZvbGtzIGFkZGluZyBpdCB0byB0aGVpciBjb25maWd1cmF0aW9uIGVudHJpZXNcbiAqL1xuXG4oKCkgPT4ge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuICBjb25zdCB7IHJ1biB9ID0gcmVxdWlyZSgnLi9saWIvY2xpZW50L2NsaWVudCcpO1xuICBsZXQgaGFzaCA9ICc8dW5rbm93bj4nO1xuICBsZXQgb3B0aW9ucztcbiAgdHJ5IHtcbiAgICBvcHRpb25zID0gyo7JkMm5yZRvc8edyozJucedcztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSByZXF1aXJlKCcuL2xpYi9jbGllbnQvbG9nJyk7XG4gICAgbG9nLmVycm9yKFxuICAgICAgJ1RoZSBlbnRyeSBmb3Igd2VicGFjay1wbHVnaW4tc2VydmUgd2FzIGluY2x1ZGVkIGluIHlvdXIgYnVpbGQsIGJ1dCBpdCBkb2VzIG5vdCBhcHBlYXIgdGhhdCB0aGUgcGx1Z2luIHdhcy4gUGxlYXNlIGNoZWNrIHlvdXIgY29uZmlndXJhdGlvbi4nXG4gICAgKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICAgIGhhc2ggPSBfX3dlYnBhY2tfaGFzaF9fO1xuICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbiAgcnVuKGhhc2gsIG9wdGlvbnMpO1xufSkoKTtcbiIsIi8qXG4gIENvcHlyaWdodCDCqSAyMDE4IEFuZHJldyBQb3dlbGxcblxuICBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoaXMgU291cmNlIENvZGUgRm9ybS5cbiovXG5jb25zdCB7IGVycm9yLCByZWZyZXNoLCB3YXJuIH0gPSByZXF1aXJlKCcuL2xvZycpKCk7XG5cbi8vIGlnbm9yZSAxMDA4IChIVFRQIDQwMCBlcXVpdmFsZW50KSBhbmQgMTAxMSAoSFRUUCA1MDAgZXF1aXZhbGVudClcbmNvbnN0IGlnbm9yZUNvZGVzID0gWzEwMDgsIDEwMTFdO1xuY29uc3QgbWF4QXR0ZW1wdHMgPSAxMDtcblxuY2xhc3MgQ2xpZW50U29ja2V0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucywgLi4uYXJncykge1xuICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgdGhpcy5ldmVudEhhbmRsZXJzID0gW107XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnJldHJ5aW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoLi4uYXJncykge1xuICAgIHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKGFyZ3MpO1xuICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoLi4uYXJncyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICB9XG5cbiAgY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICB9XG5cbiAgICB0aGlzLmNvbm5lY3RpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KC4uLnRoaXMuYXJncyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJldHJ5KSB7XG4gICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoaWdub3JlQ29kZXMuaW5jbHVkZXMoZXZlbnQuY29kZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucmV0cnlpbmcpIHtcbiAgICAgICAgICB3YXJuKGBUaGUgV2ViU29ja2V0IHdhcyBjbG9zZWQgYW5kIHdpbGwgYXR0ZW1wdCB0byByZWNvbm5lY3RgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHdhcm4oYFRoZSBjbGllbnQgV2ViU29ja2V0IHdhcyBjbG9zZWQuICR7cmVmcmVzaH1gKTtcbiAgICB9XG5cbiAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgKCkgPT4ge1xuICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICB0aGlzLnJldHJ5aW5nID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5ldmVudEhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCBbbmFtZSwgZm5dIG9mIHRoaXMuZXZlbnRIYW5kbGVycykge1xuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNvbm5lY3QoKSB7XG4gICAgdGhpcy5hdHRlbXB0cyArPSAxO1xuICAgIHRoaXMucmV0cnlpbmcgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuYXR0ZW1wdHMgPiBtYXhBdHRlbXB0cykge1xuICAgICAgZXJyb3IoYFRoZSBXZWJTb2NrZXQgY291bGQgbm90IGJlIHJlY29ubmVjdGVkLiAke3JlZnJlc2h9YCk7XG4gICAgICB0aGlzLnJldHJ5aW5nID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGltZW91dCA9IDEwMDAgKiB0aGlzLmF0dGVtcHRzICoqIDI7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY29ubmVjdCh0aGlzLmFyZ3MpLCB0aW1lb3V0KTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoLi4uYXJncykge1xuICAgIGNvbnN0IFssIGhhbmRsZXJdID0gYXJncztcbiAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSB0aGlzLmV2ZW50SGFuZGxlcnMuZmlsdGVyKChbLCBmbl0pID0+IGZuID09PSBoYW5kbGVyKTtcbiAgICB0aGlzLnNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKC4uLmFyZ3MpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBDbGllbnRTb2NrZXQgfTtcbiIsIi8qXG4gIENvcHlyaWdodCDCqSAyMDE4IEFuZHJldyBQb3dlbGxcblxuICBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoaXMgU291cmNlIENvZGUgRm9ybS5cbiovXG4vKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuY29uc3QgcnVuID0gKGJ1aWxkSGFzaCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCB7IGFkZHJlc3MsIGNsaWVudCA9IHt9LCBobXIsIHByb2dyZXNzLCBzZWN1cmUsIHN0YXR1cyB9ID0gb3B0aW9ucztcblxuICBvcHRpb25zLmZpcnN0SW5zdGFuY2UgPSAhd2luZG93LndlYnBhY2tQbHVnaW5TZXJ2ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG4gIHdpbmRvdy53ZWJwYWNrUGx1Z2luU2VydmUgPSB3aW5kb3cud2VicGFja1BsdWdpblNlcnZlIHx8IHtcbiAgICBjb21waWxlcnM6IHt9XG4gIH07XG4gIHdpbmRvdy53ZWJwYWNrUGx1Z2luU2VydmUuc2lsZW50ID0gISFjbGllbnQuc2lsZW50O1xuXG4gIGNvbnN0IHsgQ2xpZW50U29ja2V0IH0gPSByZXF1aXJlKCcuL0NsaWVudFNvY2tldCcpO1xuICBjb25zdCB7IHJlcGxhY2UgfSA9IHJlcXVpcmUoJy4vaG1yJyk7XG4gIGNvbnN0IHsgZXJyb3IsIGluZm8sIHdhcm4gfSA9IHJlcXVpcmUoJy4vbG9nJykoKTtcblxuICBjb25zdCBwcm90b2NvbCA9IHNlY3VyZSA/ICd3c3MnIDogJ3dzJztcbiAgY29uc3Qgc29ja2V0ID0gbmV3IENsaWVudFNvY2tldChjbGllbnQsIGAke2NsaWVudC5wcm90b2NvbCB8fCBwcm90b2NvbH06Ly8ke2NsaWVudC5hZGRyZXNzIHx8IGFkZHJlc3N9L3dwc2ApO1xuXG4gIGNvbnN0IHsgY29tcGlsZXJOYW1lIH0gPSBvcHRpb25zO1xuXG4gIHdpbmRvdy53ZWJwYWNrUGx1Z2luU2VydmUuY29tcGlsZXJzW2NvbXBpbGVyTmFtZV0gPSB7fTtcblxuICAvLyBwcmV2ZW50cyBFQ09OTlJFU0VUIGVycm9ycyBvbiB0aGUgc2VydmVyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiBzb2NrZXQuY2xvc2UoKSk7XG5cbiAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aW9uLCBkYXRhID0ge30gfSA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKTtcbiAgICBjb25zdCB7IGVycm9ycywgaGFzaCA9ICc8Pz4nLCB3YXJuaW5ncyB9ID0gZGF0YSB8fCB7fTtcbiAgICBjb25zdCBzaG9ydEhhc2ggPSBoYXNoLnNsaWNlKDAsIDcpO1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBvcHRpb25zLmNvbXBpbGVyTmFtZSA/IGAoQ29tcGlsZXI6ICR7b3B0aW9ucy5jb21waWxlck5hbWV9KSBgIDogJyc7XG4gICAgY29uc3QgY29tcGlsZXIgPSB3aW5kb3cud2VicGFja1BsdWdpblNlcnZlLmNvbXBpbGVyc1tjb21waWxlck5hbWVdO1xuICAgIGNvbnN0IHsgd3BzSWQgfSA9IGRhdGE7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSAnYnVpbGQnOlxuICAgICAgICBjb21waWxlci5kb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY29ubmVjdGVkJzpcbiAgICAgICAgaW5mbyhgV2ViU29ja2V0IGNvbm5lY3RlZCAke2lkZW50aWZpZXJ9YCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZG9uZSc6XG4gICAgICAgIGNvbXBpbGVyLmRvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Byb2JsZW1zJzpcbiAgICAgICAgaWYgKGRhdGEuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIGVycm9yKGAke2lkZW50aWZpZXJ9QnVpbGQgJHtzaG9ydEhhc2h9IHByb2R1Y2VkIGVycm9yczpcXG5gLCBlcnJvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLndhcm5pbmdzLmxlbmd0aCkge1xuICAgICAgICAgIHdhcm4oYCR7aWRlbnRpZmllcn1CdWlsZCAke3Nob3J0SGFzaH0gcHJvZHVjZWQgd2FybmluZ3M6XFxuYCwgd2FybmluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAvLyBhY3Rpb25zIHdpdGggYSB3cHNJZCBpbiB0b3cgaW5kaWNhdGUgYWN0aW9ucyB0aGF0IHNob3VsZCBvbmx5IGJlIGV4ZWN1dGVkIHdoZW4gdGhlIHdwc0lkIHNlbnRcbiAgICAgICAgLy8gbWF0Y2hlcyB0aGUgd3BzSWQgc2V0IGluIG9wdGlvbnMuIHRoaXMgaXMgaG93IHdlIGNhbiBpZGVudGlmeSBtdWx0aXBsZSBjb21waWxlcnMgaW4gdGhlXG4gICAgICAgIC8vIGNsaWVudC5cbiAgICAgICAgaWYgKHdwc0lkICYmIHdwc0lkID09PSBvcHRpb25zLndwc0lkKSB7XG4gICAgICAgICAgcmVwbGFjZShidWlsZEhhc2gsIGhhc2gsIGhtciA9PT0gJ3JlZnJlc2gtb24tZmFpbHVyZScpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChvcHRpb25zLmZpcnN0SW5zdGFuY2UpIHtcbiAgICBpZiAocHJvZ3Jlc3MgPT09ICdtaW5pbWFsJykge1xuICAgICAgY29uc3QgeyBpbml0IH0gPSByZXF1aXJlKCcuL292ZXJsYXlzL3Byb2dyZXNzLW1pbmltYWwnKTtcbiAgICAgIGluaXQob3B0aW9ucywgc29ja2V0KTtcbiAgICB9IGVsc2UgaWYgKHByb2dyZXNzKSB7XG4gICAgICBjb25zdCB7IGluaXQgfSA9IHJlcXVpcmUoJy4vb3ZlcmxheXMvcHJvZ3Jlc3MnKTtcbiAgICAgIGluaXQob3B0aW9ucywgc29ja2V0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBjb25zdCB7IGluaXQgfSA9IHJlcXVpcmUoJy4vb3ZlcmxheXMvc3RhdHVzJyk7XG4gICAgICBpbml0KG9wdGlvbnMsIHNvY2tldCk7XG4gICAgfVxuXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgIGluZm8oJ0hvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgYWN0aXZlJyk7XG5cbiAgICAgIGlmIChvcHRpb25zLmxpdmVSZWxvYWQpIHtcbiAgICAgICAgaW5mbygnTGl2ZSBSZWxvYWQgdGFraW5nIHByZWNlZGVuY2Ugb3ZlciBIb3QgTW9kdWxlIFJlcGxhY2VtZW50Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oJ0hvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgaW5hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoIW1vZHVsZS5ob3QgJiYgb3B0aW9ucy5saXZlUmVsb2FkKSB7XG4gICAgICBpbmZvKCdMaXZlIFJlbG9hZCBpcyBhY3RpdmUnKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyBydW4gfTtcbiIsIi8qXG4gIENvcHlyaWdodCDCqSAyMDE4IEFuZHJldyBQb3dlbGxcblxuICBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoaXMgU291cmNlIENvZGUgRm9ybS5cbiovXG5jb25zdCB7IGVycm9yLCBpbmZvLCByZWZyZXNoLCB3YXJuIH0gPSByZXF1aXJlKCcuL2xvZycpKCk7XG5cbmxldCBsYXRlc3QgPSB0cnVlO1xuXG5jb25zdCBobXIgPSAob25GYWlsdXJlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25VbmFjY2VwdGVkKGRhdGEpIHtcbiAgICAgIG9uRmFpbHVyZSgpO1xuICAgICAgd2FybignQ2hhbmdlIGluIHVuYWNjZXB0ZWQgbW9kdWxlKHMpOlxcbicsIGRhdGEpO1xuICAgICAgd2FybihkYXRhKTtcbiAgICB9LFxuICAgIG9uRGVjbGluZWQoZGF0YSkge1xuICAgICAgb25GYWlsdXJlKCk7XG4gICAgICB3YXJuKCdDaGFuZ2UgaW4gZGVjbGluZWQgbW9kdWxlKHMpOlxcbicsIGRhdGEpO1xuICAgIH0sXG4gICAgb25FcnJvcmVkKGRhdGEpIHtcbiAgICAgIG9uRmFpbHVyZSgpO1xuICAgICAgZXJyb3IoJ0Vycm9yIGluIG1vZHVsZShzKTpcXG4nLCBkYXRhKTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCByZXBsYWNlID0gYXN5bmMgKGJ1aWxkSGFzaCwgaGFzaCwgcmVmcmVzaE9uRmFpbHVyZSkgPT4ge1xuICBjb25zdCB7IGFwcGx5LCBjaGVjaywgc3RhdHVzIH0gPSBtb2R1bGUuaG90O1xuXG4gIGlmIChoYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgbGF0ZXN0ID0gaGFzaC5pbmNsdWRlcyhidWlsZEhhc2gpO1xuICB9XG5cbiAgaWYgKCFsYXRlc3QpIHtcbiAgICBjb25zdCBobXJTdGF0dXMgPSBzdGF0dXMoKTtcblxuICAgIGlmIChobXJTdGF0dXMgPT09ICdhYm9ydCcgfHwgaG1yU3RhdHVzID09PSAnZmFpbCcpIHtcbiAgICAgIHdhcm4oYEFuIEhNUiB1cGRhdGUgd2FzIHRyaWdnZXJlZCwgYnV0ICR7aG1yU3RhdHVzfWVkLiAke3JlZnJlc2h9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG1vZHVsZXM7XG5cbiAgICB0cnkge1xuICAgICAgbW9kdWxlcyA9IGF3YWl0IGNoZWNrKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBub29wLiB0aGlzIHR5cGljYWxseSBoYXBwZW5zIHdoZW4gYSBNdWx0aUNvbXBpbGVyIGhhcyBtb3JlIHRoYW4gb25lIGNvbXBpbGVyIHRoYXQgaW5jbHVkZXNcbiAgICAgIC8vIHRoaXMgc2NyaXB0LCBhbmQgYW4gdXBkYXRlIGhhcHBlbnMgd2l0aCBhIGhhc2ggdGhhdCBpc24ndCBwYXJ0IG9mIHRoZSBjb21waWxlci9tb2R1bGUgdGhpc1xuICAgICAgLy8gaW5zdGFuY2Ugd2FzIGxvYWRlZCBmb3IuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICB3YXJuKGBObyBtb2R1bGVzIGZvdW5kIGZvciByZXBsYWNlbWVudC4gJHtyZWZyZXNofWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1vZHVsZXMgPSBhd2FpdCBhcHBseShcbiAgICAgIGhtcihcbiAgICAgICAgcmVmcmVzaE9uRmFpbHVyZVxuICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVmcmVzaE9uRmFpbHVyZSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiAoKSA9PiB7fVxuICAgICAgKVxuICAgICk7XG5cbiAgICBpZiAobW9kdWxlcykge1xuICAgICAgbGF0ZXN0ID0gdHJ1ZTtcbiAgICAgIGluZm8oYEJ1aWxkICR7aGFzaC5zbGljZSgwLCA3KX0gcmVwbGFjZWQ6XFxuYCwgbW9kdWxlcyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVwbGFjZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IMKpIDIwMTggQW5kcmV3IFBvd2VsbFxuXG4gIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhpcyBTb3VyY2UgQ29kZSBGb3JtLlxuKi9cbmNvbnN0IHsgZXJyb3IsIGluZm8sIHdhcm4gfSA9IGNvbnNvbGU7XG5jb25zdCBsb2cgPSB7XG4gIGVycm9yOiBlcnJvci5iaW5kKGNvbnNvbGUsICfirKEgd3BzOicpLFxuICBpbmZvOiBpbmZvLmJpbmQoY29uc29sZSwgJ+KsoSB3cHM6JyksXG4gIHJlZnJlc2g6ICdQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZScsXG4gIHdhcm46IHdhcm4uYmluZChjb25zb2xlLCAn4qyhIHdwczonKVxufTtcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbmNvbnN0IHNpbGVudCA9IHtcbiAgZXJyb3I6IG5vb3AsXG4gIGluZm86IG5vb3AsXG4gIHdhcm46IG5vb3Bcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gKHdpbmRvdy53ZWJwYWNrUGx1Z2luU2VydmUuc2lsZW50ID8gc2lsZW50IDogbG9nKTtcbiIsIi8qXG4gIENvcHlyaWdodCDCqSAyMDE4IEFuZHJldyBQb3dlbGwsIE1hdGhldXMgR29uw6dhbHZlcyBkYSBTaWx2YVxuXG4gIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhpcyBTb3VyY2UgQ29kZSBGb3JtLlxuKi9cbmNvbnN0IHsgYWRkQ3NzLCBhZGRIdG1sIH0gPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgbnMgPSAnd3BzLXByb2dyZXNzLW1pbmltYWwnO1xuY29uc3QgaHRtbCA9IGBcbjxkaXYgaWQ9XCIke25zfVwiIGNsYXNzPVwiJHtuc30taGlkZGVuXCI+XG4gIDxkaXYgaWQ9XCIke25zfS1iYXJcIj48L2Rpdj5cbjwvZGl2PlxuYDtcbmNvbnN0IGNzcyA9IGBcbiMke25zfSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiAyMTQ3NDgzNjQ1O1xufVxuXG4jJHtuc30tYmFyIHtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMjIzLCAxNzIpO1xufVxuXG5Aa2V5ZnJhbWVzICR7bnN9LWZhZGUge1xuXHQwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXHQxMDAlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG59XG5cbi4ke25zfS1kaXNhcHBlYXIge1xuICBhbmltYXRpb246ICR7bnN9LWZhZGUgLjNzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNXM7XG59XG5cbi4ke25zfS1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYDtcblxubGV0IGhpZGVPblBhZ2VWaXNpYmxlID0gZmFsc2U7XG5cbmNvbnN0IHVwZGF0ZSA9IChwZXJjZW50KSA9PiB7XG4gIGNvbnN0IGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfS1iYXJgKTtcbiAgYmFyLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbn07XG5cbmNvbnN0IHJlc2V0ID0gKHdyYXBwZXIpID0+IHtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKGAke25zfS1kaXNhcHBlYXJgKTtcbn07XG5cbmNvbnN0IGluaXQgPSAob3B0aW9ucywgc29ja2V0KSA9PiB7XG4gIGlmIChvcHRpb25zLmZpcnN0SW5zdGFuY2UpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgYWRkQ3NzKGNzcyk7XG4gICAgICBhZGRIdG1sKGh0bWwpO1xuXG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bnN9YCk7XG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgdXBkYXRlKDApO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoYCR7bnN9LWhpZGRlbmApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaGlkZU9uUGFnZVZpc2libGUpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfWApO1xuICAgICAgICByZXNldCh3cmFwcGVyKTtcbiAgICAgICAgaGlkZU9uUGFnZVZpc2libGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCB7IGFjdGlvbiwgZGF0YSB9ID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xuXG4gICAgaWYgKGFjdGlvbiAhPT0gJ3Byb2dyZXNzJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKGRhdGEucGVyY2VudCAqIDEwMCk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfWApO1xuXG4gICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShgJHtuc30taGlkZGVuYCwgYCR7bnN9LWRpc2FwcGVhcmApO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnBlcmNlbnQgPT09IDEpIHtcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgaGlkZU9uUGFnZVZpc2libGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXQod3JhcHBlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGVPblBhZ2VWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlKHBlcmNlbnQpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IMKpIDIwMTggQW5kcmV3IFBvd2VsbCwgTWF0aGV1cyBHb27Dp2FsdmVzIGRhIFNpbHZhXG5cbiAgVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGlzIFNvdXJjZSBDb2RlIEZvcm0uXG4qL1xuY29uc3QgeyBhZGRDc3MsIGFkZEh0bWwgfSA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBucyA9ICd3cHMtcHJvZ3Jlc3MnO1xuY29uc3QgY3NzID0gYFxuIyR7bnN9e1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDUlO1xuICB0b3A6IDUlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDIxNDc0ODM2NDU7XG59XG5cbiMke25zfS1iZyB7XG4gIGZpbGw6ICMyODJkMzU7XG59XG5cbiMke25zfS1maWxsIHtcbiAgZmlsbDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgc3Ryb2tlOiByZ2IoMTg2LCAyMjMsIDE3Mik7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDIxOS45OTA3ODM2OTE0MDYyNTtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0yMTkuOTkwNzgzNjkxNDA2MjU7XG4gIHN0cm9rZS13aWR0aDogMTA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKXRyYW5zbGF0ZSgwcHgsIC04MHB4KTtcbn1cblxuIyR7bnN9LXBlcmNlbnQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZmlsbDogI2ZmZmZmZjtcbn1cblxuIyR7bnN9LXBlcmNlbnQtdmFsdWUge1xuICBkb21pbmFudC1iYXNlbGluZTogbWlkZGxlO1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xufVxuXG4jJHtuc30tcGVyY2VudC1zdXBlciB7XG4gIGZpbGw6ICNiZGMzYzc7XG4gIGZvbnQtc2l6ZTogLjQ1ZW07XG4gIGJhc2VsaW5lLXNoaWZ0OiAxMCU7XG59XG5cbi4ke25zfS1ub3NlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbkBrZXlmcmFtZXMgJHtuc30tZmFkZSB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHR9XG5cdDEwMCUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwKTtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG5cdH1cbn1cblxuLiR7bnN9LWRpc2FwcGVhciB7XG4gIGFuaW1hdGlvbjogJHtuc30tZmFkZSAuM3M7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLjVzO1xufVxuXG4uJHtuc30taGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogUHV0IGdvb2dsZSB3ZWIgZm9udCBhdCB0aGUgZW5kLCBvciB5b3UnbGwgc2VlIEZPVUMgaW4gRmlyZWZveCAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCcpO1xuYDtcblxuY29uc3QgaHRtbCA9IGBcbjxzdmcgaWQ9XCIke25zfVwiIGNsYXNzPVwiJHtuc30tbm9zZWxlY3QgJHtuc30taGlkZGVuXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDgwIDgwXCI+XG4gIDxjaXJjbGUgaWQ9XCIke25zfS1iZ1wiIGN4PVwiNTAlXCIgY3k9XCI1MCVcIiByPVwiMzVcIj48L2NpcmNsZT5cbiAgPHBhdGggaWQ9XCIke25zfS1maWxsXCIgZD1cIk01LDQwYTM1LDM1IDAgMSwwIDcwLDBhMzUsMzUgMCAxLDAgLTcwLDBcIiAvPlxuICA8dGV4dCBpZD1cIiR7bnN9LXBlcmNlbnRcIiB4PVwiNTAlXCIgeT1cIjUxJVwiPjx0c3BhbiBpZD1cIiR7bnN9LXBlcmNlbnQtdmFsdWVcIj4wPC90c3Bhbj48dHNwYW4gaWQ9XCIke25zfS1wZXJjZW50LXN1cGVyXCI+JTwvdHNwYW4+PC90ZXh0PlxuPC9zdmc+XG5gO1xuXG5sZXQgaGlkZU9uUGFnZVZpc2libGUgPSBmYWxzZTtcblxuY29uc3QgdXBkYXRlID0gKHBlcmNlbnQpID0+IHtcbiAgY29uc3QgbWF4ID0gLTIxOS45OTA3ODM2OTE0MDYyNTtcbiAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuc30tcGVyY2VudC12YWx1ZWApO1xuICBjb25zdCB0cmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfS1maWxsYCk7XG4gIGNvbnN0IG9mZnNldCA9ICgoMTAwIC0gcGVyY2VudCkgLyAxMDApICogbWF4O1xuXG4gIHRyYWNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgc3Ryb2tlLWRhc2hvZmZzZXQ6ICR7b2Zmc2V0fWApO1xuICB2YWx1ZS5pbm5lckhUTUwgPSBwZXJjZW50LnRvU3RyaW5nKCk7XG59O1xuXG5jb25zdCByZXNldCA9IChzdmcpID0+IHtcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoYCR7bnN9LWRpc2FwcGVhcmApO1xufTtcblxuY29uc3QgaW5pdCA9IChvcHRpb25zLCBzb2NrZXQpID0+IHtcbiAgaWYgKG9wdGlvbnMuZmlyc3RJbnN0YW5jZSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICBhZGRDc3MoY3NzKTtcbiAgICAgIGFkZEh0bWwoaHRtbCk7XG5cbiAgICAgIC8vIFJlc2V0IHByb2dyZXNzIHRvIHplcm8gYWZ0ZXIgZGlzYXBwZWFyIGFuaW1hdGlvblxuICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bnN9YCk7XG4gICAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICB1cGRhdGUoMCk7XG4gICAgICAgIHN2Zy5jbGFzc0xpc3QuYWRkKGAke25zfS1oaWRkZW5gKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGhpZGVPblBhZ2VWaXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfWApO1xuICAgICAgICByZXNldChzdmcpO1xuICAgICAgICBoaWRlT25QYWdlVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aW9uLCBkYXRhIH0gPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG5cbiAgICBpZiAoYWN0aW9uICE9PSAncHJvZ3Jlc3MnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IoZGF0YS5wZXJjZW50ICogMTAwKTtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuc31gKTtcblxuICAgIGlmICghc3ZnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gd2UgY2FuIHNhZmVseSBjYWxsIHRoaXMgZXZlbiBpZiBpdCBkb2Vzbid0IGhhdmUgdGhlIGNsYXNzXG4gICAgc3ZnLmNsYXNzTGlzdC5yZW1vdmUoYCR7bnN9LWRpc2FwcGVhcmAsIGAke25zfS1oaWRkZW5gKTtcblxuICAgIGlmIChkYXRhLnBlcmNlbnQgPT09IDEpIHtcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgaGlkZU9uUGFnZVZpc2libGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXQoc3ZnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZU9uUGFnZVZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB1cGRhdGUocGVyY2VudCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGluaXQgfTtcbiIsIi8qXG4gIENvcHlyaWdodCDCqSAyMDE4IEFuZHJldyBQb3dlbGxcblxuICBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoaXMgU291cmNlIENvZGUgRm9ybS5cbiovXG5jb25zdCB7IGFkZENzcywgYWRkSHRtbCwgc29ja2V0TWVzc2FnZSB9ID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IG5zID0gJ3dwcy1zdGF0dXMnO1xuY29uc3QgY3NzID0gYFxuIyR7bnN9IHtcbiAgYmFja2dyb3VuZDogIzI4MmQzNTtcbiAgYm9yZGVyLXJhZGl1czogMC42ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxMHB4O1xuICBoZWlnaHQ6IDkwJTtcbiAgbWluLWhlaWdodDogMjBlbTtcbiAgbGVmdDogNTAlO1xuICBvcGFjaXR5OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiA5NSU7XG4gIHotaW5kZXg6IDIxNDc0ODM2NDU7XG59XG5cbkBrZXlmcmFtZXMgJHtuc30taGlkZGVuLWRpc3BsYXkge1xuXHQwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXHQ5OSUge1xuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblx0MTAwJSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG59XG5cbiMke25zfS4ke25zfS1oaWRkZW4ge1xuICBhbmltYXRpb246ICR7bnN9LWhpZGRlbi1kaXNwbGF5IC4zcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuIyR7bnN9LiR7bnN9LW1pbiB7XG4gIGFuaW1hdGlvbjogbWluaW1pemUgMTBzO1xuICBib3R0b206IDJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDZlbTtcbiAgbGVmdDogYXV0bztcbiAgbWluLWhlaWdodDogNmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMmVtO1xuICB0b3A6IGF1dG87XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgd2lkdGg6IDZlbTtcbn1cblxuIyR7bnN9LiR7bnN9LW1pbiAjJHtuc30tYmVhY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiMke25zfS10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAuNmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiMke25zfS4ke25zfS1taW4gIyR7bnN9LXRpdGxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuIyR7bnN9LXRpdGxlLWVycm9ycyB7XG4gIGNvbG9yOiAjZmY1ZjU4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xufVxuXG4jJHtuc30tdGl0bGUtd2FybmluZ3Mge1xuICBjb2xvcjogI2ZmYmQyZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuIyR7bnN9LXByb2JsZW1zIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMWVtIDJlbTtcbn1cblxuIyR7bnN9LXByb2JsZW1zIHByZSB7XG4gIGNvbG9yOiAjZGRkO1xuICBiYWNrZ3JvdW5kOiAjMjgyZDM1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjNlbTtcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbiMke25zfS1wcm9ibGVtcyBwcmUgZW0ge1xuICBiYWNrZ3JvdW5kOiAjZmY1ZjU4O1xuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgY29sb3I6ICM2NDFlMTY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDNlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjRlbTtcbiAgcGFkZGluZzogMC4xZW0gMC40ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnByZSMke25zfS13YXJuaW5ncyBlbSB7XG4gIGJhY2tncm91bmQ6ICNmZmJkMmU7XG4gIGNvbG9yOiAjM2UyNzIzO1xufVxuXG5wcmUjJHtuc30tc3VjY2VzcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucHJlIyR7bnN9LXN1Y2Nlc3MgZW0ge1xuICBiYWNrZ3JvdW5kOiAjN2ZiOTAwO1xuICBjb2xvcjogIzAwNGQ0MDtcbn1cblxuIyR7bnN9LXByb2JsZW1zLiR7bnN9LXN1Y2Nlc3MgIyR7bnN9LXN1Y2Nlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuIyR7bnN9LiR7bnN9LW1pbiAjJHtuc30tcHJvYmxlbXMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jJHtuc30tbmF2IHtcbiAgb3BhY2l0eTogMC41O1xuICBwYWRkaW5nOiAxLjJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jJHtuc30uJHtuc30tbWluICMke25zfS1uYXYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jJHtuc30tbmF2OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuIyR7bnN9LW5hdiBkaXYge1xuICBiYWNrZ3JvdW5kOiAjZmY1ZjU4O1xuICBib3JkZXItcmFkaXVzOiAxLjJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMS4yZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEuMmVtO1xufVxuXG5kaXYjJHtuc30tbWluIHtcbiAgYmFja2dyb3VuZDogI2ZmYmQyZTtcbiAgbWFyZ2luLWxlZnQ6IDAuOGVtO1xufVxuXG4jJHtuc30tYmVhY29uIHtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGhlaWdodDogM2VtO1xuICBtYXJnaW46IDEuNmVtIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDNlbTtcbn1cblxuIyR7bnN9LWJlYWNvbjpiZWZvcmUsICMke25zfS1iZWFjb246YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI3LDE4NSwwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzZW07XG4gIG9wYWNpdHk6IDA7XG59XG5cbiMke25zfS1iZWFjb246YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiAke25zfS1wdWxzZSAzcyBpbmZpbml0ZSBsaW5lYXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbiMke25zfS1iZWFjb246YWZ0ZXIge1xuICBhbmltYXRpb246ICR7bnN9LXB1bHNlIDNzIDJzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuXG5Aa2V5ZnJhbWVzICR7bnN9LXB1bHNlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICB9XG4gIDMzJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB9XG59XG5cbiMke25zfS1iZWFjb24gbWFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI3LCAxODUsIDAsIDEpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlIDEwMCU7XG4gIGhlaWdodDogMWVtO1xuICBsZWZ0OiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxZW07XG4gIHdpZHRoOiAxZW07XG59XG5cbiMke25zfS1iZWFjb24uJHtuc30tZXJyb3IgbWFyayB7XG4gIGJhY2tncm91bmQ6ICNmZjVmNTg7XG59XG5cbiMke25zfS1iZWFjb24uJHtuc30tZXJyb3I6YmVmb3JlLCAjJHtuc30tYmVhY29uLmVycm9yOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDk1LCA4OCwgMC4yKTtcbn1cblxuIyR7bnN9LWJlYWNvbi4ke25zfS13YXJuaW5nIG1hcmsge1xuICBiYWNrZ3JvdW5kOiAjZmZiZDJlO1xufVxuXG4jJHtuc30tYmVhY29uLiR7bnN9LXdhcm5pbmc6YmVmb3JlLCAjJHtuc30tYmVhY29uLndhcm5pbmc6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTg5LCA0NiwgMC4yKTtcbn1cblxuLyogUHV0IGdvb2dsZSB3ZWIgZm9udCBhdCB0aGUgZW5kLCBvciB5b3UnbGwgc2VlIEZPVUMgaW4gRmlyZWZveCAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCcpO1xuYDtcblxuY29uc3QgaHRtbCA9IGBcbjxhc2lkZSBpZD1cIiR7bnN9XCIgY2xhc3M9XCIke25zfS1oaWRkZW5cIiB0aXRsZT1cImJ1aWxkIHN0YXR1c1wiPlxuICA8ZmlndXJlIGlkPVwiJHtuc30tYmVhY29uXCI+XG4gICAgPG1hcmsvPlxuICA8L2ZpZ3VyZT5cbiAgPG5hdiBpZD1cIiR7bnN9LW5hdlwiPlxuICAgIDxkaXYgaWQ9XCIke25zfS1jbG9zZVwiIHRpdGxlPVwiY2xvc2VcIj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwiJHtuc30tbWluXCIgdGl0bGU9XCJtaW5taXplXCI+PC9kaXY+XG4gIDwvbmF2PlxuICA8aDEgaWQ9XCIke25zfS10aXRsZVwiPlxuICAgIGJ1aWxkIHN0YXR1c1xuICAgIDxlbSBpZD1cIiR7bnN9LXRpdGxlLWVycm9yc1wiPjwvZW0+XG4gICAgPGVtIGlkPVwiJHtuc30tdGl0bGUtd2FybmluZ3NcIj48L2VtPlxuICA8L2gxPlxuICA8YXJ0aWNsZSBpZD1cIiR7bnN9LXByb2JsZW1zXCI+XG4gICAgPHByZSBpZD1cIiR7bnN9LXN1Y2Nlc3NcIj48ZW0+QnVpbGQgU3VjY2Vzc2Z1bDwvZW0+PC9wcmU+XG4gICAgPHByZSBpZD1cIiR7bnN9LWVycm9yc1wiPjwvcHJlPlxuICAgIDxwcmUgaWQ9XCIke25zfS13YXJuaW5nc1wiPjwvcHJlPlxuICA8L2FydGljbGU+XG48L2FzaWRlPlxuYDtcblxuY29uc3QgaW5pdCA9IChvcHRpb25zLCBzb2NrZXQpID0+IHtcbiAgY29uc3QgaGlkZGVuID0gYCR7bnN9LWhpZGRlbmA7XG4gIGxldCBoYXNQcm9ibGVtcyA9IGZhbHNlO1xuICBsZXQgYXNpZGU7XG4gIGxldCBiZWFjb247XG4gIGxldCBwcm9ibGVtcztcbiAgbGV0IHByZUVycm9ycztcbiAgbGV0IHByZVdhcm5pbmdzO1xuICBsZXQgdGl0bGVFcnJvcnM7XG4gIGxldCB0aXRsZVdhcm5pbmdzO1xuXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIHByZUVycm9ycy5pbm5lckhUTUwgPSAnJztcbiAgICBwcmVXYXJuaW5ncy5pbm5lckhUTUwgPSAnJztcbiAgICBwcm9ibGVtcy5jbGFzc0xpc3QucmVtb3ZlKGAke25zfS1zdWNjZXNzYCk7XG4gICAgYmVhY29uLmNsYXNzTmFtZSA9ICcnO1xuICAgIHRpdGxlRXJyb3JzLmlubmVyVGV4dCA9ICcnO1xuICAgIHRpdGxlV2FybmluZ3MuaW5uZXJUZXh0ID0gJyc7XG4gIH07XG5cbiAgY29uc3QgYWRkRXJyb3JzID0gKGVycm9ycykgPT4ge1xuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBwcm9ibGVtcy5jbGFzc0xpc3QucmVtb3ZlKGAke25zfS1zdWNjZXNzYCk7XG4gICAgICBiZWFjb24uY2xhc3NMaXN0LmFkZChgJHtuc30tZXJyb3JgKTtcblxuICAgICAgZm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnMpIHtcbiAgICAgICAgY29uc3QgbWFya3VwID0gYDxkaXY+PGVtPkVycm9yPC9lbT4gaW4gJHtlcnJvcn08L2Rpdj5gO1xuICAgICAgICBhZGRIdG1sKG1hcmt1cCwgcHJlRXJyb3JzKTtcbiAgICAgIH1cblxuICAgICAgdGl0bGVFcnJvcnMuaW5uZXJUZXh0ID0gYCR7ZXJyb3JzLmxlbmd0aH0gRXJyb3IocylgO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZUVycm9ycy5pbm5lclRleHQgPSAnJztcbiAgICB9XG4gICAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZShoaWRkZW4pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFdhcm5pbmdzID0gKHdhcm5pbmdzKSA9PiB7XG4gICAgaWYgKHdhcm5pbmdzLmxlbmd0aCkge1xuICAgICAgcHJvYmxlbXMuY2xhc3NMaXN0LnJlbW92ZShgJHtuc30tc3VjY2Vzc2ApO1xuXG4gICAgICBpZiAoIWJlYWNvbi5jbGFzc0xpc3QuY29udGFpbnMoYCR7bnN9LWVycm9yYCkpIHtcbiAgICAgICAgYmVhY29uLmNsYXNzTGlzdC5hZGQoYCR7bnN9LXdhcm5pbmdgKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCB3YXJuaW5nIG9mIHdhcm5pbmdzKSB7XG4gICAgICAgIGNvbnN0IG1hcmt1cCA9IGA8ZGl2PjxlbT5XYXJuaW5nPC9lbT4gaW4gJHt3YXJuaW5nfTwvZGl2PmA7XG4gICAgICAgIGFkZEh0bWwobWFya3VwLCBwcmVXYXJuaW5ncyk7XG4gICAgICB9XG5cbiAgICAgIHRpdGxlV2FybmluZ3MuaW5uZXJUZXh0ID0gYCR7d2FybmluZ3MubGVuZ3RofSBXYXJuaW5nKHMpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVXYXJuaW5ncy5pbm5lclRleHQgPSAnJztcbiAgICB9XG5cbiAgICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbik7XG4gIH07XG5cbiAgaWYgKG9wdGlvbnMuZmlyc3RJbnN0YW5jZSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICBhZGRDc3MoY3NzKTtcbiAgICAgIFthc2lkZV0gPSBhZGRIdG1sKGh0bWwpO1xuICAgICAgYmVhY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bnN9LWJlYWNvbmApO1xuICAgICAgcHJvYmxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuc30tcHJvYmxlbXNgKTtcbiAgICAgIHByZUVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfS1lcnJvcnNgKTtcbiAgICAgIHByZVdhcm5pbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bnN9LXdhcm5pbmdzYCk7XG4gICAgICB0aXRsZUVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfS10aXRsZS1lcnJvcnNgKTtcbiAgICAgIHRpdGxlV2FybmluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuc30tdGl0bGUtd2FybmluZ3NgKTtcblxuICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuc30tY2xvc2VgKTtcbiAgICAgIGNvbnN0IG1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfS1taW5gKTtcblxuICAgICAgYXNpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoYCR7bnN9LW1pbmApO1xuICAgICAgfSk7XG5cbiAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKGAke25zfS1oaWRkZW5gKTtcbiAgICAgIH0pO1xuXG4gICAgICBtaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKGAke25zfS1taW5gKTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc29ja2V0TWVzc2FnZShzb2NrZXQsIChhY3Rpb24sIGRhdGEpID0+IHtcbiAgICBpZiAoIWFzaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb21waWxlcnMgfSA9IHdpbmRvdy53ZWJwYWNrUGx1Z2luU2VydmU7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSAnYnVpbGQnOlxuICAgICAgICAvLyBjbGVhciBlcnJvcnMgYW5kIHdhcm5pbmdzIHdoZW4gYSBuZXcgYnVpbGQgYmVnaW5zXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHJvYmxlbXMnOlxuICAgICAgICBhZGRFcnJvcnMoZGF0YS5lcnJvcnMpO1xuICAgICAgICBhZGRXYXJuaW5ncyhkYXRhLndhcm5pbmdzKTtcbiAgICAgICAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZShoaWRkZW4pO1xuICAgICAgICBoYXNQcm9ibGVtcyA9IGRhdGEuZXJyb3JzLmxlbmd0aCB8fCBkYXRhLndhcm5pbmdzLmxlbmd0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgLy8gaWYgdGhlcmUncyBhIGNvbXBpbGVyIHRoYXQgaXNuJ3QgZG9uZSB5ZXQsIGhvbGQgb2ZmIGFuZCBsZXQgaXQgcnVuIHRoZSBzaG93XG4gICAgICAgIGZvciAoY29uc3QgY29tcGlsZXJOYW1lIG9mIE9iamVjdC5rZXlzKGNvbXBpbGVycykpIHtcbiAgICAgICAgICBpZiAoIWNvbXBpbGVyc1tjb21waWxlck5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc1Byb2JsZW1zICYmICFwcmVFcnJvcnMuY2hpbGRyZW4ubGVuZ3RoICYmICFwcmVXYXJuaW5ncy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgIGhhc1Byb2JsZW1zID0gZmFsc2U7XG4gICAgICAgICAgcHJvYmxlbXMuY2xhc3NMaXN0LmFkZChgJHtuc30tc3VjY2Vzc2ApO1xuICAgICAgICAgIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVuKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXNpZGUuY2xhc3NMaXN0LmFkZChoaWRkZW4pLCAzZTMpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGluaXQgfTtcbiIsIi8qXG4gIENvcHlyaWdodCDCqSAyMDE4IEFuZHJldyBQb3dlbGxcblxuICBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoaXMgU291cmNlIENvZGUgRm9ybS5cbiovXG5jb25zdCBhZGRIdG1sID0gKGh0bWwsIHBhcmVudCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgbm9kZXMgPSBbXTtcblxuICBkaXYuaW5uZXJIVE1MID0gaHRtbC50cmltKCk7XG5cbiAgd2hpbGUgKGRpdi5maXJzdENoaWxkKSB7XG4gICAgbm9kZXMucHVzaCgocGFyZW50IHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKGRpdi5maXJzdENoaWxkKSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXM7XG59O1xuXG5jb25zdCBhZGRDc3MgPSAoY3NzKSA9PiB7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoY3NzLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cblxuICAvLyBhcHBlbmQgdGhlIHN0eWxlc2hlZXQgZm9yIHRoZSBzdmdcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59O1xuXG5jb25zdCBzb2NrZXRNZXNzYWdlID0gKHNvY2tldCwgaGFuZGxlcikgPT4ge1xuICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgeyBhY3Rpb24sIGRhdGEgPSB7fSB9ID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xuICAgIGhhbmRsZXIoYWN0aW9uLCBkYXRhKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgYWRkQ3NzLCBhZGRIdG1sLCBzb2NrZXRNZXNzYWdlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIjUxYzQ5MDctXCIgKyBjaHVua0lkICsgXCItd3BzLWhtci5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSAoKSA9PiAoXCJtYWluLTUxYzQ5MDctd3BzLWhtci5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFkMjBlM2RlNzBkZTE3YzJjOTc5XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiMTUtdHlwZXNjcmlwdDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkKSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuXHRcdHJlc3VsdHNbaV0gPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcbn1cblxuZnVuY3Rpb24gdW5ibG9jaygpIHtcblx0aWYgKC0tYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRcdFx0dmFyIGxpc3QgPSBibG9ja2luZ1Byb21pc2VzV2FpdGluZztcblx0XHRcdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGlzdFtpXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0LyogZmFsbHRocm91Z2ggKi9cblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcysrO1xuXHRcdFx0cHJvbWlzZS50aGVuKHVuYmxvY2ssIHVuYmxvY2spO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSByZXR1cm4gZm4oKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcucHVzaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKGZuKCkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzIChzdGF0ZTogXCIgK1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0dXMgK1xuXHRcdFx0XHRcdFwiKVwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuXHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuXHR9KTtcblx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cblx0dmFyIGVycm9ycyA9IHJlc3VsdHNcblx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRyZXR1cm4gci5lcnJvcjtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImFib3J0XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG5cdHZhciBkaXNwb3NlUHJvbWlzZSA9IHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG5cblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG5cdH0pO1xuXG5cdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcblx0dmFyIGFwcGx5UHJvbWlzZSA9IHNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG5cdHZhciBlcnJvcjtcblx0dmFyIHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuXHR9O1xuXG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmFwcGx5KSB7XG5cdFx0XHR2YXIgbW9kdWxlcyA9IHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG5cdFx0XHRpZiAobW9kdWxlcykge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChtb2R1bGVzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKFtkaXNwb3NlUHJvbWlzZSwgYXBwbHlQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJmYWlsXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiaWRsZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuXHRjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0ID0gdXBkYXRlZE1vZHVsZXNMaXN0O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuXHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCk7XG5cdH0pO1xufVxuXG5zZWxmW1wid2VicGFja0hvdFVwZGF0ZV8xNV90eXBlc2NyaXB0XCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSB7XG5cdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0LnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay1wbHVnaW4tc2VydmUvY2xpZW50LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9