//DNA

function DNAStrand(dna) {
 let arr = dna.split('');
 let obj = {
  'A': 'T',
  'G': 'C',
  'C': 'G',
  'T': 'A'
 };
 let res = '';

 // for (let i of arr) {
 //  if (obj[i]) {
 //   i = obj[i];
 //  }
 //  res += i;
 // }

 res = arr.reduce((cnt, item) => { return cnt += item = obj[item] }, '')

 return res;
}


console.log(DNAStrand("AAAA"));//,"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC"));//,"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT"));//,"CATA","String GTAT is")