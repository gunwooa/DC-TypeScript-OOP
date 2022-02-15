namespace Union {
  function checkNotNullBad(arg: number | null): number {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  /**
   * - <> 내부의 값은 아무거나 해도 되지만 통상적으로 T 를 사용함.
   * - 사용하는 사람이 어떤 타입인지 결정 가능, 코딩 중 타입 보장 가능
   */
  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  const boal2 = checkNotNull<boolean>(true);
}
