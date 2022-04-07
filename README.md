<br>

# K8s 클러스터 환경에서 Kafka,EFK,Grafana를 활용한 빅데이터 구축 및 데이터 분석  

<br>

## **주제 :  K8S를 활용한 NEWS 실시간 순위 및 이슈 분석**
+ 네이버 뉴스에서 실시간, 대용량 데이터를 수집/처리/시각화 프로젝트
+ 네이버 뉴스에서 키워드에 맞게 원하는 정보 수집
+ 그 정보를 토대로 분야 별로 분류하고 사용자들이 어떤 정보를 더 보는지 확인
<br>

+ **역할 분담**
+ 임홍인 Kubernetes, Containerd, Elasticsearch, Kibana
+ 유재중 Kubernetes, Docker, Prometheus, Grafana
+ 안현동 Crawler, Fluentd, Kafka 
+ 송화랑 Django, Spark, Zeppelin

<br>

## **클러스터 환경**

![image](https://user-images.githubusercontent.com/96184680/162097044-6005c354-1a24-4c81-9ba1-643b174590bf.png)

+ Cpu i7, Ram 16g, Hdd 500g x 4 PC(Total Cpu:32 Core, Ram:64g, hdd:2TB)

## **개발환경**
+ VM-ware workstarion pro 16
+ Ubuntu :18.04 
+ Kubernetes(k8s) :v1.23.5
+ Containerd :1.5.10
+ Docker :20.10.14
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
  + Hadoop(HDFS) :3.2.2 - 추가 업데이트 중
  + Spark :3.1.3 - 추가 업데이트 중
  + Apache zeppelin :0.8.0 - 추가 업데이트 중
  + Cloud craft
  
 ### **백엔드**   
  + Python(3.9)
  + Django :2.0.5
  + DJango ORM
  + APACHE :2.4.29(ubuntu)
     
 ### **저장 환경**
  + ElasticSearch
  + Hadoop(HDFS) - 추가 업데이트 중
  
 ### **프론트엔드**
  + Javascript
  + HTML, CSS

<br>

  ## **주요 키워드**
  + Clustering
  + Kubernetes(k8s) x Contaierd
  + EFK(elasticsearch + fluentd + kibana)
  + Kafka
  + Prometheus&grafana 
  + Real-Time Crawling
  + Real-Time Storage
  + Real-Time Processing
  + Git 관리   
   
<br>

  ## **시스템 흐름도**
  ![빅데이터프로젝트구성도최종](https://user-images.githubusercontent.com/96184680/162097110-ed4f9f77-b8f3-4a96-af0d-944991fc6f6a.png)

<br>
  
  ## **데이터 파이프라인**
  + **쿠버네티스 환경** : 쿠버네티스 클러스터 환경을 구축, Deployment (Pod, ReplicaSet, Volume), Service(LoadBalancer, Cluster IP) 
     <br>
       
  + **Crawling DATA**
    + EC2 -> 카프카 -> 플루언티드 -> 엘라스틱서치 -> 키바나    
    + Python 코드를 사용하여 인터넷 뉴스에서 원하는 데이터로 수집 및 정제 -> Kafka -> Fluentd를 통해 ElasticSearch에 저장, Kibana로 시각화 
    <br> 
      
  + **LOG DATA**
    + Django -> Kafka -> Fluentd -> Apache Spark -> Apache Zeppelin
    +  시각화된 데이터를 Django 웹서버에 구현, 사용자들의 로그를 Kafka -> Fluentd를 통해 Apache Spark에서 분석, 처리하고 Apache Zeppelin으로 시각화
      <br> 
      
  + **모든 컴퓨터의 상태**
    +  Kubernetes -> Prometheus -> Grafana
    +  Kubernetes 아래 모든 Pods의 정보를 Prometheus에서 받고 상태를 Grafana로 시각화
  <br><br>
  
  
  ### **프로젝트 진행 과정 중 핵심 문제점과 해결방법**
  
   임홍인
   >**1. Docker 지원 중단**<br>
   > **문제점1** : K8S에서 Docker의 일부 기능을 공식적으로 지원하지 않게되었다.
   ><br>
   > **해결방안** : 빅데이터 플랫폼 구축 특성 상 윈도우의 VM방식이 아닌 Ubuntu 환경에서 K8S와 Docker를 도입하기로 했다. 하지만 K8S에서 Docker의 일부기능을 더이상 지원하지 않는다는 정보를 듣게 되었고, 결국 K8S + Containerd 조합으로 프로젝트를 진행 하게 되었다. 독학으로 진행했던 분야인 만큼 접할 수 있는 정보의 양이 가장 중요했지만, Docker 만큼 관련 정보가 많지 않아 독학에 어려움이 있었다. 하지만 K8S + Containerd에서도 Docker Hub의 이미지 파일을 그대로 살릴 수 있었고, 밤낮 없이 K8S의 사용법을 연구하면서 수많은 오류를 해결해 나갈 수 있었다. 최종적으로 K8S에 여러 빅데이터 플랫폼을 성공적으로 구축하여 해당 플랫폼들을 통해 데이터 처리, 분석까지 도달 할 수 있었다.
   
   <br>
   
   >**2. K8S 네트워크**<br>
   > **문제점2** : 쿠버네티스 네트워크 (아이피 외부 노출)<br>
   > **해결방안** : Pod 환경에서 Kibana 처럼 외부 브라우저를 이용해야 할 경우 아이피를 외부에 노출 시킬 필요가 있었고, AWS EC2와 데이터를 주고 받기 위해서는 포트포워딩 뿐 아니라 Pod 네트워트 문제를 해결해야만 했다. 해당 문제로 많은 시간은 소요하게 되었고, 네트워크 분야가 결코 쉽지 만은 않았다. 하지만  Ingress, service등 쿠버네티스를 공부 하면서 여러가지 방안을 시도해 보았고, 결국 MetalLB를 통해 LoadBalance 타입으로 이를 해결하였다.
       
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
   



