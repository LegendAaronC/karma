javascript:(async function () {
  const version = "1.0.0";
(function injectFont() { const style = document.createElement("style"); style.textContent = ` @font-face { font-family: "Ndot57Caps"; src: url("https://ac.blooket.com/play-frontend/208b500eaf6a02de6236333d99331a18ce8c8e84/_next/static/media/ee40bb094c99a29a-s.p.woff2") format("opentype"); font-weight: normal; font-style: normal; font-display: swap; } `; document.head.appendChild(style); })();
async function SendPrompt(message) {
  return new Promise((resolve) => {
    let container = document.getElementById('prompt-container');

    if (!container) {
      container = document.createElement('div');
      container.id = 'prompt-container';
      Object.assign(container.style, {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%) translateY(-30px)',
        background: 'rgba(0,0,0,0.9)',
        color: '#fff',
        padding: '16px 20px',
        borderRadius: '10px',
        fontFamily: '"Ndot57Caps", sans-serif',
        fontSize: '14px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        zIndex: '9999',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        opacity: '0',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      });
      document.body.appendChild(container);
    } else {
      container.innerHTML = '';
      container.style.opacity = '0';
      container.style.transform = 'translateX(-50%) translateY(-30px)';
    }

    const msg = document.createElement('div');
    msg.textContent = message;
    container.appendChild(msg);

    const input = document.createElement('input');
    Object.assign(input.style, {
      padding: '8px 12px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '14px',
      minWidth: '200px',
      fontFamily: '"Ndot57Caps", sans-serif',
    });
    container.appendChild(input);

    requestAnimationFrame(() => {
      container.style.opacity = '1';
      container.style.transform = 'translateX(-50%) translateY(0)';
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value.trim();

        container.style.opacity = '0';
        container.style.transform = 'translateX(-50%) translateY(-30px)';
        setTimeout(() => {
          container.remove();
          resolve(val || null);
        }, 300);
      }
    });

    input.focus();
  });
}

function saveTheme(theme) {
    try {
        localStorage.setItem("customMenuTheme", JSON.stringify(theme));
        applyTheme(theme);
    } catch (e) {}
}

function loadTheme() {
    try {
        const saved = localStorage.getItem("customMenuTheme");
        if (saved) return JSON.parse(saved);
    } catch (e) {}
    return { name: "Default", primary: "#ff4444aa", toggled: "#660000", hover: "#ff6666" };
}
  const categories = {};

  const colors = [
    { name: "Red", primary: "#c92323c4", toggled: "#660000", hover: "#ff6666" },
    { name: "Orange", primary: "#ff8800", toggled: "#994d00", hover: "#ffb74d" },
    { name: "Yellow", primary: "#ffeb3b", toggled: "#bfa600", hover: "#fff176" },
    { name: "Light Green", primary: "#8bc34a", toggled: "#4d751f", hover: "#aed581" },
    { name: "Green", primary: "#4caf50", toggled: "#2e7d32", hover: "#81c784" },
    { name: "Dark Green", primary: "#2e7d32", toggled: "#1b4d1b", hover: "#4caf50" },
    { name: "Light Blue", primary: "#03a9f4", toggled: "#01579b", hover: "#4fc3f7" },
    { name: "Blue", primary: "#2196f3", toggled: "#0d47a1", hover: "#64b5f6" },
    { name: "Dark Blue", primary: "#1565c0", toggled: "#0b3c75", hover: "#5e92f3" },
    { name: "Purple", primary: "#9c27b0", toggled: "#4a0072", hover: "#ba68c8" },
    { name: "Magenta", primary: "#e91e63", toggled: "#880e4f", hover: "#f06292" },
    { name: "Beige", primary: "#f5f5dc", toggled: "#9e9e85", hover: "#fafafa" },
    { name: "White", primary: "#ffffff", toggled: "#cccccc", hover: "#f0f0f0" },
    { name: "Gray", primary: "#9e9e9e", toggled: "#616161", hover: "#bdbdbd" },
  ];


  function loadTheme() {
    const saved = localStorage.getItem("customMenuTheme");
    return saved ? JSON.parse(saved) : colors[0];
  }
  function applyTheme(theme) {
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--toggled", theme.toggled);
    document.documentElement.style.setProperty("--hover", theme.hover);
  }


SendNotification("Welcome to karma.lol. Press ALT + GR to show/hide the menu.");

function SendNotification(text) {
  let container = document.getElementById('notification-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-container';
    Object.assign(container.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: '10px',
      zIndex: '9999',
    });
    document.body.appendChild(container);
  }

  const notif = document.createElement('div');
  Object.assign(notif.style, {
    background: 'rgba(0,0,0,0.9)',
    color: '#fff',
    padding: '12px 16px',
    borderRadius: '8px',
    fontFamily: '"Ndot57Caps", sans-serif',
    fontSize: '14px',
    minWidth: '220px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    position: 'relative',
    overflow: 'hidden',
    opacity: '0',
    transform: 'translateY(20px)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  });
  notif.textContent = text;

  const bar = document.createElement('div');
  Object.assign(bar.style, {
    position: 'absolute',
    bottom: '0',
    left: '0',
    height: '4px',
    background: loadTheme().primary,
    width: '100%',
    transition: 'width 3s linear',
  });
  notif.appendChild(bar);
  container.appendChild(notif);

  requestAnimationFrame(() => {
    notif.style.opacity = '1';
    notif.style.transform = 'translateY(0)';
    bar.style.width = '0%';
  });

  let animationActive = true;
  const updateColor = () => {
    if (!animationActive) return;
    bar.style.background = loadTheme().primary;
    requestAnimationFrame(updateColor);
  };
  requestAnimationFrame(updateColor);

  setTimeout(() => {
    notif.style.opacity = '0';
    notif.style.transform = 'translateY(20px)';
    animationActive = false;
    setTimeout(() => notif.remove(), 300);
  }, 3000);
}
let _antiBanDisable = null;
let _originalFetchCall = null;

function AntiBanToggle(toggle) {
    let enabled = false;

    function enable() {
        if (enabled) return;
        enabled = true;

        if (!_originalFetchCall && window.fetch && window.fetch.call) {
            _originalFetchCall = window.fetch.call;
        }
        if (!_originalFetchCall) return;

        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) {
                return _originalFetchCall.apply(this, arguments);
            }
            return new Promise(() => {});
        };
    }

    function disable() {
        if (!enabled) return;
        enabled = false;

        if (_originalFetchCall) {
            window.fetch.call = _originalFetchCall;
        }
    }

    if (toggle) {
        if (_antiBanDisable) return;
        enable();

        _antiBanDisable = () => {
            disable();
            _antiBanDisable = null;
        };

    } else if (_antiBanDisable) {
        _antiBanDisable();
    }
}
  function removeRandomNameMod() {
    let iframe = document.querySelector("iframe");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.append(iframe);
    }

    if (window.fetch.call.toString() === 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) {
                return call.apply(this, arguments);
            }
        };
    }

    const reactRoot = (function findReact(r = document.querySelector("body>div")) {
        return Object.values(r)[1]?.children?.[0]?._owner?.stateNode ? r : findReact(r.querySelector(":scope>div"));
    })();

    const node = Object.values(reactRoot)[1].children[0]._owner.stateNode;
    node.setState({ isRandom: false, client: { name: "" } });

    document.querySelector('[class*="nameInput"]')?.focus();

    SendNotification("Removed the random names.");
}
  function getQuestionsFiber() {
    function getFiber(el) {
      for (const k in el) {
        if (k.startsWith("__reactFiber$") || k.startsWith("__reactInternalInstance$")) {
          return el[k];
        }
      }
      return null;
    }
    function crawlFiber(f, depth = 0) {
      if (!f || depth > 50) return null;
      const props = f.memoizedProps;
      if (props?.questions && Array.isArray(props.questions)) {
        return f;
      }
      return crawlFiber(f.child, depth + 1) || crawlFiber(f.sibling, depth);
    }

    const rootEls = [document.querySelector("#app"), document.querySelector("#root"), document.body];
    for (const el of rootEls) {
      const f = getFiber(el);
      if (f) {
        const found = crawlFiber(f);
        if (found) return found;
      }
    }
    return null;
  }

  function setAllAnswersCorrect(state) {
    if (!state) return;
    const fiber = getQuestionsFiber();
    if (!fiber) return;

    const props = fiber.memoizedProps;
    if (!props.questions) return;

    props.questions.forEach(q => {
      if (q.answers) {
        q.correctAnswers = [...q.answers];
      }
    });
  }

  async function claimDailyRewardsAndSpoofFactoryStats() {
    if (!window.location.href.includes("play.blooket.com")) {
        SendNotification("This cheat only works on play.blooket.com, opening a new tab in 3 seconds.");
setTimeout(() => {
  window.open("https://play.blooket.com/");
}, 3000);
return;
    }
    const gameIds = [
        "68e4aa19a66b764c36e10c7a", "68e4aa19a66b764c36e10c7a", "68e4aa19a66b764c36e10c7a", "68e4aa19a66b764c36e10c7a"
    ];
    const gameId = gameIds[Math.floor(Math.random() * gameIds.length)];
    const rand = (l, h) => Math.floor(Math.random() * (h - l + 1)) + l;

    try {
        const { t } = await fetch("https://play.blooket.com/api/playersessions/solo", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ gameMode: "Factory", questionSetId: gameId })
        }).then(res => res.json());
        await fetch("https://play.blooket.com/api/playersessions/landings", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ t })
        });
        await fetch(`https://play.blooket.com/api/playersessions/questions?t=${t}`, { credentials: "include" });
        await fetch(`https://play.blooket.com/api/gamequestionsets?gameId=${gameId}`, { credentials: "include" });
        await fetch("https://play.blooket.com/api/users/factorystats", {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({
                t,
                place: 1,
                cash: rand(10000000, 100000000),
                playersDefeated: 0,
                correctAnswers: rand(500, 2000),
                upgrades: rand(250, 750),
                blookUsed: "Chick",
                nameUsed: "You",
                mode: "Time-Solo"
            })
        });
        const reward = await fetch("https://play.blooket.com/api/users/add-rewards", {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({ t, addedTokens: 500, addedXp: 300 })
        }).then(res => res.json());
        SendNotification(`Added max tokens and xp, and got ${reward.dailyReward} daily wheel tokens!`);
    } catch (err) {
    }
}


  function triggerFishingFrenzy() {
    try {
      const findReactNode = (root = document.querySelector("body>div")) => {
          while (root) {
              const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
              if (node) return node;
              root = root.querySelector(":scope>div");
          }
          return null;
      };
      const stateNode = findReactNode();
      if (!stateNode || !stateNode.props?.liveGameController || !stateNode.props?.client) return;

      stateNode.props.liveGameController.setVal({
          path: `c/${stateNode.props.client.name}`,
          val: {
              b: stateNode.props.client.blook,
              w: stateNode.state.weight,
              f: "Frenzy",
              s: true
          }
      });
    SendNotification("Triggered Frenzy.");
    } catch (err) { SendNotification("An error occurred. " + err);  }
  }
  function sendFishingDistraction() {
      const findReactNode = (root = document.querySelector("body>div")) => {
          while (root) {
              const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
              if (node) return node;
              root = root.querySelector(":scope>div");
          }
          return null;
      };
      const stateNode = findReactNode();
      if (!stateNode || !stateNode.props?.liveGameController || !stateNode.props?.client) return;
      const distractions = [
          "Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus",
          "Narwhal", "Megalodon", "Blobfish", "Baby Shark"
      ];
      const chosen = distractions[Math.floor(Math.random() * distractions.length)];
      stateNode.safe = true;
      stateNode.props.liveGameController.setVal({
          path: `c/${stateNode.props.client.name}`,
          val: {
              b: stateNode.props.client.blook,
              w: stateNode.state.weight,
              f: chosen,
              s: true
          }
      });
      if (chosen != "Octopus")
      {
      SendNotification(`Sent a ${chosen}` + " distraction.");
      }
      else
        SendNotification(`Sent an ${chosen}` + " distraction.");
  }

  function reactHandler() {
        return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
  }

  let fishingDistractionInterval;
  let originalParty = null;

  function removeFishingDistraction(state2) {
      const findReactNode = (root = document.querySelector("body>div")) => {
          while (root) {
              const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
              if (node) return node;
              root = root.querySelector(":scope>div");
          }
          return null;
      };

      const disableDistraction = () => {
          const stateNode = findReactNode();
          if (!stateNode) return;

          if (originalParty === null) {
              originalParty = stateNode.state?.party || "fishing";
          }

          stateNode.setState({ party: "" });
      };

      if (state2) {
          disableDistraction();
          fishingDistractionInterval = setInterval(disableDistraction, 0);
      } else {
          clearInterval(fishingDistractionInterval);
          const stateNode = findReactNode();
          if (stateNode && originalParty !== null) {
              stateNode.setState({ party: originalParty });
          }
          originalParty = null;
      }
  }

  async function setLureLevelWithPrompt() {
      const findReactNode = (root = document.querySelector("body>div")) => {
          while (root) {
              const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
              if (node) return node;
              root = root.querySelector(":scope>div");
          }
          return null;
      };

      const stateNode = findReactNode();
      if (!stateNode) return;

      const input = await SendPrompt("What would you like to set your lure to? (1 - 5)");
      const clamped = Math.max(Math.min((parseInt(input) || 0) - 1, 4), 0);
      stateNode.setState({ lure: clamped });
      SendNotification(`Set lure to ${input}.`);
  }


  async function setCryptoPasswordWithPrompt() {
      const findReactNode = (root = document.querySelector("body>div")) => {
          while (root) {
              const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
              if (node) return node;
              root = root.querySelector(":scope>div");
          }
          return null;
      };

      const password = await SendPrompt("What do you want to set your password to?");
      if (!password) return;

      const stateNode = findReactNode();
      if (!stateNode || !stateNode.props?.liveGameController || !stateNode.props?.client) return;

      stateNode.setState({ password });
      stateNode.props.liveGameController.setVal({
          path: `c/${stateNode.props.client.name}/p`,
          val: password
      });
      SendNotification("Set crypto password to: " + password + ".");
    }

  async function stealCryptoFromPlayer() {
      const findReactNode = (root = document.querySelector("body>div")) => {
          while (root) {
              const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
              if (node) return node;
              root = root.querySelector(":scope>div");
          }
          return null;
      };

      
      const target = await SendPrompt("Who's crypto would you like to steal? (Case sensitive)");
      if (!target) return;

      const stateNode = findReactNode();
      if (!stateNode || !stateNode.props?.liveGameController || !stateNode.props?.client) return;

      stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
          if (!players) return;

          const entry = Object.entries(players).find(([name]) => name.toLowerCase() === target.toLowerCase());
          if (!entry) return;

          const [playerName, playerData] = entry;
          const stolenAmount = playerData.cr;

          const newCrypto = stateNode.state.crypto + stolenAmount;
          stateNode.setState({
              crypto: newCrypto,
              crypto2: newCrypto
          });

          stateNode.props.liveGameController.setVal({
              path: `c/${stateNode.props.client.name}`,
              val: {
                  b: stateNode.props.client.blook,
                  p: stateNode.state.password,
                  cr: newCrypto,
                  tat: `${playerName}:${stolenAmount}`
              }
          });
      });
      SendNotification(`Stole ${stolenAmount} crypto from ${target}.`);
  }

  async function swapGoldWithPlayer() {
      const findReactNode = (root = document.querySelector("body>div")) => {
          while (root) {
              const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
              if (node) return node;
              root = root.querySelector(":scope>div");
          }
          return null;
      };

      
      const target = await SendPrompt("Who's gold would you like to swap with? (Case sensitive)");
      if (!target) return;

      const stateNode = findReactNode();
      if (!stateNode || !stateNode.props?.liveGameController || !stateNode.props?.client) return;

      stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
          if (!players || !players[target]) return;

          const targetGold = players[target].g || 0;
          const currentGold = stateNode.state.gold || 0;

          stateNode.setState({ gold: targetGold, gold2: targetGold });

          stateNode.props.liveGameController.setVal({
              path: `c/${stateNode.props.client.name}`,
              val: {
                  b: stateNode.props.client.blook,
                  tat: `${target}:swap:${currentGold}`,
                  g: targetGold
              }
          });
      });
      SendNotification(`Swapped gold with ${target}.`);
  }

