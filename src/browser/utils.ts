import type{LogMessage, LogType} from '../types'
import { bold } from './color';

export function getLabel(logType: LogType){
  let label = [''];
  if ('label' in logType) {
    label = [(logType.label || '')];
    label = bold(logType.color ? logType.color(label as [string,string]) as [string,string] : label[0]);
  }
  label = label.filter(Boolean)

  return label
}

export function finalLog(label:string[],text:string,args:string[],message?:LogMessage){
  if(label.length){
     //  gradient
    if(Array.isArray(message)){
      console.log(...label,...message)
    }else{
      console.log(...label,text)
    }
  }else{
    Array.isArray(message) ? console.log(...message) : console.log(text,...args)
  }
}