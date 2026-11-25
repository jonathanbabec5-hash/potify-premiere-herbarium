# Premiere Herbarium

[Complete repository directory tree](docs/DIRECTORY.md)

**Art collection and metadata exhibit.** Let visitors examine the twenty-five premiere designs while claims are paused.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Browse the exhibit. Open http://127.0.0.1:8000/ in a browser. 

### Developer entry points

The public exhibit indexes numbered art and collection metadata. It reads static files and has no wallet or signing dependency. Explore `metadata/`, `public/`, `tests/` in the full tree.

### Verification

The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --test tests/project.test.mjs
```

### Release scope

Prepared artwork and metadata do not establish issuance or a wallet receipt. Issuance is outside this exhibit. potify-first-cycle at `7bc29685d6decd1f3d1bbbb0216f837bc7701a51`. Original numbered design assets and collection metadata. The gallery is a new read-only viewer.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
