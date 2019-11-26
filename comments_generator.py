import pymysql
import numpy
import random
from loremipsum import generate_sentence
from datetime import datetime
from datetime import timedelta
import os
db = pymysql.connect(host="192.168.1.159",port=33306, user="root", passwd="123456",db= "docker-test", charset='utf8' )
cursor = db.cursor()
sql = "SELECT  * from posts"
cursor.execute(sql)
data = cursor.fetchall()
comment_count = 0
fo = open("comments_generate.sql","w")

for row in data:
    post_id = row[0]
    post_num = abs(int(numpy.random.normal(0,200,1)))%200+1
    date_sta = row[6]
    insert_sql = "INSERT INTO comments(post_id, user_id, comment_id, content, added) VALUES "
    for comment in range(post_num):
        user_id = abs(int(numpy.random.normal(0,2500,1)))%10000 + 1
        content = generate_sentence()[2]
        comment_id = 0 if random.random()<0.7 else comment_count + int(random.random()*comment)
        date_sta = date_sta + timedelta(seconds=int(random.random()*300))
        insert_sql =insert_sql + " (%d, %d,%d,  \"%s\",  '%s')," % \
               (post_id,user_id,comment_id, content, date_sta)
    insert_sql = insert_sql[:-1] + ';\n'
    fo.write(insert_sql)
    comment_count = comment_count + post_num
    print(comment_count)
    print(row[0])
fo.close()
db.close()