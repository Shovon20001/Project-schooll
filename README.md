# 🏫 Sagordari Michael Madhusudhan Datta School — ওয়েবসাইট

## 📁 ফাইল স্ট্রাকচার

```
smmds-school/
│
├── index.html              ← মূল ওয়েবসাইট (Homepage)
├── assets/
│   ├── css/
│   │   └── style.css       ← সব ডিজাইন এখানে
│   └── js/
│       └── main.js         ← সব JavaScript এখানে
│   └── images/             ← স্কুলের ছবি এখানে রাখুন
│
├── admin/
│   └── index.html          ← Admin Panel
│
└── README.md               ← এই ফাইল
```

---

## ✏️ কীভাবে তথ্য পরিবর্তন করবেন

### স্কুলের নাম, ফোন, ঠিকানা পরিবর্তন
`index.html` ফাইলটি VS Code দিয়ে খুলুন।
Ctrl+H চেপে Find & Replace করুন।

### ছবি যোগ করতে
1. ছবিগুলো `/assets/images/` ফোল্ডারে রাখুন
2. `index.html` এ `about-img-placeholder` এর জায়গায় লিখুন:
```html
<img src="assets/images/school.jpg" alt="স্কুল ভবন" style="width:100%;height:100%;object-fit:cover;" />
```

### Google Map যোগ করতে
1. Google Maps এ স্কুলের ঠিকানা খুঁজুন
2. Share → Embed a map → HTML কপি করুন
3. `index.html` এ `map-wrap` div এর ভেতরে paste করুন

---

## 🔐 Admin Panel

**URL:** `আপনার-ওয়েবসাইট/admin/`

**ডিফল্ট লগইন:**
- ব্যবহারকারীর নাম: `admin`
- পাসওয়ার্ড: `smmd2025`

⚠️ **প্রথমেই পাসওয়ার্ড পরিবর্তন করুন!**
`admin/index.html` এ এই লাইন খুঁজুন:
```js
const CREDS = { user: 'admin', pass: 'smmd2025' };
```
নিজের পাসওয়ার্ড দিয়ে বদলান।

---

## 🌐 Hosting — কীভাবে ইন্টারনেটে দেওয়া যাবে

### পদ্ধতি ১: GitHub Pages (সম্পূর্ণ ফ্রি)
1. https://github.com এ account খুলুন
2. New Repository তৈরি করুন
3. সব ফাইল upload করুন
4. Settings → Pages → Branch: main → Save
5. ওয়েবসাইট হবে: `https://username.github.io/repo-name`

### পদ্ধতি ২: Netlify (সহজ, ফ্রি)
1. https://netlify.com এ account খুলুন
2. "Deploy without Git" ক্লিক করুন
3. পুরো `smmds-school` ফোল্ডারটা drag & drop করুন
4. কয়েক সেকেন্ডে ওয়েবসাইট live!

### পদ্ধতি ৩: বাংলাদেশি Hosting (নিজের domain)
1. **Domain কিনুন:** exabytes.com.bd বা webhostbd.com থেকে
   - `.com.bd` domain: প্রায় ৫০০-৮০০ টাকা/বছর
2. **Hosting কিনুন:** প্রায় ১৫০০-৩০০০ টাকা/বছর
3. cPanel থেকে `public_html` ফোল্ডারে সব ফাইল upload করুন

**Recommended Domain:** `smmdschool.com.bd` বা `sagordari-school.edu.bd`

---

## 🔧 Backend যোগ করতে চাইলে (ভবিষ্যতে)

এই website টি এখন static HTML। নোটিশ, ফলাফল সরাসরি HTML এ আছে।

**Database যোগ করতে হলে প্রয়োজন:**
- PHP + MySQL (cPanel hosting এ সহজে পাওয়া যায়)
- অথবা Node.js + MongoDB

**তখন যা করা যাবে:**
- Admin panel থেকে নোটিশ দিলে সাথে সাথে website আপডেট হবে
- ছাত্র registration online এ হবে
- ফলাফল database এ সংরক্ষণ হবে

---

## 📞 সাহায্যের জন্য

Claude AI কে জিজ্ঞেস করুন — "আমার স্কুল ওয়েবসাইটে [যা চান] যোগ করতে চাই"
