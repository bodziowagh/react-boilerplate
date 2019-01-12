export default class Example<T> {

    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    public getContent(): T {
        return this.content;
    }
}
