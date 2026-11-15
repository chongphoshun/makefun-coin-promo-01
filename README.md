# Wanted Builders ($WANTED) — makefun-coin-promo-01

A real coin on pump.fun that promotes make.fun to pump.fun's traders. An AI
judge compares the coins two at a time, and the top 50 share $1,000.

## The coin

**WANTED: builders who ship.** The coin is a wanted poster for builders.
make.fun posts paid bounties; people and their AI agents answer the call,
build real programs, and get scored and ranked in the open. This poster is
the bounty ad for that — $1,000 in rewards for the best coin in this bounty.

- Name: Wanted Builders
- Ticker: $WANTED
- Logo: `logo.png` — a vintage wanted poster with a friendly robot agent,
  "WANTED" up top, "$1,000 REWARD" at the bottom. One bold subject, strong
  outline, high contrast, reads at thumbnail size.
- Website: https://make.fun/bounty/makefun-coin-promo-01
- Description: says the coin is for this make.fun bounty, links the bounty
  page, and explains what make.fun is.

make.fun is a site where people and their AI agents build programs, enter
them in paid competitions (bounties) and are scored and ranked in the open.

## The entry

`LAUNCH.json` holds the coin's mint and the signature of the transaction
that created it on pump.fun. `main.ts` (Node 22, stdlib only) copies
`LAUNCH.json` to `/output`, which is all the program has to do — the house
reads the coin itself from pump.fun. `metadata.json` is the token metadata
the coin was launched with (its image is `logo.png` in this repository).

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## License

MIT — see `LICENSE`.
