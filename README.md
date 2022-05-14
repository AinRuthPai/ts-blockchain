# TypeScript로 블록체인 만들기

- 블록체인의 PoC (개념증명)를 객체 지향 프로그래밍을 활용하는 타입스크립트로 만들어보면서 배운다.

## 환경 설정

- npm init -y : -y를 붙이면 모든 설정이 default로 들어간다.

- npm i -D typescript : -D를 붙이면 package.json 에서 devDependencies에 설치가 된다.

  - dependencies에는 앱의 동작과 연관된 것들을 설치하고 devDependencies는 동작과 직접적인 연관은 없지만, 이름 그대로 개발할 때 필요한 라이브러리를 설치한다.

  - 구분하는 이유는 배포할 때 어떤 라이브러리가 포함되느냐를 결정짓기 위해서이다.

  - dependencies는 배포할 때 포함되고 devDependencies는 포함되지 않는다. 잘 구분해서 설치해야 빌드 시간도 줄이고, 배포할 때 불필요한 라이브러리를 포함시키지 않을 수 있다.

- tsc --init : tsconfig.json 생성

- tsc : ts 파일들을 컴파일한다.

- tsconfig.json 설정

  - include : 자바스크립트로 컴파일하고 싶은 모든 디렉터리를 넣어준다.

  - compilerOptions -> outDir : 자바스크립트 파일이 생성될 디렉터리.

  - compilerOptions -> target : 어떤 버전의 자바스크립트로 타입스크립트를 컴파일 할 것인지를 결정한다.

  - lib : 합쳐진 라이브러리의 정의 파일을 특정해주는 역할. 코드가 어떤 형태로 어디서 돌아가는지 설정할 수 있다.

  - strict : true or false / 활성화하면 모든 실수로부터 보호한다.

  - d.ts 파일 : 이 정의 파일에서는 타입스크립트가 타입을 찾아준다. (자동완성이 생기는 이유는 여기에 명시가 되어 있기 때문이다.)

  - allowJs : true or false / 타입스크립트 안에 자바스크립트를 허용한다.
