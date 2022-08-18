export function slugify(str, options = {
  replacement: '-',
  trim: true,
  lower: true,
  removeDuplicates: true,
}) {
  const methods = {
    trim: (canTrim, str) => {
      if (canTrim) {
        return str.trim();
      }

      return str;
    },
    lower: (canLower, str) => canLower ? str.toLowerCase() : str,
    replacement: (replacement, str) => str.replace(/\s/g, replacement),
    removeDuplicates: (canRemoveDuplicates, str) => canRemoveDuplicates ? str.replace(new RegExp(`\\${options.replacement}\\${options.replacement}+`, 'g'), options.replacement) : str,
  }

  return Object.entries(options).reduce((newStr, [optionName, optionValue]) => {
    return newStr = methods[optionName](optionValue, newStr);
  }, str);
}

export function unslugify(slug, replacement = '-') {
  const regex = new RegExp(`\\${replacement}`, 'g')
  const result = slug.replace(regex, " ");
  
  return result;
}

export function unCamelCase(str) {
  const words = str.match(/[A-Za-z][a-z]*/g) || [];

  return words.join(" ").toLowerCase();
}
