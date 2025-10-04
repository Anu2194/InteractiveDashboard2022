# Interactive Dashboard (2022)

A small demo dashboard built with Create React App. Includes a simple Holy Grail `Dashboard` layout and a `Profile` component used in the right sidebar.

Quick start
1. Install dependencies

```powershell
npm install
```

2. Run the dev server

```powershell
npm start
```

3. Run tests once

```powershell
npm test -- --watchAll=false
```

Project structure (important files)
- `src/components/Dashboard.js` — Holy Grail layout (header, nav, main, aside, footer)
- `src/components/Profile.js` — small profile card rendered inside the Dashboard aside
- `src/App.js` — mounts `Dashboard` and contains the demo toggle button
- `src/components/*.test.js` — unit tests for Dashboard and Profile (Jest + React Testing Library)

Notes
- Tests currently use the versions in `package.json` (@testing-library/*) and are runnable with the commands above.
- If you run into permission issues pushing branches, ensure your local Git is authenticated to GitHub as the correct user (or use SSH keys). I can help with exact steps.

Contributing
- Create a branch for your change, add tests for new behavior, and open a pull request.

License
- MIT
