import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle, FlagleHe } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Twemoji } from "@teuteuf/react-emoji-render";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function InfosHeb({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="איך לשחק" isOpen={isOpen} close={close}>
      <div dir="rtl">
        <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
          <div>
            צריך לנחש את ה<FlagleHe /> ב־6 ניחושים.
          </div>
          <div>כל ניחוש צריך להיות מדינה, טריטוריה, ...</div>
          <div>
            אחרי כל ניחוש, המשחק יחשוף את המרחק, הכיוון והדמיון של הניחוש מהמילה
            הסודית
          </div>
        </div>
        <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
          <div className="font-bold">דוגמאות</div>
          <div>
            <Guesses
              rowCount={1}
              guesses={[
                {
                  name: "צ'ילה",
                  direction: "NE",
                  distance: 13_557_000,
                },
              ]}
              settingsData={settingsData}
            />
            <div className="my-2">
              הניחוש הראשון,{" "}
              <span className="uppercase font-bold">צ&apos;ילה</span> במרחק של{" "}
              {formatDistance(13557000, settingsData.distanceUnit)} מהמדינה
              הסודית, המדינה הסודית בכיוון צפון-מזרח והניחוש דומה רק ב־32% כי
              הוא די רחוק!
            </div>
          </div>
          <div>
            <Guesses
              rowCount={1}
              guesses={[
                {
                  name: "פינלנד",
                  direction: "SE",
                  distance: 3_206_000,
                },
              ]}
              settingsData={settingsData}
            />
            <div className="my-2">
              הניחוש השני <span className="uppercase font-bold">פינלנד</span>{" "}
              כבר יותר קרוב! מרחק של{" "}
              {formatDistance(3206000, settingsData.distanceUnit)}
              בכיוון דרום־מזרח, ואנחנו ב־84%!
            </div>
          </div>
          <div>
            <Guesses
              rowCount={1}
              guesses={[
                {
                  name: "לבנון",
                  direction: "N",
                  distance: 0,
                },
              ]}
              settingsData={settingsData}
            />
            <div className="my-2">
              הניחוש הבא, <span className="uppercase font-bold">לבנון</span>,
              הוא המדינה הסודית! כל הכבוד!{" "}
              <Twemoji text="🎉" options={{ className: "inline-block" }} />
            </div>
          </div>
        </div>
        <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
          יש <FlagleHe /> חדש כל יום!
        </div>
        <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
          <div className="font-bold">עוד משהו?</div>
          <div>
            כן: שמות המדינות הם לפי האקדמיה ללשון עברית ומבוססים על{" "}
            <a
              className="underline"
              href="https://www.sii.org.il/media/3211/קודים-לייצוג-שמות-של-מדינות-לרבות-ישויות.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              תקן ישראלי ת״י 3166
            </a>
            , אז אם מפריע שכתוב ״בוליוויה״ במקום ״בוליביה״, ״וטיקן״ במקום
            ״ותיקן״, ״איי שלמה״ אבל ״סיישל״ - הם הכתובת לתלונות.
          </div>
        </div>
        <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
          המשחק <FlagleHe /> הוא בעצם{" "}
          <span className="font-bold">חיקוי זול</span> של{" "}
          <a
            className="underline"
            href="https://worldle.teuteuf.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Worldle />
          </a>{" "}
          שיצר{" "}
          <a
            className="underline"
            href="https://twitter.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            אנטואן טף (teuteuf@)
          </a>
          .
        </div>
        <div className="space-y-3 text-justify pb-3">
          <div>
            נוצר על ידי{" "}
            <a
              className="underline"
              href="https://twitter.com/shefi89"
              target="_blank"
              rel="noopener noreferrer"
            >
              shefi89@
            </a>{" "}
            - (
            <a
              className="underline"
              href="https://github.com/teuteuf/worldle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              קוד מקור
            </a>
            )
          </div>
          <div>
            רוצה לתמוך?{" "}
            <a
              className="underline"
              href="https://www.ko-fi.com/ishefi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twemoji
                text="אפשר לקנות לי! ☕"
                options={{ className: "inline-block" }}
              />
            </a>
          </div>
        </div>
      </div>
    </Panel>
  );
}
