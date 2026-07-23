# 📲 How to get the Poonguzhali Psychology APK onto your phone

You don't need Android Studio, Java, or any build tools on your PC.
The app is compiled **in the cloud by GitHub Actions** — exactly like VAP Finance.

---

## One-time setup (≈5 minutes)

1. **Create a new GitHub repository** (private is fine), e.g. `PoonguzhaliPsychology`.
   - Do **not** add a README/gitignore on GitHub — this folder already has them.

2. **Upload this folder** (`C:\Users\SIT_LP01\mindmentor`) to that repo on the
   `main` branch. Easiest options:
   - **GitHub Desktop:** File → Add local repository → pick this folder →
     Publish repository.
   - **Or** ask me (in an interactive session where the terminal works) to push
     it for you using the bundled GitHub Desktop git, the same way VAP Finance
     was deployed.

3. That's it. Pushing to `main` automatically starts the build.

---

## Getting the APK

1. Open your repo on github.com → **Actions** tab.
2. Click the latest **Build Android APK** run (it takes ~4–6 minutes).
3. When it finishes (green ✓), scroll to **Artifacts** and download
   **`PoonguzhaliPsychology-apk`**.
4. Unzip it → you get **`app-debug.apk`**.

## Installing on the phone (stored on the phone itself)

1. Copy `app-debug.apk` to your phone (USB, Google Drive, WhatsApp to yourself,
   etc.) or download it directly on the phone from the Actions page.
2. Tap the file → Android will ask to allow **"Install unknown apps"** for your
   browser/file manager → allow it → **Install**.
3. Poonguzhali Psychology installs like any normal app. It is **100% offline** —
   no internet needed after install, and all study progress is saved on the phone.

---

## Updating the app later

Just change the code and push to `main` again. A fresh APK is built
automatically — download the new artifact and install over the old one.

## Notes

- This is a **debug** APK (unsigned) — perfect for personal use and sharing.
  When you're ready to sell / publish on the Play Store, we'll add a **signed
  release build** (same as the VAP Finance roadmap).
- App id: `net.ramrajcotton.poonguzhali` • App name: **Poonguzhali Psychology**.
