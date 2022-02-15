namespace Union {
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.empolyeeId, person.work());
  }

  internWork({
    name: 'gunwoo',
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
