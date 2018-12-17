import Benchmark from "benchmark";
import insertionSort from "./insertion";

let suite = new Benchmark.Suite();

suite
  .add("insertion sort", () => insertionSort([5, 3, 2, 6, 4, 1]))
  .add("native sort", () => [5, 3, 2, 6, 4, 1].sort((a, b) => a - b))
  .on("cycle", (event: Event) => console.log(String(event.target)))
  .run({ async: true });
