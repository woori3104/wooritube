

### BABEL
- 사용하는 버전이 안맞을때 최신 코드를 현재 버전이 인식할 수 있게 컴파일(하게 도와주는 역할을 함
- 최신버전의 JS를 sable한 JS로 변환 
- ``` npm install --save-dev @babel/core ```
- BABEL [(https://babeljs.io/)]
- ``` npm install @babel/core @babel.node --save-dev ```

## NODEMON
- 파일이 수정되는지 감시해주는 모듈 
- 실행중 파일이 수정되면 재실행하지않고 수정된걸 감지할 수 있음
- ``` npm i nodemon --save -dev ``` 

## express
- app.use()
    - 글로벌 middleware를 생성할 수 있다. 
    - use를 상용함으로서 모든 router (urls)에서 사용가능 

## Middleware 
- request와 response 중간에 있는 소프트 웨어 
- 모든 handler는 middleware이고 모든 controller는 handler이다. 
- middleware는 3개의 arguments를 포함한다. (req, res, next)
- next argument는 ``` next()``` 로 현재 핸들러가 종료된 후 다음 핸들러 함수를 요청한다. 

    ## Morgan
    - ``` npm i morgan ```
    - HTTP request logger middleware for node.js
    - http 요청에 대한 정보를 console log로 남겨주는 logger기능의 middleware
    