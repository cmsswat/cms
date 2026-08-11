/* ======================================================================
   PROJECTS DATA
   ----------------------------------------------------------------------
   This is the ONLY file you need to edit to add a new project.

   To add a new project:
   1. Copy an existing {...} block below and paste it before the closing "];"
   2. Fill in the fields for your new project
   3. Put the project's logo image inside the /logos folder
   4. Set "logo" to "logos/your-file-name.png" (match the exact filename)
   5. If there's no demo username/password yet, leave demoUser and
      demoPass as empty strings "" — the card will simply hide that box.

   Fields:
   code       -> Short project code shown as a badge (e.g. "SCS", "HKS")
   title      -> Project name
   tagline    -> One-line definition of what the project does
   students   -> Array of exactly 3 student names
   liveUrl    -> The GitHub Pages link where the project is hosted
   logo       -> Path to the logo image inside the logos/ folder
   demoUser   -> Demo/admin username to log into the project (optional)
   demoPass   -> Demo/admin password to log into the project (optional)
   ====================================================================== */

const PROJECTS = [
  {
    code: "WDR",
    title: "Wisdom Daycare Reception Management System",
    tagline: "A reception desk system for logging children's daily check-in and check-out at a daycare.",
    students: ["Shakila", "Khadija", "Karishma"],
    liveUrl: "https://cmsswat.github.io/wdc/",
    logo: "logos/wisdom-daycare-reception.png",
    demoUser: "",
    demoPass: ""
  },
  {
    code: "BSA",
    title: "Bloom School Attendance System",
    tagline: "Simple Webpage for Bloom School Attendance ,Daily , Monthly and Weekly Attendance Reports",
    students: ["Adnan", "Ihsan", "Mehran"],
    liveUrl: "https://cmsswat.github.io/bsa/",
    logo: "logos/bsa.jpg",
    demoUser: "",
    demoPass: ""
  },
  {
    code: "SDC",
    title: "Shifa Dental Clinic ",
    tagline: "Website for Shifa Dental Clinic , account and token issue info base . with public page. ",
    students: ["M.Hasheer", "M.Suliman ", "HabibUllah"],
    liveUrl: "https://cmsswat.github.io/sdc/",
    logo: "logos/shifa.png",
    demoUser: "",
    demoPass: ""
  },
  {
    code: "WDA",
    title: "Wisdom Daycare Account Management",
    tagline: "An accounts and fee management system for tracking daycare payments and financial records.",
    students: ["Sapna", "Mishal", "Aliza"],
    liveUrl: "https://cmsswat.github.io/wdc/",
    logo: "logos/wisdom-daycare-account-management.png",
    demoUser: "",
    demoPass: ""
  },
  {
    code: "WHS",
    title: "Wisdom House School System",
    tagline: "A school management system for handling student records, classes, and administration.",
    students: ["Saweera Iqbal", "Huma Saleem", "Laiba"],
    liveUrl: "https://cmsswat.github.io/whss/",
    logo: "logos/wisdom-house-school-system.png",
    demoUser: "",
    demoPass: ""
  },
  {
    code: "VS",
    title: "Visit Swat",
    tagline: "A tourism guide website showcasing destinations, culture, and travel information for Swat Valley.",
    students: ["Aisha", "Haya", "Muniba"],
    liveUrl: "https://cmsswat.github.io/vs/",
    logo: "logos/visit-swat.png",
    demoUser: "",
    demoPass: ""
  },
  {
    code: "SDG",
    title: "Students Document Generator",
    tagline: "A tool that automatically generates student CVs and academic documents from entered data.",
    students: ["Sudais", "Abdul Bais", "Musa Khan"],
    liveUrl: "https://cmsswat.github.io/sdg/",
    logo: "logos/students-document-generator.png",
    demoUser: "",
    demoPass: ""
  },
  {
    code: "CS",
    title: "Card Studio",
    tagline: "A digital tool for designing and generating custom ID or greeting cards.",
    students: ["Shahla", "Alina", "Ishrat Bibi"],
    liveUrl: "https://cmsswat.github.io/cs/",
    logo: "logos/card-studio.jpg",
    demoUser: "",
    demoPass: ""
  },
  {
    code: "SCS",
    title: "Swat Computer Shop",
    tagline: "An e-commerce store for browsing and purchasing computer hardware and accessories.",
    students: ["Fakhr Un Nisa", "Rabia", "Mehreen"],
    liveUrl: "https://cmsswat.github.io/scs/",
    logo: "logos/swat-computer-shop.png",
    demoUser: "",
    demoPass: ""
  },
  {
    code: "HKS",
    title: "HK Showroom",
    tagline: "A car showroom platform for listing, buying, and selling vehicles online.",
    students: ["Hilal Khan", "Sohail Khan", "Zarnain Khan"],
    liveUrl: "https://cmsswat.github.io/hk/",
    logo: "logos/hk-showroom.png",
    demoUser: "",
    demoPass: ""
  },
  {
    code: "BSS",
    title: "Bloom School DMC",
    tagline: "A digital management system for Bloom School, handling student records, classes, and administration.",
    students: ["M. Atiq", "Roidar Khan", "Maaz Ahmad"],
    liveUrl: "https://cmsswat.github.io/bss/",
    logo: "logos/bloom-school-dmc.png",
    demoUser: "",
    demoPass: ""
  }
];

/* ======================================================================
   TEAM DATA — CMS Administration
   ----------------------------------------------------------------------
   photo -> path to a photo in the /team folder, or "" to show a
            generic avatar icon (used for Uzma Rahman until a photo
            is provided)
   Order in this array is the left-to-right order shown in the staff bar.
   ====================================================================== */

const TEAM = [
  {
    name: "Sir Javed Iqbal",
    role: "Principal, CMS",
    photo: "team/javed-iqbal.jpg",
    gender: "male"
  },
  {
    name: "Sir Murtaza",
    role: "Programmer & Instructor",
    photo: "team/sir-murtaza.jpg",
    gender: "male"
  },
  {
    name: "Uzma Rahman",
    role: "Incharge, IT Department",
    photo: "",
    gender: "female"
  },
  {
    name: "Uzair Khan",
    role: "IT Instructor",
    photo: "team/uzair-khan.jpg",
    gender: "male"
  }
];
