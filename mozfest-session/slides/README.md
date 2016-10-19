Things to cover
======
### Title page
* Measuring privacy risk and implied consent in app permissions 
* Sid and Suchana
* Open Web Fellows

---

### What is this session about 
* Know the android app permissions better
 * Capability of app permissions --> Hidden infrastructure.
  
* Know the privacy risks from the policies.
  * Contribute to the discussion of "quantifying privacy"

---

### Motivation: Why is this a problem? (1)
* Most of us don't understnad the capability of the app permissions
* Whom to blame? Play Store?
* Very (use)less information provided.

---
### Motivation: Why is this a problem? (2)
* Layers of privacy controls.
  * Types of permission controls: 
    * Install time permissions
    * Per-app permission switch
    * Background access
  * Controlling the granularity of permission requests.

---

### An interesting example
Let us say an app requests to "read battery statistics"

    `{ permission: 'read battery statistics',
        description: 'Allows an application to read the current low-level battery use data. May allow the application to find out detailed information about which apps you use.' }`

  Q:What can just the battery statistics reveal?
  
  A: "Location tracking" ([Article on wired](https://www.wired.com/2015/02/powerspy-phone-tracking/), [Original research paper](https://crypto.stanford.edu/powerspy/files/powerspy.pdf))


  Q: Now, the second part. What if someone knows which apps you use?
  
  A: Your demographic details. ([Article on Washington Post](https://www.washingtonpost.com/news/the-intersect/wp/2016/03/03/quiz-can-we-guess-your-age-and-income-based-solely-on-the-apps-on-your-phone/#), [Original research paper](https://arxiv.org/pdf/1603.00059v1.pdf))

Capability of the permissions and possibility of doing weirdest things :)

---

### Motivation: Why is this a problem? (3)
* Let us be honest: We never read the privacy policies!
  * Coorelating privacy policy text and capability of apps!

---
### Hands on session
  - [ ] Install necesary libraries.
    * `npm install google-play-scraper`
  - [ ] Learn to know more about your favorite apps from the command line.
    - [ ] Search/Similar
    - [ ] full detail of an application --> AppId
    - [ ] Android permissions
    
---

### Discussion: Existing tools suggestions
  * Explore
    * [Permission Explorer](https://play.google.com/store/apps/details?id=com.carlocriniti.android.permission_explorer)
  * Revoke
    * [xPrivacy (Needs rooting)](http://forum.xda-developers.com/xposed/modules/xprivacy-ultimate-android-privacy-app-t2320783)
  * Know the privacy leaks
    * [ReCon framework] (https://recon.meddle.mobi/)
    * See how your personal information is transmitted to other parties, and allow you to block or modify it with fine granularity.
  
***

### Discussion: Future ideas?
  * An app to explain the android permissions and privacy leaks?
  * An app to kill all background apps and give permissions only when it is opened?
  * Online platform to analyze your current apps and assign a privacy score to each of these?

***

### Resources
- [Android Manifest.permission](https://developer.android.com/reference/android/Manifest.permission.html)
- [List of all android permissions](https://gist.github.com/Arinerron/1bcaadc7b1cbeae77de0263f4e15156f)
- [Sharelab: Invisible infrastructures of mobile permissions](https://labs.rs/en/invisible-infrastructures-mobile-permissions/)
- [How to Detect Apps Leaking Your Data](https://www.technologyreview.com/s/428772/how-to-detect-apps-leaking-your-data/)
