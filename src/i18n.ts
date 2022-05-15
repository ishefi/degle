import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const translations = {
  en: {
    translation: {
      placeholder: "Country, territory...",
      guess: "Guess",
      share: "Share",
      showOnGoogleMaps: "👀 on Google Maps",
      showOnWikipedia: "📚 on Wikipedia",
      welldone: "Well done!",
      unknownCountry: "Unknown country!",
      copy: "Copied results to clipboard",
      showCountry: "🗺️ Show map!",
      cancelRotation: "🌀 Cancel rotation",
      settings: {
        dir: "ltr",
        title: "Settings",
        distanceUnit: "Unit of distance",
        theme:
          "Theme (but also difficulty, as flag colors are negative in dark mode)",
        language: "Language",
        difficultyModifiers: "Difficulty modifiers",
        startingNextDay: "Starting the next day!",
        updateNotificationDisabled: "Disable update notifications.",
      },
      stats: {
        title: "Statistics",
        played: "Played",
        win: "Win %",
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        averageBestDistance: "Best Distances Average",
        guessDistribution: "Guess distribution:",
      },
      install: {
        title: "Flagle",
        descritpionTitle: "App Install:",
        description: "Add Flagle to Home Screen to play it easily!",
        instructionTitle: "Instructions:",
        instructionActionOk: "OK",
        instructionActionCancel: "Cancel",
        instructionActionInstall: "Install",
        instructionFirefoxAction1: "- open browser options ",
        instructionFirefoxAction2: "- add to Home Screen",
        instructionFirefoxNewAction1: "- open browser options ",
        instructionFirefoxNewAction2: '- select "Install"',
        instructionIdeviceAction1: "- on Safari, open the Share menu ",
        instructionIdeviceAction2: '- select "Add to Home Screen"',
        instructionOperaAction1: "- press the menu button ",
        instructionOperaAction2: "- add to Home Screen",
        instructionNotSupported: "Not supported by this browser.",
      },
      support: {
        UA: "Support the Ukrainian Red Cross",
      },
      newVersion: "New version available!",
      update: "Update",
      or: "or",
      ignore: "Ignore",
      buyMeACoffee: "Buy me a ☕!",
      news: {
        newsNotifications: "News notifications system added!",
      },
    },
  },
  he: {
    translation: {
      placeholder: "מדינה, טריטוריה...",
      guess: "ניחוש",
      share: "שיתוף",
      showOnGoogleMaps: "👀 גוגל מפות",
      showOnWikipedia: "📚 ויקיפדיה",
      welldone: "כל הכבוד!",
      unknownCountry: "מדינה לא מוכרת",
      copy: "העתקת!",
      showCountry: "🗺️ להציג מפה",
      cancelRotation: "🌀 ביטול סיבוב",
      settings: {
        dir: "rtl",
        title: "הגדרות",
        distanceUnit: "יחידת מרחק",
        theme: "מצב (אבל גם רמת קושי, כי במצב ככה הצבעים הפוכים)",
        language: "שפה",
        difficultyModifiers: "הגדרות קושי",
        startingNextDay: "היום הבא מתחיל",
        updateNotificationDisabled: "ביטול התראות",
      },
      stats: {
        title: "סטטיסטיקות",
        played: "משחקים",
        win: "% נצחונות",
        currentStreak: "רצף נוכחי",
        maxStreak: "רצף מקסימלי",
        averageBestDistance: "ממוצע מרחקים טוב ביותר",
        guessDistribution: "התפלגות ניחושים:",
      },
      install: {
        title: "דעגעל",
        descritpionTitle: "התקנת אפליקציה:",
        description: "להוסיף את דעגעל למסך הבית!",
        instructionTitle: "הוראות:",
        instructionActionOk: "אישור",
        instructionActionCancel: "ביטול",
        instructionActionInstall: "התקנה",
        instructionFirefoxAction1: "- פתיחת אפשרויות דפדפן",
        instructionFirefoxAction2: "-וספה למסך הבית",
        instructionFirefoxNewAction1: "- פתיחת אפשרויות דפדפן",
        instructionFirefoxNewAction2: '- לבחור "התקנה"',
        instructionIdeviceAction1: "- בספארי, יש לפתוח את תפריט השיתוף",
        instructionIdeviceAction2: '- לבחור "הוספה למסך הבית"',
        instructionOperaAction1: "- ללחוץ על כפתור התפריט",
        instructionOperaAction2: "- הוספה למסך הבית",
        instructionNotSupported: "לא נתמך בדפדפן זה.",
      },
      support: {
        UA: "תמיכה בצלב האדום האוקראיני",
      },
      newVersion: "יש גרסה חדשה!",
      update: "לעדכן",
      or: "או",
      ignore: "להתעלם",
      buyMeACoffee: "אפשר לקנות לי ☕!",
      news: {
        newsNotifications: "יש התראות על חדשות או משהו",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translations,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
  });

export default i18n;
