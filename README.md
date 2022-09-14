## How to Run

> npm install
   
> npm run web

> \# Github API 호출제한시 .env 파일의 PERSONAL_ACCESS_TOKEN에 github에서 발급받은 token을 입력후 재실행해주세요.

    
          

## 구현사항

### web: 
> 기본 요구사항 개발완료.

> UI Framework로 bootstrap 사용.

> \# 이슈모아보기시 여러 Repository를 한번에 query하는 api를 찾지 못하여 탭별 페이징하도록 구현.

### native:
> web과 통합개발 환경만 구축.

> Android 실행되는 부분만 확인.   
> - pc의 JAVA_HOME 설정 확인 (jdk 11이상)
> - jdk 수동설정시 /androrid/gradle.properties에 org.gradle.java.home={java 경로} 추가.
> - pc의 sdk 설치여부 확인 (31 권장)
> - sdk 수동설정시 /android/local.properties 파일추가후 sdk.dir={sdk 설치경로} 추가.
> - 테스트할 휴대폰 연결 또는 에뮬레이터 실행
> - npm run android