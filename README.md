<br>

# K8s 클러스터 환경에서 Kafka,EFK,Grafana를 활용한 빅데이터 구축 및 데이터 분석  

<br>
## **클러스터 환경**
+ Cpu i7, Ram 16g, Hdd 500g x 4 PC(Total Cpu:32 Core, Ram:64g, hdd:2TB)

## **개발환경**
+ Ubuntu :18.04
+ Kubernetes(k8s) :v1.23.5
+ Containerd :1.5.10
+ AWS EC2(Crawler)
+ PyCham Community(2021)
+ GitHub
+ Discord
+ TeamViewer

<br>

## **사용 기술**
 ### **프로그래밍 언어**
  + Python(3.9)
 
 ### **프로그램**
  + Kubernetes :v1.23.5
  + Containerd :1.5.10
  + Docker :20.10.14
  + Calico :3.22
  + ingress-nginx/controller :v1.0.0
  + Metallb :v0.9.3
  + Kafka :3.1.0
  + Fluentd :4.3
  + ElasticSearch :7.17.1
  + Kibana :7.17.1
  + Prometheus :2.27.1
  + Grafana :8.0.3
  + Node_exporter 1.1.2
  + hadoop(HDFS) :3.2.2 - 추가 업데이트 중
  + spark :3.1.3 - 추가 업데이트 중
  + apache zeppelin :0.8.0 - 추가 업데이트 중
  
 ### **백엔드**   
  + Python(3.9)
  + Django
  + DJango ORM
  + APACHE 
     
 ### **저장소**
  + ElasticSearch
  + Hadoop(HDFS) - 추가 업데이트 중
  
 ### **프론트엔드**
  + Javascript
  + HTML, CSS

<br>

  ## **주요 키워드**
  + Kubernetes(k8s) x Contaierd
  + EFK
  + REST API
  + Git 관리
  + Prometheus&grafana 
  + 
<br>

  ## **구현 기능**
  + **user app**
    + 회원가입/회원탈퇴 로직
    + 로그인/로그아웃 로직 + 소셜네트워크 로그인
    + 회원수정/암호변경/ID찾기
    + 이메일인증
     
  + **hplace app**
    + 게시글 작성/수정/삭제    
    + 각 상점 위치 GPS 지도
    + 실시간 날씨 api
    + 실시간 누적방문자 api
   
  + **comments app**
    + 코멘트 작성/삭제
  
  <br><br>
  
  ## **시스템 흐름도**
  ![ERD_Model](https://user-images.githubusercontent.com/81276472/151469688-7c1f00ef-6bb5-459f-9508-e2772d3a0d62.png)
  
  
  ## **ERD 구조**

  ![ERD](https://user-images.githubusercontent.com/81276472/151470158-a2161d09-be33-4dea-aa36-bb28f9252cd5.png)
  
  <br><br>
  
  ### **프로젝트 진행 과정 중 핵심 문제점과 해결방법**
  
   임홍인
   >**1. 구글 네이버 api**<br>
   > **문제점** : 소셜네트워크(구글, 네이버)를 활용해 로그인을 할 수 있는 기능 + DB연동 오류
   ><br>
   > **해결방안** : Django 라이브러리 'allauth'를 활용하여 superuser를 생성하고 각 소셜네트워크(구글, 네이버) 개발자 사이트에서 Client ID와 Secret Code 값을 얻고,
   admin페이지에서 적용 후 리디렉션(callback)값을 입력하여 해결.
       
   <br>
   
   안현동
   >1. 카카오 지도 api
   >>**A. http 프로토콜 사용시 HTML5 위치정보 사용제한**<br>
   >> 문제점 : http와 같이 보안설정이 되지 않은 사이트에서 사용자의 위치를 Geolocation API를 사용할 수 없음*<br>
   >> 해결방안 : SSL 인증서를 발급받아 https 프로토콜로 변환<br><br>
   >>**B. SSL 인증서 발급**<br>
   >> 문제점 : Window용 Let's Encrypt로 SSL인증서를 발급받으려 했으나 시간의 한계가 있었음<br>
   >> 해결방안 : ngrok이라는 로컬 컴퓨터의 개발 환경을 인터넷으로 공유해주는 툴을 사용해 테스트 시도<br>
   >> 추후에 Let's Encrypt를 사용해 인증서 발급 예정<br><br>
   >>**C. 카카오 지도 마커<br>**
   >> 문제점 : 현재위치와 도착위치를 설정했으나 출발마커와 도착마커의 구분에 한계<br>
   >> 해결방안 : 현재, 도착위치의 마커 이미지를 따로 설정해 표기<br>

<br>

  송화랑
  
   > 문제점 : 게시글에 댓글을 비동기통신(ajax)으로 하려고 예정, 하지만 생각보다 복잡해서 따로 댓글 작성/리스트 html을 만드려고했으나 조금 더 노력을 하여 결국 원래 예정대로 구현<br>
   > 해결방안 : 댓글작성란 중 바뀌는 부분(사용자이름, 작성시간, 내용)을 변수로 바꿈, 댓글내용을 저장하고 게시글로 redirect해주는 함수를 사용하여 게시글로 보내줌
   

   > 문제점 : 구글 애널리틱스를 이해하는데 많은 시간이 소요되었고 이것저것 시도하면서도 많은 시간이 소요되었지만 실수를 발견하고 줄여가며 결국 홈페이지에 방문자수 표기를 구현<br>
   > 해결방안 : 구글 api의 서비스계정 내 json파일, 구글 애널리틱스에 서비스계정 등록, python에서 구글 클라이언트 설치/json파일 경로 설정/구글 애널리틱스 id 등록을 통해                                     모두 연동하고 출력값을 홈페이지에 구현 (구글 api에서 인증방법은 서비스계정,oauth 2.0 클라이언트 id 두가지가 있는데 서비스계정을 선택)

<br>

   유재중
   >**Email 인증**<br>
   > **문제점** : 회원가입시 Email로 Token 값을 전송하여 사용자가 올바른 Email 입력 확인 및 DB 저장을 통한 사용자 구분
   ><br>
   > **해결방안** : 랜덤 숫자 발송 및 입력을 통한 인증 방식을 사용 및 Email 자동 저장으로 사용자가 별도 수정 불가, 차후 발송 값에 토큰을 활용한 하이퍼링크 적용으로 구현 예정
       
<br>
   



