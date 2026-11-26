type CheckArgs = {
  l: number;
  r: number;
  s: string;
};

const check = ({ l, r, s }: CheckArgs) => {
  for (; l >= 0 && r < s.length; l--, r++) {
    if (s[l] !== s[r]) break;
  }

  return { l: l + 1, r: r - 1, length: r - l };
};

function longestPalindrome(s: string): string {
  let longest: { l: number; r: number; length: number } = {
    l: 0,
    r: 0,
    length: 0,
  };

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = check({
      l: i - 1,
      r: i + 1,
      s,
    });

    const evenPalindrome = check({ l: i, r: i + 1, s });

    const currentPalindrome =
      evenPalindrome.length > oddPalindrome.length
        ? evenPalindrome
        : oddPalindrome;

    longest =
      currentPalindrome.length > longest.length ? currentPalindrome : longest;
  }

  return s.slice(longest.l, longest.r + 1);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("abb"));
