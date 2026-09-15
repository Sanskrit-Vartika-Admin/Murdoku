import re
with open('g:/IDE/New game/DailyMurderSudoku/js/game.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Try to find common language names
targets = ['Hinglish', 'Русский', 'Bengali', 'Nederlands']
for t in targets:
    if t in text:
        print(f"FOUND EXACT: {t}")
    else:
        print(f"NOT EXACT: {t}")

# Check base64
import base64
for t in targets:
    b = base64.b64encode(t.encode('utf-8')).decode('utf-8')
    if b in text:
        print(f"FOUND BASE64: {b}")

# Find any dict-like structures that might be the languages mapping
# The array of languages is likely something like {ru: "Русский", ...}
# We'll just look around "ru" or "tr"
idx = text.find('"ru"')
if idx != -1:
    print("Found '\"ru\"' at", idx, text[idx-50:idx+50])
idx = text.find("'ru'")
if idx != -1:
    print("Found \"'ru'\" at", idx, text[idx-50:idx+50])
