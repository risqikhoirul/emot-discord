# Emot-Discord

A simple Node.js script to automatically assign/unassign a reaction emoji to Discord message.

## Prerequisites

- Node.js v12 or later
- npm or yarn

## Installation

1. Clone this repository

```
git clone https://github.com/emot-discord.git
cd emot-discord
```

2. Run `npm install` command to install dependencies

```
npm install
```

3. Create `link.txt` file and fill it with message links that you want to assign/unassign emoji to. Example:

```
https://discord.com/channels/849206383433089025/1097832999959134249/1100521299903787189
https://discord.com/channels/849206383433089025/1097832999959134249/1100779922722672701
https://discord.com/channels/849206383433089025/1097832999959134249/1099608649615278132
https://discord.com/channels/849206383433089025/1097832999959134249/1100687660797931552
https://discord.com/channels/849206383433089025/1097832999959134249/1100700150218903583
https://discord.com/channels/849206383433089025/1097832999959134249/1101024347973492786
https://discord.com/channels/849206383433089025/1097832999959134249/1101031832952254546
```

4. Create `token.txt` file and fill it with your Discord bot token. You can also use multiple tokens separated by line breaks. Example:

```
MdfqqfefMjE0MTg0MjQ4Mg.GHFckg.gmy0Sd-tYQgNlxJWaVaxNvpxFd3kvXV7jYl28U | caesar#5086
KMjU1MTE3NllNDUxNjA0OA.G_Kcwe.w_dsc_GtCS-sZBchwzLs_TyT-KAt5E8fVX_x_0 | nor4#3915
HTXfMjI2NTIwNTY1MzkwNTQ1Nw.G3PfHw.mebStq_zKpVBO82gImyN1ylPtxOUYlkyr0 | nanda651#5904
OTw3NTM3MzUdAyMjk2NTg3MQ.GNsi45.OIsIlooGho86yIWBfbFZ63aM3QfpdYFR4zQQ | narr#7942
ITEwMTUCGkOTg1NTExMTE3OQ.GVKSsddug.ba52KymmFNs_EHEZf_EcN9GrI1MSc2op8 | kurali#6050
RdfqqfefMjE0MTg0MjQ4Mg.GHFckg.gmy0Sd-tYQgNlxJWaVaxNvpxFd3kvXV7jYl28U
UMjU1MTE3NllNDUxNjA0OA.G_Kcwe.w_dsc_GtCS-sZBchwzLs_TyT-KAt5E8fVX_xAK
LTXfMjI2NTIwNTY1MzkwNTQ1Nw.G3PfHw.mebStq_zKpVBO82gImyN1ylPtxOUYlky2P
RTw3NTM3MzUdAyMjk2NTg3MQ.GNsi45.OIsIlooGho86yIWBfbFZ63aM3QfpdYFR4FFG
ITEwMTUCGkOTg1NTExMTE3OQ.GVKSsddug.ba52KymmFNsHEHEZf_EcN9GrI1MSc2BCX
STw3NTM3MzUdAyMjk2NTg3MQ.GNsi45.OIsIlooGho86yIWBfbFZ63aM3QfpdYFR4zQZ | narr#7942
QTEwMTUCGkOTg1NTExMTE3OQ.GVKSsddug.ba52KymmFNs_EHEZf_EcN9GrI1MSc2opY | kurali#6050
IdfqqfefMjE0MTg0MjQ4Mg.GHFckg.gmy0Sd-tYQgNlxJWaVaxNvpxFd3kvXV7jYl28S
```

`You may or may not provide " | username#id " it's all good`

Get Token Discord

Here's a revised version of the instructions:

a. Open Discord in your web browser at https://discord.com.
b. Click "Open Discord in your browser."
c. Open the developer console by pressing F12.
d. In the console menu, paste the following code and press enter:

```
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

5. Run the script using the following command:

node index [emot/unemot] [emoji]

- `[emot/unemot]` is the action you want to perform, either assign or unassign an emoji.
- `[emoji]` is the emoji you want to assign/unassign. Default is `✅`.

## Usage

```bash
# Assign ✅ emoji to all messages in link.txt
node index emot ✅

# Unassign ✅ emoji from all messages in link.txt
node index unemot ✅

```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
