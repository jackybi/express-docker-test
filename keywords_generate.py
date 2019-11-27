import os

fo = open("testUserId.csv","w")
fo.write("userId\n")
for i in range(1,10000):
    fo.write(str(i)+"\n")
fo.close()

fo = open("testPostId.csv","w")
fo.write("postId\n")
for i in range(1,31000):
    fo.write(str(i)+"\n")
fo.close()

