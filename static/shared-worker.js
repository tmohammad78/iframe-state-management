// importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

// let sharedState = {};
// debugger
// onconnect = function (event) {
//     const api = {
//         get(key) {
//             return sharedState[key];
//         },
//         set(key, value) {
//             sharedState[key] = value;
//             // Notify all connected ports (clients)
//             Object.keys(self.clients).forEach(clientId => {
//                 self.clients[clientId].postMessage({ action: 'updated', key, value });
//             });
//         }
//     };
//     Comlink.expose(api);
// };
  


importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

const obj = {
  counter: 0,
  inc() {
    this.counter++;
  },
};

/**
 * When a connection is made into this shared worker, expose `obj`
 * via the connection `port`.
 */
onconnect = function (event) {
  const port = event.ports[0];

  Comlink.expose(obj, port);
};
