function getLength(input: string | string[] | null) {
    if (input && typeof input === "object") {
      return input.length;
    } else if (typeof input === "string") {
      // Input is a string
      return input.length;
    }
    // Input is null or not handled
    return 0;
  }
  
  
  
  function normalizeTags(input: string | string[] | null): string[] {
    if (input && Array.isArray(input)) {
      return input;
    } else if (typeof input === "string") {
      return [input];
    }
    // Return an empty array if input is null or undefined
    return [];
  }
  
  console.log(normalizeTags("new"));              // Output: ["new"]
  console.log(normalizeTags(["sale", "popular"])); // Output: ["sale", "popular"]
  console.log(normalizeTags(null));                // Output: []
  