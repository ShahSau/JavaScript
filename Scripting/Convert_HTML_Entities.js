/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */
function convertHTML(str) {
    let str2=str.replace(/&/g, '&amp;');
    let str3=str2.replace(/</g,'&lt;')
    let str4=str3.replace(/>/g,'&gt;')
    let str5=str4.replace(/"/g,'&quot;')
    let str6=str5.replace(/'/g,'&apos;')
    return str6
  }