declare function listify (list: any[], options?: listify.Options): string;

declare namespace listify {
  export interface Options {
    separator?: string;
    finalWord?: string;
  }
}

export = listify;