let _cryptoCheatDisable = null;

function extractHackedName() {
    const el = Array.from(document.querySelectorAll('div')).find(d => /\bHACKING\b/i.test(d.textContent));
    if (!el) return null;
    const span = el.querySelector('span');
    if (span && span.textContent.trim()) return span.textContent.trim();
    return el.textContent.replace(/\bHACKING\b[:\s-]*/i, '').trim() || null;
}

let testDisable = null;

function testasdasd(toggle) {
    let interval = null;

    const encodedChars = [
        '\\u2f9f', '\\u4fff', '\\u4f52', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u4FF1', '\\u4FF2'
    ];
    const chars = encodedChars.map(c => eval(`"${c}"`));

    function makeLongText() {
        return new Array(3e6).fill().map(() => chars[Math.floor(Math.random() * chars.length)]).join("");
    }

    function getStateNode() {
        let el = document.querySelector("body>div");
        while (el) {
            const node = Object.values(el)[1]?.children?.[0]?._owner?.stateNode;
            if (node) return node;
            el = el.querySelector(":scope>div");
        }
        return null;
    }

    function run() {
        const stateNode = getStateNode();
        if (!stateNode) return;

        const repeatedText = makeLongText();

        stateNode.props.client.blook = repeatedText;
        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}/b`,
            val: repeatedText
        });
    }

    if (toggle) {
        if (testDisable) return;

        run();
        interval = setInterval(run, 25);

        testDisable = () => {
            clearInterval(interval);
            interval = null;

            const stateNode = getStateNode();
            if (stateNode) {
                stateNode.props.client.blook = "";
                stateNode.props.liveGameController.setVal({
                    path: `c/${stateNode.props.client.name}/b`,
                    val: ""
                });
            }

            testDisable = null;
        };

    } else if (testDisable) {
        testDisable();
    }
}

function CryptoCheat(toggle) {
    let cryptoInterval = null;

    const runCryptoCheat = () => {
        if (!toggle) return;

        let iframe = document.querySelector("iframe");
        if (!iframe) {
            iframe = document.createElement("iframe");
            iframe.style.display = "none";
            document.body.append(iframe);
        }

        if (window.fetch.call.toString() === 'function call() { [native code] }') {
            const call = window.fetch.call;
            window.fetch.call = function () {
                if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
            };
        }

        const findReactNode = (root = document.querySelector("body>div")) => {
            while (root) {
                const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
                if (node) return node;
                root = root.querySelector(":scope>div");
            }
            return null;
        };

        const cheat = async () => {
            const stateNode = findReactNode();
            if (!stateNode) return;

            const { state } = stateNode;
            if (state.stage === "hack") {
                    const playerName = extractHackedName() || state.player?.name || "Unknown";
                    for (const button of document.querySelector('div[class*=buttonContainer]').children) {
                        if (button.innerText === state.correctPassword) {
                            button.click();
                            if (!notifiedThisRound) {setTimeout(() => {
  SendNotification(`Hacked and stole crypto from ${playerName}.`);
}, 4500);
                            notifiedThisRound = true;
                            }
                            break;
                        }
                    }
            } else {
                notifiedThisRound = false;
            }
        };

        cheat();

        if (!cryptoInterval) cryptoInterval = setInterval(cheat, 0);

        _cryptoCheatDisable = () => {
            clearInterval(cryptoInterval);
            cryptoInterval = null;
            _cryptoCheatDisable = null;
        };
    };

    if (toggle) {
        runCryptoCheat();
    } else if (_cryptoCheatDisable) {
        _cryptoCheatDisable();
    }
}

let _autoChooseGoldDisable = null;

function AutoChooseGold(toggle) {
    let interval = null;

    function getReactNode() {
        let r = document.querySelector("body>div");
        while (r) {
            const node = Object.values(r)[1]?.children?.[0]?._owner?.stateNode;
            if (node) return node;
            r = r.querySelector(":scope>div");
        }
        return null;
    }

    function run() {
        const stateNode = getReactNode();
        if (!stateNode) return;

        if (stateNode.state.stage !== "prize") return;

        const selfName = stateNode.props.client.name;
        const selfGold = stateNode.state.gold;

        const players = Array.isArray(stateNode.state.players)
            ? stateNode.state.players
            : [];

        let most = 0;
        for (let i = 0; i < players.length; i++) {
            const p = players[i];
            const name = p.name;
            const gold = typeof p.gold === "number" ? p.gold : 0;

            if (name !== selfName && gold > most) {
                most = gold;
            }
        }

        let max = -Infinity;
        let index = -1;

        for (let i = 0; i < stateNode.state.choices.length; i++) {
            const choice = stateNode.state.choices[i];
            let value = selfGold;

            if (choice.type === "gold") {
                value = selfGold + (choice.val || 0);
            } else if (choice.type === "multiply" || choice.type === "divide") {
                value = Math.round(selfGold * choice.val) || selfGold;
            } else if (choice.type === "swap") {
                value = most || selfGold;
            } else if (choice.type === "take") {
                value = selfGold + (most * choice.val || 0) || selfGold;
            }

            if (value > max) {
                max = value;
                index = i + 1;
            }
        }

        if (index !== -1) {
            document.querySelector(`div[class*='choice${index}']`)?.click();
        }
    }

    if (toggle) {
        if (_autoChooseGoldDisable) return;

        interval = setInterval(run, 50);

        _autoChooseGoldDisable = () => {
            clearInterval(interval);
            interval = null;
            _autoChooseGoldDisable = null;
        };
    } else if (_autoChooseGoldDisable) {
        _autoChooseGoldDisable();
    }
}

let autoAnswerDisable = null;

function AutoAnswerCheat(toggle) {
    let interval = null;

    function getReactNode() {
        let r = document.querySelector("body>div");
        while (r) {
            const node = Object.values(r)[1]?.children?.[0]?._owner?.stateNode;
            if (node) return node;
            r = r.querySelector(":scope>div");
        }
        return null;
    }

    function run() {
        const stateNode = getReactNode();
        if (!stateNode) return;

        const Question =
            stateNode.state?.question ||
            stateNode.props?.client?.question;

        if (!Question) return;

        if (Question.qType !== "typing") {
            const answers = Question.answers;
            const correct = Question.correctAnswers;

            const correctIndex = answers.findIndex(a => correct.includes(a));
            if (correctIndex === -1) return;

            if (stateNode.state.stage !== "feedback" && !stateNode.state.feedback) {
                const btn = document.querySelectorAll("[class*='answerContainer']")[correctIndex];
                btn?.click();
            } else {
                document.querySelector("[class*='feedback'], [id*='feedback']")?.firstChild?.click();
            }

        } else {
            const wrapper = document.querySelector("[class*='typingAnswerWrapper']");
            const reactWrapper = Object.values(wrapper || {})[1];
            const node = reactWrapper?.children?._owner?.stateNode;

            if (node?.sendAnswer) {
                node.sendAnswer(Question.answers[0]);
            }
        }
    }

    if (toggle) {
        if (autoAnswerDisable) return;

        run();
        interval = setInterval(run, 0);

        autoAnswerDisable = () => {
            clearInterval(interval);
            interval = null;
            autoAnswerDisable = null;
        };

    } else if (autoAnswerDisable) {
        autoAnswerDisable();
    }
}

let crashDisable = null;

function CrashCheat(toggle) {
    let interval = null;

    function getReactNode() {
        let el = document.querySelector("#app");
        while (el) {
            const node = Object.values(el)[1]?.children?.[0]?._owner?.stateNode;
            if (node) return node;
            el = el.querySelector(":scope>div");
        }
        return null;
    }

    function run() {
        const stateNode = getReactNode();
        if (!stateNode) return;

        const controller = stateNode.props?.liveGameController;
        const name = stateNode.props?.client?.name;

        if (!controller || !name) return;

        controller.setVal({
            path: `c/${name}/cr`,
            val: `9999999999999999999999999999999999999999999999${
                new Array(999).fill("\u0e47".repeat(70)).join(" ")
            }`
        });
    }

    if (toggle) {
        if (crashDisable) return;

        run();
        interval = setInterval(run, 25);

        crashDisable = () => {
            clearInterval(interval);
            interval = null;

            const stateNode = getReactNode();
            if (stateNode) {
                stateNode.props.liveGameController.setVal({
                    path: `c/${stateNode.props.client.name}/cr`,
                    val: ""
                });
            }

            crashDisable = null;
        };

    } else if (crashDisable) {
        crashDisable();
    }
}


let _highlightAnswersDisable = null;
let _originalColors = [];

function HighlightAnswersCheat(toggle) {
    let interval = null;

    function getReactNode() {
        let r = document.querySelector("body>div");
        while (r) {
            const node = Object.values(r)[1]?.children?.[0]?._owner?.stateNode;
            if (node) return node;
            r = r.querySelector(":scope>div");
        }
        return null;
    }

    function run() {
        const stateNode = getReactNode();
        if (!stateNode) return;

        const Question =
            stateNode.state?.question ||
            stateNode.props?.client?.question;

        if (!Question) return;

        const buttons = Array.from(
            document.querySelectorAll("[class*='answersHolder'] > div > div")
        );
        if (!buttons.length) return;

        if (_originalColors.length === 0) {
            _originalColors = buttons.map(b => b.style.backgroundColor || "");
        }

        for (let i = 0; i < Question.answers.length; i++) {
            const el = buttons[i];
            if (!el) continue;

            const isCorrect = Question.correctAnswers.includes(Question.answers[i]);
            el.style.backgroundColor = isCorrect
                ? "rgb(0, 207, 119)"
                : "rgb(189, 15, 38)";
        }
    }

    if (toggle) {
        if (_highlightAnswersDisable) return;

        run();
        interval = setInterval(run, 0);

        _highlightAnswersDisable = () => {
            clearInterval(interval);
            interval = null;

            const buttons = Array.from(
                document.querySelectorAll("[class*='answersHolder'] > div > div")
            );
            buttons.forEach((b, i) => {
                b.style.backgroundColor = _originalColors[i] || "";
            });

            _originalColors = [];
            _highlightAnswersDisable = null;
        };

    } else if (_highlightAnswersDisable) {
        _highlightAnswersDisable();
    }
}

let subtleToggleDisable = null;
let subtleOriginalStyles = [];

function subtleHighlightAnswers(toggle) {
    let interval = null;

    function getReactNode() {
        let r = document.querySelector("body>div");
        while (r) {
            const node = Object.values(r)[1]?.children?.[0]?._owner?.stateNode;
            if (node) return node;
            r = r.querySelector(":scope>div");
        }
        return null;
    }

    function run() {
        const stateNode = getReactNode();
        if (!stateNode) return;

        const Question =
            stateNode.state?.question ||
            stateNode.props?.client?.question;

        if (!Question) return;

        const buttons = Array.from(
            document.querySelectorAll("[class*='answersHolder'] > div > div")
        );
        if (!buttons.length) return;

        if (subtleOriginalStyles.length === 0) {
            subtleOriginalStyles = buttons.map(b => ({
                boxShadow: b.style.boxShadow || "",
                backgroundColor: b.style.backgroundColor || ""
            }));
        }

        for (let i = 0; i < Question.answers.length; i++) {
            const el = buttons[i];
            if (!el) continue;

            const isCorrect = Question.correctAnswers.includes(Question.answers[i]);

            if (isCorrect) {
                el.style.boxShadow = "unset";
            } else {
            }
        }
    }

    if (toggle) {
        if (subtleToggleDisable) return;

        run();
        interval = setInterval(run, 0);

        subtleToggleDisable = () => {
            clearInterval(interval);
            interval = null;

            const buttons = Array.from(
                document.querySelectorAll("[class*='answersHolder'] > div > div")
            );
            buttons.forEach((b, i) => {
                if (!subtleOriginalStyles[i]) return;
                b.style.boxShadow = subtleOriginalStyles[i].boxShadow;
                b.style.backgroundColor = subtleOriginalStyles[i].backgroundColor;
            });

            subtleOriginalStyles = [];
            subtleToggleDisable = null;
        };

    } else if (subtleToggleDisable) {
        subtleToggleDisable();
    }
}





  async function resetPlayerGold() {
    const findReactNode = (root = document.querySelector("body>div")) => {
        while (root) {
            const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
            if (node) return node;
            root = root.querySelector(":scope>div");
        }
        return null;
    };

    
    const target = await SendPrompt("Who's gold would you like to reset? (Case sensitive)");
    if (!target) return;

    const stateNode = findReactNode();
    if (!stateNode || !stateNode.props?.liveGameController || !stateNode.props?.client) return;

    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}/tat`,
        val: `${target}:swap:0`
    });
    SendNotification(`Reset ${target}'s gold.`);
}

