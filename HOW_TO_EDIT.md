# 📝 How to Edit Your Portfolio Website

**A simple guide for editing every part of your portfolio — no coding experience needed!**

---

## 🔧 Before You Start

1. Open **Visual Studio Code** (VS Code)
2. Go to **File → Open Folder** → select your `Portfolio` folder
3. Open the **Terminal** inside VS Code (click **Terminal → New Terminal** from the top menu)
4. Type this command and press Enter:
   ```
   npm run dev
   ```
5. This will open your portfolio in the browser. **Any changes you save will instantly show up in the browser!**

---

## 📁 Where Are The Files?

All the sections of your portfolio live inside this folder:

```
Portfolio/
└── src/
    └── components/       ← All your sections are here
        ├── HeroSection.jsx       (Your name, intro, and Resume button)
        ├── WorkExperience.jsx    (Jobs / internships)
        ├── Skills.jsx            (Your skills cards)
        ├── Certificates.jsx      (Your certificates)
        ├── CodingProfiles.jsx    (CodeChef, LeetCode links)
        ├── Projects.jsx          (Your projects list)
        ├── ContactMe.jsx         (LinkedIn, Email, GitHub links)
        └── Navbar.jsx            (Top navigation bar)
```

---

## 1️⃣ Hero Section (Your Name & Introduction)

**File to open:** `src/components/HeroSection.jsx`

### Change your name
Find this line (around line 20):
```
.typeString("Hi, I'm Sai Charan.")
```
Replace `Sai Charan` with whatever you want.

### Change your introduction text
Find these lines (around lines 36-40):
```
I'm a computer science student at KL University.
```
```
Interested in AI, ML, Computer Vision, and building real-world projects while improving DSA.
```
Edit the text between the `<p>` and `</p>` tags. Just change the words — don't delete the tags.

### Change the Resume link
Find this line (around line 46):
```
href="https://drive.google.com/file/d/..."
```
Replace the URL inside the quotes with your new resume link.

**💡 Tip:** Upload your resume to Google Drive → Right click → Share → Copy link → Paste it here.

---

## 2️⃣ Work Experience Section

**File to open:** `src/components/WorkExperience.jsx`

### Edit your current job
Find the `experiences` list at the **top of the file** (lines 5-16):
```
const experiences = [
  {
    date: "May 5, 2026 – June 2, 2026",         ← Change the dates
    title: "Software Development Intern",         ← Change the job title
    supervisor: "CodeTech IT Solutions",           ← Change the company name
    description: [
      "Built responsive web projects...",          ← Edit this bullet point
      "Developed real-time collaborative...",      ← Edit this bullet point
      "Refactored open-source code...",            ← Edit this bullet point
    ],
  },
];
```

### Add a new job
Copy the block inside `{ }` and paste it inside the `[ ]`, separated by a comma:
```
const experiences = [
  {
    date: "Jan 2026 – Apr 2026",
    title: "Your New Job Title",
    supervisor: "Company Name",
    description: [
      "What you did here...",
      "Another thing you did...",
    ],
  },
  {
    date: "May 5, 2026 – June 2, 2026",
    title: "Software Development Intern",
    supervisor: "CodeTech IT Solutions",
    description: [
      "Built responsive web projects...",
      "Developed real-time collaborative...",
      "Refactored open-source code...",
    ],
  },
];
```

### Remove a job
Delete the entire `{ ... },` block for that job.

---

## 3️⃣ Skills Section

**File to open:** `src/components/Skills.jsx`

### Edit your skills
Find the `skills` list (around line 145):
```
const skills = [
  {
    front: "Programming Languages",                 ← Card title (front side)
    back: "Python, Java, SQL, JavaScript",          ← Card details (back side)
  },
  {
    front: "Machine Learning & Data Science",
    back: "Scikit-learn, PyTorch, Pandas, NumPy, Matplotlib, OpenCV",
  },
  ...
];
```

### Add a new skill card
Add a new `{ front: "...", back: "..." }` block:
```
{
  front: "Cloud Computing",
  back: "AWS, Docker, Kubernetes",
},
```

### Remove a skill card
Delete the entire `{ front: "...", back: "..." },` block.

---

## 4️⃣ Certificates Section

**File to open:** `src/components/Certificates.jsx`

### Edit existing certificate
Find the `certs` list (around line 6):
```
const certs = [
  {
    title: "AWS Certified Cloud Practitioner",     ← Certificate name
    issuer: "AWS",                                 ← Who issued it
    date: "March 2026",                            ← When you got it
    link: "https://www.credly.com/...",            ← Verification link
  }
];
```

### Add a new certificate
Add a new block inside the `[ ]`:
```
const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    date: "March 2026",
    link: "https://www.credly.com/...",
  },
  {
    title: "Your New Certificate",
    issuer: "Google",
    date: "June 2026",
    link: "https://link-to-verify.com",
  }
];
```

### Remove a certificate
Delete the entire `{ ... }` block for that certificate.

---

## 5️⃣ Coding Profiles Section

**File to open:** `src/components/CodingProfiles.jsx`

