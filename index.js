const axios = require("axios");
const moment = require("moment");
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

// emot
const emot = (channelId, messageId, emoji, token) =>
  new Promise((resolve, reject) => {
    const url = `https://discord.com/api/v9/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`;
    axios
      .put(
        url,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
// unemot
const unemot = (channelId, messageId, emoji, token) =>
  new Promise((resolve, reject) => {
    const url = `https://discord.com/api/v9/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`;
    axios
      .delete(url, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

const modulesToCheck = ["moment", "chalk", "axios"];

for (const moduleName of modulesToCheck) {
  const modulePath = path.join(__dirname, "node_modules", moduleName);

  if (!fs.existsSync(modulePath)) {
    console.error(`Error: ${moduleName} is not installed. Please run "npm i" and try again.`);
    process.exit(1);
  }
}

(async () => {
  const ngemot = process.argv[2] ? process.argv[2] : "emot";
  const emoji = process.argv[3] ? process.argv[3] : "✅";

  try {
    const links = fs.readFileSync("./link.txt", "utf-8").split("\n");
    const tokens = fs.readFileSync("./token.txt", "utf-8").split("\n");

    const user = (name) => {
      if (!name.includes("|")) {
        return [name.trim(), "M. Khoirul Risqi"];
      } else {
        const [token, username] = name.split("|").map((x) => x.trim());
        return [token, username];
      }
    };

    for (let a = 0; a < tokens.length; a++) {
      const [token, username] = user(tokens[a]);
      console.log(`+++++ Akun ke - ${a + 1} [ ${username} ] +++++`);
      // console.log(`Token: ${token}`);

      for (let i = 0; i < links.length; i++) {
        const link = links[i].trim().split("/");
        const [, , , , , channelId, messageId] = link;

        try {
          if (ngemot.toLowerCase() === "emot") {
            await emot(channelId, messageId, encodeURI(emoji), token);
            const log = ` | Successfully assign emoji ${emoji} to message id ${messageId}`;
            console.log(chalk.green(moment().format("hh:mm:ss")) + log);
          } else if (ngemot.toLowerCase() === "unemot") {
            await unemot(channelId, messageId, encodeURI(emoji), token);
            const log = ` | Successfully assign emoji ${emoji} to message id ${messageId}`;
            console.log(chalk.green(moment().format("hh:mm:ss")) + log);
          } else {
            const log = " Your command is incorrect. example: node index emot ✅ || node index unemot ✅";
            console.log(chalk.green(moment().format("hh:mm:ss")) + log);
            process.exit();
          }
        } catch (error) {
          console.error(chalk.red(moment().format("hh:mm:ss") + ` | Error: ${error.message}`));
        }
      }
    }
  } catch (error) {
    console.error(chalk.red(moment().format("hh:mm:ss") + ` | Error: ${error.message}`));
  }
})();
