import { Component } from '@stencil/core';

import { DocComponent } from '../../global/interfaces';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  components: DocComponent[] = [];

  async fetchComponentDocs(path: string): Promise<DocComponent[]> {
    return new Promise<DocComponent[]>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', path, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status == 200) {
          const file = new File([this.response], 'temp');
          const fileReader = new FileReader();
          fileReader.addEventListener('load', () => resolve(
            JSON.parse(fileReader.result as any).components
          ));
          fileReader.readAsText(file);
        } else {
          reject();
        }
      }
      xhr.send();
    });
  }
  async componentWillLoad() {
    this.components = await this.fetchComponentDocs('/assets/docs.json');
  }
  render() {
    return [
      <header>
        <h1>WCS Documentation</h1>
      </header>,

      <nav>
        <ul>
          {this.components.map(c => <li><stencil-route-link url={`/component/${c.tag}`}>{c.tag.slice(4, 5).toUpperCase() + c.tag.slice(5)}</stencil-route-link></li>)}
        </ul>
      </nav>,

      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='app-home' exact={true} />
            {this.components.map(component =>
              <stencil-route
                url={`/component/${component.tag}`}
                component='app-component-doc'
                componentProps={{ component }}>
              </stencil-route>
            )}
          </stencil-route-switch>
        </stencil-router>
      </main>
    ];
  }
}
