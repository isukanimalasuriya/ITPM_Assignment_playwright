const { test, expect } = require("@playwright/test");

// ── All 50 test cases from Assignment1_TestCases.xlsx ──────────────────────
const testCases = [
  // ── PASS cases (30) ───────────────────────────────────────────────────────

  {
    id: "Pos_Fun_0001",
    status: "Pass",
    input: "oya koheda inna inne?",
    expected: "ඔයා කොහේද ඉන්නේ?",
  },

  {
    id: "Pos_Fun_0002",
    status: "Pass",
    input: "oya heta koheda yanna hithan inne, api bariyata yamuda?",
    expected: "ඔයා හෙට කොහේද යන්න හිතන් ඉන්නේ, අපි බාරියට යමුද?",
  },

  {
    id: "Pos_Fun_0003",
    status: "Pass",
    input: "ikmanata enna, api lateyi.",
    expected: "ඉක්මනට එන්න, අපි ලේට්යි.",
  },

  {
    id: "Pos_Fun_0004",
    status: "Pass",
    input: "davasata denna epa, poddak iwasala mama kiyanna denna.",
    expected: "දවසට දෙන්න එපා, පොඩ්ඩක් ඉවසලා මම කියන්න දෙන්න.",
  },

  {
    id: "Pos_Fun_0005",
    status: "Pass",
    input: "kohomada bro, hodada inne?",
    expected: "කොහොමද බ්‍රො, හොදාද ඉන්නේ?",
  },

  {
    id: "Pos_Fun_0006",
    status: "Pass",
    input: "oyata saha oyage pawulata subama suba aluth avuruddak wewa!",
    expected: "ඔයාට සහ ඔයාගේ පවුලට සුභම සුභ අලුත් අවුරුද්දක් වේවා!",
  },

  {
    id: "Pos_Fun_0007",
    status: "Pass",
    input: "karunakarala mage file eka print karanna puluwanda?",
    expected: "කරුණාකරලා මගේ ෆයිල් එක ප්‍රින්ට් කරන්න පුළුවන්ද?",
  },

  {
    id: "Pos_Fun_0008",
    status: "Pass",
    input: "poddak inna, mama ennam.",
    expected: "පොඩ්ඩක් ඉන්න, මම එන්නම්.",
  },

  {
    id: "Pos_Fun_0009",
    status: "Pass",
    input: "ov, mama eka karannam.",
    expected: "ඔව්, මම ඒක කරන්නම්.",
  },

  {
    id: "Pos_Fun_0010",
    status: "Pass",
    input: "nehe machan, mama eyata kiwwa nehe, balapu.",
    expected: "නෑ මචං, මම එයාට කිව්වා නෑ, බැලුපු.",
  },

  {
    id: "Pos_Fun_0011",
    status: "Pass",
    input: "aney aney, mokakda me venne, godak amaru.",
    expected: "අනේ අනේ, මොකක්ද මේ වෙන්නේ, ගොඩක් අමාරු.",
  },

  {
    id: "Pos_Fun_0012",
    status: "Pass",
    input: "poddak poddak kanna, nathnam amaru weyi.",
    expected: "පොඩ්ඩක් පොඩ්ඩක් කන්න, නැත්නම් අමාරු වෙයි.",
  },

  {
    id: "Pos_Fun_0013",
    status: "Pass",
    input: "mama yanawa... oya geyeda inne?",
    expected: "මම යනවා... ඔයා ගෙයේද ඉන්නේ?",
  },

  {
    id: "Pos_Fun_0014",
    status: "Pass",
    input: "aney! e deyak karana epa!",
    expected: "අනේ! ඒ දෙයක් කරන එපා!",
  },

  {
    id: "Pos_Fun_0015",
    status: "Pass",
    input: "man oyt pass katha karannam, hodha ne?",
    expected: "මං ඔයාට පස්සේ කතා කරන්නම්, හොදා නේ?",
  },

  {
    id: "Pos_Fun_0016",
    status: "Pass",
    input: "eyaa godak hodha lamayekk, mama adareyi.",
    expected: "එයා ගොඩක් හොද ළමයෙක්, මම ආදරෙයි.",
  },

  {
    id: "Pos_Fun_0017",
    status: "Pass",
    input: "api ada lunch kaala, passe shop ekata gihin amutu.",
    expected: "අපි අද lunch කාලා, පස්සේ shop එකට ගිහිං අමුතු.",
  },

  {
    id: "Pos_Fun_0018",
    status: "Pass",
    input: "oyage phone eka charge karadha?",
    expected: "ඔයාගේ phone එක charge කරාද?",
  },

  {
    id: "Pos_Fun_0019",
    status: "Pass",
    input: "api den on the way, poddak wait karanna.",
    expected: "අපි දැන් on the way, පොඩ්ඩක් wait කරන්න.",
  },

  {
    id: "Pos_Fun_0020",
    status: "Pass",
    input: "mama feeling very happy, api loku project eka ssel kala.",
    expected: "මම feeling very happy, අපි ලොකු project එක sell කළා.",
  },

  {
    id: "Pos_Fun_0021",
    status: "Pass",
    input: "oyalage gedara Bluetooth thiyanawada?",
    expected: "ඔයාලාගේ ගෙදර Bluetooth තියනවාද?",
  },

  {
    id: "Pos_Fun_0022",
    status: "Pass",
    input: "oyage USB eka mata poddak denna puluwanda?",
    expected: "ඔයාගේ USB එක මට පොඩ්ඩක් දෙන්න පුළුවන්ද?",
  },

  {
    id: "Pos_Fun_0023",
    status: "Pass",
    input: "mama YouTube eke me video eka diddaa, godak hodai.",
    expected: "මම YouTube එකේ මේ video එක දිද්දා, ගොඩක් හොදයි.",
  },

  {
    id: "Pos_Fun_0024",
    status: "Pass",
    input: "mata Facebook eke message ekak ewanna puluwanda?",
    expected: "මට Facebook එකේ message එකක් එවන්න පුළුවන්ද?",
  },

  {
    id: "Pos_Fun_0025",
    status: "Pass",
    input: "mama ASAP eeka submit karanna one.",
    expected: "මම ASAP ඒක submit කරන්න ඕනේ.",
  },

  {
    id: "Pos_Fun_0026",
    status: "Pass",
    input: "oyage NIC eka gena enna, API ekak one.",
    expected: "ඔයාගේ NIC එක ගෙනෙන්න, API එකක් ඕනේ.",
  },

  {
    id: "Pos_Fun_0027",
    status: "Pass",
    input: "heta lab eke practical ekak thiyenawa.",
    expected: "හෙට lab එකේ practical එකක් තියෙනවා.",
  },

  {
    id: "Pos_Fun_0028",
    status: "Pass",
    input: "api uni eke cafe ekata gihin kamu.",
    expected: "අපි uni එකේ cafe එකට ගිහිං කමු.",
  },

  {
    id: "Pos_Fun_0029",
    status: "Pass",
    input: "aiyo machan, uba mokakda karanne oya wessalata.",
    expected: "අයියෝ මචං, උඹ මොකක්ද කරන්නේ ඔය වෙස්සලාට.",
  },

  {
    id: "Pos_Fun_0030",
    status: "Pass",
    input: "elakiri bro, uba mara project eka karalaa dammaa.",
    expected: "එළකිරි බ්‍රො, උඹ මාර project එක කරලා දම්මා.",
  },

  // ── FAIL cases (20) ───────────────────────────────────────────────────────

  {
    id: "Neg_Fun_0001",
    status: "Fail",
    input: "api Nuwara Eliya walata trip ekak yamuda ada?",
    expected: "අපි නුවර එළිය වලට trip එකක් යමුද අද?",
  },

  {
    id: "Neg_Fun_0002",
    status: "Fail",
    input: "Matale ekata yanna bus eka koheda thiyanawa?",
    expected: "මාතලේ එකට යන්න bus එක කොහේද තියෙනවා?",
  },

  {
    id: "Neg_Fun_0003",
    status: "Fail",
    input: "Chamara kiwa eyata call karanna kiyala.",
    expected: "චාමර කිව්වා එයාට call කරන්න කියලා.",
  },

  {
    id: "Neg_Fun_0004",
    status: "Fail",
    input: "Lasith saha Dinesh dennama heta late wenawa.",
    expected: "ලසිත් සහ දිනේෂ් දෙන්නම හෙට ලේට් වෙනවා.",
  },

  {
    id: "Neg_Fun_0005",
    status: "Fail",
    input: "api trip eke 2nd dawasa hotel eke iddamu.",
    expected: "අපි trip එකේ 2nd දවස hotel එකේ ඉදමු.",
  },

  {
    id: "Neg_Fun_0006",
    status: "Fail",
    input: "lamai 200k withara hadunne e match ekedi.",
    expected: "ළමයි 200k විතර හදුන්නේ ඒ match එකේදී.",
  },

  {
    id: "Neg_Fun_0007",
    status: "Fail",
    input: "me jacket eka Rs. 4500 ta gatta, hoda deal.",
    expected: "මේ jacket එක Rs. 4500 ට ගත්තා, හොද deal.",
  },

  {
    id: "Neg_Fun_0008",
    status: "Fail",
    input: "USD 100 kiyanne rupiyal walin kochcharada?",
    expected: "USD 100 කියන්නේ රුපියල් වලින් කොච්චරද?",
  },

  {
    id: "Neg_Fun_0009",
    status: "Fail",
    input: "api 9:00AM ta gathering ekata gathamu.",
    expected: "අපි 9:00AM ට gathering එකට ගතමු.",
  },

  {
    id: "Neg_Fun_0010",
    status: "Fail",
    input: "train eka 11.30noon walata pitath wenawa.",
    expected: "train එක 11.30noon වලට පිටත් වෙනවා.",
  },

  {
    id: "Neg_Fun_0011",
    status: "Fail",
    input: "heta meeting eka 2026-05-10 ta schedule karalaa thiyenawa.",
    expected: "හෙට meeting එක 2026-05-10 ට schedule කරලා තියෙනවා.",
  },

  {
    id: "Neg_Fun_0012",
    status: "Fail",
    input: "deadline eka April 30 wenakan puluwan kiyala kiwwa.",
    expected: "deadline එක April 30 වෙනකන් පුළුවන් කියලා කිව්වා.",
  },

  {
    id: "Neg_Fun_0013",
    status: "Fail",
    input: "e gase usa meeter 12k withara wage wenava.",
    expected: "ඒ ගසේ උස මීටර් 12k විතර වගේ වෙනවා.",
  },

  {
    id: "Neg_Fun_0014",
    status: "Fail",
    input: "mama heta 3kg withara payin giyaa.",
    expected: "මම හෙට 3kg විතර පයින් ගියා.",
  },

  {
    id: "Neg_Fun_0015",
    status: "Fail",
    input: "me link eka balanna: https://sliit.lk, godak important.",
    expected: "මේ link එක බලන්න: https://sliit.lk, ගොඩක් important.",
  },

  {
    id: "Neg_Fun_0016",
    status: "Fail",
    input: "mata me address ekata message ewanna: kasun99@gmail.com",
    expected: "මට මේ address එකට message එවන්න: kasun99@gmail.com",
  },

  {
    id: "Neg_Fun_0017",
    status: "Fail",
    input: "mama godak dhukkha 😢 oya awa nahe nisa.",
    expected: "මම ගොඩක් දුක්ක 😢 ඔයා ආවේ නෑ නිසා.",
  },

  {
    id: "Neg_Fun_0018",
    status: "Fail",
    input: "ado bro 🔥 uba mara katak kala 😂 chappi.",
    expected: "අදෝ බ්‍රො 🔥 උඹ මාර කටක් කළා 😂 ශප්පි.",
  },

  {
    id: "Neg_Fun_0019",
    status: "Fail",
    input: "mokakd oya kranne, mata dhannne nehe.",
    expected: "මොකක්ද ඔයා කරන්නේ, මට දන්නේ නෑ.",
  },

  {
    id: "Neg_Fun_0020",
    status: "Fail",
    input: "@Tharindu ayya, oya ada online innawada?",
    expected: "@Tharindu අයියා, ඔයා අද online ඉන්නවාද?",
  },
];

