# 


# Angular 2 JSON Viewer Component `t-json-viewer` v1.0.0

Angular 2 component for objects debug (Collapsible JSON in HTML like in Chrome DevTools)

## Install

```
npm install t-json-viewer
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

 Creates a `pre` element into which the Pretty Json pipe'd object is dumped as HTML. Takes care of styling.

 Takes an input `[obj]` that can be data bound to any object.

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

![Pretty json with syntax highlight](https://cloud.githubusercontent.com/assets/487758/15599410/a68103f4-2415-11e6-8c5e-d86c22abd72b.png)

## Changelog

1. Export module, both pipes and the component at the top level of the module
1. Update README
