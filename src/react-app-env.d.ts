/// <reference types="react-scripts" />
interface LocalMatchers<R> {
    toMatchImageSnapshot(): R;
}

declare var expect: {
    <T = any>(actual: T): LocalMatchers<T>;
} & jest.Expect;

declare module "react-grid-gallery" {
    var m: React.ComponentType<any>;
    export default m;
}

declare module "react-image-gallery" {
    var m: React.ComponentType<any>;
    export default m;
}
