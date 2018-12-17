import insertionSort from "./insertion";

describe("Insertion sort", () => {
  it("should sort with positive number", () => {
    expect(insertionSort([5, 3, 2, 6, 4, 1])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should sort with +/-", () => {
    expect(insertionSort([3, 3, -1, 6, -5, 0])).toEqual([-5, -1, 0, 3, 3, 6]);
  });
});
