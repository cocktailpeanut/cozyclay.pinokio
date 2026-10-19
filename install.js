module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "\"{{which('npm')}}\" install --prefix app cozyclay@latest --no-audit --no-fund"
    }
  }]
}
