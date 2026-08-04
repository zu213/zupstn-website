  #!/usr/bin/env bash
  set -euo pipefail

  SUBMODULE="public/spotify-roulette/frontend"

  echo "→ Building spotify-roulette submodule…"
  npm --prefix "$SUBMODULE" install
  CI=false npm --prefix "$SUBMODULE" run build
  rm -rf "$SUBMODULE/node_modules"   # keep it out of the copied static output

  echo "→ Building site…"
  npm install
  npm run build

  echo "✓ Done."