// ── Helper function ───────────────────────────────────────────────────────────
async function runTranslation(page, inputText) {
  await page.goto("https://www.pixelssuite.com/chat-translator");

  // Wait for page to fully load
  await page.waitForLoadState("networkidle");

  // Select Chat Sinhala mode if the button exists
  try {
    const chatBtn = page.locator("text=Chat Sinhala").first();
    await chatBtn.waitFor({ timeout: 3000 });
    await chatBtn.click();
    await page.waitForTimeout(500);
  } catch (_) {
    // Already on Chat Sinhala or not found — continue
  }

  // Get the input textarea (first one) and clear it completely
  const inputBox = page.locator("textarea").first();
  await inputBox.waitFor({ timeout: 5000 });
  await inputBox.click();
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Backspace");
  await page.waitForTimeout(300);

  // Type the input text character by character to trigger real-time events
  await inputBox.pressSequentially(inputText, { delay: 30 });

  // Click the Transliterate button
  await page.locator("button.btn").first().click();

  // Wait for output textarea to have a non-empty value (up to 10 seconds)
  const outputBox = page.locator("textarea").nth(1);
  await outputBox.waitFor({ timeout: 5000 });

  try {
    await page.waitForFunction(
      () => {
        const textareas = document.querySelectorAll("textarea");
        return textareas[1] && textareas[1].value.trim().length > 0;
      },
      { timeout: 10000 },
    );
  } catch (_) {
    // Output didn't appear — return empty string, test will handle it
  }

  const result = await outputBox.inputValue();
  return result.trim();
}

// ── One Playwright test per test case ────────────────────────────────────────
for (const tc of testCases) {
  test(`[${tc.id}] ${tc.input}`, async ({ page }) => {
    const actual = await runTranslation(page, tc.input);

    if (tc.status === "Pass") {
      // PASS: output must exactly match expected Sinhala
      expect(actual, `[${tc.id}] Output should match expected Sinhala`).toBe(
        tc.expected,
      );
    } else {
      // FAIL: output must NOT match expected — proving the system fails
      expect(
        actual,
        `[${tc.id}] System should fail to produce correct output`,
      ).not.toBe(tc.expected);
    }
  });
}