async function setPlayerGold() {
    const findReactNode = (root = document.querySelector("body>div")) => {
        while (root) {
            const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
            if (node) return node;
            root = root.querySelector(":scope>div");
        }
        return null;
    };

    const target = await SendPrompt("Who's gold would you like to set? (Case sensitive)");
    if (!target) return;
    const amount = await parseInt(SendPrompt("How much gold would you like to set?")) || 0;

    const stateNode = findReactNode();
    if (!stateNode || !stateNode.props?.liveGameController || !stateNode.props?.client) return;

    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}/tat`,
        val: `${target}:swap:${amount}`
    });
    SendNotification(`Set ${target}'s gold to ${amount}.`);
}


  let cryptoESPInterval;

  function revealCryptoChoiceESP(state67) {
      const findReactNode = (root = document.querySelector("body>div")) => {
          while (root) {
              const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
              if (node) return node;
              root = root.querySelector(":scope>div");
          }
          return null;
      };

      const addLabel = () => {
          const stateNode = findReactNode();
          if (!stateNode || !Array.isArray(stateNode.state?.choices)) return;

          const feedbackContainer = document.querySelector('[class*=feedbackContainer]');
          if (!feedbackContainer) return;

          if (feedbackContainer.querySelector(".crypto-esp-label")) return;

          const label = document.createElement("div");
          label.className = "crypto-esp-label";
          label.innerText = stateNode.state.choices[0]?.text ?? "";
          label.style.color = "white";
          label.style.fontFamily = '"Ndot57Caps", Inconsolata,Helvetica,monospace,sans-serif';
          label.style.fontSize = "2em";
          label.style.display = "flex";
          label.style.justifyContent = "center";
          label.style.marginTop = "675px";

          feedbackContainer.append(label);
      };

      if (state67) {
          addLabel();
          cryptoESPInterval = setInterval(addLabel, 0);
      } else {
          clearInterval(cryptoESPInterval);
          document.querySelectorAll(".crypto-esp-label").forEach(el => el.remove());
      }
  }

