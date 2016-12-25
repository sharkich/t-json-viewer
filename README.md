# 


# Angular 2 JSON Viewer Component `t-json-viewer` v1.0.0

Angular 2 component for objects debug (Collapsible JSON in HTML like in Chrome DevTools)

## Install

```
npm install t-json-viewer --save
```

## Usage

Import TJsonViewerModule to have access to following component
```js
import {TJsonViewerModule} from 't-json-viewer';

@NgModule({
    ...,
    imports: [
        ...,
        TJsonViewerModule,
        ...
    ],
    ...
})
export class AppModule { }
```

### Component

 Takes an input `[json]` that can be data bound to any object.

```js
import {PrettyJsonComponent} from 'angular2-prettyjson';

@Component({
  ...,
  template: `
    <t-json-viewer [json]="asset"></t-json-viewer>
  `
  })
  export class MyComponent {
    ...
    ngOnInit() {
      this.asset = {};
      ...
    }
    ...
  }
```

outputs

```TODO```

