const xapi = require('xapi');
const Companion_IP = '10.1.1.1:8888'; /* IP of Companion app (include port #, e.g. 10.1.1.1:8888) */

function _companion_put(command) {
  console.log("Calling Companion API with command  /press/bank/" + command);
    xapi.command('HttpClient Get', {
    Url: "http://"+Companion_IP+"/press/bank/"+command,
    AllowInsecureHTTPS: 'True'
    })
  .catch((err) => {
    console.log(err);
  });
}

xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.WidgetId.substr(0,12)== 'toCompanion_') {
    if (event.Type === 'pressed') {
//      console.log('Length: ' + event.WidgetId.length);
//      console.log('Substr: ' + event.WidgetId.substr(12));
      console.log('I got event.WidgetId: ' + event.WidgetId + ' with event.Type: ' + event.Type);
      _companion_put(event.WidgetId.substr(12));
    }
  }
});