## Specs

```
Describe: pigLatinize();
Test: 'It will add 'way' to the end of words that begin with a vowel'
Code: pigLatinize('a');
Expected Output: 'away'

Test: 'For words beginning with one or more consonants, it will move all first consecutive consonants to the end and add (ay)'
Code: pigLatinize('code');
Expected Output: 'odecay'

Test: 'For words that begin with (qu), move to the end of the word and add (ay)'
Code: pigLatinize('quick');
Expected Output: 'ickquay'

Test: 'For words that have (qu), but do not begin with it, move first letter to end of the word and add (ay)'
Code: pigLatinize('squeal');
Expected Output: 'quealsay'
```