let passwordESPInterval = null;

function runPasswordESP(toggle) {
    const findReactNode = (root = document.querySelector("body>div")) => {
        while (root) {
            const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
            if (node) return node;
            root = root.querySelector(":scope>div");
        }
        return null;
    };

    const cheat = () => {
        const stateNode = findReactNode();
        if (!stateNode) return;

        const { state } = stateNode;
        if (state.stage === "hack") {
            document.querySelectorAll('div[class*=buttonContainer] > div').forEach(button => {
                if (button.innerText === state.correctPassword) return;
                button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                button.style.textShadow = "0 0 1px #f33";
            });
        }
    };

    if (toggle) {
        cheat();
        clearInterval(passwordESPInterval);
        passwordESPInterval = setInterval(cheat, 0);
    } else {
        clearInterval(passwordESPInterval);
        passwordESPInterval = null;
        document.querySelectorAll('div[class*=buttonContainer] > div').forEach(btn => {
            btn.style.outlineColor = "";
            btn.style.backgroundColor = "";
            btn.style.textShadow = "";
        });
    }
}

  let chestAnswersInterval;

  function revealChestAnswers(state45) {
      const findReactNode = (root = document.querySelector("body>div")) => {
          while (root) {
              const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
              if (node) return node;
              root = root.querySelector(":scope>div");
          }
          return null;
      };

      const addLabels = () => {
          const stateNode = findReactNode();
          if (!stateNode || !Array.isArray(stateNode.state?.choices)) return;

          stateNode.state.choices.forEach(({ text }, index) => {
              const chest = document.querySelector(`div[class*='choice${index + 1}']`);
              if (!chest) return;

              if (chest.querySelector(".chest-answer-label")) return;

              const label = document.createElement("div");
              label.className = "chest-answer-label";
              label.innerText = text;
              label.style.color = "white";
              label.style.fontFamily = '"Ndot57Caps", Eczar';
              label.style.fontSize = "2em";
              label.style.display = "flex";
              label.style.justifyContent = "center";
              label.style.transform = "translateY(200px)";
              chest.append(label);
          });
      };

      if (state45) {
          addLabels();
          chestAnswersInterval = setInterval(addLabels, 0);
      } else {
          clearInterval(chestAnswersInterval);
          document.querySelectorAll(".chest-answer-label").forEach(el => el.remove());
      }
  }
  const originalAnswers = new WeakMap();

  function getFiberFromElement(el) {
    if (!el) return null;
    for (const k in el) {
      if (k.startsWith("__reactFiber$") || k.startsWith("__reactInternalInstance$") || k.startsWith("__reactContainer$")) {
        return el[k];
      }
    }
    return null;
  }

  function findQuestionsFiber(maxDepth = 2000) {
    const roots = [document.querySelector("#app"), document.querySelector("#root"), document.body].filter(Boolean);
    const visited = new Set();

    const looksLikeQArr = x => Array.isArray(x) && x.length > 0 && (Array.isArray(x[0].answers) || Array.isArray(x[0].correctAnswers));
    const looksLikeQObj = x => x && Array.isArray(x.answers);

    for (const rootEl of roots) {
      const start = getFiberFromElement(rootEl);
      if (!start) continue;
      const stack = [start];
      let depth = 0;
      while (stack.length && depth++ < maxDepth) {
        const f = stack.pop();
        if (!f || visited.has(f)) continue;
        visited.add(f);

        const P = f.memoizedProps || {};
        const S = f.memoizedState || {};
        const sn = f.stateNode || {};

        if (
          looksLikeQArr(P.questions) || looksLikeQArr(P.client?.questions) || looksLikeQObj(P.question) ||
          looksLikeQArr(S.questions) || looksLikeQArr(S.freeQuestions) || looksLikeQObj(S.question) ||
          looksLikeQArr(sn?.props?.questions) || looksLikeQObj(sn?.state?.question)
        ) {
          return f;
        }

        if (f.child) stack.push(f.child);
        if (f.sibling) stack.push(f.sibling);
      }
    }
    return null;
  }

  function nudgeRerender(fiber) {
    if (!fiber) return false;
    let p = fiber;
    while (p) {
      try {
        if (p.stateNode && typeof p.stateNode.forceUpdate === "function") {
          p.stateNode.forceUpdate();
          return true;
        }
        if (p.stateNode && typeof p.stateNode.setState === "function") {
          p.stateNode.setState({});
          return true;
        }
      } catch (e) {}
      p = p.return;
    }
    return false;
  }

  let _allCorrectRAF = null;

  function setAllAnswersCorrect(dsasdada) {
    if (dsasdada) {
      if (_allCorrectRAF) return;
      const tick = () => {
        try {
          const f = findQuestionsFiber();
          if (f) patchQuestionsInFiber(f);
        } catch (e) {}
        _allCorrectRAF = requestAnimationFrame(tick);
      };
      tick();
    } else {
      if (_allCorrectRAF) cancelAnimationFrame(_allCorrectRAF);
      _allCorrectRAF = null;
      restoreAllOriginals();
    }
  }

  function patchQuestionsInFiber(f) {
    const props = f.memoizedProps || {};
    const state = f.memoizedState || {};

    const patchArray = (arr) => {
      if (!Array.isArray(arr)) return;
      for (const q of arr) {
        if (!q || !Array.isArray(q.answers)) continue;
        if (!originalAnswers.has(q)) {
          originalAnswers.set(q, Array.isArray(q.correctAnswers) ? [...q.correctAnswers] : null);
        }
        q.correctAnswers = [...q.answers];
      }
    };

    patchArray(props.questions);
    patchArray(props.client?.questions);
    patchArray(state.questions);
    patchArray(state.freeQuestions);

    if (state.question && Array.isArray(state.question.answers)) {
      if (!originalAnswers.has(state.question)) {
        originalAnswers.set(state.question, Array.isArray(state.question.correctAnswers) ? [...state.question.correctAnswers] : null);
      }
      state.question.correctAnswers = [...state.question.answers];
    }

    if (props.question && Array.isArray(props.question.answers)) {
      if (!originalAnswers.has(props.question)) {
        originalAnswers.set(props.question, Array.isArray(props.question.correctAnswers) ? [...props.question.correctAnswers] : null);
      }
      props.question.correctAnswers = [...props.question.answers];
    }

    nudgeRerender(f);
  }

  function restoreAllOriginals() {
    for (const [q, orig] of originalAnswers.entries()) {
      if (!q || !Array.isArray(q.answers)) continue;
      if (orig) {
        q.correctAnswers = [...orig];
      } else {
        delete q.correctAnswers;
      }
    }
    originalAnswers.clear();
  }

  let _autoAnswerRAF = null;
  let _lastQuestionId = null;

  function autoAnswer(aaaasdasd) {
    if (aaaasdasd) {
      if (_autoAnswerRAF) return;
      const tick = () => {
        try { doAutoAnswerOnce(); } catch(e) {}
        _autoAnswerRAF = requestAnimationFrame(tick);
      };
      tick();
    } else {
      if (_autoAnswerRAF) cancelAnimationFrame(_autoAnswerRAF);
      _autoAnswerRAF = null;
      _lastQuestionId = null;
    }
  }

  function getQuestionFromFiber(f) {
    const props = f.memoizedProps || {};
    const state = f.memoizedState || {};
    const sNode = f.stateNode || {};

    let q = props.question
      || (Array.isArray(props.questions) && props.questions[props.currentIndex || 0])
      || props.client?.question
      || state.question
      || (Array.isArray(state.freeQuestions) && state.freeQuestions[0])
      || sNode?.state?.question
      || null;
    return q;
  }

  function doAutoAnswerOnce() {
    const f = findQuestionsFiber();
    if (!f) return;
    const q = getQuestionFromFiber(f);
    if (!q || !Array.isArray(q.answers)) return;

    const qId = JSON.stringify({ answers: q.answers, correct: q.correctAnswers, qType: q.qType, text: q.text || q.id || "" });
    if (qId === _lastQuestionId) return;
    _lastQuestionId = qId;

    if (!Array.isArray(q.correctAnswers)) return;

    if (q.qType === "typing") {
      const inputEl = document.querySelector("input[type='text'], textarea");
      if (inputEl) {
        inputEl.value = q.answers[0];
        inputEl.dispatchEvent(new Event("input", { bubbles: true }));
        inputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
      }
      return;
    }

    let correctIndex = q.answers.findIndex(a => q.correctAnswers.includes(a));
    if (correctIndex >= 0) {
      const el = Array.from(document.querySelectorAll("[class*='answerContainer']")).at(correctIndex);
      if (el) el.click();
    }
  }

  window.__blooketHelpers = Object.assign(window.__blooketHelpers || {}, {
    setAllAnswersCorrect,
    autoAnswer
  });

  function restoreHighlights() {
    for (const [el, color] of originalStyles.entries()) {
      if (el) el.style.backgroundColor = color || "";
    }
    originalStyles.clear();
  }

  function toggleCorrectAnswers(state67890765) { 
    const t = T();

    if (state67890765) {
        for (let i = 0; i < t.freeQuestions.length; i++) {
            t.freeQuestions[i].correctAnswers = t.freeQuestions[i].answers;
            t.questions[i].correctAnswers = t.questions[i].answers;
            t.props.client.questions[i].correctAnswers = t.questions[i].answers;
        }
    } else {
        for (let i = 0; i < t.freeQuestions.length; i++) {
            t.freeQuestions[i].correctAnswers = [];
            t.questions[i].correctAnswers = [];
            t.props.client.questions[i].correctAnswers = [];
        }
    }

    try {
        t.forceUpdate();
    } catch {}
}



  let highlightInterval;
    const originalColors = new Map();

    function highlightAnswers(state) {
        function runHighlight() {
            const react = (r = document.querySelector("body>div")) =>
                Object.values(r)[1]?.children?.[0]?._owner?.stateNode
                    ? r
                    : react(r.querySelector(":scope>div"));

            const { stateNode } = Object.values(react())[1].children[0]._owner;
            const Question = stateNode.state?.question || stateNode.props?.client?.question;
            if (!Question?.answers || !Question?.correctAnswers) return;

            const answerBoxes = document.querySelectorAll("[class*='answersHolder'] > div");
            answerBoxes.forEach((box, i) => {
                if (!originalColors.has(box)) {
                    originalColors.set(box, box.style.backgroundColor || "");
                }
                const ans = Question.answers[i];
                box.style.backgroundColor = Question.correctAnswers.includes(ans)
                    ? "rgb(0, 207, 119)"
                    : "rgb(189, 15, 38)";
            });
        }

        function clearHighlight() {
            for (const [box, color] of originalColors.entries()) {
                box.style.backgroundColor = color;
            }
            originalColors.clear();
        }

        if (state) {
            clearInterval(highlightInterval);
            runHighlight();
            highlightInterval = setInterval(runHighlight, 0);
        } else {
            clearInterval(highlightInterval);
            clearHighlight();
        }
    }

    window.highlightAnswers = highlightAnswers;

    if (window.__highlightESP) return;

  const state = {
    interval: null,
    originals: new Map(),
    enabled: false,
  };

  function findReactStateNode(root = document.querySelector("body>div")) {
    try {
      while (root) {
        const candidate = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
        if (candidate) return candidate;
        root = root.querySelector(":scope>div");
        if (!root) break;
      }
    } catch (e) {}
    return null;
  }

  function getQuestion(stateNode) {
    if (!stateNode) return null;
    return stateNode.state?.question
      || stateNode.props?.client?.question
      || stateNode.props?.question
      || null;
  }

  function locateAnswerElements(answers) {
    const results = new Array(answers.length).fill(null);

    let pool = [];
    const containers = document.querySelectorAll(
      "[class*='answersHolder'], [class*='AnswersHolder'], [class*='Answers'], [data-testid='answers'], [class*='answersContainer']"
    );
    if (containers.length) {
      containers.forEach(c => {
        if (c.children && c.children.length) pool.push(...Array.from(c.children));
        pool.push(...Array.from(c.querySelectorAll("*")));
      });
    } else {
      pool = Array.from(document.querySelectorAll(
        "[class*='answerContainer'], [class*='answer'], [class*='Answer'], button, [role='button']"
      ));
    }

    const norm = t => (t || "").toString().trim().replace(/\s+/g, " ");

    for (let i = 0; i < answers.length; i++) {
      const a = norm(answers[i]);
      const found = pool.find(el => norm(el.innerText) === a);
      if (found) results[i] = found;
    }
    for (let i = 0; i < answers.length; i++) {
      if (results[i]) continue;
      const a = norm(answers[i]).split("\n")[0];
      const found = pool.find(el => norm(el.innerText).includes(a));
      if (found) results[i] = found;
    }

    if (results.every(r => r === null)) {
      const holder = document.querySelector("[class*='answersHolder'], [class*='AnswersHolder']");
      if (holder && holder.children && holder.children.length >= answers.length) {
        for (let i = 0; i < answers.length; i++) {
          const child = holder.children[i];
          results[i] = child.querySelector("div, button, [role='button']") || child;
        }
      }
    }

    return results;
  }

  function applyHighlights() {
    const stateNode = findReactStateNode();
    const q = getQuestion(stateNode);
    if (!q || !Array.isArray(q.answers) || !Array.isArray(q.correctAnswers)) return;

    const answers = q.answers;
    const correct = q.correctAnswers;

    const elements = locateAnswerElements(answers);

    for (let i = 0; i < answers.length; i++) {
      const el = elements[i];
      if (!el) continue;

      if (!state.originals.has(el)) {
        state.originals.set(el, el.style.backgroundColor ?? "");
      }

      try {
        const isCorrect = correct.includes(answers[i]);
        el.style.backgroundColor = isCorrect ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)";
      } catch (e) {  }
    }
  }

  function restoreAll() {
    for (const [el, orig] of state.originals.entries()) {
      try {
        el.style.backgroundColor = orig;
      } catch (e) {}
    }
    state.originals.clear();
  }

  function enable() {
    if (state.enabled) return;
    applyHighlights();
    state.interval = setInterval(applyHighlights, 0);
    state.enabled = true;
  }

  function disable() {
    if (!state.enabled) return;
    clearInterval(state.interval);
    state.interval = null;
    restoreAll();
    state.enabled = false;
  }

  function toggle(val) {
    if (typeof val === "boolean") {
      val ? enable() : disable();
    } else {
      state.enabled ? disable() : enable();
    }
  }

  window.__highlightESP = { enable, disable, toggle, _state: state };


