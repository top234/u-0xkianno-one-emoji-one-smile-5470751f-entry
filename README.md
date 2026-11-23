# One Emoji, One Smile — 🤗

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/top234/u-0xkianno-one-emoji-one-smile-5470751f-entry/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/top234/u-0xkianno-one-emoji-one-smile-5470751f-entry/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) competition on make.fun.

## The entry

Exactly one emoji: 🤗 (U+1F917 HUGGING FACE) — and nothing else, no trailing newline.

A smiling face with open arms: warm at first glance, universal, clearly chosen rather than the default smiley, and right for a stranger — no intimacy, sarcasm, or flirtation. A warmth judge compares entries two at a time and picks the one more likely to make a stranger smile.

## How it works

`main.ts` (Node 22) writes the single emoji to `$OUTPUT_DIR/entry.txt` (`OUTPUT_DIR` defaults to `/output`), creating the output directory if needed, then validates that the output is exactly one emoji (4 bytes, no newline).

## Run it

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt   # 🤗
```
