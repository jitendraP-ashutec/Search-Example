import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  matches = [];
  ngOnInit() {}
  searchKeyup(ev) {
 
    var term: any = ev.target as HTMLElement;
    console.log("Value", term.value);
    this.matches = [];
    let content = [
      {
        name: 'Robert',
        children: [],
      },
      {
        name: 'Doug',
        children: [
          {
            name: 'James',
            children: [
              {
                name: 'John',
                children: [
                  {
                    name: 'Tom',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Susan',
        children: [
          {
            name: 'Tiffany',
            children: [
              {
                name: 'Merry',
                children: [
                  {
                    name: 'Sasha',
                    children: [],
                  },
                  {
                    name: 'Tommy',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    if(term.value.length > 0){
      this.filter(content, term.value);
    } else {
      document.getElementById('list').innerHTML = '';
    }

    if (this.matches.length > 0) {
      document.getElementById('list').innerHTML = this.matches.map(match => match.name).join(",");
    } else{
      document.getElementById('list').innerHTML = "";
    }
    
  }
  filter(arr, term) {
       
    arr.forEach((i) => {
      if (i.name.includes(term)) {
        this.matches.push(i);
      } 
      if (i.children.length > 0) {
        this.filter(i.children, term);
      }
    });
    console.log(this.matches);
  }
}
