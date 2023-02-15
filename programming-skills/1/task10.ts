function areAlmostEqual(s1: string, s2: string): boolean {
  const diffs: string[] = [];

  for (let i = 0; i < s1.length; i++) {
    if (diffs.length > 2) return false;
    if (s1[i] !== s2[i]) {
      if (diffs.length === 0) diffs.push(`${s1[i]}${s2[i]}`);
      else diffs.push(`${s2[i]}${s1[i]}`);
    }
  }

  return (diffs.length === 2 && diffs[0] === diffs[1]) || diffs.length === 0;
}

console.log(areAlmostEqual('aa', 'ac'));
