# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: singlish.test.js >> [Pos_Fun_0017] api ada lunch kaala, passe shop ekata gihin amutu.
- Location: singlish.test.js:413:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.inputValue: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - button "PixelsSuite" [ref=e7] [cursor=pointer]
      - generic [ref=e8]:
        - button "Document Converter ▾" [ref=e10] [cursor=pointer]
        - button "Editor ▾" [ref=e12] [cursor=pointer]
        - button "Resize ▾" [ref=e14] [cursor=pointer]
        - button "Crop ▾" [ref=e16] [cursor=pointer]
        - button "Compress ▾" [ref=e18] [cursor=pointer]
        - button "Image Converter ▾" [ref=e20] [cursor=pointer]
        - button "Transliteration ▾" [ref=e22] [cursor=pointer]
        - button "More ▾" [ref=e24] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e27]:
        - iframe [ref=e29]:
          
        - iframe [ref=e31]:
          
      - generic [ref=e33]:
        - generic [ref=e36]:
          - generic [ref=e38]:
            - generic [ref=e39]:
              - generic [ref=e40]: Input (English)
              - generic [ref=e41]:
                - button "Undo" [ref=e42] [cursor=pointer]:
                  - img [ref=e43]
                - button "Redo" [disabled] [ref=e45]:
                  - img [ref=e46]
            - generic [ref=e48]:
              - textbox "Type your English text here…" [ref=e49]: api ada lunch kaala, passe shop ekata gihin amutu.
              - generic: 50/450
            - generic [ref=e51]:
              - button "Transliterating…" [disabled] [ref=e52]
              - button "Clear" [disabled] [ref=e53]: 🗑️ Clear
          - generic [ref=e55]:
            - generic [ref=e56]: Output (Sinhala)
            - textbox "Transliterated Sinhala will appear here…" [ref=e57]
          - iframe [ref=e59]:
            
        - iframe [ref=e62]:
          
      - generic [ref=e64]:
        - iframe [ref=e66]:
          
        - iframe [ref=e68]:
          
  - contentinfo [ref=e69]:
    - generic [ref=e71]:
      - generic [ref=e72]: PixelsSuite ©2026
      - navigation [ref=e73]:
        - link "About Us" [ref=e74] [cursor=pointer]:
          - /url: /about
        - link "Contact" [ref=e75] [cursor=pointer]:
          - /url: /contact
        - link "Privacy Policy" [ref=e76] [cursor=pointer]:
          - /url: /privacy
        - link "Terms of Service" [ref=e77] [cursor=pointer]:
          - /url: /terms
        - link "Disclaimer" [ref=e78] [cursor=pointer]:
          - /url: /disclaimer
