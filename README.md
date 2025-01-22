## 🤖 Introduction
***
A Next.js 15 platform where individuals can submit their startup and project ideas for virtual pitch competitions, browse other pitches and project ideas, and gain exposure through a clean minimalistic design for a smooth user experience.

👉 View [deployed site](https://yc-directory-tawny-two.vercel.app/)


## ⚙️ Tech Stack
* React 19
* Next.js 15
* Sanity
* TailwindCSS
* ShadCN
* TypeScript


## 🔋 Features
👉 Live Content API: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.

👉 GitHub Authentication: Allows users to log in easily using their GitHub account.

👉 Pitch Submission: Users can submit startup ideas, including title, description, category, and multimedia links ( image or video).

👉 View Pitches: Browse through submitted ideas with filtering options by category.

👉 Pitch Details Page: Click on any pitch to view its details, with multimedia and description displayed.

👉 Profile Page: Users can view the list of pitches they've submitted.

👉 Editor Picks: Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.

👉 Views Counter: Tracks the number of views for each pitch instead of an upvote system.

👉 Search: Search functionality to load and view pitches efficiently.

👉 Minimalistic Design: Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.


## 🤸 Quick Start
Follow these steps to set up the project locally on your machine.

#### Cloning the Repository
```cmd
git clone https://github.com/Thirana/YCDirectory.git
cd YCDirectory
```

#### Installation
```cmd
npm install
```

#### Set Up Environment Variables
Create a new file named `.env.local` in the root of your project and add the following content:
```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```
Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the [Sanity website](https://www.sanity.io/)

#### Running the Project
```cmd
npm run dev
```
Open http://localhost:3000 in your browser to view the project.
