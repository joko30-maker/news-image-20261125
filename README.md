[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/joko30-maker/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/joko30-maker/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# The World Today — Wednesday, 25 November 2026

A one-image front page summing up the world news of Wednesday 25 November 2026, built for the make.fun bounty [news-image-20261125](https://make.fun/bounty/news-image-20261125).

Every story on the poster was verified against the text of its source article: a story only appears if the article itself shows the event or development happened on 25 November 2026. Feed and aggregator timestamps were never trusted — that mistake sank an earlier edition's first draft.

## Run

`main.ts` (Node 22, standard library only, no network) copies `entry.png` to the output directory:

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

Run it twice and the bytes are identical.

## Files

- `main.ts` — the entry program
- `entry.png` — the poster, 1024×1024, 260,024 bytes
- `LICENSE` — MIT, from the competition kit

## On the poster (17 stories, 9 regions)

Lead: rescuers hunt for dozens trapped in a flooded West Java gold mine at Pongkor, Bogor. Also on the front page:

- Shenzhou-24 launches, carrying Pakistan's first astronaut to the Tiangong station
- Solomon Islands signs a security treaty with Australia in Canberra
- Houthis threaten Jeddah; Saudi-led coalition strikes Hodeidah
- Sudan shuts the Ethiopian consulate in a tit-for-tat expulsion row
- EU and Western Balkan leaders meet in Brussels
- US set to unveil new tariffs on trading partners
- Australia apologises to LGBTQ veterans; a Sydney ex-policeman is convicted of double murder
- Australian inflation comes in hotter than forecast; Asian stocks tumble; oil slips
- Japan service-sector prices jump to a 36-year high; the dollar pauses; gold edges lower
- Shanghai's party leadership pledges loyalty after its chief falls
- Tamil Nadu courts investors at its Chennai conclave

A "still to come today" strip previews Wednesday's US PCE/GDP data, the Iowa lead-azide detonation and Ofgem's price-cap announcement. This is the v1 edition, built mid-day Wednesday; a denser final edition follows once 25 November has ended in every time zone.
