import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import  { request } from '../../../node_modules/request'
//import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  uri = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  getBasic() {
    return this.http.get(`${this.uri}/getbasic`);
  }

  getBasicById(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }
  
  addBacis(Name: any,Host: any,Catogery: any,Version: any) {
    const Basic = {
      Name:Name,
      Host:Host,
      Catogery: Catogery,
      Version: Version,
    };
    return this.http.post(`${this.uri}/addBasic`, Basic);
  }
  updateBasic(id: any,Name: any,Host: any,Catogery: any,Version: any) {
    const Basic = {
      Name:Name,
      Host:Host,
      Catogery: Catogery,
      Version: Version,
    };
    return this.http.post(`${this.uri}/update/${id}`, Basic);
  }
  deleteBasic(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
  getDetails(host){
    const body = {
      host:host
  }
    return this.http.post(`${this.uri}/getdetails`,body)
}
gvpg(uName,password,url){
  
  const body = {
    username:uName,
    password:password
}
  
  return this.http.post(`${url}`,body)
}
gvcs(ck:any, cs:any ,url:any,grantType:any,uName:any,password:any){
  console.log("BODY IS:",cs,ck,url,)
  const body = {
    ck:ck,
    cs:cs,
    grantType:grantType,
    username:uName,
    password:password
}
  return this.http.post(`${url}`,body)
}

getKey(url,methord,values){
  console.log("Values are in the get key function:",values)
  var authorizationHeader;
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Authorization', 'Basic ZjFVSmwzSmRBTEFtNXhLdEI5SUhLQkhDQmlrYTppZmhCdTE0SkkxdFdpckE0dU9fUEE0M0Y0V3Nh');

  const form={
    grantType:values.gType
  }
  return this.http.post('http://172.17.0.2:8280/token',form,{headers})
}


/*
getToken(methord,url,values:any){
  var authorizationHeader;
  var options ={
  method: methord,
  url: url,
  headers: { //'Postman-Token': '48f678cf-3db9-493d-9490-815de5c76882',
      'cache-control': 'no-cache',
      Authorization: authorizationHeader
  },
  form: { 
    grant_type: values.grantType,
    username: values.username,
    password: values.password,
    undefined: undefined

    } 
  }
  request(options, function(error, response, body) {
    if (error)
        console.log(error)
    console.log(body)
    return (body)
})
}*/

}

