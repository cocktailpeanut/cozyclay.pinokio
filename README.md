# CozyClay for Pinokio

A minimal launcher for the original [CozyClay](https://github.com/NomaDamas/CozyClay) 3D staging Studio and Workflow canvas.

Click **Install**, then **Start** and **Open Web UI**. Installation uses the official `cozyclay` npm package, which includes its production build. The launcher serves it on a free loopback port with the upstream production CLI; no development server or replacement UI is used. Requires Pinokio with Node.js 22.19+ and a Chromium-based browser.

- **Studio:** `/app/`. Stage scenes, pose characters, create shots, and save/export projects using the original UI.
- **Workflow:** `/workflow/`, also available in the running launcher's menu.
- **Update:** pull launcher updates and install the latest CozyClay package.
- **Reinstall:** repeat the package installation.
- **Reset:** remove `app/` so the next Install starts fresh. Export projects before resetting. Browser project storage and CozyClay's user configuration are managed by upstream.

The server stays on `127.0.0.1`; Pinokio opens the original UI in a popup. Anonymous upstream telemetry is disabled for launcher sessions. AI provider features require your own provider sign-in or API key; external video services require their own setup. Basic local scene editing needs neither a model download nor a key.

## Programmatic access

Use the base URL shown in the launcher's Terminal. HTTP checks for the actual Studio page:

```sh
curl --fail http://127.0.0.1:PORT/app/
```

```javascript
const html = await fetch("http://127.0.0.1:PORT/app/").then(r => {
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  return r.text()
})
```

```python
from urllib.request import urlopen
html = urlopen("http://127.0.0.1:PORT/app/").read().decode()
```

Scene operations use upstream's [live CLI](https://github.com/NomaDamas/CozyClay/blob/main/docs/agent-cli.md) or [MCP server](https://github.com/NomaDamas/CozyClay/blob/main/mcp/README.md), rather than an invented REST scene API. With the Studio tab open, the packaged CLI is available as `node app/node_modules/cozyclay/bin/cozyclay.mjs live status --wait`; see the upstream guides for inspect, edit, capture and undo commands.

## Credits

CozyClay and `icon.png` (upstream `public/icons/icon-512.png`) are by [NomaDamas](https://github.com/NomaDamas/CozyClay), licensed under AGPL-3.0-or-later. The original app is installed from npm without source modifications. See [upstream license and third-party notices](https://github.com/NomaDamas/CozyClay#license--credits).
