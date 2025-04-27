## ⚙️ Tech Used
- React
- Vite
- TypeScript
- Sass

## 🛠️ Getting Started

Make sure you have the following installed:
```
Node.js >= 16
```
Install once the repository is cloned locally:
```
npm install
```
Run locally:
```
npm run dev
```
The app will be available at: [http://localhost:5173/](http://localhost:5173/)

## 📁 Folder Structure

```
src/
├── assets/                  # Project icons
│   ├── golf.svg
│   ├── growth.svg
│   ├── mountain.svg
│   ├── music-scene.svg
│   ├── notes.svg
│   ├── rocket.svg
│   └── sun.svg
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Project.tsx
│   ├── ProjectsList.tsx     # Project JSX
│   └── projectList.ts       # Project data JSON
├── partials/                # All components have their individual partials
│   ├── _footer.scss
│   ├── _global.scss         # Applies across all components
│   ├── _header.scss
│   ├── _project.scss
│   ├── _setup.scss         # For browser consistency
│   └── _variables.scss
├── App.tsx                 # Landing page
├── index.scss              # All Sass partial imports
└── main.tsx
```
