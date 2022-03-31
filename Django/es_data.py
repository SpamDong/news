from elasticsearch import Elasticsearch

# def trans(hits):
#     for hit in hits:
#         news_title.append(list(list(hit.values())[4].values())[0])
#         news_company.append(list(list(hit.values())[4].values())[1])
#         news_url.append(list(list(hit.values())[4].values())[2])
#         news_type.append(list(list(hit.values())[4].values())[3])
#         news_time.append(list(list(hit.values())[4].values())[4])

news_title = []
news_company = []
news_url = []
news_type = []
news_time = []
hits_list = []

es = Elasticsearch(hosts="http://172.30.1.81:9200/")

# _source=["title", "news_company", "news_url", 'news_type', '@timestamp'] 이런식으로 원하는 값을 뽑을 수 있음
# res = es.search(index='news', query={"match_all": {}}, size=20)
res = es.search(index='news', query={"match": {'news_type' : '경제'}}, size=20)

hits = res['hits']['hits']

for hit in hits:
    print(hit['_source'])



