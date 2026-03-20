# Marcus Vaine — Personal Website

A static website for a jazz musician, built with [Hugo](https://gohugo.io/) and hosted on [GitHub Pages](https://pages.github.com/). Bilingual (EN/ES), fully responsive, zero cost.

## Quick Start

### 1. Install Hugo

```bash
# macOS
brew install hugo

# Windows
choco install hugo-extended

# Linux
sudo apt install hugo
```

Verify: `hugo version` (needs v0.123+)

### 2. Clone and Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
hugo server -D
```

Open `http://localhost:1313` to preview.

### 3. Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. The included `.github/workflows/hugo.yml` will auto-build and deploy on every push to `main`
4. Set your custom domain in **Settings → Pages → Custom domain**

### 4. Custom Domain DNS

Add these DNS records at your domain registrar:

| Type  | Name | Value                  |
|-------|------|------------------------|
| CNAME | www  | YOUR_USERNAME.github.io |
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |

Then update `baseURL` in `hugo.toml` to your domain.

---

## Content Management

### Add a News Post

Create a file in `content/news/`:

```
content/news/2026-04-20-my-update.md
```

```yaml
---
title: "My News Title"
title_es: "Mi Título en Español"
date: 2026-04-20
summary: "Short description in English."
summary_es: "Descripción corta en español."
featured: false
---
```

Set `featured: true` and add `image: "/images/my-photo.jpg"` to make it the hero news item.

### Add a Show

Create a file in `content/shows/`:

```
content/shows/2026-07-15-venue-name.md
```

```yaml
---
title: "Venue Name"
date: 2026-07-15
venue: "Venue Name"
city: "City, Country"
maps_url: "https://maps.google.com/?q=Venue+Name+City"
ticket_url: "https://tickets.example.com"
---
```

- Omit `ticket_url` to show "TBA"
- Add `free: true` for free entry shows
- Past shows (date < today) automatically move to the "Past Shows" section

### Add an Album (As Leader)

Create a file in `content/discography/`:

```yaml
---
title: "Album Name"
role: "leader"
year: 2026
format: "Quartet"
label: "Label Name"
cover: "/images/covers/album-name.jpg"
personnel: "Marcus Vaine (guitar), Name (piano), Name (bass), Name (drums)"
summary: "English description."
summary_es: "Descripción en español."
bandcamp_url: "https://marcusvaine.bandcamp.com/album/xxx"
spotify_url: "https://open.spotify.com/album/xxx"
apple_url: "https://music.apple.com/album/xxx"
bandcamp_embed: '<iframe style="border:0;width:350px;height:350px;" src="https://bandcamp.com/EmbeddedPlayer/album=XXXX/size=large/bgcol=1a1a1a/linkcol=c4a87a/" seamless></iframe>'
---
```

### Add a Sideman Credit

```yaml
---
title: "Album Name"
role: "sideman"
year: 2024
artist: "Leader's Name"
label: "Label Name"
cover: "/images/covers/sideman-album.jpg"
spotify_url: "https://open.spotify.com/album/xxx"
link: "https://open.spotify.com/album/xxx"
---
```

**Cover image priority:**
1. `cover:` field (local image — preferred)
2. `spotify_url:` (auto-fetches cover via Spotify oEmbed API)
3. Placeholder shown if neither is set

### Update Gallery Photos

Edit `content/gallery.md` front matter:

```yaml
photos:
  - src: "/images/gallery/my-photo.jpg"
    alt: "Description"
    caption: "Venue, City — Year"
```

Put image files in `static/images/gallery/`.

### Update Gallery Videos

```yaml
videos:
  - title: "Video Title"
    date: "Month Year"
    youtube_id: "dQw4w9WgXcQ"
```

### Edit Press Kit

Edit `content/press.md` directly — it contains the full press kit HTML.

---

## Project Structure

```
hugo-site/
├── .github/workflows/hugo.yml  ← Auto-deploy pipeline
├── hugo.toml                   ← Site config (name, URLs, social links)
├── content/
│   ├── _index.md               ← Homepage
│   ├── news/                   ← News posts (Markdown files)
│   ├── shows/                  ← Show dates (Markdown files)
│   ├── discography/            ← Albums (Markdown files)
│   ├── listen.md               ← Listen page
│   ├── gallery.md              ← Gallery (photos/videos in front matter)
│   ├── contact.md              ← Contact page
│   └── press.md                ← Hidden press kit (/press)
├── layouts/
│   ├── _default/
│   │   ├── baseof.html         ← Base template (nav, footer, head)
│   │   └── single.html         ← Default page template
│   ├── partials/
│   │   ├── nav.html            ← Navigation
│   │   └── footer.html         ← Footer
│   ├── page/
│   │   ├── shows.html          ← Shows template
│   │   ├── listen.html         ← Listen template
│   │   ├── discography.html    ← Discography template
│   │   ├── gallery.html        ← Gallery template
│   │   ├── contact.html        ← Contact template
│   │   └── press.html          ← Press kit template (standalone)
│   └── index.html              ← Homepage template
├── static/
│   ├── css/style.css           ← All styles
│   ├── js/main.js              ← Language toggle, nav, animations
│   └── images/                 ← All images
│       ├── hero.jpg
│       ├── covers/             ← Album artwork
│       ├── gallery/            ← Gallery photos
│       └── press/              ← Press kit hi-res photos
└── archetypes/                 ← Templates for new content
    ├── news.md
    ├── shows.md
    └── discography.md
```

## Configuration

Edit `hugo.toml` to set:

- `baseURL` — your domain
- `title` — musician's name
- `[params]` — description, taglines, email addresses
- `[params.social]` — social media URLs
- `formspree_id` — your Formspree form ID (get one free at formspree.io)

## Language System

The site auto-detects the visitor's browser language:
- Spanish (`es-*` locales) → defaults to Spanish
- Everything else → defaults to English
- Manual toggle persists via localStorage

## Tech Stack

| Component       | Tool              | License / Cost |
|-----------------|-------------------|----------------|
| Static site gen | Hugo              | Apache 2.0 / Free |
| Hosting         | GitHub Pages      | Free |
| HTTPS           | Let's Encrypt     | Free (automatic) |
| Fonts           | Google Fonts      | SIL OFL / Free |
| Contact form    | Formspree         | Free tier (50/mo) |
| CI/CD           | GitHub Actions    | Free |

All code is original — no templates, frameworks, or copyrighted assets.
