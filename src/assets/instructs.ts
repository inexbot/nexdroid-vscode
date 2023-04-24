import * as snippetJSON from "./nexdroid.json";
export const insJSON = [
  {
    type: "基本",
    ins: [
      {
        name: "Init",
        cn: "初始化文件",
        inst: snippetJSON[".source.JBR"].Create.body,
      },
    ],
  },
  {
    type: "运动指令",
    ins: [
      {
        name: "MoveJ",
        cn: "关节插补",
        inst: snippetJSON[".source.JBR"].MOVJ.body,
      },
      {
        name: "MoveL",
        cn: "直线插补",
        inst: snippetJSON[".source.JBR"].MOVL.body,
      },
      {
        name: "MoveC",
        cn: "圆弧插补",
        inst: snippetJSON[".source.JBR"].MOVC.body,
      },
      {
        name: "MoveCA",
        cn: "整圆插补",
        inst: snippetJSON[".source.JBR"].MOVCA.body,
      },
      {
        name: "MoveS",
        cn: "样条曲线插补",
        inst: snippetJSON[".source.JBR"].MOVS.body,
      },
      {
        name: "IMove",
        cn: "增量插补",
        inst: snippetJSON[".source.JBR"].IMOV.body,
      },
      {
        name: "SAMove",
        cn: "运行至绝对位置",
        inst: snippetJSON[".source.JBR"].SAMOV.body,
      },
      {
        name: "MoveJ_Ext",
        cn: "带变位机关节插补",
        inst: snippetJSON[".source.JBR"].MOVJEXT.body,
      },
      {
        name: "MoveL_Ext",
        cn: "带变位机直线插补",
        inst: snippetJSON[".source.JBR"].MOVLEXT.body,
      },
      {
        name: "MoveC_Ext",
        cn: "带变位机圆弧插补",
        inst: snippetJSON[".source.JBR"].MOVCEXT.body,
      },
      {
        name: "EXT_Move",
        cn: "外部轴随动",
        inst: snippetJSON[".source.JBR"].EXTMOV.body,
      },
      {
        name: "Switch_Sync",
        cn: "切换外部轴组号",
        inst: snippetJSON[".source.JBR"].SWITCHSYNC.body,
      },
      {
        name: "Gear_In",
        cn: "电子齿轮",
        inst: snippetJSON[".source.JBR"].GEARIN.body,
      },
      {
        name: "MReset",
        cn: "外部轴圈数复位",
        inst: snippetJSON[".source.JBR"].MRESET.body,
      },
    ],
  },
  {
    type: "条件判断",
    ins: [
      {
        name: "Call",
        cn: "调用程序",
        inst: snippetJSON[".source.JBR"].CALL.body,
      },
      {
        name: "If",
        cn: "如果",
        inst: snippetJSON[".source.JBR"].IF.body,
      },
      {
        name: "Else",
        cn: "或者",
        inst: snippetJSON[".source.JBR"].ELSE.body,
      },
      {
        name: "ElseIf",
        cn: "或者如果",
        inst: snippetJSON[".source.JBR"].ELSEIF.body,
      },
      {
        name: "While",
        cn: "循环",
        inst: snippetJSON[".source.JBR"].WHILE.body,
      },
      {
        name: "Wait",
        cn: "等待",
        inst: snippetJSON[".source.JBR"].WAIT.body,
      },
      {
        name: "Jump",
        cn: "跳转",
        inst: snippetJSON[".source.JBR"].JUMP.body,
      },
      {
        name: "Until",
        cn: "直到",
        inst: snippetJSON[".source.JBR"].UNTIL.body,
      },
      {
        name: "Pos_ReachAble",
        cn: "点位是否可达",
        inst: snippetJSON[".source.JBR"].POS_REACHABLE.body,
      },
    ],
  },
  {
    type: "输入输出",
    ins: [
      {
        name: "Digital_In",
        cn: "数字输入",
        inst: snippetJSON[".source.JBR"].DIN.body,
      },
      {
        name: "Digital_Out",
        cn: "数字输出",
        inst: snippetJSON[".source.JBR"].DOUT.body,
      },
      {
        name: "Analogue_In",
        cn: "模拟输入",
        inst: snippetJSON[".source.JBR"].AIN.body,
      },
      {
        name: "Analogue_Out",
        cn: "模拟输出",
        inst: snippetJSON[".source.JBR"].AOUT.body,
      },
      {
        name: "Pulse_Out",
        cn: "脉冲输出",
        inst: snippetJSON[".source.JBR"].PULSEOUT.body,
      },
      {
        name: "Read_Dout",
        cn: "读取数字输出状态",
        inst: snippetJSON[".source.JBR"].READ_DOUT.body,
      },
    ],
  },
  {
    type: "变量赋值",
    ins: [
      {
        name: "Set_Int",
        cn: "设置整型变量",
        inst: snippetJSON[".source.JBR"].SETINT.body,
      },
      {
        name: "Set_Double",
        cn: "设置浮点型变量",
        inst: snippetJSON[".source.JBR"].SETDOUBLE.body,
      },
      {
        name: "Set_Bool",
        cn: "设置布尔型变量",
        inst: snippetJSON[".source.JBR"].SETBOOL.body,
      },
    ],
  },
  {
    type: "变量计算",
    ins: [
      {
        name: "ADD",
        cn: "加",
        inst: snippetJSON[".source.JBR"].ADD.body,
      },
      {
        name: "SUB",
        cn: "减",
        inst: snippetJSON[".source.JBR"].SUB.body,
      },
      {
        name: "MUL",
        cn: "乘",
        inst: snippetJSON[".source.JBR"].MUL.body,
      },
      {
        name: "DIV",
        cn: "除",
        inst: snippetJSON[".source.JBR"].DIV.body,
      },
      {
        name: "MOD",
        cn: "模",
        inst: snippetJSON[".source.JBR"].MOD.body,
      },
      {
        name: "SIN",
        cn: "正弦计算",
        inst: snippetJSON[".source.JBR"].SIN.body,
      },
      {
        name: "COS",
        cn: "余弦计算",
        inst: snippetJSON[".source.JBR"].COS.body,
      },
      {
        name: "ATAN",
        cn: "反切计算",
        inst: snippetJSON[".source.JBR"].ATAN.body,
      },
      {
        name: "Logical_Opera",
        cn: "逻辑计算",
        inst: snippetJSON[".source.JBR"].LOGICAL_OP.body,
      },
      {
        name: "Read_Pos",
        cn: "读取位置",
        inst: snippetJSON[".source.JBR"].READPOS.body,
      },
      {
        name: "Read_Pos_Message",
        cn: "读取位置信息",
        inst: snippetJSON[".source.JBR"].READPOSMSG.body,
      },
      {
        name: "Read_Linear",
        cn: "读取线速度",
        inst: snippetJSON[".source.JBR"].READLINEAR.body,
      },
      {
        name: "CLK_Start",
        cn: "计时开始",
        inst: snippetJSON[".source.JBR"].CLKSTART.body,
      },
      {
        name: "CLK_Reset",
        cn: "重置计时器",
        inst: snippetJSON[".source.JBR"].CLKRESET.body,
      },
    ],
  },
  {
    type: "位置变量计算",
    ins: [
      {
        name: "Pos_ADD",
        cn: "位置变量加",
        inst: snippetJSON[".source.JBR"].POSADD.body,
      },
      {
        name: "Pos_SUB",
        cn: "位置变量减",
        inst: snippetJSON[".source.JBR"].POSSUB.body,
      },
      {
        name: "Pos_Set",
        cn: "设置位置变量值",
        inst: snippetJSON[".source.JBR"].POSSET.body,
      },
      {
        name: "Copy_Pos",
        cn: "复制位置变量",
        inst: snippetJSON[".source.JBR"].COPYPOS.body,
      },
      {
        name: "Pos_ADD_All",
        cn: "位置变量所有轴加",
        inst: snippetJSON[".source.JBR"].POSADDALL.body,
      },
      {
        name: "Pos_Sub_All",
        cn: "位置变量所有轴减",
        inst: snippetJSON[".source.JBR"].POSSUBALL.body,
      },
      {
        name: "Pos_Set_All",
        cn: "设置位置变量所有轴的值",
        inst: snippetJSON[".source.JBR"].POSSETALL.body,
      },
      {
        name: "Offset_On",
        cn: "位置变量偏移",
        inst: snippetJSON[".source.JBR"].TOFFSETON.body,
      },
      {
        name: "Pos_Stretch",
        cn: "按照轨迹方向偏移",
        inst: snippetJSON[".source.JBR"].POS_STRETCH.body,
      },
      {
        name: "Set_Pos_Message",
        cn: "设置点位信息",
        inst: snippetJSON[".source.JBR"].SETPOSMSG.body,
      },
    ],
  },
  {
    type: "坐标系",
    ins: [
      {
        name: "Switch_Tool",
        cn: "切换工具手",
        inst: snippetJSON[".source.JBR"].SWITCHTOOL.body,
      },
      {
        name: "Switch_User",
        cn: "切换用户坐标",
        inst: snippetJSON[".source.JBR"].SWITCHUSER.body,
      },
      {
        name: "Tool_Frame_Set",
        cn: "设置工具手参数",
        inst: snippetJSON[".source.JBR"].TOOLFRAME_SET.body,
      },
      {
        name: "User_Frame_Set",
        cn: "设置用户坐标参数",
        inst: snippetJSON[".source.JBR"].USERFRAME_SET.body,
      },
    ],
  },
  {
    type: "网络通讯",
    ins: [
      {
        name: "Open_Message",
        cn: "打开网络通讯",
        inst: snippetJSON[".source.JBR"].OPENMSG.body,
      },
      {
        name: "Send_Message",
        cn: "发送数据",
        inst: snippetJSON[".source.JBR"].SENDMSG.body,
      },
      {
        name: "Close_Message",
        cn: "关闭网络通讯",
        inst: snippetJSON[".source.JBR"].CLOSEMSG.body,
      },
      {
        name: "Msg_Connection_Status",
        cn: "获取网络状态",
        inst: snippetJSON[".source.JBR"].MSG_CONNECTION_STATUS.body,
      },
      {
        name: "Read_Come_Message",
        cn: "读取网络数据",
        inst: snippetJSON[".source.JBR"].READCOMM.body,
      },
      {
        name: "Parse_Message",
        cn: "解析网络数据",
        inst: snippetJSON[".source.JBR"].PARSEMSG.body,
      },
    ],
  },
  {
    type: "多线程",
    ins: [
      {
        name: "PThread_Start",
        cn: "开启后台任务",
        inst: snippetJSON[".source.JBR"].PTHREAD_START.body,
      },
      {
        name: "PThread_End",
        cn: "关闭后台任务",
        inst: snippetJSON[".source.JBR"].PTHREAD_END.body,
      },
      {
        name: "Pause",
        cn: "暂停运行",
        inst: snippetJSON[".source.JBR"].PAUSERUN.body,
      },
      {
        name: "Continue",
        cn: "继续运行",
        inst: snippetJSON[".source.JBR"].CONTINUERUN.body,
      },
      {
        name: "Stop",
        cn: "停止运行",
        inst: snippetJSON[".source.JBR"].STOPRUN.body,
      },
      {
        name: "Restart",
        cn: "重新运行",
        inst: snippetJSON[".source.JBR"].RESTARTRUN.body,
      },
    ],
  },
  {
    type: "提示",
    ins: [
      {
        name: "Print",
        cn: "弹出自定义信息",
        inst: snippetJSON[".source.JBR"].PRINTMSG.body,
      },
      {
        name: "Window",
        cn: "弹出自定义窗口",
        inst: snippetJSON[".source.JBR"].WINDOW.body,
      },
    ],
  },
];
