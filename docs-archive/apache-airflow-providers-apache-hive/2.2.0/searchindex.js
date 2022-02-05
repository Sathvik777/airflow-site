Search.setIndex({docnames:["_api/airflow/providers/apache/hive/hooks/hive/index","_api/airflow/providers/apache/hive/hooks/index","_api/airflow/providers/apache/hive/index","_api/airflow/providers/apache/hive/operators/hive/index","_api/airflow/providers/apache/hive/operators/hive_stats/index","_api/airflow/providers/apache/hive/operators/index","_api/airflow/providers/apache/hive/sensors/hive_partition/index","_api/airflow/providers/apache/hive/sensors/index","_api/airflow/providers/apache/hive/sensors/metastore_partition/index","_api/airflow/providers/apache/hive/sensors/named_hive_partition/index","_api/airflow/providers/apache/hive/transfers/hive_to_mysql/index","_api/airflow/providers/apache/hive/transfers/hive_to_samba/index","_api/airflow/providers/apache/hive/transfers/index","_api/airflow/providers/apache/hive/transfers/mssql_to_hive/index","_api/airflow/providers/apache/hive/transfers/mysql_to_hive/index","_api/airflow/providers/apache/hive/transfers/s3_to_hive/index","_api/airflow/providers/apache/hive/transfers/vertica_to_hive/index","commits","connections/hive_cli","connections/hive_metastore","connections/hiveserver2","connections/index","index","installing-providers-from-sources"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["_api/airflow/providers/apache/hive/hooks/hive/index.rst","_api/airflow/providers/apache/hive/hooks/index.rst","_api/airflow/providers/apache/hive/index.rst","_api/airflow/providers/apache/hive/operators/hive/index.rst","_api/airflow/providers/apache/hive/operators/hive_stats/index.rst","_api/airflow/providers/apache/hive/operators/index.rst","_api/airflow/providers/apache/hive/sensors/hive_partition/index.rst","_api/airflow/providers/apache/hive/sensors/index.rst","_api/airflow/providers/apache/hive/sensors/metastore_partition/index.rst","_api/airflow/providers/apache/hive/sensors/named_hive_partition/index.rst","_api/airflow/providers/apache/hive/transfers/hive_to_mysql/index.rst","_api/airflow/providers/apache/hive/transfers/hive_to_samba/index.rst","_api/airflow/providers/apache/hive/transfers/index.rst","_api/airflow/providers/apache/hive/transfers/mssql_to_hive/index.rst","_api/airflow/providers/apache/hive/transfers/mysql_to_hive/index.rst","_api/airflow/providers/apache/hive/transfers/s3_to_hive/index.rst","_api/airflow/providers/apache/hive/transfers/vertica_to_hive/index.rst","commits.rst","connections/hive_cli.rst","connections/hive_metastore.rst","connections/hiveserver2.rst","connections/index.rst","index.rst","installing-providers-from-sources.rst"],objects:{"airflow.providers.apache":[[2,0,0,"-","hive"]],"airflow.providers.apache.hive":[[1,0,0,"-","hooks"],[5,0,0,"-","operators"],[7,0,0,"-","sensors"],[12,0,0,"-","transfers"]],"airflow.providers.apache.hive.hooks":[[0,0,0,"-","hive"]],"airflow.providers.apache.hive.hooks.hive":[[0,1,1,"","HIVE_QUEUE_PRIORITIES"],[0,2,1,"","HiveCliHook"],[0,2,1,"","HiveMetastoreHook"],[0,2,1,"","HiveServer2Hook"],[0,5,1,"","get_context_from_env_var"]],"airflow.providers.apache.hive.hooks.hive.HiveCliHook":[[0,3,1,"","conn_name_attr"],[0,3,1,"","conn_type"],[0,3,1,"","default_conn_name"],[0,3,1,"","hook_name"],[0,4,1,"","kill"],[0,4,1,"","load_df"],[0,4,1,"","load_file"],[0,4,1,"","run_cli"],[0,4,1,"","test_hql"]],"airflow.providers.apache.hive.hooks.hive.HiveMetastoreHook":[[0,3,1,"","MAX_PART_COUNT"],[0,4,1,"","__getstate__"],[0,4,1,"","__setstate__"],[0,4,1,"","check_for_named_partition"],[0,4,1,"","check_for_partition"],[0,3,1,"","conn_name_attr"],[0,3,1,"","conn_type"],[0,3,1,"","default_conn_name"],[0,4,1,"","drop_partitions"],[0,4,1,"","get_conn"],[0,4,1,"","get_databases"],[0,4,1,"","get_metastore_client"],[0,4,1,"","get_partitions"],[0,4,1,"","get_table"],[0,4,1,"","get_tables"],[0,3,1,"","hook_name"],[0,4,1,"","max_partition"],[0,4,1,"","table_exists"]],"airflow.providers.apache.hive.hooks.hive.HiveServer2Hook":[[0,3,1,"","conn_name_attr"],[0,3,1,"","conn_type"],[0,3,1,"","default_conn_name"],[0,4,1,"","get_conn"],[0,4,1,"","get_pandas_df"],[0,4,1,"","get_records"],[0,4,1,"","get_results"],[0,3,1,"","hook_name"],[0,3,1,"","supports_autocommit"],[0,4,1,"","to_csv"]],"airflow.providers.apache.hive.operators":[[3,0,0,"-","hive"],[4,0,0,"-","hive_stats"]],"airflow.providers.apache.hive.operators.hive":[[3,2,1,"","HiveOperator"]],"airflow.providers.apache.hive.operators.hive.HiveOperator":[[3,4,1,"","clear_airflow_vars"],[3,4,1,"","dry_run"],[3,4,1,"","execute"],[3,4,1,"","get_hook"],[3,4,1,"","on_kill"],[3,4,1,"","prepare_template"],[3,3,1,"","template_ext"],[3,3,1,"","template_fields"],[3,3,1,"","template_fields_renderers"],[3,3,1,"","ui_color"]],"airflow.providers.apache.hive.operators.hive_stats":[[4,2,1,"","HiveStatsCollectionOperator"]],"airflow.providers.apache.hive.operators.hive_stats.HiveStatsCollectionOperator":[[4,4,1,"","execute"],[4,4,1,"","get_default_exprs"],[4,3,1,"","template_fields"],[4,3,1,"","ui_color"]],"airflow.providers.apache.hive.sensors":[[6,0,0,"-","hive_partition"],[8,0,0,"-","metastore_partition"],[9,0,0,"-","named_hive_partition"]],"airflow.providers.apache.hive.sensors.hive_partition":[[6,2,1,"","HivePartitionSensor"]],"airflow.providers.apache.hive.sensors.hive_partition.HivePartitionSensor":[[6,4,1,"","poke"],[6,3,1,"","template_fields"],[6,3,1,"","ui_color"]],"airflow.providers.apache.hive.sensors.metastore_partition":[[8,2,1,"","MetastorePartitionSensor"]],"airflow.providers.apache.hive.sensors.metastore_partition.MetastorePartitionSensor":[[8,4,1,"","poke"],[8,3,1,"","poke_context_fields"],[8,3,1,"","template_fields"],[8,3,1,"","ui_color"]],"airflow.providers.apache.hive.sensors.named_hive_partition":[[9,2,1,"","NamedHivePartitionSensor"]],"airflow.providers.apache.hive.sensors.named_hive_partition.NamedHivePartitionSensor":[[9,4,1,"","is_smart_sensor_compatible"],[9,4,1,"","parse_partition_name"],[9,4,1,"","poke"],[9,3,1,"","poke_context_fields"],[9,4,1,"","poke_partition"],[9,3,1,"","template_fields"],[9,3,1,"","ui_color"]],"airflow.providers.apache.hive.transfers":[[10,0,0,"-","hive_to_mysql"],[11,0,0,"-","hive_to_samba"],[13,0,0,"-","mssql_to_hive"],[14,0,0,"-","mysql_to_hive"],[15,0,0,"-","s3_to_hive"],[16,0,0,"-","vertica_to_hive"]],"airflow.providers.apache.hive.transfers.hive_to_mysql":[[10,2,1,"","HiveToMySqlOperator"]],"airflow.providers.apache.hive.transfers.hive_to_mysql.HiveToMySqlOperator":[[10,4,1,"","execute"],[10,3,1,"","template_ext"],[10,3,1,"","template_fields"],[10,3,1,"","template_fields_renderers"],[10,3,1,"","ui_color"]],"airflow.providers.apache.hive.transfers.hive_to_samba":[[11,2,1,"","HiveToSambaOperator"]],"airflow.providers.apache.hive.transfers.hive_to_samba.HiveToSambaOperator":[[11,4,1,"","execute"],[11,3,1,"","template_ext"],[11,3,1,"","template_fields"],[11,3,1,"","template_fields_renderers"]],"airflow.providers.apache.hive.transfers.mssql_to_hive":[[13,2,1,"","MsSqlToHiveOperator"]],"airflow.providers.apache.hive.transfers.mssql_to_hive.MsSqlToHiveOperator":[[13,4,1,"","execute"],[13,3,1,"","template_ext"],[13,3,1,"","template_fields"],[13,3,1,"","template_fields_renderers"],[13,4,1,"","type_map"],[13,3,1,"","ui_color"]],"airflow.providers.apache.hive.transfers.mysql_to_hive":[[14,2,1,"","MySqlToHiveOperator"]],"airflow.providers.apache.hive.transfers.mysql_to_hive.MySqlToHiveOperator":[[14,4,1,"","execute"],[14,3,1,"","template_ext"],[14,3,1,"","template_fields"],[14,3,1,"","template_fields_renderers"],[14,4,1,"","type_map"],[14,3,1,"","ui_color"]],"airflow.providers.apache.hive.transfers.s3_to_hive":[[15,2,1,"","S3ToHiveOperator"]],"airflow.providers.apache.hive.transfers.s3_to_hive.S3ToHiveOperator":[[15,4,1,"","execute"],[15,3,1,"","template_ext"],[15,3,1,"","template_fields"],[15,3,1,"","ui_color"]],"airflow.providers.apache.hive.transfers.vertica_to_hive":[[16,2,1,"","VerticaToHiveOperator"]],"airflow.providers.apache.hive.transfers.vertica_to_hive.VerticaToHiveOperator":[[16,4,1,"","execute"],[16,3,1,"","template_ext"],[16,3,1,"","template_fields"],[16,3,1,"","template_fields_renderers"],[16,4,1,"","type_map"],[16,3,1,"","ui_color"]]},objnames:{"0":["py","module","Python module"],"1":["py","data","Python data"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:data","2":"py:class","3":"py:attribute","4":"py:method","5":"py:function"},terms:{"0":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,23],"00642a46d":17,"008035450":17,"01":[0,6,8,9,17],"02":17,"03":17,"04":17,"042be2e4":17,"0481b9a95":17,"05":[0,17],"057f3ae3a":17,"059eda05f":17,"06":17,"07":17,"08":17,"09":17,"0a0e1af80":17,"0a6858847":17,"0b0e4f7a4":17,"0b2":17,"0beta1":17,"1":[0,13,14,16],"10":17,"100":0,"1000":0,"10170":17,"10263":17,"10343ec29":17,"10460":17,"10468":17,"10483":17,"10528":17,"10533":17,"10543":17,"10796cb7c":17,"10818":17,"11":[17,23],"11032":17,"11138":17,"11238":17,"11242":17,"11249":17,"11447":17,"11487":17,"11688":17,"11767":[17,22],"11826":17,"11855":17,"12":[17,23],"12082":17,"12093":17,"12206":17,"12212":17,"12225":17,"12230":17,"12304":17,"12366":17,"12390":17,"12444":17,"12449":17,"12466":17,"12558":17,"12917":17,"12927":17,"12955":17,"12af6a080":17,"12c5e5d8a":17,"13":17,"13073":17,"13148":17,"13380":17,"13450":17,"13732":17,"13767":17,"14013":17,"14082":[17,22],"14487":17,"14542":[17,22],"14633":17,"14647":[17,22],"14886":17,"15":17,"15076":17,"15180":[17,22],"15236":17,"15513":17,"15515":[17,22],"15534":17,"15576":17,"15667":[17,22],"15704":17,"15735":17,"15991":17,"16":[4,17],"16294":17,"16405":17,"16464":17,"16501":17,"16682":17,"16869":17,"16b3ab586":17,"16e712971":17,"17":[17,22],"17015":17,"17020":17,"17116":17,"17682":17,"17777":[17,22],"17890":17,"18":17,"18278":17,"18613":17,"18657":17,"18854":[17,22],"18855":17,"19":17,"19026":17,"19321":17,"19474":17,"19777":[17,22],"19866":17,"19882":17,"1fba5402b":17,"2":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,23],"20":17,"200":4,"2015":[0,6],"2016":[8,9],"2020":[0,17],"2021":[17,23],"20210":17,"2022":17,"2037303ee":17,"20422":17,"20523":17,"20565":17,"20571":17,"20608":17,"20614":17,"20654":17,"20951":17,"21":17,"21237":[17,22],"22":17,"23":17,"232f7d158":17,"23rc1":17,"24":17,"25":17,"250436d96":17,"26":17,"27":17,"27339a5a0":17,"28":17,"29":17,"295d66f91":17,"2a1":17,"2f_host":18,"3":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,23],"30":17,"31":17,"32767":0,"32971a1a2":17,"3320e432a":17,"33f0cd265":17,"349b0811c":17,"3696c34c2":17,"375d1ca22":17,"37681bca0":17,"3964":17,"39e395f98":17,"3b3287d7a":17,"4":22,"406f":23,"40exampl":18,"41bf172c1":17,"444":0,"44d4ae809":17,"4681":17,"476d0f6e3":17,"485ff6cc6":17,"49":23,"4b031d39e":17,"4bde99f13":17,"4d03e33c1":17,"4d3a":23,"4d74ac211":17,"4e8f9cc8d":17,"4f494d4d9":17,"500":4,"5013fda8f":17,"502ba309":17,"5090fb0c8":17,"512":23,"5220e4c38":17,"53dafa593":17,"54":23,"5499":17,"5569b868a":17,"589d6dec9":17,"59eb5de78":17,"5a439e84":17,"5c6e":23,"5f81fc73c":17,"6":[17,22],"60":[6,9],"602abe839":17,"6350fd6eb":17,"6515":17,"6539":17,"6610":17,"6669":17,"6670":17,"6674":[17,23],"6714":17,"6817":17,"6889a333c":17,"68e4c4dcb":17,"6cf76d7ac":17,"6dc24c95e":17,"7059":17,"7142":17,"7231":17,"7286":17,"7287":17,"7309":17,"7338":17,"736a62f82":17,"7456":17,"7517":17,"76ed2a49c":17,"7802":17,"7820":17,"7825e8f59":17,"7901":17,"7c206a82a":17,"7d24b088c":17,"7e6372a68":17,"8":17,"80":[18,19,20],"807ad32c":17,"80b5e65a6":17,"8170":17,"8380":17,"83c037873":17,"83f8e178b":17,"840ea3efb":17,"853576d90":17,"8598":17,"85a18e13d":17,"85e0e7607":17,"866a601b7":17,"86a2a19ad":17,"872b1566a":17,"87969a350":17,"87f408b1e":17,"8807":17,"8886":17,"8891":17,"8898":17,"88bdcfa0d":17,"8991":17,"8994":17,"8b1":17,"8c42cf1b0":17,"8d99ae":9,"8da7b":8,"8ec4":23,"8f8db8959":17,"9":[17,22],"9026":17,"9029":17,"9174":17,"91f4d80ff":17,"92585ca4c":17,"9320":17,"9370":17,"93ea05880":17,"9404":17,"9408":17,"9458":17,"9472":17,"9549274d1":17,"9550":17,"9686":17,"9705":17,"9729":17,"9730":17,"97496ba2b":17,"9784":17,"97a429f9d":17,"9906":17,"9953a047c":17,"9985":17,"9b39f2478":17,"9c94b72d4":17,"boolean":15,"class":[17,22],"default":[0,3,4,6,8,9,15,17],"do":[3,15,23],"export":[11,18,19,20],"final":[0,13,14,15,16,17],"function":[4,6,8,9,17],"import":[10,17,22,23],"int":0,"new":17,"return":[0,4,9],"short":0,"static":[9,17],"super":17,"switch":17,"true":[0,3,10,13,14,15,16,18,20],"var":3,"while":[6,8,9],A:[0,9,15],AND:[0,6],AS:[0,13,14,15,16],By:[15,23],For:[0,17,18,19,20,22,23],If:[0,3,4,13,14,15,16,18,20,22,23],It:[0,14,19,23],No:17,The:[0,6,8,13,14,15,16,18,19,20,22,23],There:[18,23],To:[0,23],__getstate__:0,__init__:17,__setstate__:0,a075b6df9:17,a0821235f:17,a0e08c:[10,13,14,15],a458fcc57:17,a9ac2b040:17,about:[17,23],abov:23,ac2f72c98:17,ac752e777:17,ac943c9e1:17,access:16,accord:17,ad:17,add:[17,22],addit:0,ae044884d:17,ae7cb4a1:17,aff7a6:4,after:[0,3,10,17,22],against:[4,10,13,14,15,16],aip:17,airflow:[18,23],airflow_conn_hive_cli_default:18,airflow_conn_hiveserver2_default:20,airflow_conn_metastore_default:19,airflow_db:4,airflowexcept:17,aka:23,all:[0,17,18,19,20,22],allow:[10,17],alon:0,along:3,alreadi:23,also:[0,3,23],alter:3,altern:8,amazon:[17,22],amount:[0,10,13,14,15,16],an:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],ani:[0,3,4,14,23],apach:[19,23],apache_airflow_providers_apache_h:23,api:[17,22],appar:6,appear:[0,3],appli:[4,17,22],applic:17,apply_default:[17,22],april:17,ar:[0,4,13,14,15,16,17,18,19,20,22,23],arg:[0,17],argument:[13,14,15,16,17],around:[0,17],asc:[22,23],assig:17,assign:17,assignment_func:4,augment:17,august:17,auth:[0,18],auth_mechan:[19,20],authmechan:0,author:18,auto:[17,22],autoapi:17,autom:17,automat:22,avail:23,aws_conn_id:15,aws_default:15,b0d6069d2:17,b2a28d159:17,b40dffa08:17,b43f90abf:17,b4e0ff:16,b916b7507:17,b:0,ba4b:23,backport:17,base:[0,3,4,6,8,9,10,11,13,14,15,16],base_hook:17,basehook:0,baseoper:[3,4,10,11,13,14,15,16],basesensoroper:[6,9],bash:23,bashoper:0,batch:17,bbc627a3d:17,be75dcd39:17,becaus:6,beelin:[0,18],befor:[0,3,10,13,14,15,16,17],behavior:3,behind:3,being:[0,10,13,14,15],belong:[0,23],below:23,between:20,bigint:4,bin:23,binari:23,black:17,blank:[17,18],blob:[4,16],bool:[0,3,10,13,14,15,16,17],botocor:15,broken:17,bst:23,bucket:15,buggfix:17,build:[17,23],bulk_load:10,bump:17,bundl:15,c2db0dfeb:17,c34ef853c:17,c5cae9:6,c78e2a5f:17,c7e5bce57:17,c:0,ca4238eb4:17,ca:15,call:17,callabl:4,can:[0,3,6,9,14,15,18,19,20,22,23],candid:17,cannot:9,capac:0,capacityschedul:3,cb0bf4a14:17,cbf8001d7:17,cdb3f2545:17,cde15c6e4d3a8ec4ecf4ba4b6674e08ad7de406f:23,cde1:23,ce44b6289:17,cert:15,certif:[15,23],certifi:23,chang:17,changelog:17,chapter:23,charact:[14,17],check:[0,9,15,17,23],check_for_named_partit:0,check_for_partit:0,check_head:15,checksum:[22,23],choos:[20,23],chr:[13,14,16],cl:[13,14,16],classmethod:[13,14,16],claus:6,clean:3,cleanup:[3,10,17],clear_airflow_var:3,cli:[0,3,13,14,15,16,21],client:[0,6,9],cncf:17,code:[3,11,17,23],col:[0,4],col_typ:4,column:[0,4,13,14,15,16],com:[16,18,23],come:[10,17],comma:19,command:[0,10,17],comment:17,commit:17,comparison:[6,9],compat:[4,17],complet:22,compon:[18,19,20],comput:4,concaten:17,conn_id:8,conn_name_attr:0,conn_typ:0,connect:[0,3,4,6,9,10,11,13,14,15,16,17,22],consid:[4,6],consider:[0,13,14,15,16],consolid:17,constant:14,constructor:0,contain:[10,11,13,14,15,16,23],context:[0,3,4,6,8,9,10,11,13,14,15,16,17],contrib:17,control:[0,14],correct:[17,22,23],creat:[0,3,4,8,10,11,13,14,15,16,23],credenti:18,cross:17,csv:[0,11,14],csv_filepath:0,curl:23,cursor:[13,14,15,16],custom:[17,18,20,22],d02ded65:17,d0e7db402:17,d200:17,d202:17,d56e7b56b:17,d76026545:17,d7de:23,d9567eb10:17,d9e4454c6:17,d:[0,23],da99c3fa6:17,dag:[3,17,22],dag_id:0,data:[0,10,11,13,14,15,16,17],databas:[0,3,4,10,11,13,14,15,16,18,20],datafram:0,datatyp:16,date:4,datefram:0,db:[0,8,22],dbapi:0,dbapihook:[0,17],de:17,decemb:17,decompress:15,decor:[17,22],default_arg:17,default_conn_nam:0,defin:[3,6,8,9],delet:[0,10],delete_data:0,delimit:[0,10,13,14,15,16],dep:23,depend:17,deprec:[17,22],deriv:[3,4,6,8,9,10,11,13,14,15,16],describ:23,descript:17,dest:23,destin:[0,10,11,13,14,15,16],destination_filepath:11,detail:[3,17,22,23],determin:15,dev0:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],dev:17,df:0,dict:[0,3,4,10,13,14,15,16],dictionari:[0,3,4,10,11,13,14,15,16,17,18,19,20],diff:23,differ:[15,23],directli:[8,10],directori:23,discoveri:17,distribut:23,doc:[17,22],docstr:[17,22],document:[3,17,22],doe:[8,16],does_not_exist:0,doesn:[0,13,14,15,16],don:[6,17],dot:[0,6,10,13,14,15,16],doubl:10,down:23,download:[15,23],drop:[0,13,14,15,16,23],drop_partit:[0,17],dry:3,dry_run:3,ds:[0,4,6,8,9],dttm:4,due:22,dup:17,duplic:[17,22],dynam:[4,17],e08a:23,e13a14c87:17,e229f3541:17,e3f96ce7a:17,e:[0,18],easier:[0,3],easili:0,ecf4:23,echo:23,ee7ca128a:17,effici:[0,13,14,15,16],eg:0,empti:[4,17,22],enabl:[0,17,18,19,20],encod:[0,18,19,20],enforc:17,entri:[0,17],env:0,environ:[3,18,19,20],error:17,escap:[14,17],escapechar:14,essenti:23,even:17,everi:[0,13,14,15,16],everywher:17,exampl:[8,9,17,18,19,20,22,23],example_dag:17,exce:0,exclud:4,excluded_column:4,execut:[0,3,4,10,11,13,14,15,16],execution_d:0,exist:[0,3,13,14,15,16,22],experiment:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],explain:0,explicit:17,express:[0,4,15,17],ext:17,extra:[0,10,18,19,20,22],extra_expr:4,extract:0,f0e4ec:3,f3521fb0e:17,f3ad5cf61:17,f3e87c503:17,f50f67751:17,f6bd817a3:17,f760823b4:17,f77417eb0:17,f:17,face:17,fail:17,failur:[17,22],fair:0,fals:[0,3,9,10,13,14,15,16,18],fdd9b6f65:17,featur:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23],fetch:0,fetch_siz:0,few:17,field:[0,3,8,13,14,15,16,17,18,22],field_dict:[0,15],file:[0,3,10,11,13,14,15,16,17,22,23],filenam:15,filepath:0,filter:0,filter_map:0,fingerprint:23,first:[3,15,22],fix:17,flag:10,flexibl:6,flynt:17,folder:23,follow:[15,18,19,20,23],foo:8,form:[9,17],format:[0,4,13,14,15,16],formmatt:17,foundat:23,fresh:17,friendli:17,from:[0,3,10,11,13,14,15,16,17,22],full:[6,16],fulli:9,g:0,gather:4,gender:0,gener:[0,4,6,8,13,14,15,16,17],get:[0,3,4,9,13,14,15,16,23],get_conn:0,get_connect:[17,22],get_context_from_env_var:0,get_databas:0,get_default_expr:4,get_hook:3,get_metastore_cli:0,get_pandas_df:[0,17,22],get_partit:0,get_partitions_by_filt:6,get_partitions_by_nam:9,get_record:0,get_result:0,get_tabl:0,get_template_context:[3,4,10,11,13,14,15,16],ghost:3,github:16,gitter:17,given:0,global:4,gmail:23,good:23,gpg:23,grammar:[17,22],guid:23,gz:23,ha:[17,22],hack:16,hadoop:[0,3,17],hash:17,have:[0,17,22],head:17,header:[0,15],heavier:0,here:0,hh:0,high:[0,3,17],hint:17,hit:8,hive:[21,23],hive_cli:[0,18],hive_cli_conn_id:[0,3,13,14,15,16],hive_cli_default:[0,3,13,14,15,16,18],hive_cli_param:[0,18],hive_conf:[0,10,17],hive_metastor:[0,6],hive_partit:[2,7],hive_queue_prior:0,hive_stat:[2,5],hive_t:[13,14,15,16],hive_to_mysql:[2,12],hive_to_samba:[2,12],hiveclihook:[0,17,22],hiveconf:[0,3],hiveconf_jinja_transl:3,hivehook:[17,22],hivemetastor:[17,22],hivemetastorehook:[0,17],hiveoper:[0,3,13,14,15,16],hivepartitionsensor:[6,8,9],hiveserver2:[0,11,20],hiveserver2_conn_id:[0,10,11],hiveserver2_default:[0,10,11,20],hiveserver2hook:[0,17,22],hivestatscollectionoper:4,hivetomysqloper:10,hivetosambaoper:11,hmsclient:[19,22],hook:[2,3,9,17,18,19,20,22],hook_nam:0,host:[18,19,20],how:23,howto:[0,6,11],hql:[0,3,11,18],http:[16,17,23],i:[18,23],id:[0,3,4,6,9,10,11,13,14,15,16,23],idempot:10,impact:3,impala:0,implement:17,implicit:17,improv:17,includ:[0,3,17],incorrect:17,increas:17,index:[0,8],indic:23,individu:17,ineffici:6,infer:[0,13,14,15,16],infil:10,info:[9,17],inform:17,initi:22,input:0,input_compress:15,insert:4,insid:0,instal:17,instanc:3,instead:6,instruct:23,integr:[17,18,19,20],interact:0,interest:0,interpret:15,introduc:17,is_smart_sensor_compat:9,isn:[0,13,14,15,16],issu:[10,17,22],issuer:23,its:[0,13,14,15,16],java:[0,17],jdbc:[0,18],jinja:[3,4,10,11,13,14,15,16],job:0,jobtrack:[0,3],json:[4,17,18,19,20],juli:17,june:17,just:3,k8:17,ka:23,kaxil:23,kaxilnaik:23,keep:[0,17,18],kei:[0,3,4,15,17,18,23],kerbero:[19,20],kerberos_service_nam:[19,20],keyword:17,kill:[0,3,17,22],know:23,kwarg:[0,3,4,6,8,9,10,11,13,14,15,16,17],l:23,la:23,languag:[0,17],larg:[0,4,13,14,15,16],latest:17,lazi:17,lazili:17,ldap:[17,20,22],least:22,leav:3,left:23,len:0,less:0,level:17,leverag:8,librari:0,lighter:0,like:[6,17,20],limit:0,line:[15,17],linetermin:0,link:[17,23],list:[0,4,9,17,19,22],load:[0,10,11,13,14,15,16,17],load_df:0,load_fil:0,local:[0,10,13,14,15,16,23],local_infil:10,locat:11,log:[0,17],logic:[6,9],login:[18,20],low:[0,3],ls:23,macro:17,made:23,magic:17,mai:[0,3,13,14,15,16],main:[3,4,10,11,13,14,15,16,23],make:[0,3,17,18],manag:[17,18,23],manual:[16,22],map:[0,13,14,16],mapr:0,mapred_job_nam:[0,3],mapred_queu:[0,3],mapred_queue_prior:[0,3],markdown:17,markdownlint:17,master:[16,17],match:[0,17,23],matter:[8,17],max:0,max_part_count:0,max_partit:0,maximum:0,md022:17,md:17,mechan:19,memori:10,mention:17,meta:17,metadata:[13,14,15,16],metastor:[0,4,6,8,9,10,17,21,22],metastore_conn_id:[0,4,6,9,10],metastore_default:[0,4,6,9,19],metastore_mysql:8,metastore_partit:[2,7],metastorepartitionsensor:8,method:[3,4,6,9,10,11,13,14,15,16,18,20],metric:4,microsoft:[13,22],might:[0,22],migrat:22,mirror:23,miscellan:17,mistak:[17,22],mktemp:23,mode:[17,22],model:[3,4,10,11,13,14,15,16],modul:17,monitor:[0,3],month:17,more:[3,4,10,11,13,14,15,16,17,22],most:[0,13,14,15,16,23],move:[10,11,13,14,15,16,17],mssql:[13,22],mssql_conn_id:13,mssql_default:13,mssql_to_hiv:[2,12],mssql_type:13,mssqltohiveoper:13,multipl:[18,19],multiprocess:3,must:0,my_databas:6,my_tabl:6,myarg:3,mypi:17,mysql:[4,8,10,14,22],mysql_conn_id:[4,8,10,14],mysql_default:[10,14],mysql_postoper:10,mysql_preoper:10,mysql_tabl:10,mysql_to_h:[2,12],mysql_typ:14,mysqltohiveoper:14,n:0,naik:23,name:[0,3,4,6,8,9,15,17,19,20],named_hive_partit:[2,7],namedhivepartitionsensor:[6,9],need:[0,3,6,18,22],next:17,node:[19,20],none:[0,3,4,9,10,13,14,15,16,23],normal:[0,3],nosasl:[18,19],notat:[0,6,10,13,14,15,16],note:[0,3,6,9,10,13,14,15,16,17,18,19,20],novemb:17,now:[10,17],num:0,number:[0,17,19,20],o:23,object:[0,3,18],observ:8,occurr:3,octob:17,offici:[17,23],ok:0,on_kil:3,onc:23,one:[0,14,15,18,23],ones:3,onli:[0,13,14,15,16,17,18],onto:11,oper:[0,2,6,9,10,11,13,14,15,16,17,18,19,20],optim:8,optimis:22,option:[0,3,4,6,10,13,14,15,16,17,18,19,20],order:[0,8,22],ordereddict:0,org:23,origin:23,otherwis:22,our:17,out:[0,17],output_head:0,overrid:[0,3,6,8,9],overridden:0,overwrit:[0,4],owner:[3,18,23],package_nam:23,package_vers:23,page:[17,23],pair:[0,3],panda:[0,22],pandas_kwarg:0,param:[0,18],paramet:[0,3,4,6,8,9,10,11,13,14,15,16,18,19,20],parse_partition_nam:9,part:[0,3],part_val:0,partit:[0,4,6,8,9,13,14,15,16],partition_filt:0,partition_kei:0,partition_nam:[0,8,9],partition_valu:0,pass:[0,3,6,9,17],password:[17,18,20,22],path:[3,11,15],pattern:[0,15],pem:15,per:17,perform:3,pgp:23,pgpk:23,pgpv:23,pin:17,pip:[17,23],pk1:9,pk2:9,place:10,plain:[0,20],pleas:23,point:17,poke:[6,8,9],poke_context_field:[8,9],poke_interv:[6,9],poke_partit:9,port:[18,19,20],possibl:[0,3,19],pr:17,pre:17,prepar:17,prepare_templ:3,presto:[4,22],presto_conn_id:4,presto_default:4,prevent:3,previou:23,primari:23,princip:18,prior:10,prioriti:[0,3],process:[3,15],product:10,project:17,provid:23,provider_download_dir:23,proxi:18,proxy_us:18,push:[10,11],pv1:9,pv2:9,py3:[17,23],py:[16,17],pydocstyl:17,pyhiv:[0,20,22],pylint:17,pypi:[17,22],python:[16,17,22,23],python_vers:22,pythonoper:0,pyupgrad:17,qualifi:9,queri:[0,4,8,10,11,13,14,15,16],queue:[0,3],quot:14,quote_:14,quotechar:14,r:0,rc2:17,rc3:17,rc:[17,22],read:[17,22],readm:[17,22],rebas:17,receiv:4,recommend:23,record:0,recreat:[0,13,14,15,16],ref:[0,6,11,17],refer:[0,3,4,6,8,9,10,11,13,14,15,16],refernc:17,regener:17,rel:3,relas:17,relat:[17,18,19,20,22],releas:[17,22],relev:23,rema:17,remain:17,remov:[17,22,23],renam:17,render:[3,4,10,11,13,14,15,16,17,22],replac:[0,3,17],repo:17,repositori:22,requir:[10,15],rerun:4,reset:3,resolv:[17,22],restor:[17,22],result:[0,8,11],retriev:15,rid:3,row:0,rsa:23,rule:17,run:[0,3,4,10,13,14,16,18,20,22,23],run_a:0,run_as_own:3,run_cli:0,run_set_variable_stat:[0,20],s3:15,s3_kei:15,s3_to_hiv:[2,12,17],s3tohiveoper:15,s:[0,3,8,13,14,15,16,17,23],samba:[11,22],samba_conn_id:11,samba_default:11,same:[3,4,10,11,13,14,15,16],sanit:0,sat:23,schedul:0,schema:[0,3,6,8,9,18,20],script:[3,17,23],script_begin_tag:3,sd:0,sdist:[22,23],see:17,select:[0,15,23],select_express:15,self:[0,3,4,6,8,9,10,11,13,14,15,16,23],sensor:[2,17],sep:23,separ:[17,19],septemb:17,sequenc:[3,4,6,8,9,10,11,13,14,15,16,17],serial:[0,13,14,15,16],server2:[0,11,21],server:[0,10,13,19,23],servic:[0,6,8,9,10,11,19,20],set:[0,3,9,13,14,15,16,20],setup:17,sha512:[22,23],sha:23,shasum:23,should:[0,3,6,8,9,10,14,15,18,19,20,23],show:[6,9],sign:23,signatur:[17,22,23],simpl:0,simplifi:17,site:22,size:0,smallish:10,smart:[9,17],so:[0,3,10],softwar:[17,23],some:[0,17],sourc:[0,3,4,6,8,9,10,11,13,14,15,16,22],spec:0,special:14,specif:[0,3,10,11,13,14,15,16],specifi:[0,15,18,19,20,22],spell:17,sphinx:17,sql:[0,3,6,8,10,11,13,14,16,17,22],sqlsensor:8,squash:17,ssl:15,stage:[0,10,13,14,15,16],start_dat:17,stat:4,state:0,statement:[0,10,13,14,15,16,18,20],static_babynam:0,static_babynames_partit:0,statist:4,step:23,still:15,stop:17,store:[0,13,14,15,16],str:[0,3,4,6,8,9,10,11,13,14,15,16],strict:17,string:[0,14,17,18],sub:8,subject:17,subpartit:[0,8],subprocess:3,sum:23,support:[0,6,17,22],supports_autocommit:0,surround:17,synchron:17,syntax:[18,19,20],t:[0,6,8,10,13,14,15,16,17],tab:10,tabl:[0,4,6,8,9,10,13,14,15,16,17,22],table_exist:0,table_nam:[0,4],tableau:17,tablenam:0,take:14,talk:8,tar:23,target:[0,10,13,14,15,16],task:[3,10,17],task_id:0,taskflow:17,tblproperti:[0,13,14,15],templat:[3,4,10,11,13,14,15,16,17,22],template_ext:[3,10,11,13,14,15,16],template_field:[3,4,6,8,9,10,11,13,14,15,16,17],template_fields_render:[3,10,11,13,14,16],temporari:[0,13,14,15,16,23],term:17,test:[0,17],test_hql:0,text:[10,17],textfil:[0,13,14,15,16],than:[0,15],thei:0,them:22,themselv:4,thi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],those:[22,23],thread:3,thrift:[0,6,8,9,10,11,19,22],through:19,thu:0,time:18,to_csv:0,toc:17,tool:[17,22],toolchain:17,top:[22,23],tracker:0,tradit:0,transfer:[2,17],translat:3,tri:[17,22],trigger:3,truncat:10,trust:23,twice:10,two:18,type:[0,3,4,6,13,14,15,16,17,18,19,20,22],type_map:[13,14,16],typehint:17,typic:10,typo:[17,22],uber:16,ui:0,ui_color:[3,4,6,8,9,10,13,14,15,16],underli:0,union:15,unit:17,unix:15,unknown:23,unless:15,unnecessari:17,untouch:17,up:[3,6,9,17],updat:[17,22],upgrad:[17,22],uri:[18,19,20],url:[18,19,20],us:[0,3,4,6,9,10,11,13,14,15,16,17,18,19,20,22,23],usag:17,use_beelin:[0,18],use_ssl:15,user:[9,17,18,23],user_defined_macro:3,usernam:[18,20],utf8:0,utf:17,v2:17,val:0,valid:[15,23],valu:[0,3,4,6,13,14,15,16],varchar:4,variabl:[0,3,18,19,20],variou:17,verbos:0,verifi:[15,22],version:[17,22,23],vertica:[16,22],vertica_conn_id:16,vertica_default:16,vertica_python:16,vertica_to_h:[2,12],vertica_typ:16,verticatohiveoper:16,very_high:[0,3],very_low:[0,3],via:[20,22,23],view:3,wa:8,wai:[8,18],wait:[6,9],want:[0,3,13,14,15,16,18,20,22,23],warn:[17,22,23],wave:17,well:23,were:8,whatev:0,wheel:22,when:[0,3,4,8,10,11,13,14,15,16,17,18,19,20,22],where:[4,11,17],whether:[0,13,14,15,16],which:[0,13,14,15,16],whitelist:17,whitespac:17,whl:23,why:23,wildcard:15,wildcard_match:15,within:[0,3],won:10,word:[17,22],work:0,worri:23,would:20,wouldn:8,wrapper:0,write:0,writer:14,written:8,wrong:17,wrongli:17,xcomarg:17,xxx:0,year:0,you:[0,3,4,6,9,13,14,15,16,18,19,20,22,23],your:[0,3,13,14,16,18,19,20,22]},titles:["<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.hooks.hive</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.hooks</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.operators.hive</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.operators.hive_stats</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.operators</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.sensors.hive_partition</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.sensors</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.sensors.metastore_partition</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.sensors.named_hive_partition</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.transfers.hive_to_mysql</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.transfers.hive_to_samba</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.transfers</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.transfers.mssql_to_hive</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.transfers.mysql_to_hive</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.transfers.s3_to_hive</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.hive.transfers.vertica_to_hive</span></code>","Package apache-airflow-providers-apache-hive","Hive CLI Connection","Hive Metastore Connection","Hive Server2 Connection","Connection Types","<code class=\"docutils literal notranslate\"><span class=\"pre\">apache-airflow-providers-apache-hive</span></code>","Installing from sources"],titleterms:{"0":[17,22],"1":[17,22],"2":[17,22],"3":[17,22],"break":22,"class":[0,3,4,6,8,9,10,11,13,14,15,16],"default":[18,19,20],"function":0,airflow:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,22],apach:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,22],attribut:0,authent:[18,19,20],bug:22,chang:22,changelog:22,cli:18,commit:22,configur:[18,19,20],connect:[18,19,20,21],content:[0,3,4,6,8,9,10,11,13,14,15,16,22],cross:22,depend:22,download:22,featur:22,fix:22,from:23,guid:22,hive:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22],hive_partit:6,hive_stat:4,hive_to_mysql:10,hive_to_samba:11,hook:[0,1],id:[18,19,20],instal:[22,23],integr:23,metastor:19,metastore_partit:8,misc:22,modul:[0,3,4,6,8,9,10,11,13,14,15,16],mssql_to_hiv:13,mysql_to_h:14,named_hive_partit:9,offici:22,oper:[3,4,5],packag:[17,22,23],pip:22,provid:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,22],pypi:23,refer:22,releas:23,requir:22,resourc:22,s3_to_hiv:15,sensor:[6,7,8,9],server2:20,sourc:23,submodul:[1,5,7,12],subpackag:2,transfer:[10,11,12,13,14,15,16],type:21,verifi:23,vertica_to_h:16}})