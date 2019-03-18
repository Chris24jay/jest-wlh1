import {update, add} from './AppLogic';

describe('Making sure the library works', () => {
  test('Jest works', () => {
    expect('string').toBe('string');
    // ===
    expect(2).toBe(2);
  })
})

describe("Going over matchers", () => {
  beforeAll(()=> {
    // setup a connection to a mock db
  })
  test.skip("other comparisons", () => {
    // !==
    expect(2).not.toBe(4);
    expect({ age: 4 }).toEqual({ age: 4 });
    // {name: 'beth'} === {name:'beth'}
    var b = 2;
    var c = b;
    c++;

    b; // 2
    c; // 3
    var d = {
      cat: "fluffy"
    };
    var f = d;
    f.cat = "not fluffy";
    d; // {cat: 'not fluffy'}
    f; // {cat: 'not fluffy'}
  });

  test("Number comparisons", () => {
    expect(2).toBeGreaterThan(1);
    expect(4).toBeGreaterThanOrEqual(4);
    expect(4).toBeGreaterThanOrEqual(3);
    expect(3).toBeLessThan(4);
    expect(2).toBeLessThanOrEqual(2);
    expect(2).toBeLessThanOrEqual(5);
  });

  test("misc", () => {
    let pizza = 2;
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(pizza).toBeDefined();
    expect("something").toBeTruthy();
    expect(null).toBeFalsy();
  });
});

describe('update tests', () => {

  test('returns a truthy value', () => {
    let result = update();
    expect(result).toBeTruthy();
  })
})


describe('test driven', () => {
  test('it should exist', () => {
    expect(add).toBeDefined();
  })
  test('it should return a number', () => {
    let result = add();
    expect(typeof result).toBe('number');
  })
  test('it should return the sum when passed two numbers', () => {
    let result = add(1, 2);
    expect(result).toBe(3);
  })
  test('it should return 0 if passed a boolean', () => {
    let result = add(true, 9);
    expect(result).toBe(0);
  })
  test('it should return 0 if passsed NaN', ()=> {
    let result = add(NaN, 9);
    expect(result).toBe(0);
  })
})