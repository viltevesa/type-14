const originalText = '   Labas   ,    as   krabas   ! ka tu  ?    ai nk  ,   kimarinu ir tiek   .   ';
const result = originalText
  .trim()
  .replaceAll(/\s+/g, ' ')
  .replaceAll(/\s+([!?.,])/g, '$1')
  .replaceAll(/\s*([!?.])\s*(.)\s*/g, (_, g1, g2) => `${g1} ${g2.toUpperCase()}`);

console.log(originalText);
console.log(result);
