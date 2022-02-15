namespace Union {
  type Video = {
    title: string;
    author: string;
  };

  // 💩
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  /**
   * - map 타입을 활용하면, 기존의 타입을 다른 형태로 변환할 수 있다.
   */
  // [1, 2].map(item => item * item); // [1, 4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };
  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'gunwoo',
  };
  // video.author = 'minji'; // error

  type Nullable<T> = { [P in keyof T]: T[P] | null }; // null 이 가능하도록 하는 타입
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  /**
   * 공식 문서에서 복사한 코드
   * - 이렇게 Proxify라는 타입은 전달되서 어떤 오브젝트를 빙글빙글 돌면서
   * - 타입을 이렇게 Proxy라는 타입으로 한 단계 감싸는 역할을 해준다.
   */
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
