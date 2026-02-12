/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */
export function getChaiOrderLength(order) {
  if (typeof order !== 'string') {
    return -1;
  }
  const order_trimmed = order.trim();
  if (order_trimmed === '') {
    return 0;
  }
  const order_length = order_trimmed.length;

  return order_length;
}

export function shoutChaiOrder(order) {
  if (typeof order !== 'string') {
    return '';
  }
  const trimmed_order = order.trim();
  if (trimmed_order === '') {
    return '';
  }
  const uppercase_order = trimmed_order.toUpperCase();

  return uppercase_order;
}

export function whisperChaiOrder(order) {
  if (typeof order !== 'string') {
    return '';
  }

  const trimming_order = order.trim();
  if (trimming_order === '') {
    return '';
  }

  const lowercase_order = trimming_order.toLowerCase();
  return lowercase_order;
}

export function hasSpecialIngredient(order, ingredient) {
  if (typeof order !== 'string' || typeof ingredient !== 'string') {
    return false;
  }

  const trimming_specialorder = order.trim();
  const trimming_ingredient = ingredient.trim();

  if (trimming_specialorder === '' || trimming_ingredient === '') {
    return false;
  }

  const final_special_order = trimming_specialorder
    .toLowerCase()
    .includes(trimming_ingredient.toLowerCase());

  return final_special_order;
}

export function getFirstAndLastChar(order) {
  // Your code here

  if (typeof order !== 'string') {
    return null;
  }

  const trimmed = order.trim();

  if (trimmed === '') {
    return null;
  }

  const first = trimmed.charAt(0);
  const last = trimmed.charAt(trimmed.length - 1);

  return { first, last };
}
