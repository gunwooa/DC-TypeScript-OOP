namespace Union {
  /**
   * Type Inference
   * 타입추론 쓰지마
   */
  let text = 'hello';
  text = 1;

  function print(message = 'hello') {
    console.log(message);
  }
  print('heelo');
  print(1);

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