function highlightanswersundetected(state) {
            if (!state) {
                document.querySelectorAll("[class*='answersHolder'] > * > div")
                    .forEach(el => el.style.backgroundColor = "");
                return;
            }

            const findReactNode = (root = document.querySelector("body>div")) => {
                while (root) {
                    const node = Object.values(root)[1]?.children?.[0]?._owner?.stateNode;
                    if (node) return node;
                    root = root.querySelector(":scope>div");
                }
                return null;
            };

            const stateNode = findReactNode();
            if (!stateNode) return;

            const Question = stateNode.state?.question || stateNode.props?.client?.question;
            if (!Question?.answers || !Question?.correctAnswers) return;

            Question.answers.forEach((answer, i) => {
                const isCorrect = Question.correctAnswers.includes(answer);
                const answerBox = document.querySelector(`[class*='answersHolder'] :nth-child(${i + 1}) > div`);
                if (answerBox) {
                    answerBox.style.backgroundColor = isCorrect ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)";
                }
            });
        }
async function sendAdText() {

  const text = await SendPrompt("What text would you like to send to the leaderboard?") || "I have a big pp";

  const stateNode = Object.values(function find(t = document.querySelector("body>div")) {
    return Object.values(t)[1]?.children?.[0]?._owner.stateNode
      ? t
      : find(t.querySelector(":scope>div"));
  }())[1].children[0]._owner.stateNode;

  const { props } = stateNode;

  const repeatedText = Array(5e3).fill(text).join(' ');

  props.client.blook = repeatedText;
  props.liveGameController.setVal({ path: `c/${props.client.name}/b`, val: repeatedText });
  props.liveGameController.setVal({ path: `c/${props.client.name}/tat`, val: `${props.client.name}:${repeatedText}` });

  SendNotification("Flooded the leaderboard with: " + text + ".");
}

