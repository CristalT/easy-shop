export const wordLimit = function(text, limit = 5) {
  const splittedText = text.split(' ');

  let limited = '';

  for (let i = 0; i <= limit; i++) {
    const word = splittedText[i]
    if (word) {
      limited += word + ' ';
    }
  }

  if (limit < splittedText.length) {
    limited += '...';
  }

  return limited;
};

export const numberFormat = function(value, loc = 'es-AR') {
  return new Intl.NumberFormat(loc, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

export const round = function(value, digits = 2) {
  let d = '';
  for (let i = 1; i <= digits; i++) {
    d += '0';
  }
  const m = 1 + d;
  return Math.round(value * m) / m;
};
