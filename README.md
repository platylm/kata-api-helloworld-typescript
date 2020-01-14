# Kata-Typescript
# โจทย์
```
API -> HELLO WORLD
```

# init project

## init package
```
npm init
```

## install typescript
```
npm install -s typescript
```

## install jest cli
```
npm install --save-dev jest-cli @types/jest
```

## init tsconfig
```
add tsc infile package.json
{
    ...
    "scripts": {
    "test": "jest",
    "tsc": "tsc"
    },
    ...
}
```

## install tsc
```
npm run tsc -- --init
```

## set tsconfig
uncomment and set path file tsconfig.json
```
    "outDir": "./dist",
    "rootDir": "./src",
```

## install ts-jest
```
npm install -d ts-jest
```
## config jest ให้ใช้กับ typscrip

```
    ...
    "jest": {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ]
  },
  ....
```

# Test

```
    npm test
```