let _removeHackDisable = null;

function RemoveHack(toggle) {
  let interval = null;

  const getReactNode = () => {
    let el = document.querySelector("body>div");
    while (el) {
      const node = Object.values(el)[1]?.children?.[0]?._owner?.stateNode;
      if (node) return node;
      el = el.querySelector(":scope>div");
    }
    return null;
  };

  const removeHack = () => {
    const stateNode = getReactNode();
    if (!stateNode) return;
    stateNode.setState({ hack: "" });
  };

  if (toggle) {
    if (interval) return;
    removeHack();
    interval = setInterval(removeHack, 0);
    _removeHackDisable = () => {
      clearInterval(interval);
      interval = null;
      _removeHackDisable = null;
    };
  } else if (_removeHackDisable) {
    _removeHackDisable();
  }
}


async function revealPassword() {

  function getStateNode() {
    return Object.values(function find(t = document.querySelector("#app")) {
      return Object.values(t)[1]?.children?.[0]?._owner?.stateNode
        ? t
        : find(t.querySelector(":scope>div"));
    }())[1].children[0]._owner.stateNode;
  }

  const stateNode = getStateNode();

    const prompt = await SendPrompt("Whose password would you like to reveal? (Case sensitive)");


      stateNode.props.liveGameController.getDatabaseVal("c", data => {
        SendNotification(prompt + "'s password is: " + data?.[prompt]?.p + ".");
      });

}

var fvals = {
	Hack: "cr",
	Gold: "g",
	Candy: "g",
	Defense2: "d",
	Pirate: "d",
	Fish: "w",
	Brawl: "xp",
	Factory: "ca",
};



  function unlockAllBlooks() {
      const lobby = window.location.pathname.startsWith("/play/lobby");
      const dashboard = !lobby && window.location.pathname.startsWith("/blooks");

      if (dashboard) {
          const key = "loadblooks";
          const originalHasOwn = Object.prototype.hasOwnProperty.call;

          const webpack = webpackChunk_N_E.push([
              [key],
              { [key]: () => {} },
              function (func) {
                  Object.prototype.hasOwnProperty.call = function () {
                      Object.defineProperty(arguments[0], key, { set: () => {}, configurable: true });
                      return (Object.prototype.hasOwnProperty.call = originalHasOwn).apply(this, arguments);
                  };
                  return func;
              },
          ]);

          const blookData = webpack(4927).nK;
          const blooksHook = Object.values(document.querySelector("[class*=BlooksWrapper_content]"))[0].return.memoizedState.next;
          const showBlooks = blooksHook.memoizedState;

          const seen = {};
          const userBlooks = [];
          const prices = {
              Uncommon: 5,
              Rare: 20,
              Epic: 75,
              Legendary: 200,
              Chroma: 300,
              Unique: 350,
              Mystical: 1000,
          };

          for (const data of blooksHook.next.memoizedState) {
              userBlooks.push(data);
              seen[data.blook] = true;
          }

          for (const blook in blookData) {
              const rarity = blookData[blook].rarity;
              if (rarity !== "Common" && !seen[blook]) {
                  userBlooks.push({
                      blook,
                      quantity: 1,
                      sellPrice: prices[rarity],
                  });
              }
          }

          blooksHook.next.queue.dispatch(userBlooks);
          blooksHook.queue.dispatch(!showBlooks);
          setTimeout(() => blooksHook.queue.dispatch(showBlooks), 1);
      }

      if (lobby) {
          const stateNode = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
          stateNode.setState({ unlocks: { includes: () => true } });
      }
  }

  const style = document.createElement("style");
  style.textContent = `
    #customModContainer {
      position: fixed;
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1.2);
      background: #222;
      color: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border-radius: 12px;
      width: 540px;
      height: 340px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 0 15px var(--primary, #ff0000aa);
      z-index: 9999999999;
      overflow: hidden;
      animation: fadeInScale 0.25s ease forwards;
      user-select: none;
      font-family: 'Ndot57Caps', Inconsolata,Helvetica,monospace,sans-serif;
    }
    #customModContainer.closing {
      animation: fadeOutScale 0.28s forwards;
    }
    #customModContainer.minimizing {
      animation: minimizeAnim 0.35s forwards;
    }
    #customModContainer.maximizing {
      animation: maximizeAnim 0.35s forwards;
    }
    #customModHeader {
      background: var(--primary, #ff4444aa);
      padding: 10px;
      font-size: 16px;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #222;
      font-family: 'Ndot57Caps', Inconsolata,Helvetica,monospace,sans-serif;
    }
    #customHeaderButtons button {
      background: none;
      border: none;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      color: #222;
      margin-left: 6px;
      font-family: 'Ndot57Caps', Inconsolata,Helvetica,monospace,sans-serif;
    }
    #customHeaderButtons button:hover {
      color: white;
    }
    #customMain {
      flex: 1;
      display: flex;
      overflow: hidden;
    }
    #customSidebar {
      background: #111;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-right: 2px solid var(--primary, #ff4444aa);
      width: 150px;
      max-height: 100%;
      overflow-y: auto; 
      box-sizing: border-box;
      font-family: 'Ndot57Caps', Inconsolata,Helvetica,monospace,sans-serif;
    }
    #customSidebar button {
      background: var(--primary, #ff4444aa);
      border: none;
      color: #111;
      font-weight: 700;
      padding: 8px;
      border-radius: 8px;
      cursor: pointer;
      text-align: center;
      transition: background 0.2s, color 0.2s;
      font-family: 'Ndot57Caps', Inconsolata,Helvetica,monospace,sans-serif;
    }
    #customSidebar button.active {
      background: var(--toggled, #660000);
      color: white;
    }
    #customSidebar button:hover {
      background: var(--hover, #ff6666);
    }
    #customModContent {
      flex: 1;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow-y: auto;
      box-sizing: border-box;
      font-family: 'Ndot57Caps', Inconsolata,Helvetica,monospace,sans-serif;
    }
    .modButtonGroup {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    #customModContent button {
      background: var(--primary, #ff4444aa);
      border: none;
      color: #222;
      font-weight: 700;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      text-align: left;
      font-family: 'Ndot57Caps', Inconsolata,Helvetica,monospace,sans-serif;
    }
    #customModContent button:hover {
      background: var(--hover, #ff6666);
    }
    #customModContent button.toggle-active {
      background: var(--toggled, #660000);
      color: white;
    }
    #customModMinimized {
      position: fixed;
      top: 12px;              
      right: 12px;
      padding: 6px 10px;      
      background: #111;       
      color: white;
      display: none;
      flex-direction: row;    
      justify-content: center;
      align-items: center;
      gap: 8px;               
      border-radius: 10px;
      z-index: 9999999999;
      box-shadow: 0 0 8px rgba(0,0,0,0.6);
      font-family: 'Ndot57Caps', Inconsolata,Helvetica,monospace,sans-serif;
    }
    #customModMinimized button {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      padding: 2px 6px;
      transition: color 0.2s ease;
      font-family: 'Ndot57Caps', Inconsolata,Helvetica,monospace,sans-serif;
    }
    #customModMinimized button:hover {
      color: var(--hover, #ff6666);
    }
    #customSidebar, #customModContent {
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #111;
}

#customSidebar::-webkit-scrollbar,
#customModContent::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  background-color: #111;
}

    @keyframes minimizeAnim {
      0%   { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
      100% { opacity: 0; transform: translate(200%, -200%) scale(0.3); }
    }
    @keyframes maximizeAnim {
      0%   { opacity: 0; transform: translate(200%, -200%) scale(0.3); }
      100% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
    }
    @keyframes fadeInScale {
      0% { opacity: 0; transform: translate(-50%, -50%) scale(1.4); }
      100% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
    }
    @keyframes fadeOutScale {
      0% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
      100% { opacity: 0; transform: translate(-50%, -50%) scale(1.4); }
    }
  `;


  document.head.appendChild(style);

  const container = document.createElement("div");
  container.id = "customModContainer";

  const header = document.createElement("div");
  header.id = "customModHeader";
  header.innerHTML = `
    <span>karma.lol</span>
    <div id="customHeaderButtons">
      <button id="customDragBtn">✥</button>
      <button id="customMinimizeBtn">−</button>
      <button id="customCloseBtn">×</button>
    </div>`;
    

  const mainWrapper = document.createElement("div");
  mainWrapper.id = "customMain";

  const sidebar = document.createElement("div");
  sidebar.id = "customSidebar";

  const content = document.createElement("div");
  content.id = "customModContent";

  mainWrapper.appendChild(sidebar);
  mainWrapper.appendChild(content);

  container.appendChild(header);
  container.appendChild(mainWrapper);
  document.body.appendChild(container);

  const minimizedBox = document.createElement("div");
  minimizedBox.id = "customModMinimized";
  minimizedBox.innerHTML = `
    <button id="customRestoreBtn">+</button>
    <button id="customMiniCloseBtn">×</button>
  `;
  document.body.appendChild(minimizedBox);
  window.__customModMenu = container;
