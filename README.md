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
+ 안현동 Crawler, Fluentd, Kafka, Django
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
       
   <br><hr>
   
안현동
   >**1. 데이터 파이프라인 구축**<br>
   > **문제점1** : 약 31개의 신문사에서 7개의 주제의 크롤링하는데 걸리는 시간이 약 350sec가 걸리는 것을 확인
   ><br>
   > **해결방안** : 클러스터링과 코드 수정 조치 > 신문사를 15 % 16개로 분산하여 크롤링, Selenium & Requests에서 BeautifulSoup4 & Requests로 변경 및 다중 반복문에 강하고 컴파일러 형식인 PyPy로 코드 실행<br>
   > ![image](https://user-images.githubusercontent.com/81276472/170607863-496c81a2-ad50-45f7-9676-ebca2370d31c.png)<br><br>
   >**문제점2** : ES 저장된 데이터를 Web으로 가져올 방법 강구
   ><br>
   > **해결방안** : elasticsearch_del API를 사용하여 데이터를 10개씩 로드 <br>
   > ![image](https://user-images.githubusercontent.com/81276472/170609409-77046671-afef-432b-8352-ea2f82632742.png)
   <br>
   
   >**2. 플랫폼**<br>
   > **문제점1** : Kafka 네트워크 통신<br>
   > **해결방안** : Kafka는 네트워크 통신의 default 값은 내부서비스만 가능함 > 내부 프로토콜과 외부 프로토콜을 분리하여 외부에서도 서비스를 받을 수 있도록 설정<br>

   <br><hr>

유재중
   >**1. Prometheus 와 Grafana의 확장성**<br>
   > **문제점1** : 초기 기획 당시 k8s의 정상 동작 및 양방향 외부 통신을 위주로 진행을 하여 Prometheus의 활용을 PC로 국한하여 진행을 하였음. 그로 인하여 Pod에 Prometheus exporter를 설치하지 않고 진행을 하여 정상 구동이 되고 나서 시간 문제로 PC에 대한 시계열 데이터 수집밖에 수행하지 못했음. 결국 Prometheus에 대한 이해도 부족.
   ><br>
   > **해결방안** : 좀 더 세밀한 자료 수집 및 분석을 통한 대처를 위하여 최소 단위에 exporter를 설치하여 시계열데이터 수집. DB에도 설치.
   <br>
   >**2. k8s 와 containerd**<br>
   > **문제점1** : Docker 지원 중단에 따른 대체제로 containerd를 사용 하였는데 생각보다 지원하는 편리한 기능이 적고 어려움이 많음. image 생성 및 관리 문제도 발생.
   ><br>
   > **해결방안** : Docker를 통한 image 생성 후 DockerHub에 이미지 업로드 후 containerd 환경에서 사용. Podman 과 같이 별도로 기능을 지원 해주는 프로그램들을 찾았음. 언제나 새로운 프로그램이 나오는 곳이니 계속해서 새로운 방법의 연구 필요. 
       
   <br><hr>
```
listener.security.protocol.map=EXTERNAL:PLAINTEXT,INTERNAL:PLAINTEXT
listeners= INTERNAL://{사설 IP}:9092, EXTERNAL://0.0.0.0:9093
advertised.listeners= INTERNAL://{사설 IP or 도메인}::9092, EXTERNAL://{공인 IP or 도메인}:9093
inter.broker.listener.name=INTERNAL
```

   



