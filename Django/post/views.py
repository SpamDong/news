from django.shortcuts import render
from elasticsearch import Elasticsearch
from kafka import KafkaProducer
from json import dumps
import datetime


# Create your views here.
# es = Elasticsearch(hosts="http://172.30.1.81:9200/")
# hits_list = []
#
# producer = KafkaProducer(
#     acks=0,
#     compression_type='gzip',
#     bootstrap_servers=['125.133.75.24:33149'],
#     value_serializer=lambda v: dumps(v).encode('utf-8'),
# )

# def log(click_type):
#     log = 'click_' + str(click_type)
#
#     producer.send('djangolog', {
#         'log': log,
#     })
#     producer.flush()

# def trans(hits):
#     hits_list.clear()
#     for hit in hits:
#         hits_list.append(hit['_source'])

def home(request):
    date = datetime.datetime.now()
    res = es.search(index='news', query={"match_all": {}}, size=9)
    hits = res['hits']['hits']
    trans(hits)
    click_type = 'home'
    log(click_type)
    return render(request, 'index.html', {'year':date.year, 'month':date.month, 'day':date.day})

def new(request):
    res = es.search(index='news', query={"match_all": {}}, size=10)
    hits = res['hits']['hits']
    trans(hits)
    click_type = 'new'
    log(click_type)
    return render(request, 'new.html', {'list': hits_list})


def election(request):
    res = es.search(index='news', query={"match": {'news_type' : '대선'}}, size=10)
    hits = res['hits']['hits']
    trans(hits)
    click_type = 'election'
    log(click_type)
    return render(request, 'election.html', {'list': hits_list})


def policy(request):
    res = es.search(index='news', query={"match": {'news_type': '정치'}}, size=10)
    hits = res['hits']['hits']
    trans(hits)
    click_type = 'policy'
    log(click_type)
    return render(request, 'policy.html', {'list': hits_list})

def economy(request):
    res = es.search(index='news', query={"match": {'news_type': '경제'}}, size=10)
    hits = res['hits']['hits']
    trans(hits)
    click_type = 'economy'
    log(click_type)
    return render(request, 'economy.html', {'list': hits_list})

def society(request):
    res = es.search(index='news', query={"match": {'news_type': '사회'}}, size=10)
    hits = res['hits']['hits']
    trans(hits)
    click_type = 'society'
    log(click_type)
    return render(request, 'society.html', {'list': hits_list})

def life(request):
    res = es.search(index='news', query={"match": {'news_type': '생활'}}, size=10)
    hits = res['hits']['hits']
    trans(hits)
    click_type = 'life'
    log(click_type)
    return render(request, 'life.html', {'list': hits_list})

def world(request):
    res = es.search(index='news', query={"match": {'news_type': '세계'}}, size=10)
    hits = res['hits']['hits']
    trans(hits)
    click_type = 'world'
    log(click_type)
    return render(request, 'world.html', {'list': hits_list})