window.__customMinimizedBox = minimizedBox;
window.__customModStyle = style;

  function createCategory(name, label) {
    if (!categories[name]) {
      categories[name] = { label: label || name, buttons: [] };
    }
    return categories[name];
  }

  function createButton(text, categoryName, method, options = {}) {
  const btn = document.createElement("button");
  btn.textContent = text;

  if (!categories[categoryName]) createCategory(categoryName);

  const ctx = { enabled: false, data: null };

  if (options.togglable && options.defaultState === true) {
    ctx.enabled = true;
    btn.classList.add("toggle-active");

    if (typeof method === "function" && method.length > 0) {
      try {
        method.call(ctx, true);
      } catch (e) {}
    }
  }

  btn.addEventListener("click", () => {
    try {
      if (options.togglable) {
        if (typeof method === "function" && method.length > 0) {
          ctx.enabled = !ctx.enabled;
          btn.classList.toggle("toggle-active", ctx.enabled);
          method.call(ctx, ctx.enabled);
          btn.classList.toggle("toggle-active", !!ctx.enabled);
        } else {
          method.call(ctx);
          btn.classList.toggle("toggle-active", !!ctx.enabled);
        }
      } else {
        method.call(ctx);
      }
    } catch (e) {}
  });

  categories[categoryName].buttons.push(btn);
}



  const button = {
  add: (text) => {
    const obj = { text, options: {} };

    obj.category = function (name) {
      obj._category = name;
      return obj;
    };

    obj.togglable = function () {
      obj.options.togglable = true;
      return obj;
    };

    obj.enabled = function (state = false) {
      obj.options.defaultState = state;
      return obj;
    };

    Object.defineProperty(obj, "method", {
      set(fn) {
        createButton(obj.text, obj._category, fn, obj.options);
      },
    });

    return obj;
  },
};
  const category = {
    add: (label) => {
      const obj = { label };
      Object.defineProperty(obj, "category", {
        set(name) {
          createCategory(name, label);
        },
      });
      return obj;
    },
  };
const searchbar = {
  addtocategory: function (categoryName = "search") {
    const searchContainer = document.createElement("div");
    searchContainer.style.padding = "8px";
    searchContainer.style.display = "flex";
    searchContainer.style.flexDirection = "column";
    searchContainer.style.gap = "6px";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search...";
    searchInput.style.padding = "6px";
    searchInput.style.borderRadius = "6px";
    searchInput.style.border = "1px solid #444";
    searchInput.style.background = "#222";
    searchInput.style.color = "white";
    searchInput.style.outline = "none";

    const searchResults = document.createElement("div");
    searchResults.style.display = "flex";
    searchResults.style.flexDirection = "column";
    searchResults.style.gap = "6px";
    searchResults.style.maxHeight = "200px";
searchResults.style.overflowY = "scroll";
searchResults.style.scrollbarWidth = "none";
searchResults.style.msOverflowStyle = "none";

searchResults.style.cssText += `
  ::-webkit-scrollbar {
    display: none;
  }
`;


    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchResults);

    if (!categories[categoryName]) {
      categories[categoryName] = { label: categoryName, buttons: [] };
    }
    categories[categoryName].buttons.push(searchContainer);

    function getAllButtons() {
      return Object.keys(categories).flatMap(cat =>
        categories[cat].buttons.filter(btn => btn.tagName === "BUTTON")
      );
    }

    function renderSearchResults(query) {
  const allBtns = getAllButtons();

  let filteredBtns = [];

  if (!query)
  {
    return;}
    else {
    filteredBtns = allBtns.filter(btn =>
      btn.textContent.toLowerCase().includes(query.toLowerCase())
    );
  }

  searchResults.innerHTML = "";
  filteredBtns.forEach(btn => searchResults.appendChild(btn));
}

    searchInput.addEventListener("input", e => {
      renderSearchResults(e.target.value.trim());
    });
  }
};

let _menuHidden = false;
let _menuWasMinimized = false;

function toggleMenu(toggle) {
    const menu = document.getElementById("customModContainer");
    const minimized = document.getElementById("customModMinimized");
    const notifications = document.getElementById("notification-container");

    if (!menu) return;

    const shouldHide = toggle ?? !_menuHidden;

    if (shouldHide) {
        menu.style.display = "none";
        if (minimized) minimized.style.display = "none";
        if (notifications) {
            notifications.style.opacity = "0";
            notifications.style.pointerEvents = "none";
        }

        _menuHidden = true;

    } else {
        if (_menuWasMinimized) {
            if (minimized) minimized.style.display = "flex";
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
            if (minimized) minimized.style.display = "none";
        }
        if (notifications) {
            notifications.style.opacity = "1";
            notifications.style.pointerEvents = "auto";
        }

        _menuHidden = false;
    }
}

let freezeInterval = null;
let _freezeDisable;

function toggleFreeze(toggle) {
    if (!toggle) {
        _freezeDisable();
        return;
    }

    if (freezeInterval) return;

    const encodedChars = [
        '\\u2f9f', '\\u4fff', '\\u4f52',
        '\\u0E47', '\\u0E47', '\\u0E47',
        '\\u0E47', '\\u0E47', '\\u0E47',
        '\\u0E47', '\\u4FF1', '\\u4FF2'
    ];
    const chars = encodedChars.map(char => eval(`"${char}"`));

    function makeLongText() {
        return new Array(3e6)
            .fill()
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("");
    }

    let { props: t } = Object.values(function e(t = document.querySelector("body>div")) {
        return Object.values(t)[1]?.children?.[0]?._owner.stateNode
            ? t
            : e(t.querySelector(":scope>div"));
    }())[1].children[0]._owner.stateNode;

    freezeInterval = setInterval(() => {
        const repeatedText = makeLongText();

        t.client.blook = repeatedText;

        t.liveGameController.setVal({
            path: `c/${t.client.name}/b`,
            val: repeatedText
        });
    }, 0);

    _freezeDisable = () => {
        if (freezeInterval) {
            clearInterval(freezeInterval);
            freezeInterval = null;
        }
        _freezeDisable = () => {};
    };
}

let _greenScreenDisable;
let _greenScreenInterval = null;

function crashHostpermanent(toggle) {
    var a = Object.values(function e(t = document.querySelector("#app")) {
        return Object.values(t)[1]?.children?.[0]?._owner.stateNode
            ? t
            : e(t.querySelector(":scope>div"));
    }())[1].children[0]._owner.stateNode;

    if (!toggle) {
        _greenScreenDisable();
        return;
    }

    if (_greenScreenInterval) return;

    let payload = () => {
        a.props.liveGameController.setVal({
            path: `c/${a.props.client.name}/cr/t`,
            val: "t"
        });
    };

    _greenScreenInterval = setInterval(payload, 25);

    _greenScreenDisable = () => {
        if (_greenScreenInterval) {
            clearInterval(_greenScreenInterval);
            _greenScreenInterval = null;
        }

        a.props.liveGameController.setVal({
            path: `c/${a.props.client.name}/cr/t`,
            val: ""
        });

        _greenScreenDisable = () => {};
    };
}

function markMenuMinimized() {
    _menuWasMinimized = true;
}

function markMenuRestored() {
    _menuWasMinimized = false;
}

document.addEventListener("keydown", (e) => {
    if (e.key === "AltGraph") {
        toggleMenu();
    }
});


  category.add("Global").category = "global";
  category.add("Fishing").category = "fishingfrenzy";
  category.add("Gold").category = "goldquest";
  category.add("Crypto").category = "cryptohack";
  category.add("Search").category = "search";
  category.add("Settings").category = "settings";

  button.add("Anti Ban").category("global").togglable().enabled(true).method = (stateasdasdasd) => AntiBanToggle(stateasdasdasd);
  button.add("Auto Answer").category("global").togglable().method = (state123123d1e1d) => AutoAnswerCheat(state123123d1e1d);
  button.add("Claim Daily Rewards").category("global").method = () => claimDailyRewardsAndSpoofFactoryStats();
  button.add("Highlight Answers").category("global").togglable().method = (state1f34878rfy) => HighlightAnswersCheat(state1f34878rfy);
  button.add("Remove Random Name").category("global").method = () => removeRandomNameMod();
  button.add("Subtle Highlight Answers").category("global").togglable().method = (toggledfgdfgsgs3ds34) => subtleHighlightAnswers(toggledfgdfgsgs3ds34);
  button.add("Unlock All Blooks").category("global").method = () => unlockAllBlooks();

  button.add("Frenzy").category("fishingfrenzy").method = () => triggerFishingFrenzy();
  button.add("Distraction").category("fishingfrenzy").method = () => sendFishingDistraction();
  button.add("Remove Distractions").category("fishingfrenzy").togglable().method = (state2) => removeFishingDistraction(state2);
  button.add("Set Fishing Lure").category("fishingfrenzy").method = () => setLureLevelWithPrompt();

  button.add("Auto Hack Players").category("cryptohack").togglable().method = (state4asdasdasd21) => CryptoCheat(state4asdasdasd21);
  button.add("Crypto ESP").category("cryptohack").togglable().method = (state67) => revealCryptoChoiceESP(state67);
  button.add("Get Players Password").category("cryptohack").method = (state123123) => revealPassword(state123123);
  button.add("Password ESP").category("cryptohack").togglable().method = (state41231231) => runPasswordESP(state41231231);
  button.add("Remove Hack").category("cryptohack").togglable().method = (state890331) => RemoveHack(state890331);
  button.add("Steal Crypto From Player").category("cryptohack").method = () => stealCryptoFromPlayer();
  button.add("Set Crypto Password").category("cryptohack").method = () => setCryptoPasswordWithPrompt();

  button.add("Auto Choose").category("goldquest").togglable().method = (state69) => AutoChooseGold(state69);
  button.add("Chest ESP").category("goldquest").togglable().method = (state3) => revealChestAnswers(state3);
  button.add("Flood Leaderboard").category("goldquest").method = () => sendAdText();
  button.add("Reset Players Gold").category("goldquest").method = () => resetPlayerGold();
  button.add("Swap Gold").category("goldquest").method = () => swapGoldWithPlayer();

  let savedTheme = loadTheme();
  let currentColorIndex = colors.findIndex(c => c.primary === savedTheme.primary);
  if (currentColorIndex === -1) currentColorIndex = 0;

  const colorButton = document.createElement("button");
