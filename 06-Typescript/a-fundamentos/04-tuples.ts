// =============================================
// ============= Tuples ======================
// =============================================

// Tuple con dos elementos
let tuple: [number, string] = [1, 'John'];

// Real uses

// RGB
let rgb: [number, number, number] = [255, 0, 0];

// Coordinates
type Coordinates = [latitude: number, longitude: number];
let coordinates: Coordinates = [10.45, 20.45];

// Range of values
type Ranges = [min: number, max: number];
let myRange: Ranges = [18, 65]; // [min, max]

// useState from React
type countState = [number, (value: number) => void];
// let [count, setCount]: countState = useState(0);

// Tuples and rest elements
type stringAndNumbers = [string, ...number[]]
let myStringAndNumbers: stringAndNumbers = ['Hello', 1, 2, 3, 4, 5];
const [text, firstNumber, ...restNumbers] = myStringAndNumbers;

type Config = readonly [server: string, port: number, username: string, password: string];
let myConfig: Config = ['localhost', 3000, 'myusername', 'mypassword'];