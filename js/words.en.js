/*
 * words.en.js — DailyMurderSudoku English dictionary.
 *
 * Loaded as a plain script in the browser (the `gameWords` global) and required in
 * Node through the guarded CommonJS export at the bottom, so wording is measured
 * and audited against exactly the strings the player sees.
 *
 * Id ranges
 *   0-30      GameLib shell strings
 *   100-177   game shell strings
 *   200-299   DailyMurderSudoku interface
 *   300-399   ordinals, directions, edges, pronouns, numbers
 *   400-499   whole-sentence clue templates and descriptor phrases
 *   500-599   predicate fragments
 *   600-699   terrain names
 *   700-799   object names
 *   800-899   trait names
 *   1000+     scene, room and role names authored in sources/scenes.json
 *
 * Templates are raw: `#N` placeholders are substituted by the renderer in a single
 * pass with a function replacer. Never pre-substitute here.
 *
 * Singular trait names (800-819) and object names (700-799) are interpolated into
 * templates that supply a bare `a` — "a #1", "on a #1" — and the template cannot
 * know when English would need "an", so every one of them must begin with a
 * consonant sound (renderer.test.js enforces it). Pick different wording rather
 * than adding an article to the name: the same words appear in article-free
 * templates such as 430.
 */
var gameWords = {
0: 'No',
1: 'Yes',
2: 'Cancel',
3: 'Close',
4: 'Play',
5: 'Pause',
6: 'Continue',
7: 'Help',
8: 'Score',
9: 'Level',
10: 'Menu',
11: 'Music',
12: 'Sound effects',
13: 'Par',
14: 'Please rotate your device',
15: 'Best score',
16: 'Highscores',
17: 'Submit score',
18: 'More games',
19: 'Start new game',
20: 'Continue previous game',
22: 'Reset',
23: 'Click the reset button to completely reset your progress in the game.',
30: 'Toggle fullscreen',

100: 'case',
101: 'Time',
102: 'Hint',
103: 'Restart case',
104: 'How to play Daily Murder Sudoku',

105: '<p>Everyone was in the building: the suspects and one victim. Place every person on the board — the victim too — so that all the clues are true.</p>' +
     '<ul>' +
     '<li>No two people share a row, and no two people share a column.</li>' +
     '<li>The victim’s room holds exactly two people: the victim and one suspect. That suspect is the murderer.</li>' +
     '<li>Each suspect card carries one clue about that suspect.</li>' +
     '</ul>' +
     '<p>Select a person, then tap a cell to pencil their letter as a note, or hold the cell to place them. Once everyone is placed, the verdict comes on its own.</p>',

107: 'Congratulations',
108: 'Next',
109: 'Print today\'s case',
110: 'Are you sure you want to reset this case?',
111: 'retry',
112: 'Date',
114: 'Click the date to select another case.',
115: 'You have made 1 mistake.',
116: 'You have made #1 mistakes.',

117: 'Very Easy',
118: 'Easy',
119: 'Medium',
120: 'Hard',
121: 'Expert',

125: 'Play more games online at http://www.htmlgames.com',
126: 'Daily Murder Sudoku for #1',

130: 'January',
131: 'February',
132: 'March',
133: 'April',
134: 'May',
135: 'June',
136: 'July',
137: 'August',
138: 'September',
139: 'October',
140: 'November',
141: 'December',
142: 'Jan',
143: 'Feb',
144: 'Mar',
145: 'Apr',
146: 'May',
147: 'Jun',
148: 'Jul',
149: 'Aug',
150: 'Sep',
151: 'Oct',
152: 'Nov',
153: 'Dec',
154: 'Sunday',
155: 'Monday',
156: 'Tuesday',
157: 'Wednesday',
158: 'Thursday',
159: 'Friday',
160: 'Saturday',
161: 'Sun',
162: 'Mon',
163: 'Tue',
164: 'Wed',
165: 'Thu',
166: 'Fri',
167: 'Sat',
168: 'Today',
169: 'Daily Murder Sudoku board, #1 by #1',
170: 'Row #1, column #2',
171: 'empty',
172: 'holds #1',
173: 'blocked',
174: 'ruled out',
175: 'room #1',
176: 'suspects',
177: 'clear',

200: 'Daily Murder Sudoku',
201: 'Suspects',
202: 'Victim',
203: 'Clue',
204: 'General clues',
205: 'Tools',
206: 'Place person',
207: 'Rule out cell',
208: 'Eraser',
209: 'Undo',
210: 'Clear all marks',
212: 'Mark rows and columns automatically',
213: 'Select #1',
214: 'Placed',
215: 'That cell is blocked.',
216: 'That row already holds a person.',
217: 'That column already holds a person.',
218: 'That cell is taken.',
219: '#1 of #2 people are in the right place.',
220: 'One of #1 people is in the right place.',
221: 'The murderer is #1.',
222: 'All #1 people are placed.',
// The banner at the moment of the accusation. Like the 247 stamp it stays
// English in every language.
224: 'Case solved',
225: 'Selected #1.',
226: 'Placed #1 on row #2, column #3.',
227: 'Removed #1.',
228: 'Ruled out row #1, column #2.',
229: 'Cleared the mark on row #1, column #2.',
230: 'The board is cleared.',
231: 'Nothing to undo.',
232: 'Undid the last action.',
233: 'Difficulty',
234: 'Room: #1',
235: 'Ground: #1',
236: 'Object: #1',
237: 'Known facts',
238: 'Scene: #1',
239: 'Noted #1 on row #2, column #3.',
240: 'Removed the note for #1.',
241: 'Hold to place; a short tap pencils a note.',
242: 'notes #1',
243: 'Hold (or Shift-click) to clear the whole board.',
244: 'Redo',
245: 'Nothing to redo.',
246: 'Redid the last action.',
// 224 is the banner at the accusation, 247 what the file gets marked afterwards.
// Both stay these English words in every language, as the cast names do.
247: 'Case closed',
// The two roles named on the board itself: 248 tags the murderer's token once the
// case is closed, 249 titles the victim's from the moment they are placed, since
// the dagger alone says nothing to a screen reader.
248: 'Murderer',
249: '#1 — the victim',

250: 'Glossary',
251: 'beside · next to',
252: 'Orthogonally next to a cell of the thing — an object or a patch of ground — and in the same room. Diagonals never count.',
253: 'with',
254: 'In the same room, anywhere in it.',
255: 'alone',
256: 'The only person in their room.',
257: 'alone with',
258: 'Exactly two people in that room: the subject and the one named.',
259: 'north · south · east · west of',
260: 'Rows and columns compared strictly: north means a smaller row, east a larger column. The other axis does not matter.',
261: 'exactly N rows or columns away',
262: 'A precise distance along one axis; the other axis does not matter.',
263: 'on the same diagonal',
264: 'Equal row and column distance apart, in either diagonal direction.',
265: 'walls · corners',
266: 'The walls are the outermost rows and columns. A corner is where two walls meet; away from the walls means touching none of them.',

270: 'Welcome, detective',
271: 'A murder was committed. Everyone who was in the building is on the cards — the suspects and the victim. Place every person on the floor plan so all their statements hold true. Whoever shares the victim\'s room is the murderer.',
272: 'One per row, one per column',
273: 'No two people share a row, and no two people share a column. Placing someone rules out their whole row and column for everyone else, and the board marks those cells with an X for you.',
274: 'Read the statements',
275: 'Each suspect\'s card carries one statement about where they were, and every statement is true. Words like beside, with, and alone have exact meanings — the glossary in Help shows each one with a picture.',
276: 'Notes and placing',
277: 'Select a person, then tap a cell to pencil their letter there as a note. When you are certain, hold the cell instead: a circle draws around it in their color, and they take their place.',
278: 'The tools',
279: 'The X tool marks cells you have ruled out yourself. The eraser clears one cell — or hold it to sweep the whole board clean. The two arrows take back a step and put it back again, and the hint counts your mistakes.',
280: 'Make your accusation',
281: 'Once everyone stands on the board, the verdict begins on its own. Each person is circled — green means right, red means wrong — and if all of them hold, the murderer is unmasked.',
282: 'Skip',
283: 'Back',
284: 'Done',
285: 'Show the tutorial',
286: 'Step #1 of #2',

287: 'Between them, #1 must fill #2 — so no one else can stand there.',
288: '#1 and #2',
289: '#1, #2',
290: 'Focus on #1.',
291: 'The statements that pin #1 down:',
292: 'Follow where the others must stand, and #1 is left exactly one square.',
293: 'That alone leaves #1 exactly one square.',
294: 'Place #1 for me',
295: 'Something on the board contradicts the statements — at least one placement is wrong.',
296: 'Check the board',
297: 'Keep thinking',
298: 'How #1 is pinned down:',
299: 'the #1 rows',

300: 'first',
301: 'second',
302: 'third',
303: 'fourth',
304: 'fifth',
305: 'sixth',
306: 'seventh',
307: 'eighth',
308: 'ninth',
309: 'tenth',
// The column half of 299, parked here because 300-309 are the ordinals.
310: 'the #1 columns',
// 311-313 are the one-person counting step, which 287/299/310 can only say in the
// plural.
311: '#1 can only be in #2 — so no one else can stand there.',
312: 'the #1 row',
313: 'the #1 column',
314: 'Working it out…',
// The wrong accusation's stamp. 315 is the mark and stays these three English
// words in every language, exactly as 247 does: the two stamps share their ink,
// paper and angle. 316 is the terse upper-case label, not the sentence, which
// 219/220 still say in full to the live region.
//
// 317 and 318 are the two buttons and both must name THIS case: word 6,
// 'Continue', reads on 318 as 'on to the next puzzle', and 317 must say that
// clearBoard takes the placements, the crosses AND the notes.
315: 'Case still open',
316: '#1 of #2 correct',
317: 'Clear everything',
318: 'Keep looking',

// The four letters the margin compass draws. Authored per language rather than
// sliced off 330-333, which are whole clue phrases in most dictionaries. Keep them
// in step with 330-333 when a direction word is reworded.
320: 'N',
321: 'S',
322: 'E',
323: 'W',

330: 'north',
331: 'south',
332: 'east',
333: 'west',
334: 'northeast',
335: 'northwest',
336: 'southeast',
337: 'southwest',

340: 'top',
341: 'bottom',
342: 'left',
343: 'right',
344: 'last',

350: 'her',
351: 'his',
352: 'their',

370: 'zero',
371: 'one',
372: 'two',
373: 'three',
374: 'four',
375: 'five',
376: 'six',
377: 'seven',
378: 'eight',
379: 'nine',

400: '#1 was #2.',
401: '#1 was #2 and #3.',
402: '#1 was #2 or #3.',
403: '#1 was #2, but #3.',
// The approved two-atom allowlist: room plus object and room plus named person,
// each curated as one whole sentence, never the generic 401. The room slot is a
// whole locative phrase from 546/547, never a bare room name.
404: '#1 was on #2 #3.',
405: '#1 was next to #2 #3.',
406: '#1 was #2 with #3.',
408: 'No one was in the #1 row.',
409: 'No one was in the #1 column.',
// An empty edge line names the wall, not a row number.
410: 'No one was #1.',

// The last slot in each is a locative phrase from 546/547, not a room name.
430: 'Exactly one #1 was #2.',
431: 'Exactly #1 #2 were #3.',
432: 'At least one #1 was #2.',
433: 'At least #1 #2 were #3.',
434: 'At most one #1 was #2.',
435: 'At most #1 #2 were #3.',
436: 'No one was #1.',
// #2 is a locative phrase from 546/547 and already carries its preposition, so
// this template must not spell one.
437: 'There were no #1 #2.',
440: '#1 was #2.',
442: 'Exactly one person is the #1.',
444: 'people',
445: 'person',

450: 'Known: #1 is the #2.',
451: 'Known: #1 is not the #2.',

460: 'a #1',
461: 'a #1 on #2',
462: 'a #1 #2',
463: 'the #1',
464: 'someone on #1',
465: 'someone #1',
466: 'someone standing on the #1',
467: 'a #1 standing on the #2',

// Both take a locative phrase from 546/547, so the preposition is already in
// the argument: "Ada was in the parlour.", "Ada was not on the terrace."
500: '#1',
501: 'not #1',
502: 'in the #1 row',
503: 'in the #1 column',
504: 'standing on the #1',
505: 'not standing on the #1',
506: 'on #1',
507: 'not on #1',
508: 'next to #1',
509: 'not next to #1',
510: 'alone in #1 room',
511: 'not alone in a room',
512: 'with #1',
513: 'not with #1',
515: '#1 of #2',
516: 'exactly one row north of #1',
517: 'exactly #1 rows north of #2',
518: 'exactly one row south of #1',
519: 'exactly #1 rows south of #2',
520: 'exactly one column east of #1',
521: 'exactly #1 columns east of #2',
522: 'exactly one column west of #1',
523: 'exactly #1 columns west of #2',
// ROOM_CORNER describes the room containing the subject; it does not imply
// that the room belongs to them.
524: 'in a corner of the room',
525: 'the #1',
526: 'not the #1',
527: 'alone with #1',
528: 'alone with the murderer',
529: 'on the same diagonal as #1',
// Posture fragments for standable objects; objects without one fall back to 506.
// 530 has no caller — a chair drawn without arms is sat ON — and is kept for an
// enveloping seat.
530: 'sitting in #1',
531: 'sitting on #1',
532: 'lying on #1',
533: 'in #1',
// Object noun phrases: the renderer picks by how many of the type the scene holds,
// so a one-piano scene says "the piano" and a three-bench scene "a bench".
534: 'the #1',
535: 'a #1',
// The extreme rows and columns read as the walls of the floor plan, never as
// numbered lines. Complete fragments; also interpolated into 410 for empty edge
// lines.
536: 'along the north wall',
537: 'along the south wall',
538: 'along the west wall',
539: 'along the east wall',
540: 'in a corner',
541: 'not in a corner',
542: 'along a wall',
543: 'away from the walls',
// Beside a terrain, mirroring beside-object: adjacent and in the same room.
// With the article, so ground reads as a place: "next to the grass".
544: 'next to the #1',
545: 'not next to the #1',

// The locative phrase for a room: every template that names a room takes the whole
// phrase in that slot rather than spelling "in the #N".
//
// English does not use one preposition for every room, and the template cannot know
// which room fills the slot, so the preposition lives with the room (`prep` in
// scenes.json, defaulting to "in") and `roomIn()` assembles the phrase. A room slot
// therefore looks contentless when a template is read alone, which is what lets a
// language that fuses preposition with article change one slot and not fifteen.
546: 'in the #1',
547: 'on the #1',
// Paucal 'few' variants of the four many-offset templates, chosen by the renderer
// for distances 2-4. Slavic languages pair those counts with a different noun form;
// every other language repeats 517/519/521/523 here.
548: 'exactly #1 rows north of #2',
549: 'exactly #1 rows south of #2',
550: 'exactly #1 columns east of #2',
551: 'exactly #1 columns west of #2',

600: 'bare floor',
601: 'wooden flooring',
602: 'tiles',
603: 'carpet',
604: 'stone',
605: 'gravel',
606: 'grass',
607: 'sand',
608: 'soil',
609: 'water',
610: 'snow',

700: 'chair',
701: 'bench',
702: 'stool',
703: 'bed',
704: 'hammock',
705: 'horse',
706: 'rowboat',
707: 'swing',
708: 'table',
709: 'desk',
710: 'cabinet',
711: 'dresser',
712: 'plant',
713: 'rock',
714: 'barrel',
715: 'crate',
716: 'statue',
717: 'fountain',
718: 'stove',
719: 'piano',
720: 'well',
721: 'cart',
722: 'log',
723: 'haystack',
724: 'blacksmith\'s anvil',
725: 'safe',

800: 'woman',
801: 'man',
802: 'child',
803: 'grey-haired person',
804: 'person wearing a hat',
805: 'person wearing glasses',
806: 'person in a coat',
807: 'person in boots',
808: 'person wearing gloves',
809: 'person wearing a scarf',

820: 'women',
821: 'men',
822: 'children',
823: 'grey-haired people',
824: 'people wearing hats',
825: 'people wearing glasses',
826: 'people in coats',
827: 'people in boots',
828: 'people wearing gloves',
829: 'people wearing scarves',

// The same ten traits as a bare tag, for the line under a suspect's name. Bare
// nouns, not the phrased versions: at nine suspects the column is 138px. They stay
// the nouns the clues use, so a player matches the card by sight rather than by
// translation — which is also why the other eight are not icons.
//
// 843 is the longest tag, so a longer one reopens the width question for the
// combinations that carry no gender trait.
//
// 840 and 841 are the exception to the no-icons rule: the card draws the gender
// glyphs and uses these words as their accessible names.
840: 'woman',
841: 'man',
842: 'child',
843: 'grey hair',
844: 'hat',
845: 'glasses',
846: 'coat',
847: 'boots',
848: 'gloves',
849: 'scarf'

};

if (typeof module === 'object' && module.exports) {
    module.exports = gameWords;
}
