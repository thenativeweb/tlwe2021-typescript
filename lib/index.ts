console.log('Hello World!');

const aNumber = 123;

const anOtherNumber = aNumber * aNumber;

const aRandomNumber = Math.random();

const aString = 'Hallo';

const anArray: number[] = [];
anArray.push(1);

const someJson = '{ "test": 123 }'

const getData = function (): { test: number } {
  return JSON.parse(someJson);
}
const data = getData();





let personName: string;
personName = 'Peter';

const someArray: number[] = [];
someArray.push(123);



const isEven = function (aNumber: number): boolean {
  return aNumber % 2 === 0;
}

type NumberPredicate = (item: number) => boolean;

const filterNumber = function (
  items: number[],
  predicate: NumberPredicate
): number[] {
  const filteredItems: number[] = [];

  for (const item of items) {
    if(predicate(item)) {
      filteredItems.push(item);
    }
  }

  return filteredItems;
}



class Circle {
  public radius: number;

  public constructor({ radius }: { radius: number; }) {
    this.radius = radius;
  }

  public get diameter (): number {
    return this.radius * 2;
  }
}

const circle = new Circle({ radius: 10 });
console.log(circle.diameter);
console.log(circle.radius);

interface Rectangle {
  width: number;
  height: number;
}

const rectangle: Rectangle = {
  width: 10,
  height: 20
};

class Square {
  public size: number;

  public constructor({ size }: { size: number; }) {
    this.size = size;
  }

  public get height (): number {
    return this.size;
  }

  public get width (): number {
    return this.size;
  }

}

interface Cuboid extends Rectangle {
  depth: number;
}

const cuboid: Cuboid = {
  depth: 1,
  height: 1,
  width: 1
}

interface Named {
  name: string;
}

interface Location {
  address: string;
}

interface PointOfInterest extends Named, Location {}

const id = function (rect: Rectangle): Rectangle {
  return rect;
}

interface foo {
  bar: number;
}
interface foo2 {
  bar: 123;
}

id(new Square({ size: 1}));


interface Person {
  name: string;
}

interface PointOfInterest {
  name: string;
  address: string;
}

interface Museum {
  kind: 'museum';
  name: string;
  address: string;
}

interface Cinema {
  kind: 'cinema';
  name: string;
  address: string;
}



interface UserProfile {
  username: string;
  legalName?: {
    givenName: string;
    lastName: string;
  };
  address?: {
    country?: {
      code: string;
      name: string;
    }
  }
}
const myProfile: UserProfile = { username: 'strangedev' };

const myGivenName = myProfile.legalName?.givenName ?? myProfile.username;


const getGreeting = function (name: string): string {
  return `Hey ${name}!`;
}

console.log(getGreeting(myGivenName));

const maybeANumber = function (): number | undefined {
  if (Math.random() > 0.5) {
    return 1;
  }
}

/*const myAddress = myProfile.address;
let myCountry = undefined;
if (myAddress) {
  myCountry = myAddress.country;
}
let myCountryCode = undefined;
if (myCountry) {
  myCountryCode = myCountry.code;
}*/

const myCountryCode = myProfile.address?.country?.code;

interface Foobar {
  func?: () => string;
  arr?: number[];
}

const foobar: Foobar = {};
const result1 = foobar.func?.();
const result2 = foobar.arr?.[0];



/*interface Cat {
  meow: () => void;
}*/

type Cat = {
  meow: () => void;
};


type Positionable = {
  x: number;
  y: number;
};

type Scalable = {
  scale: number;
};

type Triangle = Positionable & Scalable & {
  sideLength: number;
};

const triangle: Triangle = {
  x: 0,
  y: 0,
  scale: 1,
  sideLength: 1
};

//triangle instanceof Triangle

/*interface Triangle extends Positionable, Scalable {
  sideLength: number;
}*/

interface MaybeX {
  x?: number;
}

interface DefinitelyX {
  x: number;
}
// Fehler!
/*interface WhatHappensWithX extends MaybeX, DefinitelyX {

}*/

type WhatHappensWithX = MaybeX & DefinitelyX;
const barbaz: WhatHappensWithX = {
  x: 123
};

type X = string & number;

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type HexChar = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
type HexDigit = Digit | HexChar;

type ColorCode = `#${HexDigit}${HexDigit}${HexDigit}`;
type LimitedNumber = `${Digit}${Digit}`;

type IntegerColumnType = 'integer';
type TextColumnType = 'text';
type BooleanColumnType = 'boolean';
type VarcharColumnType = `varchar(${number})`;

type ColumnType = 
  | IntegerColumnType
  | TextColumnType
  | BooleanColumnType
  | VarcharColumnType;

interface Table {
  columns: {
    type: ColumnType;
  }[];
}

const table: Table = {
  columns: [
    {
      type: 'varchar(180)'
    }
  ]
}

interface FetchResult {
  kind: 'FetchResult';
  statusCode: number;
  data: any;
}

interface FetchError {
  kind: 'FetchError';
  statusCode: number;
  error: string;
}

const fetchSomething = function (): FetchResult | FetchError {
  /* ... */

  return {
    kind: 'FetchError',
    statusCode: 400,
    error: 'Bad request'
  };
}

const result = fetchSomething();
console.log(result.statusCode);

/*if (result.kind === 'FetchError') {
  console.error(`An error occured while fetching. ${result.error}`);

  throw new Error(result.error);
}
console.log(result.data);*/






type LinkedList<TData> = {
  data?: TData;
  next?: LinkedList<TData>;
};

const linkedList: LinkedList<string> =
  { data: 'foo', next: { data: 'bar', next: undefined } };
const listOfNumber: LinkedList<number> = {
  data: 0,
  next: {
    data: 1,
    next: {
      data: 2
    }
  }
}

const append = function <TData> (
  list: LinkedList<TData>,
  item: TData): void {
  let head = list;

  while (head.data !== undefined) {
    if (!head.next) {
      head.next = {};
    }

    head = head.next;
  }

  head.data = item;
}

append(listOfNumber, 42);

console.log(JSON.stringify({ listOfNumber }, null, 2));

append(linkedList, 'test');

console.log(JSON.stringify({ linkedList }, null, 2));


type Id = string;
interface Identifiable {
  id: Id;
}

class ItemCache<TItem extends Identifiable> {
  protected cache = new Map<Identifiable['id'], TItem>();

  public put (item: TItem) {
    this.cache.set(item.id, item);
  }

  public get (id: Identifiable['id']): TItem | undefined {
    return this.cache.get(id);
  }
}

interface Customer extends Identifiable {
  name: string;
}

const cache = new ItemCache<Customer>();
const customer = {
  id: 'acme',
  name: 'acme corp'
};

cache.put(customer);

// ...

const cachedCustomer = cache.get('acme');
if (cachedCustomer !== undefined) {
  console.log(cachedCustomer.name);
}
