export const insJSON = [
  {
    type: "基本",
    ins: [
      {
        name: "Init",
        cn: "初始化文件",
        inst: [
          "//DIR $WORKSPACE_FOLDER",
          "//JOB",
          "//NAME $TM_FILEPATH",
          "//$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE  $CURRENT_HOUR-$CURRENT_MINUTE-$CURRENT_SECOND",
          "//POS",
          "///POSTYPE PULSE",
          "///PULSE",
          "//局部位置变量,P-局部位置变量,E-带外部轴的局部位置变量,R-局部定点变量SAMOV使用,S-增量偏移用局部变量",
          "//P序号 = 坐标系,角度/弧度,形态,工具号,用户坐标号,预留,预留,1轴,2轴,3轴,4轴,5轴,6轴,7轴",
          "//坐标系:0-关节坐标系,1-直角坐标系,2-工具坐标系,3-用户坐标系",
          "//角度/弧度:0-关节坐标系请填0,意为所有的轴坐标为角度值，其它坐标系该值决定姿态值的表示方法",
          "P001 = 0,0,0,0,0,0,0,0,0,0,0,0,0,0",
          "P002 = 0,0,0,0,0,0,0,0,0,0,0,0,0,0",
          "//带变位机坐标值的局部位置变量，在P点的基础上后面7位为变位机各个轴的值",
          "E001 = 0,0,1,2,3,0,0,1,2,3,4,5,6,7,0,0,0,0,0,0,0",
          "//R变量中填入99999表示该轴不动",
          "R001 = 1,1,0,0,0,0,0,1,99999,1,99999,99999,99999,0",
          "S001 = 1,1,0,0,0,0,0,0,0,0,0,0,0,0",
          "//局部数值变量",
          "INTV I001 = 1",
          "FLOATV D001 = 1.0000 ",
          "BOOLV B001 = 1 ",
          "//INSTRUCTION",
          "ROBOTTYPE = [${2|R_GENERAL_6S,R_SCARA|}]",
          "PROVERSION = [1.0.1]",
          "NOP",
          "${3://指令}",
          "END",
        ],
      },
    ],
  },
  {
    type: "运动指令",
    ins: [
      {
        name: "MoveJ",
        cn: "关节插补",
        inst: "MOVJ ${1:P001} VJ = ${2:10} % PL = ${3:0} ACC = 10 DEC = 10 0",
      },
      {
        name: "MoveL",
        cn: "直线插补",
        inst: "MOVL ${1:P001} V = ${2:10} mm/s PL = ${3:0} ACC = 10 DEC = 10 0",
      },
      {
        name: "MoveC",
        cn: "圆弧插补",
        inst: "MOVC ${1:P001} V = ${2:10} mm/s PL = ${3:0} ACC = 10 DEC = 10 0",
      },
      {
        name: "MoveCA",
        cn: "整圆插补",
        inst: "MOVCA ${1:P001} V = ${2:10} mm/s PL = ${3:0} ACC = 10 DEC = 10 SPIN = 0 0",
      },
      {
        name: "MoveS",
        cn: "样条曲线插补",
        inst: "MOVS ${1:P001} V = ${2:10} mm/s PL = ${3:0} ACC = 10 DEC = 10 0",
      },
      {
        name: "IMove",
        cn: "增量插补",
        inst: "IMOV ${1:S001} V = ${2:10} mm/s BF PL = 0 ACC = 1 DEC = 1 0",
      },
      {
        name: "SAMove",
        cn: "运行至绝对位置",
        inst: "SAMOV ${1:R002} VJ = {2:10} % RF PL = 0 ACC = 10 DEC = 10 0",
      },
      {
        name: "MoveJ_Ext",
        cn: "带变位机关节插补",
        inst: "MOVJEXT ${1:E001} VJ = {2:10} % PL = 0 ACC = 10 DEC = 10 0",
      },
      {
        name: "MoveL_Ext",
        cn: "带变位机直线插补",
        inst: "MOVLEXT ${1:E001} V = {2:10} mm/s PL = 0 ACC = 10 DEC = 10 0",
      },
      {
        name: "MoveC_Ext",
        cn: "带变位机圆弧插补",
        inst: "MOVCEXT ${1:E001} V = {2:10} mm/s PL = 0 ACC = 10 DEC = 10 0",
      },
      {
        name: "EXT_Move",
        cn: "外部轴随动",
        inst: "EXTMOV 1 FOLLOW 1",
      },
      {
        name: "Switch_Sync",
        cn: "切换外部轴组号",
        inst: "SWITCHSYNC ${1:0}",
      },
      {
        name: "Gear_In",
        cn: "电子齿轮",
        inst: "GEARIN ${1:J1} {2:O1} {3:1}",
      },
      {
        name: "MReset",
        cn: "外部轴圈数复位",
        inst: "MRESET 0",
      },
    ],
  },
  {
    type: "条件判断",
    ins: [
      {
        name: "Call",
        cn: "调用程序",
        inst: "CALL [\\$DDD\\$]",
      },
      {
        name: "If",
        cn: "如果",
        inst: ["IF (${1:GI001} ${2:==} ${3:0})", "${4}", "ENDIF"],
      },
      {
        name: "Else",
        cn: "或者",
        inst: "ELSE",
      },
      {
        name: "ElseIf",
        cn: "或者如果",
        inst: "ELSEIF (${1:GI001} ${2:==} ${3:0})",
      },
      {
        name: "While",
        cn: "循环",
        inst: ["WHILE (${1:GI001} ${2:==} ${3:0})", "${4}", "ENDWHILE"],
      },
      {
        name: "Wait",
        cn: "等待",
        inst: "WAIT (${1:GI001} ${2:==} ${3:0}) T = ${4:1} NOW = 1",
      },
      {
        name: "Jump",
        cn: "跳转",
        inst: [
          "LABEL *${1:label1}",
          "",
          "JUMP *${1:label1} WHEN (${2:GI001 == 0})",
        ],
      },
      {
        name: "Until",
        cn: "直到",
        inst: ["UNTIL (${1:I001 == 0})", "${2}", "ENDUNTIL"],
      },
      {
        name: "Pos_ReachAble",
        cn: "点位是否可达",
        inst: "POS_REACHABLE $(1:MOVJ) $(2:P001) $(3:B001)",
      },
    ],
  },
  {
    type: "输入输出",
    ins: [
      {
        name: "Digital_In",
        cn: "数字输入",
        inst: "DIN GI001 IN#(1)",
      },
      {
        name: "Digital_Out",
        cn: "数字输出",
        inst: "DOUT OT#(1) 1 T = 0",
      },
      {
        name: "Analogue_In",
        cn: "模拟输入",
        inst: "AIN D001 AIN1",
      },
      {
        name: "Analogue_Out",
        cn: "模拟输出",
        inst: "AOUT AOUT1 0",
      },
      {
        name: "Pulse_Out",
        cn: "脉冲输出",
        inst: "PULSEOUT RATE = 100 SUM = 100",
      },
      {
        name: "Read_Dout",
        cn: "读取数字输出状态",
        inst: "READ_DOUT I001 OT#(1)",
      },
    ],
  },
  {
    type: "变量赋值",
    ins: [
      {
        name: "Set_Int",
        cn: "设置整型变量",
        inst: "SETINT ${1:I001} = ${2:0}",
      },
      {
        name: "Set_Double",
        cn: "设置浮点型变量",
        inst: "SETDOUBLE ${1:D001} = ${2:0}",
      },
      {
        name: "Set_Bool",
        cn: "设置布尔型变量",
        inst: "SETBOOL ${1:B001} = ${2:0}",
      },
    ],
  },
  {
    type: "变量计算",
    ins: [
      {
        name: "ADD",
        cn: "加",
        inst: "ADD ${1:I001} ${2:0}",
      },
      {
        name: "SUB",
        cn: "减",
        inst: "SUB ${1:I001} ${2:0}",
      },
      {
        name: "MUL",
        cn: "乘",
        inst: "MUL ${1:I001} ${2:0}",
      },
      {
        name: "DIV",
        cn: "除",
        inst: "DIV ${1:I001} ${2:0}",
      },
      {
        name: "MOD",
        cn: "模",
        inst: "MOD ${1:I001} ${2:0}",
      },
      {
        name: "SIN",
        cn: "正弦计算",
        inst: "SIN ${1:I001} ${2:0}",
      },
      {
        name: "COS",
        cn: "余弦计算",
        inst: "COS ${1:I001} ${2:0}",
      },
      {
        name: "ATAN",
        cn: "反切计算",
        inst: "ATAN ${1:I001} ${2:0}",
      },
      {
        name: "Logical_Opera",
        cn: "逻辑计算",
        inst: "LOGICAL_OP ${1:B001} = ${2:I001} AND ${3:I002}",
      },
      {
        name: "Read_Pos",
        cn: "读取位置",
        inst: "READPOS ${1:D001} ${2:CURPOS} ${3:RF} ${4:1}",
      },
      {
        name: "Read_Pos_Message",
        cn: "读取位置信息",
        inst: "READPOSMSG ${1:P001} ${2:TCS} ${3:I001}",
      },
      {
        name: "Read_Linear",
        cn: "读取线速度",
        inst: ["READLINEAR (${1:GI001})", "${2}", "ENDREADLINEAR"],
      },
      {
        name: "CLK_Start",
        cn: "计时开始",
        inst: [
          "CLKSTART ID = ${1:1} ${2:GD001}",
          "${3}",
          "CLKSTOP ID = ${1:1}",
        ],
      },
      {
        name: "CLK_Reset",
        cn: "重置计时器",
        inst: "CLKRESET ID = ${1:1}",
      },
    ],
  },
  {
    type: "位置变量计算",
    ins: [
      {
        name: "Pos_ADD",
        cn: "位置变量加",
        inst: "POSADD ${1:P001} ${2:RF} ${3:1} ${4:GI003}",
      },
      {
        name: "Pos_SUB",
        cn: "位置变量减",
        inst: "POSSUB ${1:P001} ${2:RF} ${3:1} ${4:GI003}",
      },
      {
        name: "Pos_Set",
        cn: "设置位置变量值",
        inst: "POSSET ${1:P001} ${2:RF} ${3:1} ${4:GI003}",
      },
      {
        name: "Copy_Pos",
        cn: "复制位置变量",
        inst: "COPYPOS ${1:CURPOS} TO ${2:P001}",
      },
      {
        name: "Pos_ADD_All",
        cn: "位置变量所有轴加",
        inst: "POSADDALL P001 RF 0 0 0 0 0 0 0",
      },
      {
        name: "Pos_Sub_All",
        cn: "位置变量所有轴减",
        inst: "POSSUBALL P001 RF 0 0 0 0 0 0 0",
      },
      {
        name: "Pos_Set_All",
        cn: "设置位置变量所有轴的值",
        inst: "POSSETALL P001 RF 0 0 0 0 0 0 0",
      },
      {
        name: "Offset_On",
        cn: "位置变量偏移",
        inst: ["TOFFSETON RF 0 0 0 0 0 0 0", "", "TOFFSETOFF"],
      },
      {
        name: "Pos_Stretch",
        cn: "按照轨迹方向偏移",
        inst: "POS_STRETCH ${1:LINE} ${2:P001} ${3:P001} ${4:0} ${5:0} ${6:P001} ${7:P001}",
      },
      {
        name: "Set_Pos_Message",
        cn: "设置点位信息",
        inst: "SETPOSMSG ${1:P001} ${2:0} ${3:0} ${4:0} ${5:0} ${6:0}",
      },
    ],
  },
  {
    type: "坐标系",
    ins: [
      {
        name: "Switch_Tool",
        cn: "切换工具手",
        inst: "SWITCHTOOL (${1:0})",
      },
      {
        name: "Switch_User",
        cn: "切换用户坐标",
        inst: "SWITCHUSER (${1:0})",
      },
      {
        name: "Tool_Frame_Set",
        cn: "设置工具手参数",
        inst: "TOOLFRAME_SET ID = ${1:1} ${2:TX} ${3:GI001}",
      },
      {
        name: "User_Frame_Set",
        cn: "设置用户坐标参数",
        inst: "USERFRAME_SET ID = ${1:1} ${2:UX} ${3:GI001}",
      },
    ],
  },
  {
    type: "网络通讯",
    ins: [
      {
        name: "Open_Message",
        cn: "打开网络通讯",
        inst: "OPENMSG ID = ${1:1}",
      },
      {
        name: "Send_Message",
        cn: "发送数据",
        inst: "SENDMSG ID = 1 #${1:Message}#",
      },
      {
        name: "Close_Message",
        cn: "关闭网络通讯",
        inst: "CLOSEMSG ID = 1",
      },
      {
        name: "Msg_Connection_Status",
        cn: "获取网络状态",
        inst: "MSG_CONN_ST ${1:1} ${2:B001}",
      },
      {
        name: "Read_Come_Message",
        cn: "读取网络数据",
        inst: "READCOMM ID = ${1:1} ${2:EHTERNET} TO ${3:G001} ${4:I001}",
      },
      {
        name: "Parse_Message",
        cn: "解析网络数据",
        inst: "PARSEMSG ID = ${1:1} ${2:GI001} CLEARCACHE = ${3:0}",
      },
    ],
  },
  {
    type: "多线程",
    ins: [
      {
        name: "Pthread_Start",
        cn: "开启后台任务",
        inst: "PTHREAD_START [\\$${1:Program1}\\$] ${2|LOCAL,GLOBAL|}",
      },
      {
        name: "Pthread_End",
        cn: "关闭后台任务",
        inst: "PTHREAD_END [\\$${1:QQ}\\$] ${2:LOCAL}",
      },
      {
        name: "Pause",
        cn: "暂停运行",
        inst: "PAUSERUN ALL",
      },
      {
        name: "Continue",
        cn: "继续运行",
        inst: "CONTINUERUN MAIN",
      },
      {
        name: "Stop",
        cn: "停止运行",
        inst: "STOPRUN",
      },
      {
        name: "Restart",
        cn: "重新运行",
        inst: "RESTARTRUN",
      },
    ],
  },
  {
    type: "提示",
    ins: [
      {
        name: "Print",
        cn: "弹出自定义信息",
        inst: "PRINTMSG ${1:#输出信息#}",
      },
      {
        name: "Window",
        cn: "弹出自定义窗口",
        inst: "WINDOW [[\\$${1:1}\\$]] I001 1 [[\\$${2:1}\\$]] 0",
      },
    ],
  },
];
