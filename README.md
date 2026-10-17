# EXAM — TANZIM'S FIRST PROJECT

Responsive black-themed MCQ portal with two selectable exams:
- General HSC practice: 20 original sample questions, 20 minutes.
- Higher Mathematics (Second Paper): 50 questions transcribed from the user's uploaded PDF, 60 minutes.

## Files
- `index.html`: home, exam, result, and review screens
- `style.css`: responsive dark theme
- `questions.js`: `GENERAL_QUESTIONS` and `HM_QUESTIONS` question banks
- `script.js`: exam selection, countdown timers, navigation, scoring, review, and restart

## Important PDF transcription note
Higher Mathematics question 26 is flagged for review. The source lists more than one option that can be considered an absolute measure of dispersion, so it has no answer key and is excluded from scoring. The other answer keys are based on the legible question text/options in the provided PDF and their mathematical solutions; please review them before formal use.

## Publish on GitHub Pages
Upload all four runtime files (`index.html`, `style.css`, `questions.js`, `script.js`) to the same repository root. Open **Settings → Pages**, choose **Deploy from a branch**, select branch `main` and folder `/(root)`, then Save. Wait a few minutes and open the Pages URL.

## Notes
This is a front-end website. It does not store results online or provide secure admin accounts. Google Fonts require internet access, but the site layout and exam functionality work without them.