colorButton.textContent = "Theme: " + savedTheme.name;
colorButton.onclick = () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const selected = colors[currentColorIndex];
    saveTheme(selected);
    applyTheme(selected);
    colorButton.textContent = "Theme: " + selected.name;
};
categories["settings"].buttons.push(colorButton);
  applyTheme(savedTheme);

  searchbar.addtocategory("search");

  function renderSidebar() {
    sidebar.innerHTML = "";
    Object.keys(categories).forEach((key, idx) => {
      const catBtn = document.createElement("button");
      catBtn.textContent = categories[key].label;
      if (idx === 0) catBtn.classList.add("active");
      catBtn.onclick = () => {
        [...sidebar.querySelectorAll("button")].forEach(b => b.classList.remove("active"));
        catBtn.classList.add("active");
        renderContent(key);
      };
      sidebar.appendChild(catBtn);
    });
    const firstKey = Object.keys(categories)[0];
    if (firstKey) renderContent(firstKey);
  }

  function renderContent(categoryKey) {
    content.innerHTML = "";
    const cat = categories[categoryKey];
    if (!cat) return;
    const btnGroup = document.createElement("div");
    btnGroup.className = "modButtonGroup";
    cat.buttons.forEach((btn) => btnGroup.appendChild(btn));
    content.appendChild(btnGroup);
  }

  renderSidebar();

  function waitForAnimationEndOnce(el, fallback = 600) {
    return new Promise((resolve) => {
      let resolved = false;
      function done() {
        if (resolved) return;
        resolved = true;
        resolve();
      }
      el.addEventListener("animationend", () => done(), { once: true });
      setTimeout(() => done(), fallback + 50);
    });
  }

  const minimizeBtn = document.getElementById("customMinimizeBtn");
  const closeBtn = document.getElementById("customCloseBtn");
  const restoreBtn = minimizedBox.querySelector("#customRestoreBtn");
  const miniCloseBtn = minimizedBox.querySelector("#customMiniCloseBtn");
  const dragBtn = document.getElementById("customDragBtn");

  async function fullCleanup() {
  if (window.__customModMenuCleanupRan) return;
  window.__customModMenuCleanupRan = true;

  try {
    document.querySelectorAll("#customModContent button.toggle-active")
      .forEach(btn => btn.classList.remove("toggle-active"));
  } catch (e) {}

  try { document.querySelectorAll(".crypto-esp-label, .chest-answer-label").forEach(el => el.remove()); } catch(e){}

  try { if (typeof state !== "undefined" && state.interval) { clearInterval(state.interval); state.interval = null; } } catch {}
  try { if (typeof highlightInterval !== "undefined" && highlightInterval) { clearInterval(highlightInterval); highlightInterval = null; } } catch {}
  try { if (typeof chestAnswersInterval !== "undefined" && chestAnswersInterval) { clearInterval(chestAnswersInterval); chestAnswersInterval = null; } } catch {}
  try { if (typeof cryptoESPInterval !== "undefined" && cryptoESPInterval) { clearInterval(cryptoESPInterval); cryptoESPInterval = null; } } catch {}
  try { if (typeof fishingDistractionInterval !== "undefined" && fishingDistractionInterval) { clearInterval(fishingDistractionInterval); fishingDistractionInterval = null; } } catch {}
  try { if (typeof everyAnswerCorrectInterval !== "undefined" && everyAnswerCorrectInterval) { clearInterval(everyAnswerCorrectInterval); everyAnswerCorrectInterval = null; } } catch {}
  try { if (typeof _autoAnswerRAF !== "undefined" && _autoAnswerRAF) { cancelAnimationFrame(_autoAnswerRAF); _autoAnswerRAF = null; } } catch {}
  try { if (typeof _allCorrectRAF !== "undefined" && _allCorrectRAF) { cancelAnimationFrame(_allCorrectRAF); _allCorrectRAF = null; } } catch {}

  try { typeof restoreAllOriginals === "function" && restoreAllOriginals(); } catch (e) {}
  try { typeof restoreAll === "function" && restoreAll(); } catch (e) {}
  try { typeof restoreHighlights === "function" && restoreHighlights(); } catch (e) {}

  try { window.__tripleGoldPrize && typeof window.__tripleGoldPrize.disable === "function" && window.__tripleGoldPrize.disable(); } catch (e) {}

  try {
    if (window.fetch && Object.prototype.hasOwnProperty.call(window.fetch, "call")) {
      try { delete window.fetch.call; } catch (_) { try { window.fetch.call = Function.prototype.call; } catch(_) {} }
    }
  } catch (e) {}


  try { localStorage.removeItem("customMenuTheme"); } catch (e) {}

  try { document.removeEventListener("keydown", shiftToggleHandler); } catch (e) {}

  try { container && container.remove(); } catch (e) {}
  try { minimizedBox && minimizedBox.remove(); } catch (e) {}
  try { style && style.remove(); } catch (e) {}

  try { delete window.__customModMenu; } catch (e) {}
  try { delete window.__customMinimizedBox; } catch (e) {}
  try { delete window.__customModStyle; } catch (e) {}
  try { delete window.__highlightESP; } catch (e) {}
  try { delete window.highlightAnswers; } catch (e) {}
  try { delete window.__blooketHelpers; } catch (e) {}
  try { delete window.__customModMenuCleanupRan; } catch (e) {}

  try { originalAnswers && originalAnswers.clear && originalAnswers.clear(); } catch (e) {}
  try { (categories && typeof categories === "object") && Object.keys(categories).forEach(k => delete categories[k]); } catch (e) {}
  try {
  const notifContainer = document.getElementById("notification-container");
  if (notifContainer) notifContainer.remove();
  try {
  const promptContainer = document.getElementById("prompt-container");
  if (promptContainer) promptContainer.remove();
} catch (e) {}
try {
  clearInterval(passwordESPInterval);
  passwordESPInterval = null;
} catch(e) {}

try { _cryptoCheatDisable?.(); } catch(e) {}
try { _highlightAnswersDisable?.(); } catch(e) {}
try { _removeHackDisable(); } catch(e) {}
try { _crashPasswordDisable(); } catch(e) {}
try { subtleToggleDisable(); } catch(e) {}

} catch (e) {}
}

  minimizeBtn.onclick = async () => {
    if (container.classList.contains("minimizing")) return;

    container.classList.remove("closing", "maximizing");
    container.classList.add("minimizing");
    container.style.pointerEvents = "none";

    await waitForAnimationEndOnce(container, 400);
    container.classList.remove("minimizing");
    container.style.display = "none";
    container.style.pointerEvents = "";
    minimizedBox.style.display = "flex";
    markMenuMinimized();
  };

  restoreBtn.onclick = async () => {
    if (container.style.display !== "none") return;
    minimizedBox.style.display = "none";
    container.style.display = "flex";
    container.classList.remove("closing", "minimizing");
    void container.offsetWidth;
    container.classList.add("maximizing");
    container.style.pointerEvents = "none";
    await waitForAnimationEndOnce(container, 450);
    container.classList.remove("maximizing");
    container.style.pointerEvents = "";
    markMenuRestored();
  };

  function dragElement(dragHandle, container) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    dragHandle.onpointerdown = function (e) {
        e.preventDefault();
        dragHandle.style.cursor = "grabbing";

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointermove = function (e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            container.style.top = (container.offsetTop - pos2) + "px";
            container.style.left = (container.offsetLeft - pos1) + "px";
        };

        document.onpointerup = function () {
            dragHandle.style.cursor = "grab";
            document.onpointermove = null;
            document.onpointerup = null;
        };
    };
}


if (currentColorIndex === -1) currentColorIndex = 0;
applyTheme(savedTheme);
colorButton.textContent = "Theme: " + savedTheme.name;

    dragElement(dragBtn, container);

closeBtn.onclick = async () => {
  document.querySelectorAll("#customModContent button.toggle-active")
    .forEach(btn => btn.classList.remove("toggle-active"));

  if (container.style.display === "none") return;

  container.classList.remove("minimizing", "maximizing");
  void container.offsetWidth;
  container.classList.add("closing");
  container.style.pointerEvents = "none";

  await waitForAnimationEndOnce(container, 400);

  fullCleanup();
};

miniCloseBtn.onclick = () => {
  document.querySelectorAll("#customModContent button.toggle-active")
    .forEach(btn => btn.classList.remove("toggle-active"));

  fullCleanup();
}
})();
