module.exports = {
  version: "8.0",
  title: "CozyClay",
  description: "Stage 3D scenes, pose characters, and author camera moves in the original CozyClay Studio.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    for (const [script, text] of [["install.js", "Installing"], ["update.js", "Updating"], ["reset.js", "Resetting"]]) {
      if (info.running(script)) {
        return [{ default: true, icon: "fa-solid fa-terminal", text, href: script }]
      }
    }
    if (!info.exists("app/node_modules/cozyclay/dist/app/index.html")) {
      return [{ default: true, icon: "fa-solid fa-plug", text: "Install", href: "install.js" }]
    }
    if (info.running("start.js")) {
      const local = info.local("start.js")
      if (local && local.url) {
        return [{
          default: true,
          icon: "fa-solid fa-rocket",
          text: "Open Web UI",
          href: local.url + "/app/",
          popout: true
        }, {
          icon: "fa-solid fa-diagram-project",
          text: "Workflow",
          href: local.url + "/workflow/",
          popout: true
        }, {
          icon: "fa-solid fa-terminal",
          text: "Terminal",
          href: "start.js"
        }]
      }
      return [{ default: true, icon: "fa-solid fa-terminal", text: "Starting", href: "start.js" }]
    }
    return [{
      default: true,
      icon: "fa-solid fa-power-off",
      text: "Start",
      href: "start.js"
    }, {
      icon: "fa-solid fa-arrows-rotate",
      text: "Update",
      href: "update.js"
    }, {
      icon: "fa-solid fa-plug",
      text: "Reinstall",
      href: "install.js"
    }, {
      icon: "fa-solid fa-broom",
      text: "Reset",
      href: "reset.js",
      confirm: "Remove the installed CozyClay package? Export any projects you want to keep first."
    }]
  }
}
