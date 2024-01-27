# ESPRIT RAS ROBOTS 2.0 Website
## Installation
### Requirements
1. Install [Git](https://git-scm.com/downloads)
2. Install [Node.js](https://nodejs.org/en) LTS Version (20.\*)
3. Install [Visual Studio Code](https://code.visualstudio.com/download) / [WebStorm](https://www.jetbrains.com/webstorm/download/)

### Setup
1. Clone the repository
```bash
git clone https://github.com/GitHackerz/esprit-ras-robots-website.git
```
2. Install dependencies
```bash
npm install
```
3. Run the development server
```bash
npm run dev
```
4. Open [**http://localhost:3000**](http://localhost:3000) with your browser to see the result.

## Folder Structure
```bash
├── components : (Components used in pages)
├── app : (Pages of the website)
│   ├── page.js (main page file)
│   ├── layout.js (main layout file)
│   ├── globals.css (main style file)
│   ├── style.css (style file for the page.js)
│   ├── about 
│   ├── contact
│   ├── sponsors-partners (Every Folder is a route in the website)
├── public : (Static files)
├── data : (Data used in pages)
├── .gitignore : (Git ignore file)
├── README.md : (This file)
├── package.json : (NPM package file)
```

