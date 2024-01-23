import { HttpHeaders } from '@angular/common/http'

export const END_POINT = 'http://localhost:3000/api/v1'
export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', Accept: '*' }),
}
