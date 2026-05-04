# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: singlish.test.js >> [Pos_Fun_0003] ikmanata enna, api lateyi.
- Location: singlish.test.js:413:3

# Error details

```
Test timeout of 30000ms exceeded.
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
              - textbox "Type your English text here…" [ref=e49]: ikmanata enna, api lateyi.
              - generic: 26/450
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