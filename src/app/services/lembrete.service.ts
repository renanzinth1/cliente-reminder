import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

listar(): Observable<Lembrete[]> {
  const url = `${environment.reminderApiUrl}/lembretes`;
  return this.http.get<Lembrete[]>(url);
}

buscarPorCodigo(codigo: number): Observable<Lembrete> {
  const url = `${environment.reminderApiUrl}/lembretes/${codigo}`;
  return this.http.get<Lembrete>(url);
}

salvar(lembrete: Lembrete): Observable<Lembrete> {
  const url = `${environment.reminderApiUrl}/lembretes`;
  return this.http.post<Lembrete>(url, lembrete);
}

atualizar(lembrete: Lembrete): Observable<Lembrete> {
  const url = `${environment.reminderApiUrl}/lembretes`;
  return this.http.put<Lembrete>(url, lembrete);
}

excluir(codigo: number): Observable<Lembrete> {
  const url = `${environment.reminderApiUrl}/lembretes/${codigo}`;
  return this.http.delete<Lembrete>(url);
}

}
