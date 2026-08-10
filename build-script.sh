  #!/usr/bin/env bash
  set -euo pipefail

  SUBMODULE="public/spotify-roulette/frontend"
  SHORTSTOREY="public/shortstorey-full/frontend"

  echo "→ Building spotify-roulette submodule…"
  npm --prefix "$SUBMODULE" install
  CI=false npm --prefix "$SUBMODULE" run build
  rm -rf "$SUBMODULE/node_modules"   # keep it out of the copied static output

  echo "→ Building shortstorey submodule…"
  npm --prefix "$SHORTSTOREY" install
  CI=false npm --prefix "$SHORTSTOREY" run build
  rm -rf "$SHORTSTOREY/node_modules"   # keep it out of the copied static output

  echo "→ Building site…"
  npm install
  npm run build

  echo "✓ Done."