### Edit existing profiles
Find the `profiles` list at the top:
```
const profiles = [
  {
    name: "CodeChef",                                          ← Platform name
    url: "https://www.codechef.com/users/loptr",               ← Your profile link
    username: "loptr",                                         ← Your username shown on site
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/saicharan1907/",
    username: "saicharan1907",
  },
];
```

### Add a new coding profile
Add a new block inside the `[ ]`:
```
{
  name: "HackerRank",
  url: "https://www.hackerrank.com/your_username",
  username: "your_username",
},
```

### Remove a profile
Delete the entire `{ ... },` block for that profile.

---

## 6️⃣ Projects Section

**File to open:** `src/components/Projects.jsx`

### Edit existing projects
Find the `projects` list (around line 6):
```
const projects = [
  {
    id: "unauthorized-login",                                                  ← Unique short name (no spaces)
    title: "Unauthorized Login Detection System",                              ← Project name shown on card
    imageUrl: "",                                                              ← Image (leave empty or add path)
    iconUrl: "",                                                               ← Icon (leave empty or add path)
    githubUrl: "https://github.com/ysaicharanreddy1/Unauthorized-Login...",    ← GitHub link
  },
  ...
];
```

### Add a new project
Add a new block inside the `[ ]`:
```
{
  id: "my-new-project",
  title: "My New Project Name",
  imageUrl: "",
  iconUrl: "",
  githubUrl: "https://github.com/ysaicharanreddy1/My-New-Project",
},
```

### Remove a project
Delete the entire `{ ... },` block for that project.

---

## 7️⃣ Contact Me Section (Social Links)

**File to open:** `src/components/ContactMe.jsx`

### Edit your links
Find the `contacts` list (around line 4):
```
const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/y-saicharanreddy/",    ← Your LinkedIn URL
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:yesugarisaicharanreddy@gmail.com",           ← Your email
    icon: MailIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/ysaicharanreddy1",              ← Your GitHub URL
    icon: GithubIcon,
  },
];
```

Just change the URLs inside `href: "..."`.

---

## 8️⃣ Navigation Bar (Top Menu)

**File to open:** `src/components/Navbar.jsx`

### Edit the menu items
Find the `navItems` list (around line 8):
```
const navItems = [
  { name: "Work", target: "work" },
  { name: "Skills", target: "skills" },
  { name: "Certificates", target: "certifications" },
  { name: "Projects", target: "projects" },
  { name: "Contact Me", target: "contact" },
];
```

- `name` = What shows in the navigation bar
- `target` = The section ID it scrolls to (don't change this unless you know what you're doing)

---

## 🎨 Changing Colors and Fonts

**File to open:** `src/index.css`

### Change background color
Find `--background` (around line 62):
```
--background: 0 0% 98%;
```
This uses HSL format: `hue saturation% lightness%`.
- For white: `0 0% 100%`
- For light gray: `0 0% 96%`
- For light blue: `210 30% 97%`

### Change the accent/primary color
Find `--primary` (around line 66):
```
--primary: 291 86% 83%;
```
Change these numbers. Some examples:
- Blue: `210 100% 60%`
- Green: `145 70% 50%`
- Orange: `30 100% 55%`
- Purple: `270 80% 65%`

### Change the font
Find `font-family` (around line 97):
```
font-family: 'Space Grotesk', sans-serif;
```
Replace `Space Grotesk` with any Google Font name. But also update the font import at the top of the file (line 2):
```
@import url('https://fonts.googleapis.com/css2?family=YOUR+FONT+NAME:wght@400;500;600;700&display=swap');
```

### Dark mode colors
The dark mode colors are inside `.dark { ... }` block (around line 74). Edit the same variable names there to change dark mode appearance.

---

## 📄 Page Title and Tab Name

**File to open:** `index.html` (in the root Portfolio folder, not inside src)

Find:
```html
<title>Sai Charan Reddy | Portfolio</title>
```
Change the text between `<title>` and `</title>`.

---

## 🔄 Section Order on the Page

**File to open:** `src/pages/Home.jsx`

The order of sections on your page is controlled here. Each section is wrapped in `<ScrollFadeIn>`:
```
<Navbar />
<HeroSection />
<WorkExperience />
<Skills />
<Certifications />
<CodingProfiles />
<Projects />
<ContactMe />
```

To change the order, simply move the `<ScrollFadeIn>` blocks up or down.

---

## ⚠️ Important Rules

1. **Always save your file** after editing (press `Ctrl + S`)
2. **Don't delete the curly braces** `{ }`, **square brackets** `[ ]`, **commas** `,`, or **quotes** `" "` — they are part of the code structure
3. **Only edit the text inside quotes** — the words between `"..."` are what shows on your website
4. **Keep `npm run dev` running** in the terminal — it shows your changes live
5. **If something breaks**, press `Ctrl + Z` multiple times to undo your changes

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Page went blank | You probably deleted a bracket or comma. Press Ctrl+Z to undo |
| Changes not showing | Make sure you saved the file (Ctrl+S) and `npm run dev` is running |
| Red error in terminal | Read the error — it usually tells you the line number. Go to that line and fix the typo |
| Want to find text | Press `Ctrl + Shift + F` in VS Code to search across all files |

---

**That's it! You now know how to edit every section of your portfolio. Happy customizing! 🚀**
