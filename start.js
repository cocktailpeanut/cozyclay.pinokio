module.exports = {
  daemon: true,
  run: [{
    method: "shell.run",
    params: {
      path: "app",
      env: {
        COZYCLAY_TELEMETRY: "0"
      },
      message: "\"{{which('node')}}\" node_modules/cozyclay/bin/cozyclay.mjs --no-open --no-star --no-update-check --port {{port}}",
      on: [{
        event: "/(http:\\/\\/[0-9.:]+)/",
        done: true
      }]
    }
  }, {
    method: "local.set",
    params: {
      url: "{{input.event[1]}}"
    }
  }]
}
