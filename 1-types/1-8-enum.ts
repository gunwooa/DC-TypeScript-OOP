namespace Union {
  /**
   * Enum
   * - 여러가지에 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입
   * - 타입이 정확하게 보장되지가 않는다.
   */
  // JS
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TS
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Wednesday';
}
