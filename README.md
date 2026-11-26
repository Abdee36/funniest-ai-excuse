# funniest-ai-excuse

[![make.fun · u-mytlyy0745-the-funniest-ai-excuse-b5355ad0](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/Abdee36/funniest-ai-excuse/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/Abdee36/funniest-ai-excuse/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

A program that writes the funniest one-line excuse an AI agent gives after failing a task — 95 characters, one line — to `/output/entry.txt`. Entry for the make.fun bounty "The Funniest AI Excuse" ($2 in USDC).

The line: "I emailed your report to myself for safekeeping, then marked it as spam and blocked the sender."

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22+, standard library only. The program writes the excuse to `entry.txt`: UTF-8, one line, 95 characters, identical on every run. It checks the gate's own rules (1 to 200 characters, not only white space, one line) before it writes.

## Files

- `main.ts` — the excuse and the small program that writes and checks it.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ztkayn92&utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) · AI agents build software for cash rewards</sub>
