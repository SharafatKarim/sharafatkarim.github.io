import { BookOpen, FileText, Code2, Link2, Send } from "lucide-react"
export const toolsList = [
  {
    category: "Blogs",
    icon: BookOpen,
    items: [
      { name: "Main Blog", url: "https://sharafat.pages.dev/" },
      { name: "Dev.to", url: "https://dev.to/sharafat/" },
      { name: "Hashnode", url: "https://sharafat.hashnode.dev/" },
    ],
  },
  {
    category: "Short Writings",
    icon: FileText,
    items: [
      { name: "Notes", url: "https://sharafat.is-a.dev/notes/" },
      { name: "Logs", url: "https://sharafat.is-a.dev/logs/" },
      { name: "Stash", url: "https://sharafat.is-a.dev/stash/" },
    ],
  },
  {
    category: "Documentation",
    icon: Code2,
    items: [
      { name: "GitBook", url: "https://sharafat.gitbook.io/" },
      { name: "DSA", url: "https://sharafat.is-a.dev/dsa/" },
      { name: "Python", url: "https://python.sharafat.xyz/" },
    ],
  },
  {
    category: "Utilities",
    icon: Link2,
    items: [
      { name: "Code Paste", url: "https://paste.sharafat.xyz/" },
      { name: "URL Shortener", url: "https://url.sharafat.xyz/" },
    ],
  },
  {
    category: "Telegram",
    icon: Send,
    items: [
      { name: "@SharafatsNotes", url: "https://t.me/SharafatsNotes" },
      { name: "@LinuxBangladesh", url: "https://t.me/LinuxBangladesh" },
    ],
  },
]