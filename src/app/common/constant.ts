import { HttpHeaders } from '@angular/common/http'

export const API_VERSION = 'api/v1' // this is config in proxy.json
export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', Accept: '*' }),
}
