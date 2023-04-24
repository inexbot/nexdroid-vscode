import * as vscode from "vscode";

export default vscode.commands.registerCommand("nexdroid.newFile", async () => {
  let doc = await vscode.workspace.openTextDocument({
    language: "JBR",
    content: `//DIR
//JOB
//NAME 
//DATETIME
//POS
///POSTYPE PULSE
///PULSE
//局部位置变量,P-局部位置变量,E-带外部轴的局部位置变量,R-局部定点变量SAMOV使用,S-增量偏移用局部变量
//P序号 = 坐标系,角度/弧度,形态,工具号,用户坐标号,预留,预留,1轴,2轴,3轴,4轴,5轴,6轴,7轴
//坐标系:0-关节坐标系,1-直角坐标系,2-工具坐标系,3-用户坐标系
//角度/弧度:0-关节坐标系请填0,意为所有的轴坐标为角度值，其它坐标系该值决定姿态值的表示方法
P0001 = 0,0,0,0,0,0,0,0,0,0,0,0,0,0
P0002 = 0,0,0,0,0,0,0,0,0,0,0,0,0,0
//带变位机坐标值的局部位置变量，在P点的基础上后面7位为变位机各个轴的值
E0001 = 0,0,1,2,3,0,0,1,2,3,4,5,6,7,0,0,0,0,0,0,0
//RP变量中填入99999表示该轴不动
RP0001 = 1,1,0,0,0,0,0,1,99999,1,99999,99999,99999,0
AP0001 = 1,1,0,0,0,0,0,0,0,0,0,0,0,0
//局部数值变量
INTV I001 = 1
FLOATV D001 = 1.0000 
BOOLV B001 = 1 
//INSTRUCTION
ROBOTTYPE = [R_GENERAL_6S]
PROVERSION = [1.0.6]
NOP
//指令
END`,
  });
  vscode.window.showTextDocument(doc);
});
