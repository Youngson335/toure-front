function formatNumberWithSpaces(num: number | string): string {    
    const str = num.toString().replace(/\s/g, '');
        
    const parts = [];
    for (let i = str.length; i > 0; i -= 3) {
      parts.unshift(str.substring(Math.max(0, i - 3), i));
    }
        
    return parts.join(' ');
}

export default formatNumberWithSpaces;