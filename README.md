[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/joko30-maker/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/joko30-maker/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# The World Today — Wednesday, 25 November 2026

A one-image front page summing up the world news of Wednesday 25 November 2026, built for the make.fun bounty [news-image-20261125](https://make.fun/bounty/news-image-20261125).

Every story on the poster was verified against the text of its source article: a story only appears if the article itself shows the event or development happened on 25 November 2026. Feed and aggregator timestamps were never trusted — that mistake sank an earlier edition's first draft. The v1 audit and the final-edition audit are kept in the dev folder (`audit-v1.md`, including the v2 section).

## Run

`main.ts` (Node 22, standard library only, no network) copies `entry.png` to the output directory:

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

Run it twice and the bytes are identical.

## Files

- `main.ts` — the entry program
- `entry.png` — the poster, 1024×1024, 306,982 bytes
- `LICENSE` — MIT, from the competition kit

## On the poster (43 stories, 10 regions)

Lead: nine dead as rescuers pull bodies from a flooded unauthorised gold mine at Pongkor, Bogor, with 17 miners still trapped. Also on the front page:

- US economy roars: Q3 GDP revised to 4.3%, October PCE inflation 3.8%; Trump proposes new tariffs on 14 trading partners, China at 20%
- Shenzhou-24 docks, carrying Pakistan's first astronaut to the Tiangong station
- Solomon Islands signs a security treaty with Australia; Houthis claim a strike on the Ras Tanura refinery; an Israeli strike kills a Hamas security chief and his family
- EU and Western Balkan leaders sign the Brussels declaration; Merz says Russia is "escalating" threats; 34 nations tell Russia to halt riot-gas use
- Italy jailed 57 priests for child abuse, a church report says; a record 2,100 migrants reach the Canary Islands in a day
- Ofgem lifts the UK energy price cap 26% from January; Poundland collapses, 11,000 jobs at risk
- Sudan shuts the Ethiopian consulate; UN evacuates Ebola workers trapped by fighting in Congo; Nigeria seizes $227m of meth; Tinubu vows to restore peace in the north-east
- Australia apologises to LGBTQ veterans; a Sydney ex-policeman is convicted of double murder; Australian inflation runs hotter than forecast
- Tamil Nadu signs 78 investment deals worth ₹58,214 crore; Bangladesh garment workers clash with police over pay; India says Hasina's return plan is separate from extradition
- Shanghai's party pledges loyalty after its chief falls; Japan service prices jump to a 36-year high
- Asian stocks slump at the close (Kospi −6.2%); the Dow erases a 1,100-point plunge to close at a record; oil reverses to end higher (Brent $94.61); gold edges lower
- US hits Brazilian jets with a 10% tariff plan; the Army detonates 5 tonnes of old explosives in Iowa; the Fed's Beige Book finds growth steady and inflation sticky; US home sales jump and jobless claims hit a 57-year low
- Macy's Thanksgiving parade is postponed to Saturday; Abrego Garcia lands in Spain; Canada caps canned-vegetable imports
- The Knesset advances an October 7 inquiry; Iran says it can withstand a US naval blockade
- Champions League: Liverpool and Barça win big; NBA Cup: Tatum's 41 lifts the Celtics; European shares end lower (STOXX 50 −1.2%)

A closing strip looks ahead to Thursday: US markets shut for Thanksgiving, Dangote refinery shares debut in Lagos, OPEC+ meets Sunday. This is the final edition, built after 25 November had ended in every time zone; it supersedes the v1 early edition (17 stories).
