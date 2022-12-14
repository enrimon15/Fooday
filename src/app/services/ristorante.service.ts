import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {URL} from '../constants';
import {Observable} from 'rxjs';
import {Ristorante} from '../model/ristorante.model';
import {Prenotazione} from '../model/prenotazione.model';
import {Preferito} from '../model/preferito.model';

@Injectable({
    providedIn: 'root'
})

export class RistoranteService {

    constructor(private http: HttpClient) {
    }

    getRistorantiByCittaId(idCitta): Observable<Ristorante[]> {
        const ristorantiByIdCittaUrl = `${URL.RISTORANTI_CITTA_ID}/${idCitta}`;
        return this.http.get<Ristorante[]>(ristorantiByIdCittaUrl);
    }

    getRistorantiByCittaNome(nomeCitta): Observable<Ristorante[]> {
        const ristorantiByNomeCittaUrl = `${URL.RISTORANTI_CITTA_NOME}/${nomeCitta}`;
        return this.http.get<Ristorante[]>(ristorantiByNomeCittaUrl);
    }

    getRistorantiByCategoriaId(idCategoria): Observable<Ristorante[]> {
        const ristorantiByCategoriaUrl = `${URL.RISTORANTI_CATEGORIA}/${idCategoria}`;
        return this.http.get<Ristorante[]>(ristorantiByCategoriaUrl);
    }

    getRistoranteById(idRistorante): Observable<Ristorante> {
        const ristoranteUrl = `${URL.RISTORANTI}/${idRistorante}`;
        return this.http.get<Ristorante>(ristoranteUrl);
    }

    getRistorantiByNome(nomeRisto): Observable<Ristorante[]> {
        const ristorantiByNomeUrl = `${URL.RISTORANTI_NOME}/${nomeRisto}`;
        return this.http.get<Ristorante[]>(ristorantiByNomeUrl);
    }

    getRistorantiPreferiti(idUtente): Observable<Ristorante[]> {
        const ristorantiPreferitiUrl = `${URL.PREFERITI}/${idUtente}`;
        return this.http.get<Ristorante[]>(ristorantiPreferitiUrl);
    }

    deletePreferito(idRistorante, idUtente) {
        const deletePreferitoUrl = `${URL.PREFERITI}/${idRistorante}/${idUtente}`;
        return this.http.delete<Ristorante>(deletePreferitoUrl);
    }

    getRistorantiAroundUser(lat, lon): Observable<Ristorante[]> {
        console.log('entrato');
        const ristorantiAroundUser = `${URL.RISTORANTI_CITTA_AROUND}/${lat}/${lon}`;
        return this.http.get<Ristorante[]>(ristorantiAroundUser);
        console.log('uscito');
    }

    addPreferito(idRistorante, idUtente): Observable<boolean> {
        const addPreferitoUrl = `${URL.PREFERITO_AGGIUNGI}/${idRistorante}/${idUtente}`;
        return this.http.get<boolean>(addPreferitoUrl);
    }
}
