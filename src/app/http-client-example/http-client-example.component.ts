import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http-client-example',
  templateUrl: './http-client-example.component.html',
  styleUrls: ['./http-client-example.component.css']
})
export class HttpClientExampleComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/users', {
      observe: 'events'
      // Or body, response, events (Ajouter un loading en attendant le retour du serveur)
    }).subscribe((e: HttpEvent<Object>) => {
      // Voir les types HttpEventType
      if (e.type === HttpEventType.Response) {
        console.log('Done');
      }
    });

    this.http.get('https://jsonplaceholder.typicode.com/posts', {
      observe: 'body',
      params: (new HttpParams()).set('userId', '1')
    }).subscribe((e) => {
        console.log(e);
    });

    this.http.post('https://jsonplaceholder.typicode.com/users', JSON.stringify(
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      }
    )).subscribe(res => console.log('POST DONE : ' + JSON.stringify(res)));
  }

  ngOnInit() {
  }

}
