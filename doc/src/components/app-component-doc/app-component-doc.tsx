import { Prop, Component } from "@stencil/core";
import { DocComponent } from "../../global/interfaces";
import 'wcs';

@Component({
  tag: 'app-component-doc'
})
export class AppComponentDoc {
  @Prop() component: DocComponent;

  render() {
    const Tag = this.component.tag;
    return [
      <h2>{this.component.tag.slice(4, 5).toUpperCase() + this.component.tag.slice(5)}</h2>,
      <p>{this.component.docs}</p>,
      <Tag></Tag>,
      <h3>Props</h3>,
      <div>{this.component.props}</div>
    ]
  }
}
