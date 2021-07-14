import { validateSequence } from './validate-sequence.util';

describe('validateSequence', () => {
  test('returns true for an 81 character sequence string of tokens 1-9 and dash', () => {
    const sequence1 =
      '92634---1--17--3-9-738--2-6-----7----6-91-42--972--6-3-8-47-1-27-4162--8---53----';

    const sequence2 =
      '926345871851726349473891256342687915568913427197254683685479132734162598219538764';

    expect(validateSequence(sequence1)).toBe(true);
    expect(validateSequence(sequence2)).toBe(true);
  });

  test('returns false if the sequence contains invalid characters', () => {
    const sequence1 =
      '00034---1--17--3-9-738--2-6-----7----6-91-42--972--6-3-8-47-1-27-4162--8---53----';

    const sequence2 =
      '000345871851726349473891256342687915568913427197254683685479132734162598219538764';

    expect(validateSequence(sequence1)).toBe(false);
    expect(validateSequence(sequence2)).toBe(false);
  });

  test('returns false if the sequence is the wrong length', () => {
    const sequence1 =
      '92634---1--17--3-9-738--2-6-----7----6-91-42--972--6-3-8-47-1-27-4162--8---53---';

    const sequence2 =
      '9263458718517263494738912563426879155689134271972546836854791327341625982195387641';

    expect(validateSequence(sequence1)).toBe(false);
    expect(validateSequence(sequence2)).toBe(false);
  });

  test('returns false for incorrect data types', () => {
    expect(validateSequence(undefined)).toBe(false);
    expect(validateSequence(null)).toBe(false);
    expect(validateSequence(['abc'])).toBe(false);
    expect(validateSequence(123)).toBe(false);
    expect(validateSequence(true)).toBe(false);
  });
});