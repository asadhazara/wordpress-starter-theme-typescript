interface Window {
  objectFitPolyfill: () => void;
  readonly site: {
    name: string;
    description: string;
    url: string;
    theme: {
      uri: string;
    };
  };
}
