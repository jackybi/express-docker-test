fo = open("pressure_test.sql","w")

for i in range(1,10000):
    sql1 = "Select * from `docker-test`.`users` where id=" + str(i) + ";\n"
    sql2 = "Select * from `docker-test`.`posts` where user_id=" + str(i) + ";\n"
    sql3 = "Select * from `docker-test`.`comments` where post_id=" + str(i) + ";\n"
    fo.write(sql1)
    fo.write(sql2)
    fo.write(sql3)
fo.close()