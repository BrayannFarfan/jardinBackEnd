export default class BusinessError extends Error {
    constructor(error, statusCode) {
        super(error);
        this.statusCode = statusCode;
    }
}