```

# Test source

```ts
  307 |     expected: "ඒ ගසේ උස මීටර් 12k විතර වගේ වෙනවා.",
  308 |   },
  309 | 
  310 |   {
  311 |     id: "Neg_Fun_0014",
  312 |     status: "Fail",
  313 |     input: "mama heta 3kg withara payin giyaa.",
  314 |     expected: "මම හෙට 3kg විතර පයින් ගියා.",
  315 |   },
  316 | 
  317 |   {
  318 |     id: "Neg_Fun_0015",
  319 |     status: "Fail",
  320 |     input: "me link eka balanna: https://sliit.lk, godak important.",
  321 |     expected: "මේ link එක බලන්න: https://sliit.lk, ගොඩක් important.",
  322 |   },
  323 | 
  324 |   {
  325 |     id: "Neg_Fun_0016",
  326 |     status: "Fail",
  327 |     input: "mata me address ekata message ewanna: kasun99@gmail.com",
  328 |     expected: "මට මේ address එකට message එවන්න: kasun99@gmail.com",
  329 |   },
  330 | 
  331 |   {
  332 |     id: "Neg_Fun_0017",
  333 |     status: "Fail",
  334 |     input: "mama godak dhukkha 😢 oya awa nahe nisa.",
  335 |     expected: "මම ගොඩක් දුක්ක 😢 ඔයා ආවේ නෑ නිසා.",
  336 |   },
  337 | 
  338 |   {
  339 |     id: "Neg_Fun_0018",
  340 |     status: "Fail",
  341 |     input: "ado bro 🔥 uba mara katak kala 😂 chappi.",
  342 |     expected: "අදෝ බ්‍රො 🔥 උඹ මාර කටක් කළා 😂 ශප්පි.",
  343 |   },
  344 | 
  345 |   {
  346 |     id: "Neg_Fun_0019",
  347 |     status: "Fail",
  348 |     input: "mokakd oya kranne, mata dhannne nehe.",
  349 |     expected: "මොකක්ද ඔයා කරන්නේ, මට දන්නේ නෑ.",
  350 |   },
  351 | 
  352 |   {
  353 |     id: "Neg_Fun_0020",
  354 |     status: "Fail",
  355 |     input: "@Tharindu ayya, oya ada online innawada?",
  356 |     expected: "@Tharindu අයියා, ඔයා අද online ඉන්නවාද?",
  357 |   },
  358 | ];
  359 | 
  360 | // ── Helper function ───────────────────────────────────────────────────────────
  361 | async function runTranslation(page, inputText) {
  362 |   await page.goto("https://www.pixelssuite.com/chat-translator");
  363 | 
  364 |   // Wait for page to fully load
  365 |   await page.waitForLoadState("networkidle");
  366 | 
  367 |   // Select Chat Sinhala mode if the button exists
  368 |   try {
  369 |     const chatBtn = page.locator("text=Chat Sinhala").first();
  370 |     await chatBtn.waitFor({ timeout: 3000 });
  371 |     await chatBtn.click();
  372 |     await page.waitForTimeout(500);
  373 |   } catch (_) {
  374 |     // Already on Chat Sinhala or not found — continue
  375 |   }
  376 | 
  377 |   // Get the input textarea (first one) and clear it completely
  378 |   const inputBox = page.locator("textarea").first();
  379 |   await inputBox.waitFor({ timeout: 5000 });
  380 |   await inputBox.click();
  381 |   await page.keyboard.press("Control+A");
  382 |   await page.keyboard.press("Backspace");
  383 |   await page.waitForTimeout(300);
  384 | 
  385 |   // Type the input text character by character to trigger real-time events
  386 |   await inputBox.pressSequentially(inputText, { delay: 30 });
  387 | 
  388 |   // Click the Transliterate button
  389 |   await page.locator("button.btn").first().click();
  390 | 
  391 |   // Wait for output textarea to have a non-empty value (up to 10 seconds)
  392 |   const outputBox = page.locator("textarea").nth(1);
  393 |   await outputBox.waitFor({ timeout: 5000 });
  394 | 
  395 |   try {
  396 |     await page.waitForFunction(
  397 |       () => {
  398 |         const textareas = document.querySelectorAll("textarea");
  399 |         return textareas[1] && textareas[1].value.trim().length > 0;
  400 |       },
  401 |       { timeout: 10000 },
  402 |     );
  403 |   } catch (_) {
  404 |     // Output didn't appear — return empty string, test will handle it
  405 |   }
  406 | 
> 407 |   const result = await outputBox.inputValue();
      |                                  ^ Error: locator.inputValue: Target page, context or browser has been closed
  408 |   return result.trim();
  409 | }
  410 | 
  411 | // ── One Playwright test per test case ────────────────────────────────────────
  412 | for (const tc of testCases) {
  413 |   test(`[${tc.id}] ${tc.input}`, async ({ page }) => {
  414 |     const actual = await runTranslation(page, tc.input);
  415 | 
  416 |     if (tc.status === "Pass") {
  417 |       // PASS: output must exactly match expected Sinhala
  418 |       expect(actual, `[${tc.id}] Output should match expected Sinhala`).toBe(
  419 |         tc.expected,
  420 |       );
  421 |     } else {
  422 |       // FAIL: output must NOT match expected — proving the system fails
  423 |       expect(
  424 |         actual,
  425 |         `[${tc.id}] System should fail to produce correct output`,
  426 |       ).not.toBe(tc.expected);
  427 |     }
  428 |   });
  429 | }
  430 | 
```