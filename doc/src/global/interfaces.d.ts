export interface JsonDocs {
  components: []
}

export interface DocComponent {
  tag: string,
  docs: string,
  readme: string,
  usage: any,
  props: Prop[],
  methods: Method[]
  events: Event[],
  styles: Style[]
}

export interface Prop {
  name: string,
  type: string,
  mutable: boolean,
  attr: string,
  docs: string
}

// FIXME: the three any types are temporary
export type Method = any;
export type Event = any;
export type Style = any;
