String.prototype.escapeHTML = function() {
  return this.
    replace(/&/g, "&amp;").
    replace(/</g, "&lt;").
    replace(/>/g, "&gt;").
    replace(/\"/g, "&quot;");
};

console.log("<&>".escapeHTML()); // -> "&lt;&amp;&gt;"

