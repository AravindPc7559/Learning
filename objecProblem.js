const arr = ['apple', 'orange', 'banana', 'cherry']
const arr2 = ['apple2', 'orange2', 'banana2', 'cherry2']

var conCat = arr.concat(arr2)
console.log(conCat)

const prr = [202, 222, 53, 23]

const output = arr.map((item, index) => {
  return {
    name: item,
    type: 'Fruit',
    price: prr[index],
  }
})

console.log(output)

const data = [
  {
    car: 'honda city',
    company: 'Honda',
    price: 200,
  },
  {
    car: 'i5',
    company: 'Bmw',
    price: 300,
  },
  {
    car: 'honda city',
    company: 'Honda',
    price: 200,
  },
  {
    car: 'honda city',
    company: 'Nissan',
    price: 200,
  },
  {
    car: 'i5',
    company: 'Bmw',
    price: 200,
  },
  {
    car: 'Mustang',
    company: 'Ford',
    price: 200,
  },
]

const x = (item) => {
  return data.filter((items) => items.company === item)
}

const filterCar = x('Honda')

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let temp = 0

const reverse = (num) => {
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = num.length - 1; j >= 0; j--) {
      if (num[j] > num[i]) {
        temp = num[i]
        num[i] = num[j]
        num[j] = temp
      }
    }
  }
  return num
}

const out = reverse(nums)

console.log(out)

const obj1 = {
  name: 'John',
  age: 30,
}

const obj2 = {
  name: 'Aravind',
  age: 22,
}

const obj3 = {
  name: 'Akshay',
  age: 27,
}

function handleObj(place, country) {
  console.log(
    'My name is ' +
      this.name +
      ' and I am ' +
      this.age +
      ' years old' +
      ' in ' +
      place +
      ' and ' +
      country,
  )
}

handleObj.call(obj1, 'Kerala', 'India')

handleObj.apply(obj2, ['Kerala', 'India'])

const bind = handleObj.bind(obj3, 'Kerala', 'India')

bind()

const name = ['Aravind', 'Akshay', 'Arjun']

console.log(name.join(''))

const num = 1

console.log(num.valueOf())

const val = 'Iam  Aravind'

console.log('Hai ' + val.repeat(3) + ' ')

console.log(name.includes('Aravind'))

const text = 'Hai iam aravind iam a web developer'

const word = 'developer'
const index = 6

console.log(
  `the word "${word}" ${text.includes(word) ? 'is' : 'not'} in the text `,
)

console.log(
  `Using an index of ${index} the character returned is ${text.at(index)}`,
)

const texxt = 'Hai    '

console.log(texxt.indexOf(0))

console.log(text.concat(' ' + word + '  ' + texxt))

console.log(2 + 2)

const demo = [
  {
    name: 'Test1',
    arr: [
      {
        name: 'test1demo',
      },
    ],
  },
  {
    name: 'Test2',
  },
  {
    name: 'Test3',
    arr: [
      {
        name: 'test3demo',
      },
    ],
  },
]

let arrr = {}

demo.map((item, index) => {
  if (item.arr) {
    item.arr.map((item) => {
      arrr = {
        ...arrr,
        [item.name]: item.name,
      }
    })
  }

  arrr = {
    ...arrr,
    [item.name]: item.name,
  }
})

console.log(arrr)

var library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 3,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 2,
  },
]

const outputLibrary = library.sort((a, b) =>
  a.libraryID > b.libraryID ? -1 : 1,
)

console.log(outputLibrary)

const numm = [3,4,6,7,4,8,0,12,55,64,74]

function rr(val) {
  let length = val.length - 1
  let temps

  for (let i = 0; i < length; i++) {
    for (let j = length; j >= length; j--) {
        temp = val[j]
        val[j] = val[i]
        val[i] = temp
    }
    length = length -1;
  }


  return val
}

const rrrr = rr(numm)

console.log(rrrr)
