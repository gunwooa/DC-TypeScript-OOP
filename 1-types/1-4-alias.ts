namespace Union {
  /**
   * Type Aliases (새로운 타입 지정 가능)
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'gunwoo',
    age: 30,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let gunwooName: Name;
  gunwooName = 'name';
  type JSON = 'json';
  const josn: JSON = 'json';

  type Boal = true;
}
