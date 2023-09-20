import mockData from "./MOCK_DATA.js";

const needleList = [
  "d462bb76-81ee-46af-9fdb-ebfe53a93d3f",
  "6df55f86-e3f5-4d7b-9cd5-906d8d7e804a",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "be77abf7-29b0-4ed1-9379-f5d7576cb5ce",
  "3c511860-d159-457d-8374-e8205904e6f5",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "9c4a0320-1d82-4a46-83b3-511ddffb7ee6",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "be77abf7-29b0-4ed1-9379-f5d7576cb5ce",
  "3c511860-d159-457d-8374-e8205904e6f5",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "d462bb76-81ee-46af-9fdb-ebfe53a93d3f",
  "6df55f86-e3f5-4d7b-9cd5-906d8d7e804a",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
];

// Straight search
function straightSearch(needle, haystack) {
  const results = [];
  for (const item of haystack) {
    if (item.sku === needle) {
      results.push(item);
    }
  }
  return results;
}

// Binary search
function binarySearch(needle, haystack) {
  const results = [];
  let left = 0;
  let right = haystack.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sku = haystack[mid].sku;

    if (sku === needle) {
      results.push(haystack[mid]);
    }

    if (sku <= needle) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return results;
}

console.log("Performance Results:");

for (const needle of needleList) {
  console.log(`Search of SKU: ${needle}`);

  console.time("Straight search");
  const straightResults = straightSearch(needle, mockData);
  console.timeEnd("Straight search");

  console.time("Binary search");
  const sortedData = mockData
    .slice()
    .sort((a, b) => a.sku.localeCompare(b.sku));
  const binaryResults = binarySearch(needle, sortedData);
  console.timeEnd("Binary search");

  console.log("Straight search result:", straightResults);
  console.log("Binary search result:", binaryResults);
}
