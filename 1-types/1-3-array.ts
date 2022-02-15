namespace Union {
  // Array
  const fruits: string[] = ['🍎', '🍌'];
  const scroes: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['gunwoo', 30];
  student[0]; // -> name
  student[1]; // -> 123
  const [name, age] = student;
}
