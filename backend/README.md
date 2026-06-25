```txt
npm install
npm run dev
```

```txt
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiating `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

## Google Form attendees

Ticket QR lookup checks VMS first, then falls back to a Google Sheets tab (form responses).

1. Share the sheet with your Google service account email.
2. Set `ETC_GOOGLE_SHEET_ID` in `wrangler.jsonc` / GitHub environment vars.
3. Put credentials in `.dev.vars` locally (`GOOGLE_API_KEY`) or as a Worker secret in production:

```txt
wrangler secret put GOOGLE_API_KEY
```

Optional vars:

- `ETC_GOOGLE_SHEET_RANGE` — default `Form Responses 1!A:K`
- `ETC_GOOGLE_SHEET_COLUMN_MAP` — JSON header → field map override

QR payload for sheet-only attendees uses `membership_number:email:event_id` where `membership_number` comes from the sheet column, or `GF{phone}` / `GF{row}` when absent.
